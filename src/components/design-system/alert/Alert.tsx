
import React from 'react';
import { VariantProps, cva } from 'class-variance-authority';
import { cn } from '@/lib/utils';
import { Info, AlertTriangle, Check, X } from 'lucide-react';

export type AlertVariant = 'info' | 'warning' | 'success' | 'error';

const alertVariants = cva(
  "relative w-full rounded-lg border p-4 flex gap-3 [&>svg]:size-5",
  {
    variants: {
      variant: {
        info: "bg-info/10 text-info-foreground border-info/50",
        warning: "bg-warning/10 text-warning-foreground border-warning/50",
        success: "bg-success/10 text-success-foreground border-success/50",
        error: "bg-destructive/10 text-destructive-foreground border-destructive/50",
      },
    },
    defaultVariants: {
      variant: "info",
    },
  }
);

export interface AlertProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof alertVariants> {
  title?: string;
  onClose?: () => void;
  icon?: React.ReactNode;
}

export const Alert: React.FC<AlertProps> = ({
  className,
  variant,
  title,
  children,
  onClose,
  icon,
  ...props
}) => {
  const defaultIcons = {
    info: <Info />,
    warning: <AlertTriangle />,
    success: <Check />,
    error: <X />,
  };

  const currentIcon = icon || (variant && defaultIcons[variant]);

  return (
    <div
      role="alert"
      className={cn(alertVariants({ variant, className }))}
      {...props}
    >
      {currentIcon && <div className="flex-shrink-0">{currentIcon}</div>}
      <div className="flex-1">
        {title && (
          <h5 className="mb-1 font-medium leading-none tracking-tight">
            {title}
          </h5>
        )}
        {children && <div className="text-sm">{children}</div>}
      </div>
      {onClose && (
        <button
          className="absolute right-4 top-4 rounded-md p-1 opacity-70 hover:opacity-100"
          onClick={onClose}
          aria-label="Close alert"
        >
          <X className="h-4 w-4" />
        </button>
      )}
    </div>
  );
};
