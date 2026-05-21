import React from "react";
import { cn } from "../../../functions/cn/cn";

export type InputSize = "sm" | "md" | "lg";

export interface InputProps extends Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  "size"
> {
  label?: string;
  hint?: string;
  error?: string;
  size?: InputSize;
  leftAddon?: React.ReactNode;
  rightAddon?: React.ReactNode;
  fullWidth?: boolean;
}

const sizeStyles: Record<InputSize, string> = {
  sm: "h-8 px-2.5 text-sm",
  md: "h-10 px-3 text-sm",
  lg: "h-12 px-4 text-base",
};

export function Input({
  label,
  hint,
  error,
  size = "md",
  leftAddon,
  rightAddon,
  fullWidth = false,
  className,
  id,
  ...props
}: InputProps) {
  const inputId = id ?? label?.toLowerCase().replace(/\s+/g, "-");

  return (
    <div className={cn("flex flex-col gap-1.5", fullWidth && "w-full")}>
      {label && (
        <label htmlFor={inputId} className="text-sm font-medium text-gray-700">
          {label}
        </label>
      )}
      <div className="relative flex items-center">
        {leftAddon && (
          <span className="absolute left-3 flex items-center text-gray-500">
            {leftAddon}
          </span>
        )}
        <input
          id={inputId}
          className={cn(
            "w-full rounded-md border bg-white text-gray-900 placeholder:text-gray-400",
            "transition-colors duration-150",
            "focus:outline-none focus:ring-2 focus:ring-offset-0",
            "disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500",
            sizeStyles[size],
            error
              ? "border-red-400 focus:border-red-400 focus:ring-red-300"
              : "border-gray-300 focus:border-blue-500 focus:ring-blue-300",
            leftAddon && "pl-9",
            rightAddon && "pr-9",
            className,
          )}
          {...props}
        />
        {rightAddon && (
          <span className="absolute right-3 flex items-center text-gray-500">
            {rightAddon}
          </span>
        )}
      </div>
      {(hint || error) && (
        <p className={cn("text-xs", error ? "text-red-500" : "text-gray-500")}>
          {error ?? hint}
        </p>
      )}
    </div>
  );
}
