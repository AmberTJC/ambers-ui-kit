import { useEffect, useRef } from 'react'
import { createPortal } from 'react-dom'
import { useFocusTrap } from '../../hooks/useFocusTrap'
import styles from './Modal.module.css'

interface ModalProps {
  open: boolean
  onClose: () => void
  title: string
  children: React.ReactNode
}
export function Modal({ open, onClose, title, children }: ModalProps) {
  const modalRef = useRef<HTMLDivElement>(null)
  useFocusTrap(modalRef, open)

  useEffect(() => {
    if (!open) return
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', handler)
    return () => document.removeEventListener('keydown', handler)
  }, [open, onClose])

  if (!open) return null
  return createPortal(
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modalWrapper} role="dialog" aria-modal="true" aria-label={title}>
        <div className={styles.traceBorder} />
        <div
          ref={modalRef}
          className={styles.modal}
          onClick={e => e.stopPropagation()}
        >
          <div className={styles.header}>
            <h2>{title}</h2>
            <button onClick={onClose} aria-label="Close">×</button>
          </div>
          <div className={styles.body}>{children}</div>
        </div>
      </div>
    </div>,
    document.body
  )
}
