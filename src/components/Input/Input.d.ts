interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    error?: string;
    hint?: string;
    icon?: React.ReactNode;
}
export declare function Input({ label, error, hint, icon, className, disabled, id, ...props }: InputProps): import("react").JSX.Element;
export {};
