interface VideoPlaceholderProps {
    aspectRatio?: string;
    children?: React.ReactNode;
}

export function VideoPlaceholder({ aspectRatio = "h-60", children }: VideoPlaceholderProps) {
    return (
        <div className="gradient-video-border mx-auto max-w-sm rounded-xl p-4">
            <div className={`${aspectRatio} w-full rounded-sm bg-white`}>
                {children || <p className="text-center">Put the video here</p>}
            </div>
        </div>
    );
}
