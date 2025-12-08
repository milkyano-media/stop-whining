interface ButtonProps {
    children: React.ReactNode;
    variant?: "primary" | "secondary" | "white";
    className?: string;
    onClick?: () => void;
}

export function Button({ children, variant = "primary", className = "", onClick }: ButtonProps) {
    const variantStyles = {
        primary: "gradient-primary text-primary-darker hover:brightness-125 hover:scale-105",
        secondary: "gradient-secondary text-primary hover:brightness-125 hover:scale-105",
        white: "bg-white text-primary-dark hover:bg-accent-light hover:scale-105",
    };

    return (
        <button
            className={`shadow-button mx-auto block cursor-pointer rounded-lg px-12 py-3 text-xl font-bold transition-all duration-200 ${variantStyles[variant]} ${className}`}
            onClick={onClick}
        >
            {children}
        </button>
    );
}
