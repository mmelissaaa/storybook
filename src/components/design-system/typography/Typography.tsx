
import React from 'react';
import { VariantProps, cva } from 'class-variance-authority';
import { cn } from '@/lib/utils';

export const headingVariants = cva(
  "font-display tracking-tighter text-foreground font-semibold",
  {
    variants: {
      level: {
        h1: "text-5xl md:text-6xl leading-tight",
        h2: "text-4xl md:text-5xl leading-tight",
        h3: "text-3xl md:text-4xl leading-tight",
        h4: "text-2xl md:text-3xl leading-tight",
        h5: "text-xl md:text-2xl leading-snug",
        h6: "text-lg md:text-xl leading-snug",
      }
    },
    defaultVariants: {
      level: "h1",
    }
  }
);

export const textVariants = cva(
  "text-foreground font-sans",
  {
    variants: {
      size: {
        xs: "text-xs leading-relaxed",
        sm: "text-sm leading-relaxed",
        base: "text-base leading-relaxed",
        lg: "text-lg leading-relaxed",
        xl: "text-xl leading-relaxed",
      },
      weight: {
        light: "font-light",
        normal: "font-normal",
        medium: "font-medium",
        semibold: "font-semibold",
        bold: "font-bold",
      },
    },
    defaultVariants: {
      size: "base",
      weight: "normal",
    }
  }
);

export const labelVariants = cva(
  "font-sans font-medium",
  {
    variants: {
      size: {
        xs: "text-xs",
        sm: "text-sm",
        base: "text-base",
      },
      type: {
        default: "text-foreground",
        caption: "text-muted-foreground",
        helper: "text-muted-foreground",
      },
    },
    defaultVariants: {
      size: "sm",
      type: "default",
    }
  }
);

interface HeadingProps
  extends React.HTMLAttributes<HTMLHeadingElement>,
    VariantProps<typeof headingVariants> {
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
}

export const Heading: React.FC<HeadingProps> = ({
  className,
  level,
  as,
  ...props
}) => {
  const Tag = as || level || 'h1';
  return (
    <Tag
      className={cn(headingVariants({ level, className }))}
      {...props}
    />
  );
};

interface TextProps
  extends React.HTMLAttributes<HTMLParagraphElement>,
    VariantProps<typeof textVariants> {}

export const Text: React.FC<TextProps> = ({
  className,
  size,
  weight,
  ...props
}) => {
  return (
    <p
      className={cn(textVariants({ size, weight, className }))}
      {...props}
    />
  );
};

interface LabelProps
  extends React.HTMLAttributes<HTMLLabelElement | HTMLSpanElement>,
    VariantProps<typeof labelVariants> {
  as?: 'label' | 'span';
}

export const Label: React.FC<LabelProps> = ({
  className,
  size,
  type,
  as = 'span',
  ...props
}) => {
  const Component = as;
  return (
    <Component
      className={cn(labelVariants({ size, type, className }))}
      {...props}
    />
  );
};

export const Caption: React.FC<Omit<LabelProps, 'type'>> = (props) => (
  <Label type="caption" {...props} />
);

export const HelperText: React.FC<Omit<LabelProps, 'type'>> = (props) => (
  <Label type="helper" {...props} />
);
