# MinIO Service Usage Guide

This project includes a MinIO service for uploading files to your self-hosted MinIO instance at `s3.milkyano.com`.

## Setup

### 1. Environment Variables

The service uses environment variables for configuration. These are already set in `.env.local`:

```env
MINIO_ENDPOINT=s3.milkyano.com
MINIO_ACCESS_KEY=VZH3cgnQmZadroNpaNSK
MINIO_SECRET_KEY=wnvd5efoNOnnMDvRWKZaSmByu1Pzpn5PCxwoFm4d
```

### 2. Dependencies

The MinIO client is already installed:

```bash
npm install minio
```

## Usage Examples

### 1. Using the API Endpoint (Recommended for Client-Side)

The easiest way to upload files from the client-side is to use the provided API endpoint:

```typescript
// Example: Upload from a form
async function uploadFile(file: File, bucketName = "uploads") {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("bucket", bucketName);

    const response = await fetch("/api/upload", {
        method: "POST",
        body: formData,
    });

    const result = await response.json();

    if (result.success) {
        console.log("File uploaded:", result.url);
        return result;
    } else {
        console.error("Upload failed:", result.error);
        throw new Error(result.error);
    }
}
```

### 2. Using the FileUpload Component

A pre-built React component is available for easy file uploads:

```typescript
import FileUpload from '@/ui/FileUpload';

export default function MyPage() {
  return (
    <FileUpload
      bucketName="my-bucket"
      acceptedFileTypes="image/*,video/*"
      maxFileSizeMB={50}
      onUploadSuccess={(result) => {
        console.log('Uploaded:', result.url);
      }}
      onUploadError={(error) => {
        console.error('Upload error:', error);
      }}
    />
  );
}
```

### 3. Using the MinIO Service Directly (Server-Side)

For server-side operations, use the MinIO service directly:

```typescript
import minioService from "@/services/minio";

// Upload a file
async function uploadExample() {
    const fileBuffer = Buffer.from("Hello World");

    const result = await minioService.uploadFile({
        bucketName: "my-bucket",
        fileName: "test.txt",
        file: fileBuffer,
        contentType: "text/plain",
        metadata: {
            author: "John Doe",
            uploadedAt: new Date().toISOString(),
        },
    });

    if (result.success) {
        console.log("File URL:", result.url);
    } else {
        console.error("Upload failed:", result.error);
    }
}

// Delete a file
async function deleteExample() {
    const success = await minioService.deleteFile("my-bucket", "test.txt");
    console.log("Deleted:", success);
}

// Get a presigned URL (temporary access)
async function getPresignedUrlExample() {
    const url = await minioService.getFileUrl(
        "my-bucket",
        "test.txt",
        3600, // expires in 1 hour
    );
    console.log("Presigned URL:", url);
}

// List all files in a bucket
async function listFilesExample() {
    const files = await minioService.listFiles("my-bucket", "uploads/");
    console.log("Files:", files);
}
```

## API Endpoint Details

### POST /api/upload

Upload a file to MinIO.

**Request:**

- Method: POST
- Content-Type: multipart/form-data
- Fields:
    - `file` (required): The file to upload
    - `bucket` (optional): Bucket name (defaults to "uploads")

**Response:**

```json
{
    "success": true,
    "fileName": "1234567890-example.jpg",
    "url": "https://s3.milkyano.com/uploads/1234567890-example.jpg",
    "etag": "abc123..."
}
```

### GET /api/upload

Returns API documentation.

## Service Methods

### `uploadFile(options: UploadOptions): Promise<UploadResult>`

Upload a file to MinIO.

**Parameters:**

- `bucketName`: Name of the bucket
- `fileName`: Name for the uploaded file
- `file`: Buffer or ReadableStream
- `contentType`: MIME type (optional)
- `metadata`: Additional metadata (optional)

**Returns:**

```typescript
{
  success: boolean;
  fileName: string;
  url: string;
  etag?: string;
  error?: string;
}
```

### `deleteFile(bucketName: string, fileName: string): Promise<boolean>`

Delete a file from MinIO.

### `getFileUrl(bucketName: string, fileName: string, expirySeconds?: number): Promise<string>`

Generate a presigned URL for temporary file access. Default expiry is 7 days.

### `listFiles(bucketName: string, prefix?: string): Promise<string[]>`

List all files in a bucket, optionally filtered by prefix.

## Common File Types

```typescript
// Images
acceptedFileTypes = "image/jpeg,image/png,image/gif,image/webp";

// Videos
acceptedFileTypes = "video/mp4,video/webm,video/quicktime";

// Documents
acceptedFileTypes = ".pdf,.doc,.docx,.txt";

// All files
acceptedFileTypes = "*/*";
```

## Security Notes

1. **Environment Variables**: Never commit `.env.local` to git (it's already in `.gitignore`)
2. **Bucket Permissions**: Configure proper bucket policies in MinIO for public/private access
3. **File Validation**: Always validate file types and sizes before uploading
4. **Presigned URLs**: Use presigned URLs for temporary access to private files

## Testing the Upload

You can test the API endpoint using curl:

```bash
curl -X POST http://localhost:3000/api/upload \
  -F "file=@/path/to/your/file.jpg" \
  -F "bucket=test-bucket"
```

Or visit the API endpoint in your browser to see the documentation:

```
http://localhost:3000/api/upload
```
