"use client";

import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import FormInput from "@/ui/FormInput";
import FormTextarea from "@/ui/FormTextarea";
import PhoneInput from "@/ui/PhoneInput";
// import FormSelect from "@/ui/FormSelect";
import FormCheckboxGroup from "@/ui/FormCheckboxGroup";
import FormFileUpload from "@/ui/FormFileUpload";
import { googleFormSchema, type GoogleFormData } from "@/schemas/googleFormSchema";
import { submitFormToGoogleSheets } from "@/services/googleSheetsApi";
import { trackFormSubmit } from "@/lib/gtm";

export function GoogleFormSection() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitSuccess, setSubmitSuccess] = useState(false);
    const [submitError, setSubmitError] = useState<string | null>(null);

    const {
        register,
        control,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm<GoogleFormData>({
        resolver: zodResolver(googleFormSchema),
        defaultValues: {
            firstName: "",
            lastName: "",
            email: "",
            phoneNumber: "",
            age: "",
            speakMandarin: "",
            englishRating: "",
            // whyWorkHere: "",
            // whatMotivatesYou: "",
            // yourGoal: "",
            seafoodKnowledge: "",
            workPhilosophy: "",
            resumeUrl: "",
            agreePrivacy: false,
        },
    });

    const onSubmit = async (data: GoogleFormData) => {
        setIsSubmitting(true);
        setSubmitError(null);

        try {
            // TODO: Replace with your actual Google Sheets URL
            const spreadsheetUrl =
                process.env.NEXT_PUBLIC_SPREADSHEET_URL ||
                "https://docs.google.com/spreadsheets/d/YOUR_SPREADSHEET_ID/edit";

            await submitFormToGoogleSheets({
                formData: data,
                spreadsheetUrl,
                emailReceiver: process.env.NEXT_PUBLIC_EMAIL_RECEIVER,
            });

            setSubmitSuccess(true);
            trackFormSubmit("application-form", "success");
            reset();

            // Auto-hide success message after 5 seconds
            setTimeout(() => {
                setSubmitSuccess(false);
            }, 5000);
        } catch (error) {
            const errorMessage = error instanceof Error ? error.message : "An error occurred while submitting the form";
            setSubmitError(errorMessage);
            trackFormSubmit("application-form", "error", error instanceof Error ? error.message : undefined);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section id="application-form" className="mb-12 px-6">
            <div className="shadow-card mx-auto max-w-sm rounded-[20px] bg-white p-8 xl:max-w-5xl xl:p-12">
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                    {/* First Name */}
                    <FormInput
                        label="First name"
                        placeholder="First name*"
                        error={errors.firstName?.message}
                        required
                        {...register("firstName")}
                    />

                    {/* Last Name */}
                    <FormInput
                        label="Last name"
                        placeholder="Last name*"
                        error={errors.lastName?.message}
                        required
                        {...register("lastName")}
                    />

                    {/* Email */}
                    <FormInput
                        label="Email"
                        type="email"
                        placeholder="you@company.com*"
                        error={errors.email?.message}
                        required
                        {...register("email")}
                    />

                    {/* Phone Number */}
                    <Controller
                        name="phoneNumber"
                        control={control}
                        render={({ field }) => (
                            <PhoneInput
                                label="Phone Number"
                                value={field.value}
                                onChange={field.onChange}
                                error={errors.phoneNumber?.message}
                                required
                            />
                        )}
                    />

                    {/* Age */}
                    <FormInput
                        label="How old are you?"
                        type="number"
                        placeholder="How old are you?*"
                        error={errors.age?.message}
                        required
                        {...register("age")}
                    />

                    {/* Spoken Languages */}
                    <Controller
                        name="speakMandarin"
                        control={control}
                        render={({ field }) => (
                            <FormCheckboxGroup
                                label="Which languages do you speak?"
                                options={[
                                    { value: "English", label: "English" },
                                    { value: "Mandarin", label: "Mandarin" },
                                    { value: "Cantonese", label: "Cantonese" },
                                    { value: "Japanese", label: "Japanese" },
                                    { value: "Korean", label: "Korean" },
                                ]}
                                value={field.value}
                                onChange={field.onChange}
                                error={errors.speakMandarin?.message}
                                required
                                enableOther
                                otherLabel="Other (please specify)"
                            />
                        )}
                    />

                    {/* English Rating */}
                    <FormInput
                        label="How would you rate your English (1–10)?"
                        type="number"
                        min="1"
                        max="10"
                        placeholder="1-10*"
                        error={errors.englishRating?.message}
                        required
                        {...register("englishRating")}
                    />

                    {/* Why do you want to work */}
                    {/* <FormInput
                        label="Why do you want to work?"
                        placeholder="Why do you want to work?*"
                        error={errors.whyWorkHere?.message}
                        required
                        {...register("whyWorkHere")}
                    /> */}

                    {/* What motivates you */}
                    {/* <FormInput
                        label="What motivates you?"
                        placeholder="What motivates you?*"
                        error={errors.whatMotivatesYou?.message}
                        required
                        {...register("whatMotivatesYou")}
                    /> */}

                    {/* Your goal */}
                    {/* <FormInput
                        label="What is your goal?"
                        placeholder="What is your goal?*"
                        error={errors.yourGoal?.message}
                        required
                        {...register("yourGoal")}
                    /> */}

                    {/* Seafood knowledge */}
                    <FormInput
                        label="How would you rate your knowledge about seafood (1–10)?"
                        type="number"
                        min="1"
                        max="10"
                        placeholder="1-10*"
                        error={errors.seafoodKnowledge?.message}
                        required
                        {...register("seafoodKnowledge")}
                    />

                    {/* Work Philosophy */}
                    <FormTextarea
                        label="Do you work for short term money or building long term relationship & network?"
                        placeholder="Include a message..."
                        error={errors.workPhilosophy?.message}
                        required
                        {...register("workPhilosophy")}
                    />

                    {/* Resume Upload */}
                    <Controller
                        name="resumeUrl"
                        control={control}
                        render={({ field }) => (
                            <FormFileUpload
                                label="Drop your resume here"
                                value={field.value}
                                onChange={field.onChange}
                                error={errors.resumeUrl?.message}
                                required
                            />
                        )}
                    />

                    {/* Privacy Policy Checkbox */}
                    <div className="flex items-start">
                        <input
                            type="checkbox"
                            id="agreePrivacy"
                            className="text-primary focus:ring-primary mt-1 h-5 w-5 rounded-md border-[#d0d5dd]"
                            {...register("agreePrivacy")}
                        />
                        <label
                            htmlFor="agreePrivacy"
                            className="font-inter ml-3 text-base leading-6 font-medium text-[#344054]"
                        >
                            You agree to our friendly privacy policy.
                        </label>
                    </div>
                    {errors.agreePrivacy && (
                        <p className="font-inter mt-1 text-sm text-red-500">{errors.agreePrivacy.message}</p>
                    )}

                    {/* Success Message */}
                    {submitSuccess && (
                        <div className="rounded-lg bg-green-50 p-4">
                            <p className="font-inter text-sm font-medium text-green-800">
                                Form submitted successfully! We&apos;ll review your application and get back to you
                                soon.
                            </p>
                        </div>
                    )}

                    {/* Error Message */}
                    {submitError && (
                        <div className="rounded-lg bg-red-50 p-4">
                            <p className="font-inter text-sm font-medium text-red-800">{submitError}</p>
                        </div>
                    )}

                    {/* Submit Button */}
                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className="font-gotham-rounded from-gradient-teal w-full rounded-lg bg-linear-to-r to-[#1d3a69] py-3 text-xl font-bold text-white transition-all hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-50"
                        style={{
                            background: "linear-gradient(135deg, #035a7c 0%, #1d3a69 80.51%)",
                        }}
                    >
                        {isSubmitting ? "SUBMITTING..." : "SEE IF YOU QUALIFY"}
                    </button>
                </form>
            </div>
        </section>
    );
}
