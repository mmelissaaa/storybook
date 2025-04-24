
import { useState, useEffect, createContext, useContext } from 'react';
import { VariantProps, cva } from 'class-variance-authority';
import { cn } from '@/lib/utils';
import { Check, Info, AlertTriangle, X } from 'lucide-react';

export type ToastType = 'info' | 'success' | 'warning' | 'error';

const toastVariants = cva(
  "fixed pointer-events-auto flex w-full max-w-sm items-center gap-2 rounded-md border p-4 shadow-lg",
  {
    variants: {
      position: {
        'top-left': "top-4 left-4",
        'top-right': "top-4 right-4",
        'top-center': "top-4 left-1/2 -translate-x-1/2",
        'bottom-left': "bottom-4 left-4",
        'bottom-right': "bottom-4 right-4",
        'bottom-center': "bottom-4 left-1/2 -translate-x-1/2",
      },
      type: {
        info: "bg-info/10 border-info text-info-foreground",
        success: "bg-success/10 border-success text-success-foreground",
        warning: "bg-warning/10 border-warning text-warning-foreground",
        error: "bg-destructive/10 border-destructive text-destructive-foreground",
      },
    },
    defaultVariants: {
      position: 'bottom-right',
      type: 'info',
    },
  }
);

type ToastProps = React.HTMLAttributes<HTMLDivElement> & {
  title?: string;
  description: string;
  duration?: number;
  onClose?: () => void;
  type?: ToastType;
  id: string;
};

type ToastContextType = {
  toasts: ToastProps[];
  addToast: (props: Omit<ToastProps, "id">) => void;
  removeToast: (id: string) => void;
  clearToasts: () => void;
};

const ToastContext = createContext<ToastContextType | undefined>(undefined);

// Toast component
export const Toast: React.FC<ToastProps> = ({
  title,
  description,
  type = 'info',
  duration = 5000,
  onClose,
  className,
  id,
  ...props
}) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      handleClose();
    }, duration);

    return () => clearTimeout(timer);
  }, [duration]);

  const handleClose = () => {
    setVisible(false);
    setTimeout(() => {
      onClose?.();
    }, 300);
  };

  const icons = {
    info: <Info className="h-5 w-5 text-info" />,
    success: <Check className="h-5 w-5 text-success" />,
    warning: <AlertTriangle className="h-5 w-5 text-warning" />,
    error: <X className="h-5 w-5 text-destructive" />,
  };

  return (
    <div
      role="alert"
      aria-live="assertive"
      className={cn(
        toastVariants({ type, className }),
        visible ? "animate-toast-in" : "animate-toast-out"
      )}
      {...props}
    >
      <div className="flex-shrink-0">{icons[type]}</div>
      <div className="flex-1">
        {title && <h4 className="font-medium text-sm mb-1">{title}</h4>}
        <p className="text-sm">{description}</p>
      </div>
      <button
        type="button"
        onClick={handleClose}
        className="text-foreground/50 hover:text-foreground"
        aria-label="Close"
      >
        <X className="h-4 w-4" />
      </button>
    </div>
  );
};

// Toast provider
export const ToastProvider: React.FC<React.PropsWithChildren<{ position?: VariantProps<typeof toastVariants>['position'] }>> = ({ 
  children,
  position = 'bottom-right',
}) => {
  const [toasts, setToasts] = useState<ToastProps[]>([]);

  const addToast = (toast: Omit<ToastProps, "id">) => {
    const id = Math.random().toString(36).substring(2, 9);
    setToasts((prev) => [...prev, { ...toast, id }]);
  };

  const removeToast = (id: string) => {
    setToasts((prev) => prev.filter((toast) => toast.id !== id));
  };

  const clearToasts = () => {
    setToasts([]);
  };

  return (
    <ToastContext.Provider value={{ toasts, addToast, removeToast, clearToasts }}>
      {children}
      <div
        className={cn("fixed z-50", {
          "top-0 left-0": position?.includes("top-left"),
          "top-0 right-0": position?.includes("top-right"),
          "top-0 left-1/2 -translate-x-1/2": position?.includes("top-center"),
          "bottom-0 left-0": position?.includes("bottom-left"),
          "bottom-0 right-0": position?.includes("bottom-right"),
          "bottom-0 left-1/2 -translate-x-1/2": position?.includes("bottom-center"),
        })}
      >
        {toasts.map((toast) => (
          <Toast
            key={toast.id}
            {...toast}
            onClose={() => removeToast(toast.id)}
            className={toastVariants({ position })}
          />
        ))}
      </div>
    </ToastContext.Provider>
  );
};

export const useToast = () => {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error("useToast must be used within a ToastProvider");
  }
  return context;
};
