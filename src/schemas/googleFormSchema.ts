import { z } from "zod";
import { isValidPhoneNumber } from "libphonenumber-js";

export const googleFormSchema = z.object({
    firstName: z.string().min(1, "First name is required").min(2, "First name must be at least 2 characters"),

    lastName: z.string().min(1, "Last name is required").min(2, "Last name must be at least 2 characters"),

    email: z.string().min(1, "Email is required").email("Please enter a valid email address"),

    phoneNumber: z
        .string()
        .min(1, "Phone number is required")
        .refine((phone) => isValidPhoneNumber(phone), {
            message: "Please enter a valid phone number",
        }),

    age: z
        .string()
        .min(1, "Age is required")
        .refine((val) => !isNaN(Number(val)), "Age must be a number")
        .refine((val) => Number(val) >= 18, "You must be at least 18 years old")
        .refine((val) => Number(val) <= 100, "Please enter a valid age"),

    speakMandarin: z
        .string()
        .min(1, "Please select at least one language")
        .refine(
            (val) => {
                const languages = val.split(',').map(l => l.trim()).filter(Boolean);
                return languages.length > 0;
            },
            { message: "Please select at least one language" }
        )
        .refine(
            (val) => {
                const languages = val.split(',').map(l => l.trim()).filter(Boolean);
                const validLanguages = ['English', 'Mandarin', 'Cantonese', 'Japanese', 'Korean'];

                return languages.every(lang => {
                    if (lang.startsWith('Other:')) {
                        const otherText = lang.slice('Other:'.length).trim();
                        return otherText.length > 0;
                    }
                    return validLanguages.includes(lang);
                });
            },
            { message: "Invalid language selection" }
        ),

    englishRating: z
        .string()
        .min(1, "English rating is required")
        .refine((val) => !isNaN(Number(val)), "Rating must be a number")
        .refine((val) => Number(val) >= 1 && Number(val) <= 10, "Rating must be between 1 and 10"),

    whyWorkHere: z
        .string()
        .min(1, "This field is required")
        .min(10, "Please provide a more detailed answer (at least 10 characters)"),

    whatMotivatesYou: z
        .string()
        .min(1, "This field is required")
        .min(10, "Please provide a more detailed answer (at least 10 characters)"),

    yourGoal: z
        .string()
        .min(1, "This field is required")
        .min(10, "Please provide a more detailed answer (at least 10 characters)"),

    seafoodKnowledge: z
        .string()
        .min(1, "Seafood knowledge rating is required")
        .refine((val) => !isNaN(Number(val)), "Rating must be a number")
        .refine((val) => Number(val) >= 1 && Number(val) <= 10, "Rating must be between 1 and 10"),

    workPhilosophy: z
        .string()
        .min(1, "This field is required")
        .min(20, "Please provide a more detailed answer (at least 20 characters)"),

    resumeUrl: z.string().min(1, "Resume is required").url("Invalid resume URL"),

    agreePrivacy: z.boolean().refine((val) => val === true, "You must agree to the privacy policy"),
});

export type GoogleFormData = z.infer<typeof googleFormSchema>;
