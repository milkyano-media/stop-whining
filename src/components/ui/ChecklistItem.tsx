import CheckIcon from "@/components/icons/CheckIcon";
import XIcon from "@/components/icons/XIcon";

interface ChecklistItemProps {
    children: React.ReactNode;
    className?: string;
    variant?: "check" | "x";
}

export function ChecklistItem({ children, className = "", variant = "check" }: ChecklistItemProps) {
    return (
        <div className={`flex gap-6 ${className}`}>
            <div className="shrink-0">
                {variant === "check" ? <CheckIcon /> : <XIcon />}
            </div>
            <p>{children}</p>
        </div>
    );
}
