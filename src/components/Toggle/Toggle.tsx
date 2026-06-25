import { cn } from '../../utils/cn'
import styles from './Toggle.module.css'

interface ToggleProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> {
  label: string
}

export function Toggle({ label, disabled, className, id, ...props }: ToggleProps) {
  const toggleId = id || label?.toLowerCase().replace(/\s+/g, '-')

  return (
    <div className={cn(styles.wrapper, disabled && styles.disabled)}>
      <input
        id={toggleId}
        type="checkbox"
        className={styles.input}
        disabled={disabled}
        {...props}
      />
      <label htmlFor={toggleId} className={styles.label}>
        <span className={styles.track}>
          <span className={styles.thumb} />
        </span>
        <span className={styles.text}>{label}</span>
      </label>
    </div>
  )
}
