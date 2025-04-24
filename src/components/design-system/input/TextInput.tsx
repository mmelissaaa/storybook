
import React, { forwardRef, useState } from 'react';
import { VariantProps, cva } from 'class-variance-authority';
import { cn } from '@/lib/utils';
import { Label, HelperText } from '../typography/Typography';

const inputVariants = cva(
  "flex w-full rounded-md border bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "border-input",
        error: "border-destructive text-destructive focus-visible:ring-destructive",
      },
      size: {
        sm: "py-1 text-xs",
        md: "py-2 text-sm",
        lg: "py-3 text-base",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "md",
    },
  }
);

export interface TextInputProps
  extends React.InputHTMLAttributes<HTMLInputElement>,
    VariantProps<typeof inputVariants> {
  label?: string;
  helperText?: string;
  errorMessage?: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  containerClassName?: string;
}

const TextInput = forwardRef<HTMLInputElement, TextInputProps>(
  (
    {
      className,
      variant,
      size,
      label,
      helperText,
      errorMessage,
      leftIcon,
      rightIcon,
      containerClassName,
      id,
      ...props
    },
    ref
  ) => {
    const [focused, setFocused] = useState(false);
    const inputId = id || `input-${Math.random().toString(36).substr(2, 9)}`;
    const showError = variant === "error" || !!errorMessage;

    return (
      <div className={cn("space-y-1", containerClassName)}>
        {label && (
          <Label as="label" htmlFor={inputId} className="block mb-1">
            {label}
          </Label>
        )}
        <div className="relative">
          {leftIcon && (
            <div className="absolute left-2 top-1/2 -translate-y-1/2 text-muted-foreground">
              {leftIcon}
            </div>
          )}
          <input
            id={inputId}
            className={cn(
              inputVariants({ variant: showError ? "error" : "default", size, className }),
              leftIcon && "pl-8",
              rightIcon && "pr-8"
            )}
            ref={ref}
            onFocus={(e) => {
              setFocused(true);
              props.onFocus?.(e);
            }}
            onBlur={(e) => {
              setFocused(false);
              props.onBlur?.(e);
            }}
            aria-invalid={showError}
            aria-describedby={
              helperText || errorMessage ? `${inputId}-description` : undefined
            }
            {...props}
          />
          {rightIcon && (
            <div className="absolute right-2 top-1/2 -translate-y-1/2 text-muted-foreground">
              {rightIcon}
            </div>
          )}
        </div>
        {(helperText || errorMessage) && (
          <div id={`${inputId}-description`}>
            {showError ? (
              <HelperText className="text-destructive">{errorMessage}</HelperText>
            ) : helperText ? (
              <HelperText>{helperText}</HelperText>
            ) : null}
          </div>
        )}
      </div>
    );
  }
);

TextInput.displayName = "TextInput";

export { TextInput, inputVariants };
