import { forwardRef } from "react";

interface FormSelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
    label: string;
    options: { value: string; label: string }[];
    error?: string;
    required?: boolean;
}

const FormSelect = forwardRef<HTMLSelectElement, FormSelectProps>(
    ({ label, options, error, required, className = "", ...props }, ref) => {
        return (
            <div className="w-full">
                <label className="font-inter mb-1.5 block text-sm leading-5 font-medium text-[#344054]">
                    {label}
                    {required && <span className="text-red-500">*</span>}
                </label>
                <select
                    ref={ref}
                    className={`font-inter h-12 w-full rounded-lg border px-4 text-base leading-6 text-[#344054] transition-colors outline-none ${error ? "border-red-500" : "border-[#d0d5dd]"} ${error ? "focus:border-red-500" : "focus:border-primary"} ${className} `}
                    {...props}
                >
                    <option value="">Select an option</option>
                    {options.map((option) => (
                        <option key={option.value} value={option.value}>
                            {option.label}
                        </option>
                    ))}
                </select>
                {error && <p className="font-inter mt-1.5 text-sm leading-5 text-red-500">{error}</p>}
            </div>
        );
    },
);

FormSelect.displayName = "FormSelect";

export default FormSelect;
