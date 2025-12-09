import { GoogleFormData } from "@/schemas/googleFormSchema";

interface SubmissionResponse {
    data: {
        submissionId: number;
        submittedAt: string;
        warning?: string;
    };
    status: number;
    message: string;
}

interface ErrorResponse {
    data: null;
    status: number;
    message: string;
}

interface SubmitFormParams {
    formData: GoogleFormData;
    spreadsheetUrl: string;
    emailReceiver?: string;
}

const API_BASE_URL = "https://api.alphaomegamensgrooming.com";

export async function submitFormToGoogleSheets({
    formData,
    spreadsheetUrl,
    emailReceiver,
}: SubmitFormParams): Promise<SubmissionResponse> {
    try {
        // Prepare the submission data
        const submissionData = {
            firstName: formData.firstName,
            lastName: formData.lastName,
            email: formData.email,
            phoneNumber: formData.phoneNumber,
            age: formData.age,
            speakMandarin: formData.speakMandarin,
            englishRating: formData.englishRating,
            whyWorkHere: formData.whyWorkHere,
            whatMotivatesYou: formData.whatMotivatesYou,
            yourGoal: formData.yourGoal,
            seafoodKnowledge: formData.seafoodKnowledge,
            workPhilosophy: formData.workPhilosophy,
            resumeUrl: formData.resumeUrl,
            agreePrivacy: formData.agreePrivacy,
            submittedAt: new Date().toISOString(),
        };

        // Submit to Google Sheets API and Pabbly webhook in parallel
        const [googleSheetsResponse, webhookResponse] = await Promise.allSettled([
            // Google Sheets submission
            fetch(`${API_BASE_URL}/api/form-submissions`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    formData: submissionData,
                    spreadsheetUrl,
                    emailReceiver,
                    metadata: {
                        formType: "recruitment-qualification",
                        subject: "New Recruitment Form Submission - Stop Whining",
                    },
                }),
            }),
            // Pabbly webhook submission
            fetch("https://connect.pabbly.com/workflow/sendwebhookdata/IjU3NjcwNTZkMDYzNDA0MzI1MjZmNTUzMjUxM2Ii_pc", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(submissionData),
            }),
        ]);

        // Check Google Sheets submission
        if (googleSheetsResponse.status === "rejected") {
            throw new Error("Failed to submit to Google Sheets");
        }

        const response = googleSheetsResponse.value;
        if (!response.ok) {
            const errorData: ErrorResponse = await response.json();
            throw new Error(errorData.message || "Failed to submit form");
        }

        // Log webhook result (don't fail if webhook fails)
        if (webhookResponse.status === "rejected") {
            console.warn("Webhook submission failed:", webhookResponse.reason);
        }

        const result: SubmissionResponse = await response.json();
        return result;
    } catch (error) {
        if (error instanceof Error) {
            throw new Error(`Form submission failed: ${error.message}`);
        }
        throw new Error("An unexpected error occurred during form submission");
    }
}

export async function initializeSpreadsheet(
    spreadsheetUrl: string,
    sampleFormData: Record<string, unknown>,
): Promise<{ message: string; submissionId: number; headers: string[] }> {
    try {
        const response = await fetch(`${API_BASE_URL}/api/form-submissions/init-spreadsheet`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                spreadsheetUrl,
                sampleFormData,
            }),
        });

        if (!response.ok) {
            const errorData: ErrorResponse = await response.json();
            throw new Error(errorData.message || "Failed to initialize spreadsheet");
        }

        const result = await response.json();
        return result.data;
    } catch (error) {
        if (error instanceof Error) {
            throw new Error(`Spreadsheet initialization failed: ${error.message}`);
        }
        throw new Error("An unexpected error occurred during spreadsheet initialization");
    }
}
