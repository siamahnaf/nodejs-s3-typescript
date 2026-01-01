export interface IConfig {
    bucketName: string;
    dirName?: string;
    region: string;
    accessKeyId: string;
    secretAccessKey: string;
    s3Url?: string;
}

export type UploadResponse = {
    bucket: string;
    key: string;
    location: string;
    status: number;
};

export type DeleteResponse = {
    ok: boolean;
    status: number;
    message: string;
    fileName: string;
};