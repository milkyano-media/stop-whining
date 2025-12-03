interface ButtonProps {
    children: React.ReactNode;
    variant?: "primary" | "secondary" | "white";
    className?: string;
    onClick?: () => void;
}

export function Button({ children, variant = "primary", className = "", onClick }: ButtonProps) {
    const variantStyles = {
        primary: "gradient-primary text-primary-darker",
        secondary: "gradient-secondary text-primary",
        white: "bg-white text-primary-dark",
    };

    return (
        <button
            className={`shadow-button mx-auto block rounded-lg px-12 py-3 text-xl font-bold ${variantStyles[variant]} ${className}`}
            onClick={onClick}
        >
            {children}
        </button>
    );
}
