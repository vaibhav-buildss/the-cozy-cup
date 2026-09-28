import { useState } from "react";
import { ImageOff } from "lucide-react";

function SafeImage({
  src,
  alt = "",
  className = "",
  fallbackClassName = "",
  ...props
}) {
  const [hasError, setHasError] = useState(false);

  if (!src || hasError) {
    return (
      <div
        className={`flex h-full w-full items-center justify-center bg-[#eee7de] text-[#8b5e3c]/50 ${fallbackClassName}`}
        role="img"
        aria-label={alt || "Image unavailable"}
      >
        <div className="flex flex-col items-center justify-center gap-2">
          <ImageOff size={22} strokeWidth={1.4} />

          <span className="text-[8px] font-semibold uppercase tracking-[0.16em]">
            Image unavailable
          </span>
        </div>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      className={className}
      onError={() => setHasError(true)}
      loading="lazy"
      {...props}
    />
  );
}

export default SafeImage;