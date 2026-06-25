import { useState, useRef } from 'react'
import styles from './Tooltip.module.css'

type Position = 'top' | 'bottom' | 'left' | 'right'

interface TooltipProps {
  text: string
  position?: Position
  children: React.ReactNode
}

export function Tooltip({ text, position = 'top', children }: TooltipProps) {
  const [visible, setVisible] = useState(false)
  const wrapperRef = useRef<HTMLSpanElement>(null)

  return (
    <span
      ref={wrapperRef}
      className={styles.wrapper}
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
      onFocus={() => setVisible(true)}
      onBlur={() => setVisible(false)}
    >
      {children}
      {visible && (
        <span className={`${styles.tooltip} ${styles[position]}`} role="tooltip">
          <span className={styles.inner}>{text}</span>
        </span>
      )}
    </span>
  )
}
