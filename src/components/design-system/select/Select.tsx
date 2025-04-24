
import React, { forwardRef, useState } from 'react';
import { VariantProps, cva } from 'class-variance-authority';
import { cn } from '@/lib/utils';
import { Label, HelperText } from '../typography/Typography';
import { Check, ChevronDown } from 'lucide-react';

const selectVariants = cva(
  "flex w-full cursor-pointer items-center justify-between rounded-md border bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
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

const selectItemVariants = cva(
  "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
  {
    variants: {
      variant: {
        default: "hover:bg-accent hover:text-accent-foreground",
        selected: "bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface SelectOption {
  value: string;
  label: string;
  disabled?: boolean;
}

export interface SelectProps extends VariantProps<typeof selectVariants> {
  options: SelectOption[];
  value?: string;
  onChange?: (value: string) => void;
  placeholder?: string;
  label?: string;
  helperText?: string;
  errorMessage?: string;
  id?: string;
  containerClassName?: string;
  className?: string;
  disabled?: boolean;
  required?: boolean;
  name?: string;
  ariaLabel?: string;
}

export const Select = forwardRef<HTMLDivElement, SelectProps>(
  (
    {
      options,
      value,
      onChange,
      placeholder = "Select an option",
      label,
      helperText,
      errorMessage,
      id,
      containerClassName,
      className,
      variant,
      size,
      disabled,
      required,
      name,
      ariaLabel,
      ...props
    },
    ref
  ) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedValue, setSelectedValue] = useState<string | undefined>(value);
    const [focusedIndex, setFocusedIndex] = useState(-1);

    const selectId = id || `select-${Math.random().toString(36).substr(2, 9)}`;
    const showError = variant === "error" || !!errorMessage;

    const handleSelect = (optionValue: string) => {
      setSelectedValue(optionValue);
      onChange?.(optionValue);
      setIsOpen(false);
    };

    const selectedOption = options.find(opt => opt.value === selectedValue);

    const toggleDropdown = () => {
      if (!disabled) {
        setIsOpen(!isOpen);
        if (!isOpen) {
          setFocusedIndex(-1);
        }
      }
    };

    const handleKeyDown = (e: React.KeyboardEvent) => {
      if (disabled) return;
      
      switch (e.key) {
        case "Enter":
        case " ":
          e.preventDefault();
          if (isOpen && focusedIndex >= 0) {
            handleSelect(options[focusedIndex].value);
          } else {
            toggleDropdown();
          }
          break;
        case "Escape":
          if (isOpen) {
            e.preventDefault();
            setIsOpen(false);
          }
          break;
        case "ArrowDown":
          e.preventDefault();
          if (!isOpen) {
            setIsOpen(true);
          } else {
            setFocusedIndex(prev => 
              prev < options.length - 1 ? prev + 1 : prev
            );
          }
          break;
        case "ArrowUp":
          e.preventDefault();
          if (isOpen) {
            setFocusedIndex(prev => 
              prev > 0 ? prev - 1 : 0
            );
          }
          break;
        default:
          break;
      }
    };

    return (
      <div className={cn("relative space-y-1", containerClassName)} ref={ref}>
        {label && (
          <Label as="label" htmlFor={selectId} className="block mb-1">
            {label}
            {required && <span className="text-destructive ml-1">*</span>}
          </Label>
        )}
        
        <div
          id={selectId}
          className={cn(
            selectVariants({ 
              variant: showError ? "error" : "default", 
              size, 
              className 
            }),
            disabled && "opacity-50 cursor-not-allowed"
          )}
          onClick={toggleDropdown}
          onKeyDown={handleKeyDown}
          role="combobox"
          aria-expanded={isOpen}
          aria-haspopup="listbox"
          aria-controls={`${selectId}-listbox`}
          aria-label={ariaLabel || label}
          aria-labelledby={label ? selectId : undefined}
          aria-required={required}
          aria-disabled={disabled}
          tabIndex={disabled ? -1 : 0}
          {...props}
        >
          <span className={!selectedOption ? "text-muted-foreground" : undefined}>
            {selectedOption ? selectedOption.label : placeholder}
          </span>
          <ChevronDown
            className={cn(
              "h-4 w-4 shrink-0 opacity-50 transition-transform",
              isOpen && "rotate-180"
            )}
          />
          {name && value && (
            <input type="hidden" name={name} value={value} />
          )}
        </div>
        
        {isOpen && (
          <>
            <div 
              className="fixed inset-0 z-10"
              onClick={() => setIsOpen(false)} 
            />
            <div
              id={`${selectId}-listbox`}
              role="listbox"
              aria-labelledby={selectId}
              className={cn(
                "absolute z-20 mt-1 max-h-60 min-w-full overflow-auto rounded-md border bg-background shadow-md outline-none",
                "py-1 text-sm"
              )}
            >
              {options.length > 0 ? (
                options.map((option, index) => (
                  <div
                    key={option.value}
                    className={selectItemVariants({
                      variant: selectedValue === option.value ? "selected" : "default",
                    })}
                    role="option"
                    aria-selected={selectedValue === option.value}
                    data-disabled={option.disabled}
                    tabIndex={-1}
                    onClick={() => {
                      if (!option.disabled) {
                        handleSelect(option.value);
                      }
                    }}
                    data-focused={focusedIndex === index || undefined}
                    style={{
                      backgroundColor: focusedIndex === index && selectedValue !== option.value 
                        ? 'var(--accent)' 
                        : undefined
                    }}
                  >
                    <span className="flex-1">{option.label}</span>
                    {selectedValue === option.value && (
                      <Check className="h-4 w-4 ml-2" />
                    )}
                  </div>
                ))
              ) : (
                <div className="px-2 py-1.5 text-sm text-muted-foreground">
                  No options available
                </div>
              )}
            </div>
          </>
        )}
        
        {(helperText || errorMessage) && (
          <div id={`${selectId}-description`}>
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

Select.displayName = "Select";
