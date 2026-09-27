import { ImageIcon, type LucideIcon } from "lucide-react";

type Props = {
  label: string;
  icon?: LucideIcon;
  className?: string;
};

export default function PlaceholderImage({
  label,
  icon: Icon = ImageIcon,
  className = "",
}: Props) {
  return (
    <div
      className={`
        relative
        flex
        min-h-[220px]
        items-center
        justify-center
        overflow-hidden
        rounded-3xl
        bg-[#102b3e]
        ${className}
      `}
      role="img"
      aria-label={`Placeholder: ${label}`}
    >
      {/* Soft light effect */}
      <div
        className="
          pointer-events-none
          absolute
          inset-0
          bg-[radial-gradient(circle_at_80%_20%,rgba(150,190,210,0.28),transparent_45%)]
        "
      />

      <Icon
        size={56}
        strokeWidth={1.3}
        className="relative text-[#8eb4ca]/50"
      />

      <span
        className="
          absolute
          bottom-4
          left-4
          rounded-full
          bg-[#071827]/80
          px-3
          py-1.5
          text-xs
          text-[#b5ccda]
        "
      >
        {label}
      </span>
    </div>
  );
}