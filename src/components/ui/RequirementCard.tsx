interface RequirementCardProps {
    title: string;
    children: React.ReactNode;
    ellipse: React.ReactNode;
    footnote?: string;
    className?: string;
}

export function RequirementCard({ title, children, ellipse, footnote, className = "" }: RequirementCardProps) {
    return (
        <article className={`gradient-card relative rounded-2xl px-6 py-10 ${className}`}>
            {ellipse}
            <h3 className="next-font-inter mb-8 text-center text-4xl">{title}</h3>
            <div className="mb-4 flex flex-col gap-4">{children}</div>
            {footnote && <p className="font-gotham-rounded font-bold">{footnote}</p>}
        </article>
    );
}
