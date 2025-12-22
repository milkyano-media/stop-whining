interface XIconProps {
    size?: number;
    bgColor?: string;
    xColor?: string;
}

/**
 * XIcon component with customizable size and colors
 * Used to indicate optional/non-mandatory items
 * @default bgColor - #FEE4E2 (light red/warning background)
 * @default xColor - #F04438 (red/warning color)
 */
export default function XIcon({ size = 24, bgColor = "#FEE4E2", xColor = "#F04438" }: XIconProps = {}) {
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="24" height="24" rx="12" fill={bgColor} />
            <path
                d="M16.2426 7.75736L7.75736 16.2426M7.75736 7.75736L16.2426 16.2426"
                stroke={xColor}
                strokeWidth="2"
                strokeLinecap="round"
            />
        </svg>
    );
}
