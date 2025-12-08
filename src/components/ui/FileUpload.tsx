"use client";

import { useState } from "react";

interface UploadResponse {
    success: boolean;
    fileName?: string;
    url?: string;
    etag?: string;
    error?: string;
}

interface FileUploadProps {
    bucketName?: string;
    onUploadSuccess?: (response: UploadResponse) => void;
    onUploadError?: (error: string) => void;
    acceptedFileTypes?: string;
    maxFileSizeMB?: number;
}

export default function FileUpload({
    bucketName = "uploads",
    onUploadSuccess,
    onUploadError,
    acceptedFileTypes = "*/*",
    maxFileSizeMB = 10,
}: FileUploadProps) {
    const [file, setFile] = useState<File | null>(null);
    const [uploading, setUploading] = useState(false);
    const [uploadResult, setUploadResult] = useState<UploadResponse | null>(null);

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const selectedFile = e.target.files?.[0];
        if (selectedFile) {
            // Check file size
            const fileSizeMB = selectedFile.size / (1024 * 1024);
            if (fileSizeMB > maxFileSizeMB) {
                const error = `File size exceeds ${maxFileSizeMB}MB limit`;
                setUploadResult({ success: false, error });
                onUploadError?.(error);
                return;
            }
            setFile(selectedFile);
            setUploadResult(null);
        }
    };

    const handleUpload = async () => {
        if (!file) return;

        setUploading(true);
        setUploadResult(null);

        try {
            const formData = new FormData();
            formData.append("file", file);
            formData.append("bucket", bucketName);

            const response = await fetch("/api/upload", {
                method: "POST",
                body: formData,
            });

            const result: UploadResponse = await response.json();

            setUploadResult(result);

            if (result.success) {
                onUploadSuccess?.(result);
            } else {
                onUploadError?.(result.error || "Upload failed");
            }
        } catch (error) {
            const errorMessage = error instanceof Error ? error.message : "Upload failed";
            setUploadResult({ success: false, error: errorMessage });
            onUploadError?.(errorMessage);
        } finally {
            setUploading(false);
        }
    };

    return (
        <div className="w-full max-w-md rounded-lg border border-gray-300 p-6">
            <div className="space-y-4">
                <div>
                    <label htmlFor="file-upload" className="block text-sm font-medium text-gray-700">
                        Choose a file
                    </label>
                    <input
                        id="file-upload"
                        type="file"
                        onChange={handleFileChange}
                        accept={acceptedFileTypes}
                        disabled={uploading}
                        className="file:bg-primary hover:file:bg-primary-dark mt-2 block w-full cursor-pointer rounded-md border border-gray-300 px-3 py-2 text-sm file:mr-4 file:rounded-md file:border-0 file:px-4 file:py-2 file:text-sm file:font-semibold file:text-white disabled:cursor-not-allowed disabled:opacity-50"
                    />
                    {file && (
                        <p className="mt-2 text-sm text-gray-600">
                            Selected: {file.name} ({(file.size / 1024).toFixed(2)} KB)
                        </p>
                    )}
                </div>

                <button
                    onClick={handleUpload}
                    disabled={!file || uploading}
                    className="bg-primary hover:bg-primary-dark w-full rounded-md px-4 py-2 font-semibold text-white transition-colors disabled:cursor-not-allowed disabled:opacity-50"
                >
                    {uploading ? "Uploading..." : "Upload File"}
                </button>

                {uploadResult && (
                    <div
                        className={`rounded-md p-4 ${
                            uploadResult.success ? "bg-success-bg text-success" : "bg-red-50 text-red-600"
                        }`}
                    >
                        {uploadResult.success ? (
                            <div className="space-y-2">
                                <p className="font-semibold">Upload successful!</p>
                                <p className="text-sm">File: {uploadResult.fileName}</p>
                                {uploadResult.url && (
                                    <a
                                        href={uploadResult.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="block text-sm underline"
                                    >
                                        View file
                                    </a>
                                )}
                            </div>
                        ) : (
                            <p className="font-semibold">Error: {uploadResult.error || "Upload failed"}</p>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
}
