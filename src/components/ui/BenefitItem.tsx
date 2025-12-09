import CheckIcon from "@/components/icons/CheckIcon";

interface BenefitItemProps {
    title: string;
    description: string;
}

export function BenefitItem({ title, description }: BenefitItemProps) {
    return (
        <div className="flex gap-3">
            <div className="shrink-0">
                <CheckIcon />
            </div>
            <div>
                <h3 className="mb-4 font-bold xl:text-2xl">{title}</h3>
                <p className="text-text-muted">{description}</p>
            </div>
        </div>
    );
}
