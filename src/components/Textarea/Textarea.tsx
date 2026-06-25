import { cn } from '../../utils/cn'
import styles from './Textarea.module.css'

interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string
  error?: string
  hint?: string
}

export function Textarea({
  label,
  error,
  hint,
  className,
  disabled,
  id,
  rows = 4,
  ...props
}: TextareaProps) {
  const textareaId = id || label?.toLowerCase().replace(/\s+/g, '-')

  return (
    <div className={cn(styles.wrapper, disabled && styles.disabled)}>
      {label && (
        <label className={styles.label} htmlFor={textareaId}>
          {label}
        </label>
      )}

      <div className={cn(styles.wrap, error && styles.hasError)}>
        <textarea
          id={textareaId}
          className={styles.textarea}
          rows={rows}
          disabled={disabled}
          {...props}
        />
      </div>

      {error && <p className={styles.error}>{error}</p>}
      {hint && !error && <p className={styles.hint}>{hint}</p>}
    </div>
  )
}
