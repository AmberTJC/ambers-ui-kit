type Position = 'top' | 'bottom' | 'left' | 'right';
interface TooltipProps {
    text: string;
    position?: Position;
    children: React.ReactNode;
}
export declare function Tooltip({ text, position, children }: TooltipProps): import("react").JSX.Element;
export {};
