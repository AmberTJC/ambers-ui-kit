import { useState, useEffect } from 'react'
import { toast } from './toast-store'
import styles from './Toast-Display.module.css'

interface Toast {
  id: string
  type: 'success' | 'error' | 'info'
  message: string
}

export function ToastDisplay() {
  const [toasts, setToasts] = useState<Toast[]>([])

  useEffect(() => {
    const unsub = toast.subscribe((t) => {
      setToasts((prev) => [...prev, t])

      // Auto-dismiss after 3.5 seconds
      setTimeout(() => {
        setToasts((prev) => prev.filter((x) => x.id !== t.id))
      }, 3500)
    })

    return unsub
  }, [])

  return (
    <div className={styles.container}>
      {toasts.map((t) => (
        <div key={t.id} className={`${styles.toast} ${styles[t.type]}`}>
          <span>{t.message}</span>
        </div>
      ))}
    </div>
  )
}
