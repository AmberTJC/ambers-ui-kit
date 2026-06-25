import { cn } from '../../utils/cn'
import styles from './Input.module.css'

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string
  error?: string
  hint?: string
  icon?: React.ReactNode
}

export function Input({
  label,
  error,
  hint,
  icon,
  className,
  disabled,
  id,
  ...props
}: InputProps) {
  const inputId = id || label?.toLowerCase().replace(/\s+/g, '-')

  return (
    <div className={cn(styles.wrapper, disabled && styles.disabled)}>
      {label && (
        <label className={styles.label} htmlFor={inputId}>
          {label}
        </label>
      )}

      <div className={cn(styles.inputWrap, error && styles.hasError)}>
        {icon && <span className={styles.icon}>{icon}</span>}
        <input
          id={inputId}
          className={cn(styles.input, icon ? styles.hasIcon : undefined)}
          disabled={disabled}
          {...props}
        />
      </div>

      {error && <p className={styles.error}>{error}</p>}
      {hint && !error && <p className={styles.hint}>{hint}</p>}
    </div>
  )
}
