"use client";

import { useState } from "react";

interface FormFileUploadProps {
    label: string;
    value: string;
    onChange: (url: string) => void;
    error?: string;
    required?: boolean;
    bucketName?: string;
}

export default function FormFileUpload({
    label,
    value,
    onChange,
    error,
    required,
    bucketName = "resumes",
}: FormFileUploadProps) {
    const [file, setFile] = useState<File | null>(null);
    const [uploading, setUploading] = useState(false);
    const [uploadError, setUploadError] = useState<string | null>(null);

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const selectedFile = e.target.files?.[0];
        if (selectedFile) {
            const fileSizeMB = selectedFile.size / (1024 * 1024);
            if (fileSizeMB > 10) {
                setUploadError("File size exceeds 10MB limit");
                return;
            }

            const allowedTypes = [
                "application/pdf",
                "application/msword",
                "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
            ];

            if (!allowedTypes.includes(selectedFile.type)) {
                setUploadError("Please upload a PDF or DOCX file");
                return;
            }

            setFile(selectedFile);
            setUploadError(null);
            handleUpload(selectedFile);
        }
    };

    const handleUpload = async (fileToUpload: File) => {
        setUploading(true);
        setUploadError(null);

        try {
            const formData = new FormData();
            formData.append("file", fileToUpload);
            formData.append("bucket", bucketName);

            const response = await fetch("/api/upload", {
                method: "POST",
                body: formData,
            });

            const result = await response.json();

            if (result.success) {
                onChange(result.url);
            } else {
                setUploadError(result.error || "Upload failed");
                onChange("");
            }
        } catch (err) {
            const errorMessage = err instanceof Error ? err.message : "Upload failed";
            setUploadError(errorMessage);
            onChange("");
        } finally {
            setUploading(false);
        }
    };

    return (
        <div className="w-full">
            <label className="font-inter mb-1.5 block text-sm leading-5 font-medium text-[#344054]">
                {label}
                {required && <span className="text-red-500">*</span>}
            </label>

            <div
                className={`flex min-h-[141px] w-full flex-col items-center justify-center rounded-lg border-2 border-dashed px-6 py-8 transition-colors ${error || uploadError ? "border-red-500" : "border-[#d0d5dd]"} ${uploading ? "cursor-wait opacity-50" : "hover:border-primary cursor-pointer"} `}
            >
                <input
                    type="file"
                    id="resume-upload"
                    onChange={handleFileChange}
                    disabled={uploading}
                    accept=".pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                    className="hidden"
                />

                <label htmlFor="resume-upload" className="flex cursor-pointer flex-col items-center">
                    <svg className="mb-3 h-8 w-8 text-[#667085]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                        />
                    </svg>

                    {uploading ? (
                        <p className="font-inter text-center text-sm font-light text-[#191d23]/60">Uploading...</p>
                    ) : file || value ? (
                        <div className="text-center">
                            <p className="font-inter text-sm font-medium text-[#191d23]">
                                {file?.name || "File uploaded successfully"}
                            </p>
                            <p className="font-inter mt-1 text-xs text-[#667085]">Click to change file</p>
                        </div>
                    ) : (
                        <div className="text-center">
                            <p className="font-inter text-sm font-light text-[#191d23]/60">
                                Browse and choose the files you want to upload from your computer
                            </p>
                            <button
                                type="button"
                                className="bg-primary font-inter hover:bg-primary-dark mt-3 rounded px-4 py-2 text-sm font-medium text-white"
                            >
                                Browse Files
                            </button>
                        </div>
                    )}
                </label>
            </div>

            {(error || uploadError) && (
                <p className="font-inter mt-1.5 text-sm leading-5 text-red-500">{error || uploadError}</p>
            )}

            {file && !uploading && !uploadError && value && (
                <p className="font-inter mt-1.5 text-sm leading-5 text-green-600">File uploaded successfully</p>
            )}
        </div>
    );
}
