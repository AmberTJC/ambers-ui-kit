interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
    label?: string;
    error?: string;
    hint?: string;
    options: {
        value: string;
        label: string;
    }[];
    placeholder?: string;
}
export declare function Select({ label, error, hint, options, placeholder, className, disabled, id, ...props }: SelectProps): import("react").JSX.Element;
export {};
