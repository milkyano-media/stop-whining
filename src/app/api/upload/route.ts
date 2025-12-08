import { NextRequest, NextResponse } from "next/server";
import minioService from "@/services/minio";

export async function POST(request: NextRequest) {
    try {
        const formData = await request.formData();
        const file = formData.get("file") as File;
        const bucketName = (formData.get("bucket") as string) || "uploads";

        if (!file) {
            return NextResponse.json({ error: "No file provided" }, { status: 400 });
        }

        // Convert file to buffer
        const bytes = await file.arrayBuffer();
        const buffer = Buffer.from(bytes);

        // Generate unique filename with timestamp
        const timestamp = Date.now();
        const fileName = `${timestamp}-${file.name}`;

        // Upload to MinIO
        const result = await minioService.uploadFile({
            bucketName,
            fileName,
            file: buffer,
            contentType: file.type,
            metadata: {
                originalName: file.name,
                uploadedAt: new Date().toISOString(),
            },
        });

        if (!result.success) {
            return NextResponse.json({ error: result.error || "Upload failed" }, { status: 500 });
        }

        return NextResponse.json({
            success: true,
            fileName: result.fileName,
            url: result.url,
            etag: result.etag,
        });
    } catch (error) {
        console.error("Upload error:", error);
        return NextResponse.json({ error: "Internal server error" }, { status: 500 });
    }
}

export async function GET() {
    return NextResponse.json({
        message: "File upload endpoint. Use POST with multipart/form-data",
        usage: {
            method: "POST",
            contentType: "multipart/form-data",
            fields: {
                file: "File to upload (required)",
                bucket: 'Bucket name (optional, defaults to "uploads")',
            },
        },
    });
}
