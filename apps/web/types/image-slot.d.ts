import type React from "react";

type ImageSlotProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLElement>,
  HTMLElement
> & {
  class?: string;
  className?: string;
  shape?: "rect" | "rounded" | "circle" | "pill";
  radius?: string;
  fit?: "cover" | "contain" | "fill";
  position?: string;
  placeholder?: string;
  src?: string;
  mask?: string;
};

declare global {
  namespace JSX {
    interface IntrinsicElements {
      "image-slot": ImageSlotProps;
    }
  }
}

declare module "react" {
  namespace JSX {
    interface IntrinsicElements {
      "image-slot": ImageSlotProps;
    }
  }
}

export {};