import clsx from "clsx";

interface TitleProps {
  title: string;
  size: "sm" | "md" | "lg"
}

export function Title({ size = "md", title }: TitleProps) {
  return (
    <h1 className={clsx("font-semibold text-2xl text-slate-700 text-center lg:text-start md:text-start", {
      'text-xl': size === "sm",
      'text-3xl leading-10': size === "md",
      'text-4xl': size === "lg",
    })}>
      <span>{title}</span>
    </h1>
  )
}
