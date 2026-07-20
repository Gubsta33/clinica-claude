interface LogoProps {
  onDark?: boolean;
}

export default function Logo({ onDark = false }: LogoProps) {
  return (
    <span className="flex items-center gap-2.5">
      <svg
        width="30"
        height="30"
        viewBox="0 0 32 32"
        fill="none"
        aria-hidden="true"
        className="shrink-0"
      >
        <circle cx="16" cy="16" r="15" stroke={onDark ? "#D6C8E8" : "#A98BC7"} strokeWidth="1.4" />
        <path
          d="M16 5c2.6 4.2 6.8 6.8 11 8-4.2 1.2-8.4 3.8-11 8-2.6-4.2-6.8-6.8-11-8 4.2-1.2 8.4-3.8 11-8Z"
          fill={onDark ? "#E7DDF3" : "#A98BC7"}
        />
        <circle cx="16" cy="24.5" r="1.6" fill="#C6A66B" />
      </svg>
      <span
        className={`font-display text-[1.35rem] font-semibold leading-none tracking-wide ${
          onDark ? "text-white" : "text-dark"
        }`}
      >
        Lúmina
        <span className={`ml-1.5 align-middle text-[0.58rem] font-sans font-bold uppercase tracking-[0.24em] ${onDark ? "text-secondary" : "text-primary-deep"}`}>
          Estética
        </span>
      </span>
    </span>
  );
}
