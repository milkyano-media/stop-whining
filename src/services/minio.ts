import * as Minio from "minio";

interface MinioConfig {
    endPoint: string;
    accessKey: string;
    secretKey: string;
    useSSL?: boolean;
    port?: number;
}

interface UploadOptions {
    bucketName: string;
    fileName: string;
    file: Buffer;
    contentType?: string;
    metadata?: Record<string, string>;
}

interface UploadResult {
    success: boolean;
    fileName: string;
    url: string;
    etag?: string;
    error?: string;
}

class MinioService {
    private client: Minio.Client;
    private config: MinioConfig;

    constructor(config: MinioConfig) {
        this.config = config;
        this.client = new Minio.Client({
            endPoint: config.endPoint,
            port: config.port,
            useSSL: config.useSSL ?? true,
            accessKey: config.accessKey,
            secretKey: config.secretKey,
        });
    }

    async uploadFile(options: UploadOptions): Promise<UploadResult> {
        try {
            const { bucketName, fileName, file, contentType, metadata } = options;

            // Check if bucket exists, create if it doesn't
            const bucketExists = await this.client.bucketExists(bucketName);
            if (!bucketExists) {
                await this.client.makeBucket(bucketName, "us-east-1");
            }

            // Upload the file
            const uploadMetadata: Minio.ItemBucketMetadata = {
                "Content-Type": contentType || "application/octet-stream",
                ...metadata,
            };

            const uploadResult = await this.client.putObject(bucketName, fileName, file, file.length, uploadMetadata);

            const etag = uploadResult?.etag || "";

            // Generate the file URL
            const protocol = this.config.useSSL ? "https" : "http";
            const port = this.config.port ? `:${this.config.port}` : "";
            const url = `${protocol}://${this.config.endPoint}${port}/${bucketName}/${fileName}`;

            return {
                success: true,
                fileName,
                url,
                etag,
            };
        } catch (error) {
            return {
                success: false,
                fileName: options.fileName,
                url: "",
                error: error instanceof Error ? error.message : "Unknown error occurred",
            };
        }
    }

    async deleteFile(bucketName: string, fileName: string): Promise<boolean> {
        try {
            await this.client.removeObject(bucketName, fileName);
            return true;
        } catch (error) {
            console.error("Error deleting file:", error);
            return false;
        }
    }

    async getFileUrl(bucketName: string, fileName: string, expirySeconds = 7 * 24 * 60 * 60): Promise<string> {
        try {
            return await this.client.presignedGetObject(bucketName, fileName, expirySeconds);
        } catch (error) {
            console.error("Error generating presigned URL:", error);
            throw error;
        }
    }

    async listFiles(bucketName: string, prefix?: string): Promise<string[]> {
        try {
            const files: string[] = [];
            const stream = this.client.listObjects(bucketName, prefix, true);

            return new Promise((resolve, reject) => {
                stream.on("data", (obj) => {
                    if (obj.name) {
                        files.push(obj.name);
                    }
                });
                stream.on("error", reject);
                stream.on("end", () => resolve(files));
            });
        } catch (error) {
            console.error("Error listing files:", error);
            throw error;
        }
    }

    getClient(): Minio.Client {
        return this.client;
    }
}

// Create and export a singleton instance
const minioService = new MinioService({
    endPoint: process.env.MINIO_ENDPOINT || "s3.milkyano.com",
    accessKey: process.env.MINIO_ACCESS_KEY || "VZH3cgnQmZadroNpaNSK",
    secretKey: process.env.MINIO_SECRET_KEY || "wnvd5efoNOnnMDvRWKZaSmByu1Pzpn5PCxwoFm4d",
    useSSL: true,
});

export default minioService;
export { MinioService, type UploadOptions, type UploadResult, type MinioConfig };
