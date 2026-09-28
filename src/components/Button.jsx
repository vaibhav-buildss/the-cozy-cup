import { ArrowUpRight } from "lucide-react";

function Button({
  children,
  href,
  onClick,
  variant = "dark",
  icon = true,
  iconOnly = false,
  className = "",
  disabled = false,
  type = "button",
  target,
  rel,
}) {
  const variants = {
    dark: "cafe-btn-dark",
    light: "cafe-btn-light",
    outline: "cafe-btn-outline",
    "outline-light": "cafe-btn-outline-light",
    brown: "cafe-btn-brown",
  };

  const classes = [
    "cafe-btn",
    variants[variant] || variants.dark,
    iconOnly ? "!h-11 !w-11 !min-h-0 !p-0" : "",
    disabled ? "pointer-events-none opacity-40" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  const content = (
    <>
      <span>{children}</span>

      {icon && !iconOnly && (
        <ArrowUpRight
          size={14}
          strokeWidth={1.6}
          aria-hidden="true"
        />
      )}
    </>
  );

  if (href) {
    return (
      <a
        href={href}
        className={classes}
        target={target}
        rel={rel}
        aria-disabled={disabled}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={classes}
    >
      {content}
    </button>
  );
}

export default Button;