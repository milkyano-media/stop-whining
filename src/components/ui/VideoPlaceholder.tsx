interface VideoPlaceholderProps {
    aspectRatio?: string;
    children?: React.ReactNode;
}

export function VideoPlaceholder({ aspectRatio = "h-60", children }: VideoPlaceholderProps) {
    return (
        <div className="gradient-video-border mx-auto max-w-sm rounded-xl p-4">
            <div className={`${aspectRatio} flex w-full items-center justify-center rounded-sm bg-white`}>
                {children || <p className="text-center text-gray-400">Put the video here</p>}
            </div>
        </div>
    );
}
