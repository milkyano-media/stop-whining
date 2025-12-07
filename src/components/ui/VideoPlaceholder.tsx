interface VideoPlaceholderProps {
    aspectRatio?: string;
    children?: React.ReactNode;
}

export function VideoPlaceholder({ aspectRatio = "h-60", children }: VideoPlaceholderProps) {
    return (
        <div className="gradient-video-border mx-auto max-w-sm rounded-xl p-4 xl:max-w-3xl">
            <div className={`${aspectRatio} w-full xl:h-[560px]`}>{children}</div>
        </div>
    );
}
