import { ComponentProps, ReactNode } from "react";
import { twMerge } from "tailwind-merge";

interface SectionContentProps extends ComponentProps<"section"> {
  id: string;
  children: ReactNode;
  className?: string;
}

export function SectionContent({ children, className, id, ...rest }: SectionContentProps) {
  return (
    <section
      id={id}
      {...rest}
      className={twMerge('w-full bg-white py-24 px-6 lg:py-24 lg:px-24 flex flex-col items-center', className)}
    >
      {children}
    </section>
  );
}
