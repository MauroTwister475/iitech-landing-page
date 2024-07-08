import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const inputVariants = cva(
  "flex items-center rounded-md space-x-2 bg-white pl-3",
  {
    variants: {
      variant: {
        default: "w-full text-white",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement>,
    VariantProps<typeof inputVariants> {
  Icon?: React.ElementType;
  placeholder?: string;
  type: string;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, variant, placeholder, Icon, ...props }, ref) => {
    return (
      <div
        className={cn(inputVariants({ variant, className }))}
        ref={ref}
        {...props}
      >
        {Icon && <Icon className="text-gray-500" size={22} />}
        <input 
          type={type} 
          placeholder={placeholder}
          className="w-full h-10 py-2 text-sm text-gray-500 placeholder:text-gray-500 font-medium bg-inherit rounded-ee-md rounded-se-md outline-none  focus-visible:outline-none"
        />
      </div>
    );
  }
);
Input.displayName = "Input";

export { Input, inputVariants };
