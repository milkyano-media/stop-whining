"use client";

import { useState, useEffect, useId } from "react";

interface CheckboxOption {
    value: string;
    label: string;
}

interface FormCheckboxGroupProps {
    label: string;
    options: CheckboxOption[];
    value: string; // comma-separated string: "English,Mandarin"
    onChange: (value: string) => void;
    error?: string;
    required?: boolean;
    enableOther?: boolean;
    otherLabel?: string;
}

const FormCheckboxGroup = ({
    label,
    options,
    value,
    onChange,
    error,
    required = false,
    enableOther = false,
    otherLabel = "Other",
}: FormCheckboxGroupProps) => {
    const groupId = useId();
    const errorId = useId();

    // Parse comma-separated string to get selected values
    const parseValue = (val: string): { selected: string[]; otherText: string } => {
        if (!val) return { selected: [], otherText: "" };

        const languages = val.split(",").map((l) => l.trim()).filter(Boolean);
        const selected: string[] = [];
        let otherText = "";

        languages.forEach((lang) => {
            if (lang.startsWith("Other:")) {
                otherText = lang.substring(6).trim();
                selected.push("Other");
            } else {
                selected.push(lang);
            }
        });

        return { selected, otherText };
    };

    const { selected: initialSelected, otherText: initialOtherText } = parseValue(value);
    const [selectedValues, setSelectedValues] = useState<string[]>(initialSelected);
    const [otherText, setOtherText] = useState<string>(initialOtherText);

    // Update internal state when external value changes
    useEffect(() => {
        const { selected, otherText: parsedOtherText } = parseValue(value);
        setSelectedValues(selected);
        setOtherText(parsedOtherText);
    }, [value]);

    // Serialize selected values back to comma-separated string
    const serializeValue = (selected: string[], otherInput: string): string => {
        const values: string[] = [];

        selected.forEach((val) => {
            if (val === "Other") {
                if (otherInput.trim()) {
                    values.push(`Other: ${otherInput.trim()}`);
                }
            } else {
                values.push(val);
            }
        });

        return values.join(",");
    };

    const handleCheckboxChange = (optionValue: string, checked: boolean) => {
        let newSelected: string[];

        if (checked) {
            newSelected = [...selectedValues, optionValue];
        } else {
            newSelected = selectedValues.filter((v) => v !== optionValue);
        }

        setSelectedValues(newSelected);
        const newValue = serializeValue(newSelected, otherText);
        onChange(newValue);
    };

    const handleOtherCheckboxChange = (checked: boolean) => {
        let newSelected: string[];

        if (checked) {
            newSelected = [...selectedValues, "Other"];
        } else {
            newSelected = selectedValues.filter((v) => v !== "Other");
            setOtherText(""); // Clear text when unchecking
        }

        setSelectedValues(newSelected);
        const newValue = serializeValue(newSelected, checked ? otherText : "");
        onChange(newValue);
    };

    const handleOtherTextChange = (text: string) => {
        setOtherText(text);
        const newValue = serializeValue(selectedValues, text);
        onChange(newValue);
    };

    const isOtherChecked = selectedValues.includes("Other");

    return (
        <div className="w-full">
            <label
                id={`${groupId}-label`}
                className="font-inter mb-1.5 block text-sm leading-5 font-medium text-[#344054]"
            >
                {label}
                {required && <span className="text-red-500">*</span>}
            </label>

            <div
                role="group"
                aria-labelledby={`${groupId}-label`}
                aria-required={required}
                aria-describedby={error ? errorId : undefined}
                className="space-y-3"
            >
                {/* Render predefined options */}
                {options.map((option) => {
                    const checkboxId = `${groupId}-${option.value}`;
                    const isChecked = selectedValues.includes(option.value);

                    return (
                        <div key={option.value} className="flex items-start">
                            <input
                                type="checkbox"
                                id={checkboxId}
                                checked={isChecked}
                                onChange={(e) => handleCheckboxChange(option.value, e.target.checked)}
                                className="mt-1 h-5 w-5 rounded-md border-[#d0d5dd] text-primary focus:ring-primary"
                            />
                            <label
                                htmlFor={checkboxId}
                                className="font-inter ml-3 text-base leading-6 font-medium text-[#344054] cursor-pointer"
                            >
                                {option.label}
                            </label>
                        </div>
                    );
                })}

                {/* Render "Other" option if enabled */}
                {enableOther && (
                    <div>
                        <div className="flex items-start">
                            <input
                                type="checkbox"
                                id={`${groupId}-other`}
                                checked={isOtherChecked}
                                onChange={(e) => handleOtherCheckboxChange(e.target.checked)}
                                className="mt-1 h-5 w-5 rounded-md border-[#d0d5dd] text-primary focus:ring-primary"
                            />
                            <label
                                htmlFor={`${groupId}-other`}
                                className="font-inter ml-3 text-base leading-6 font-medium text-[#344054] cursor-pointer"
                            >
                                {otherLabel}
                            </label>
                        </div>

                        {/* Show text input when "Other" is checked */}
                        {isOtherChecked && (
                            <input
                                type="text"
                                value={otherText}
                                onChange={(e) => handleOtherTextChange(e.target.value)}
                                placeholder="Please specify"
                                className={`font-inter h-10 w-full max-w-xs rounded-lg border px-3 text-base leading-6 text-[#344054] transition-colors outline-none ml-8 mt-2 ${
                                    error ? "border-red-500" : "border-[#d0d5dd]"
                                } ${error ? "focus:border-red-500" : "focus:border-primary"}`}
                            />
                        )}
                    </div>
                )}
            </div>

            {/* Error message */}
            {error && (
                <p id={errorId} className="font-inter mt-1.5 text-sm leading-5 text-red-500">
                    {error}
                </p>
            )}
        </div>
    );
};

export default FormCheckboxGroup;
