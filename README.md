<picture>
  <source media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/siamahnaf/assets-kit/main/logo/logo-white.png">
  <source media="(prefers-color-scheme: light)" srcset="https://raw.githubusercontent.com/siamahnaf/assets-kit/main/logo/logo-black.png">
  <img alt="Siam Ahnaf" src="https://raw.githubusercontent.com/siamahnaf/assets-kit/main/logo/logo-black.png" height="auto" width="240">
</picture>

# NodeJS S3 Typescript

A npm package to upload your files into AWS S3 Bucket directly using nodejs with aws sdk version 3. If you are looking for ReactJS version try this- <a href="https://www.npmjs.com/package/react-s3-typescript">ReactJS S3 Typescript</a>


## Aws SDK Version 3

<a href="https://www.buymeacoffee.com/siamahnaf" target="_blank"><img src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png" alt="Buy Me A Coffee" style="height: 60px !important;width: 217px !important;" ></a>

## Introduction

A npm package to upload your media and other types of files directly into AWS S3 Bucket using nodejs with aws sdk version 3. You can upload and and delete the file if needed!

You need to have an AWS account to use AWS S3 Bucket. If you already do not have an account, create an account [here](https://console.aws.amazon.com).

Read more about AWS S3 bucket: [https://docs.aws.amazon.com/s3/index.html](https://docs.aws.amazon.com/s3/index.html)

## Features

- Upload files to S3 bucket and retrieve the public url
- Delete files from S3 bucket
- Aws Javascript SDK Version 3 Integrated!
- No unnecessary Dependencies
- Small in Size (20KB)

## Installing

Using npm

```bash
$ npm install nodejs-s3-typescript
```

## Example

### Upload a file to AWS S3 Bucket

You can define a default directory for uploads using the s3Config object

```typescript
    /* s3Config.ts */
    /* Configure Aws S3 */

    export const s3Config = {
        bucketName:  'bucket-name',
        dirName: 'directory-name',      /* Optional */
        region: 'ap-south-1',
        accessKeyId:'ABCD12EFGH3IJ4KLMNO8',
        secretAccessKey: 'a12bCde3f4+5GhIjKLm6nOpqr7stuVwxy8ZA9bC9',
        s3Url: 'https:/your-aws-s3-bucket-url/'     /* Optional */
    }

    /* End of s3Config.ts */
```

```typescript
    /* AWS S3 Client */
    /* uploadFile.ts */
    import { s3Client } from 'nodejs-s3-typescript';
    import { s3Config } from './s3Config.ts';

    const uploadFile = async () => {
        const s3 = new s3Client(s3Config);

        /* You can use the default directory defined in s3Config object
        * Or you can a define custom directory to upload when calling the
        * constructor using js/ts object destructuring.
        * 
        * const s3 = new ReactS3Client({
        *      ...s3Config,
        *      dirName: 'custom-directory'
        * });
        * 
        */

        const filename = 'filename-to-be-uploaded';     /* Optional */

        /* If you do not specify a file name, file will be uploaded using uuid generated 
        * by short-UUID (https://www.npmjs.com/package/short-uuid)
        */
        const res = await s3.uploadFile(file, filename);

        console.log(res);

    /* End of uploadFile.ts */
```

### Delete a file from AWS S3 Bucket

```typescript
    /* AWS S3 Client */
    /* deleteFile.ts */
    import { s3Client } from 'react-aws-s3-typescript';
    import { s3Config } from './s3Config.ts';

    const deleteFile = async () => {
        const s3 = new s3Client(s3Config);
        const filepath = 'directory-name/filename-to-be-deleted';

        const data = await s3.deleteFile(filepath);

        console.log(data);
    }

    /* End of deleteFile.ts */
```

__Important :__ Add `public-read` Canned ACL to the bucket to grant the public read access for files.

Read more: [https://docs.aws.amazon.com/AmazonS3/latest/dev/acl-overview.html#canned-acl](https://docs.aws.amazon.com/AmazonS3/latest/dev/acl-overview.html#canned-acl)

## S3 Config

These are the available config options for calling the S3 constructor `bucketName`, `region`, `accessKeyId` and `secretAccessKey` are required. Upload will default to __root path__, if `dirName` is not specified.

## Connect with me
<div style="display: flex; align-items: center; gap: 3px;">
<a href="https://wa.me/8801611994403"><img src="https://raw.githubusercontent.com/siamahnaf/assets-kit/main/icons/whatsapp.png" width="40" height="40"></a>
<a href="https://siamahnaf.com/" style="margin-right: 8px"><img src="https://raw.githubusercontent.com/siamahnaf/assets-kit/main/icons/web.png" width="40" height="40"></a>
<a href="https://www.linkedin.com/in/siamahnaf/" style="margin-right: 8px"><img src="https://raw.githubusercontent.com/siamahnaf/assets-kit/main/icons/linkedin.png" width="40" height="40"></a>
<a href="https://x.com/siamahnaf198" style="margin-right: 8px"><img src="https://raw.githubusercontent.com/siamahnaf/assets-kit/main/icons/x.png" width="40" height="40"></a>
<a href="https://www.facebook.com/siamahnaf198/" style="margin-right: 8px"><img src="https://raw.githubusercontent.com/siamahnaf/assets-kit/main/icons/facebook.png" width="40" height="40"></a>
<a href="https://t.me/siamahnaf198" style="margin-right: 8px"><img src="https://raw.githubusercontent.com/siamahnaf/assets-kit/main/icons/telegram.png" width="40" height="40"></a>
<a href="https://www.npmjs.com/~siamahnaf" style="margin-right: 8px"><img src="https://raw.githubusercontent.com/siamahnaf/assets-kit/main/icons/npm.png" width="40" height="40"></a>
</div>


------------

<p align="center" color="red"><a href="https://www.siamahnaf.com/">www.siamahnaf.com</a></p>