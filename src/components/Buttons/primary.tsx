import { ComponentProps, ElementType } from "react";
import { Button } from "../ui/button";
import { twMerge } from "tailwind-merge";

interface ButtonPrimaryProps extends ComponentProps<"button"> {
  title?: string;
  className?: string;
  Icon?: ElementType;
  variant?:
    | "default"
    | "destructive"
    | "secondary"
    | "ghost"
    | "link"
    | "outline";
}

export function ButtonPrimary({
  title,
  className,
  Icon,
  variant = "default",
  ...rest
}: ButtonPrimaryProps) {
  return (
    <Button
      title={title}
      Icon={Icon}
      className={twMerge("", className)}
      variant={variant}
      {...rest}
    />
  );
}
