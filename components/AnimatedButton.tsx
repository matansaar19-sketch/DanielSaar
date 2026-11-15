"use client";

import { motion } from "framer-motion";
import { hoverButton } from "@/lib/motion";
import { useA11yReducedMotion } from "@/lib/use-a11y-reduced-motion";
import type { ReactNode } from "react";

const variantClassName = {
  // Dark text on brand orange: white on #E98C00 is 2.6:1 (fails WCAG AA); #0F172A is 7.0:1.
  primary: "bg-accent text-foreground shadow-[0px_4px_2px_rgba(0,0,0,0.25)]",
  // Brown button with cream text (#EBE7E1 on #665747 = 5.6:1, passes WCAG AA).
  brown: "bg-[#665747] text-[#EBE7E1] shadow-[0px_4px_2px_rgba(0,0,0,0.25)] hover:bg-[#574a3c]",
  secondary:
    "border border-slate-900 bg-white text-slate-900 shadow-[0px_4px_2px_rgba(0,0,0,0.25)]",
} as const;

type ButtonVariant = keyof typeof variantClassName;

type Props = {
  children: ReactNode;
  className?: string;
  href: string;
  target?: string;
  rel?: string;
  variant?: ButtonVariant;
};

export function AnimatedButton({ children, className, href, target, rel, variant = "primary" }: Props) {
  const reduce = useA11yReducedMotion();
  const linkProps = {
    href,
    target,
    rel,
    className: [variantClassName[variant], className].filter(Boolean).join(" "),
  };

  if (reduce) {
    return <a {...linkProps}>{children}</a>;
  }

  return (
    <motion.a {...linkProps} variants={hoverButton} initial="rest" whileHover="hover" whileTap="tap">
      {children}
    </motion.a>
  );
}
