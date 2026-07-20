import type { ReactNode } from "react";
import SplitHeading from "@/components/motion/SplitHeading";
import Reveal from "@/components/motion/Reveal";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  text?: string;
  align?: "left" | "center";
  as?: "h1" | "h2" | "h3";
  children?: ReactNode;
  onDark?: boolean;
}

export default function SectionHeading({
  eyebrow,
  title,
  text,
  align = "left",
  as = "h2",
  children,
  onDark = false,
}: SectionHeadingProps) {
  return (
    <div className={align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      {eyebrow ? (
        <Reveal y={16}>
          <p className={`eyebrow ${onDark ? "!text-secondary" : ""}`}>
            <span
              className={`inline-block h-1.5 w-1.5 rounded-full ${onDark ? "bg-accent" : "bg-accent"}`}
              aria-hidden="true"
            />
            {eyebrow}
          </p>
        </Reveal>
      ) : null}
      <SplitHeading
        text={title}
        as={as}
        className={`mt-4 text-4xl md:text-5xl lg:text-[3.4rem] ${onDark ? "text-white" : "text-dark"}`}
      />
      {text ? (
        <Reveal delay={150} y={24}>
          <p className={`mt-5 text-base leading-relaxed md:text-lg ${onDark ? "text-white/70" : "text-muted"}`}>
            {text}
          </p>
        </Reveal>
      ) : null}
      {children}
    </div>
  );
}
