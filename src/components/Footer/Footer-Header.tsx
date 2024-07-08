import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

interface FooterHeaderProps {
  title?: string;
  children: ReactNode;
  className?: string;
}

export function FooterHeader({ title, children, className }: FooterHeaderProps) {
  return (
    <div className={twMerge('w-full text-white flex items-start flex-col gap-2.5 mt-6 lg:mt-0', className)}>
      <h1 className="font-medium text-xl">{title}</h1>
      <div className="flex items-start flex-col gap-1.5">
        {children}
      </div>
    </div>
  )
}
