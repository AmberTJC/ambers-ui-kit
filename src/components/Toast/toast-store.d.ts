type ToastType = 'success' | 'error' | 'info';
type ToastListener = (toast: {
    id: string;
    type: ToastType;
    message: string;
}) => void;
export declare const toast: {
    success: (message: string) => void;
    error: (message: string) => void;
    info: (message: string) => void;
    subscribe: (fn: ToastListener) => () => void;
};
export {};
