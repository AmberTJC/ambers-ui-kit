interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
    label?: string;
    error?: string;
    hint?: string;
}
export declare function Textarea({ label, error, hint, className, disabled, id, rows, ...props }: TextareaProps): import("react").JSX.Element;
export {};
