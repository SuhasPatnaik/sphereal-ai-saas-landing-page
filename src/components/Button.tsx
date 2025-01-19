import { cva } from "class-variance-authority";
import { HTMLAttributes, ReactNode } from "react";

export type ButtonProps = {
  children: ReactNode;
  variant: "primary" | "secondary" | "tertiary";
} & HTMLAttributes<HTMLButtonElement>;

const classes = cva(
  "text-xs tracking-widest uppercase font-bold h-10 px-6 rounded-lg whitespace-nowrap",
  {
    variants: {
      variant: {
        primary:
          "border-2 border-transparent [background:linear-gradient(var(--color-gray-950),var(--color-gray-950))_padding-box,conic-gradient(from_45deg,var(--color-violet-400),var(--color-fuchsia-400),var(--color-amber-300),var(--color-teal-300))_border-box]",
        secondary: "",
        tertiary: "bg-gray-800 text-gray-200",
      },
    },
    defaultVariants: {
      variant: "primary",
    },
  }
);

export default function Button({ children, variant }: ButtonProps) {
  return <button className={classes({ variant })}>{children}</button>;
}
