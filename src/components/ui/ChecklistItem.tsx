import CheckIcon from "@/components/icons/CheckIcon";

interface ChecklistItemProps {
    children: React.ReactNode;
    className?: string;
}

export function ChecklistItem({ children, className = "" }: ChecklistItemProps) {
    return (
        <div className={`flex gap-6 ${className}`}>
            <div className="shrink-0">
                <CheckIcon />
            </div>
            <p>{children}</p>
        </div>
    );
}
