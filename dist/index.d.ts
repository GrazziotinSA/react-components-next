import * as react_jsx_runtime from 'react/jsx-runtime';
import React from 'react';

type ButtonVariant = "primary" | "secondary" | "outline" | "ghost" | "destructive";
type ButtonSize = "sm" | "md" | "lg";
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: ButtonVariant;
    size?: ButtonSize;
    loading?: boolean;
    leftIcon?: React.ReactNode;
    rightIcon?: React.ReactNode;
    fullWidth?: boolean;
}
declare function Button({ variant, size, loading, leftIcon, rightIcon, fullWidth, children, className, disabled, ...props }: ButtonProps): react_jsx_runtime.JSX.Element;

type InputSize = "sm" | "md" | "lg";
interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size"> {
    label?: string;
    hint?: string;
    error?: string;
    size?: InputSize;
    leftAddon?: React.ReactNode;
    rightAddon?: React.ReactNode;
    fullWidth?: boolean;
}
declare function Input({ label, hint, error, size, leftAddon, rightAddon, fullWidth, className, id, ...props }: InputProps): react_jsx_runtime.JSX.Element;

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
    shadow?: "none" | "sm" | "md" | "lg";
    hoverable?: boolean;
    bordered?: boolean;
    padding?: "none" | "sm" | "md" | "lg";
}
declare function Card({ shadow, hoverable, bordered, padding, className, children, ...props }: CardProps): react_jsx_runtime.JSX.Element;
interface CardHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
}
declare function CardHeader({ className, children, ...props }: CardHeaderProps): react_jsx_runtime.JSX.Element;
interface CardTitleProps extends React.HTMLAttributes<HTMLHeadingElement> {
}
declare function CardTitle({ className, children, ...props }: CardTitleProps): react_jsx_runtime.JSX.Element;
interface CardDescriptionProps extends React.HTMLAttributes<HTMLParagraphElement> {
}
declare function CardDescription({ className, children, ...props }: CardDescriptionProps): react_jsx_runtime.JSX.Element;
interface CardContentProps extends React.HTMLAttributes<HTMLDivElement> {
}
declare function CardContent({ className, children, ...props }: CardContentProps): react_jsx_runtime.JSX.Element;
interface CardFooterProps extends React.HTMLAttributes<HTMLDivElement> {
}
declare function CardFooter({ className, children, ...props }: CardFooterProps): react_jsx_runtime.JSX.Element;

type BadgeVariant = "default" | "primary" | "success" | "warning" | "danger" | "info";
interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
    variant?: BadgeVariant;
    dot?: boolean;
}
declare function Badge({ variant, dot, className, children, ...props }: BadgeProps): react_jsx_runtime.JSX.Element;

type AvatarSize = "xs" | "sm" | "md" | "lg" | "xl";
interface AvatarProps extends React.HTMLAttributes<HTMLSpanElement> {
    src?: string;
    alt?: string;
    fallback?: string;
    size?: AvatarSize;
}
declare function Avatar({ src, alt, fallback, size, className, ...props }: AvatarProps): react_jsx_runtime.JSX.Element;

export { Avatar, type AvatarProps, type AvatarSize, Badge, type BadgeProps, type BadgeVariant, Button, type ButtonProps, type ButtonSize, type ButtonVariant, Card, CardContent, type CardContentProps, CardDescription, type CardDescriptionProps, CardFooter, type CardFooterProps, CardHeader, type CardHeaderProps, type CardProps, CardTitle, type CardTitleProps, Input, type InputProps, type InputSize };
