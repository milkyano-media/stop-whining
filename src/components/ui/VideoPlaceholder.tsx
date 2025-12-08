interface VideoPlaceholderProps {
    aspectRatio?: string;
    children?: React.ReactNode;
}

export function VideoPlaceholder({ children }: VideoPlaceholderProps) {
    return (
        <div className="gradient-video-border mx-auto max-w-sm rounded-xl p-4 xl:max-w-3xl">
            <div className="flex w-full items-center justify-center">{children}</div>
        </div>
    );
}
