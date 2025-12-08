"use client";

import { forwardRef } from "react";
import PhoneInputWithCountry from "react-phone-number-input";
import "react-phone-number-input/style.css";

interface PhoneInputProps {
    label: string;
    value: string;
    onChange: (value: string) => void;
    error?: string;
    required?: boolean;
}

const PhoneInput = forwardRef<HTMLInputElement, PhoneInputProps>(({ label, value, onChange, error, required }, ref) => {
    return (
        <div className="w-full">
            <label className="font-inter mb-1.5 block text-sm leading-5 font-medium text-[#344054]">
                {label}
                {required && <span className="text-red-500">*</span>}
            </label>
            <PhoneInputWithCountry
                international
                defaultCountry="AU"
                value={value}
                onChange={(val) => onChange(val || "")}
                className={`phone-input-wrapper ${error ? "phone-input-error" : ""} `}
                numberInputProps={{
                    className: `
              h-12 w-full rounded-lg border px-4 font-inter text-base leading-6 text-[#344054] outline-none transition-colors
              ${error ? "border-red-500" : "border-[#d0d5dd]"}
              ${error ? "focus:border-red-500" : "focus:border-primary"}
              placeholder:text-[#667085]
            `,
                }}
            />
            {error && <p className="font-inter mt-1.5 text-sm leading-5 text-red-500">{error}</p>}
            <style jsx global>{`
                .phone-input-wrapper .PhoneInputCountry {
                    margin-right: 8px;
                }
                .phone-input-wrapper .PhoneInputCountrySelect {
                    font-size: 16px;
                    border: 1px solid #d0d5dd;
                    border-radius: 8px;
                    padding: 8px;
                    outline: none;
                    transition: border-color 0.2s;
                }
                .phone-input-wrapper .PhoneInputCountrySelect:focus {
                    border-color: #045b7d;
                }
                .phone-input-error .PhoneInputCountrySelect {
                    border-color: #ef4444;
                }
            `}</style>
        </div>
    );
});

PhoneInput.displayName = "PhoneInput";

export default PhoneInput;
