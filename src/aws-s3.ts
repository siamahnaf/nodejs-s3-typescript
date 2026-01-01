import shortId from 'short-uuid';
import { IConfig, UploadResponse } from './types';
import { throwUploadError } from './ErrorThrower';
import GetUrl from './Url';
import { S3Client, PutObjectCommand, DeleteObjectCommand } from '@aws-sdk/client-s3';
import { detectFileType } from 'type-teller';

class ReactS3Client {
    private config: IConfig;
    constructor(config: IConfig) {
        this.config = config;
    }
    public async uploadFile(file: File | Buffer, newFileName?: string): Promise<UploadResponse> {
        throwUploadError(this.config, file);
        let fileExtension: string = '';
        let mimType: string = '';
        if (file instanceof File) {
            if (file.name) {
                fileExtension = file.name.split('.').pop() || '';
            }
            if (!fileExtension && file.type != null) {
                fileExtension = file.type.split('/').pop() || '';
            }
        }
        if (Buffer.isBuffer(file)) {
            const fileType = await detectFileType(file);
            fileExtension = fileType?.ext || '';
            mimType = fileType?.mime || '';
        }
        const fileName = `${newFileName || shortId.generate()}${fileExtension && '.' + fileExtension}`;
        const dirName = (this.config.dirName ? this.config.dirName + '/' : '').replace(/([^:]\/)\/+/g, '$1');
        const key = `${dirName}${fileName}`;
        const url: string = GetUrl(this.config);
        const client = new S3Client({
            region: this.config.region,
            credentials: {
                accessKeyId: this.config.accessKeyId,
                secretAccessKey: this.config.secretAccessKey,
            }
        });
        const params = {
            Bucket: this.config.bucketName,
            Key: key,
            Body: file,
            Metadata: {
                uuid: "14365123651274",
                tag: "",
            },
            ContentType: file instanceof File ? file.type : mimType
        };
        const command = new PutObjectCommand(params);
        const data = await client.send(command);
        if (data["$metadata"]["httpStatusCode"] !== 200) return Promise.reject(data);
        return Promise.resolve({
            bucket: this.config.bucketName,
            key,
            location: `${url}/${key}`,
            status: 0,
        });
    }

    public async deleteFile(key: string) {
        const client = new S3Client({
            region: this.config.region,
            credentials: {
                accessKeyId: this.config.accessKeyId,
                secretAccessKey: this.config.secretAccessKey,
            }
        });
        const params = {
            Bucket: this.config.bucketName,
            Key: key,
        };
        const deleteCommand = new DeleteObjectCommand(params);
        return new Promise((resolve, reject) => {
            client.send(deleteCommand, (err) => {
                if (err) {
                    reject(err);
                } else {
                    resolve({
                        message: "File Deleted Successfully!",
                        key: key
                    });
                }
            });
        });
    }
}

export default ReactS3Client;
