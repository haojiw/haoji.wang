type VideoProps = {
  src: string;
  caption?: string;
  width?: number;
  height?: number;
  autoplay?: boolean;
  loop?: boolean;
  muted?: boolean;
  controls?: boolean;
  className?: string;
};

export default function Video({
  src,
  caption,
  width = 800,
  height = 450,
  autoplay = false,
  loop = false,
  muted = true,
  controls = true,
  className = '',
}: VideoProps) {
  return (
    <figure className={`my-8 ${className}`}>
      <video
        width={width}
        height={height}
        autoPlay={autoplay}
        loop={loop}
        muted={muted}
        controls={controls}
        className="h-auto w-full max-w-full"
        preload="metadata"
      >
        <source src={src} type="video/mp4" />
        <source src={src.replace('.mp4', '.webm')} type="video/webm" />
        Your browser does not support the video tag.
      </video>
      {caption && (
        <figcaption className="mt-2 text-center font-body text-sm text-muted">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}
