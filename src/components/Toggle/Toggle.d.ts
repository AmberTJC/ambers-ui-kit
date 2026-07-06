interface ToggleProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> {
    label: string;
}
export declare function Toggle({ label, disabled, className, id, ...props }: ToggleProps): import("react").JSX.Element;
export {};
