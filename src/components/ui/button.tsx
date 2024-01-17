import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "../../utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-accent hover:text-accent-foreground",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline:
          "border border-input bg-[#E6A4B4] hover:bg-accent hover:text-accent-foreground",
        outline2:
          "bg-[#fff] hover:bg-accent hover:text-accent-foreground",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
        cus1: "text-[#fff] w-[120px] bg-[#16B6D4] h-[60px] my-auto rounded-3xl px-[20px] py-[15px] text-center font-[700] md:text-[14px] text-[10px]",
        cus2: "text-[#16B6D4] border-2 border-[#16B6D4] w-[227px] h-[54px] bg-[#fff] rounded-[27px] px-[18px] py-[8px] font-[600] text-[16px] leading-[20px] flex items-center mt-8",
        cus3: "text-[#fff] bg-[#16B6D4] h-[60px] my-auto rounded-3xl px-[30px] py-[15px] font-[700] text-[14px]",
        cus4: "text-[#fff] w-[120px] bg-[#16B6D4] h-[60px] my-auto rounded-3xl px-[20px] py-[15px] text-center font-[700] md:text-[14px] text-[40px]",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
