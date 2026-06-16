type ToastType = 'success' | 'error' | 'info'
type ToastListener = (toast: { id: string; type: ToastType; message: string }) => void
let listeners: ToastListener[] = []
let id = 0

export const toast = {
  success: (message: string) => emit('success', message),
  error: (message: string) => emit('error', message),
  info: (message: string) => emit('info', message),
  subscribe: (fn: ToastListener) => { listeners.push(fn); return () => { listeners = listeners.filter(l => l !== fn) } },
}

function emit(type: ToastType, message: string) {
  listeners.forEach(fn => fn({ id: String(++id), type, message }))
}
