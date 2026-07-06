interface ModalProps {
    open: boolean;
    onClose: () => void;
    title: string;
    children: React.ReactNode;
}
export declare function Modal({ open, onClose, title, children }: ModalProps): import("react").ReactPortal | null;
export {};
