interface VideoPlaceholderProps {
    aspectRatio?: string;
    children?: React.ReactNode;
}

export function VideoPlaceholder({ aspectRatio = "h-60", children }: VideoPlaceholderProps) {
    return (
        <div className="gradient-video-border mx-auto h-59 max-w-sm rounded-xl p-4 xl:h-140 xl:max-w-198">
            <div className={`${aspectRatio} flex h-full w-full items-center justify-center rounded-sm bg-white`}>
                {children || <p className="text-center text-gray-400">Put the video here</p>}
            </div>
        </div>
    );
}
