interface RequirementCardProps {
    title: string;
    children: React.ReactNode;
    ellipse: React.ReactNode;
    footnote?: string;
    className?: string;
}

export function RequirementCard({ title, children, ellipse, footnote, className = "" }: RequirementCardProps) {
    return (
        <article
            className={`gradient-card relative rounded-2xl border border-gray-200 px-6 py-10 before:absolute before:top-0 before:left-1/2 before:block before:h-1 before:w-48 before:-translate-x-1/2 before:bg-white ${className}`}
        >
            {ellipse}
            <h3 className="font-inter mb-8 text-center text-4xl">{title}</h3>
            <div className="mb-4 flex flex-col gap-4">{children}</div>
            {footnote && <p className="font-bold">{footnote}</p>}
        </article>
    );
}
