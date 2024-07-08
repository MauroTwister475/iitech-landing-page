import Link from "next/link";
import { Lightbulb } from "lucide-react";
import clsx from "clsx";
import { twMerge } from "tailwind-merge";

interface LogoProps {
  color?: "white" | "blue";
  size?: number;
  className?: string;
}

export function Logo({ color = "blue", size = 30, className }: LogoProps) {
  return (
    <div className="flex items-center justify-center">
      <Lightbulb className={clsx('', {
        'text-white': color === "white",
        'text-blue-600': color === "blue",
      })} size={size} />
      <Link href="/" className={twMerge('flex flex-col', className)}>
        <h1 className='font-bold text-xl'>IItech</h1>
        <small className="text-[0.6rem] font-thin">
          Inovação & Tecnologia
        </small>
      </Link>
    </div>
  );
}
