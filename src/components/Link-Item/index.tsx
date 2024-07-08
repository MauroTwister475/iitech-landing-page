import { ReactNode } from "react";
import Link, { LinkProps } from "next/link";
import { twMerge } from "tailwind-merge";

interface NextLinkProps extends LinkProps {
  href: string;
  children: ReactNode | string;
  isActive?: boolean;
  className?: string;
}

export function NextLink({ href, children, isActive = false,className, ...rest }: NextLinkProps) {

  return (
    <Link 
      href={href} 
      data-active={isActive}  
      className={twMerge('rounded-md data-[active=true]:text-blue-600 data-[active=true]:font-semibold transition-all', className)}
      {...rest}
    >
      <span>{children}</span>
    </Link>
  )
}
