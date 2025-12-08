import { forwardRef } from "react";

interface FormInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label: string;
    error?: string;
    required?: boolean;
}

const FormInput = forwardRef<HTMLInputElement, FormInputProps>(
    ({ label, error, required, className = "", ...props }, ref) => {
        return (
            <div className="w-full">
                <label className="font-inter mb-1.5 block text-sm leading-5 font-medium text-[#344054]">
                    {label}
                    {required && <span className="text-red-500">*</span>}
                </label>
                <input
                    ref={ref}
                    className={`font-inter h-12 w-full rounded-lg border px-4 text-base leading-6 text-[#344054] transition-colors outline-none ${error ? "border-red-500" : "border-[#d0d5dd]"} ${error ? "focus:border-red-500" : "focus:border-primary"} placeholder:text-[#667085] ${className} `}
                    {...props}
                />
                {error && <p className="font-inter mt-1.5 text-sm leading-5 text-red-500">{error}</p>}
            </div>
        );
    },
);

FormInput.displayName = "FormInput";

export default FormInput;
