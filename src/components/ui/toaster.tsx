import { useMemo } from 'react'
import {
  Toast,
  ToastClose,
  ToastDescription,
  ToastProvider,
  ToastTitle,
  ToastViewport,
  ToastPosition
} from '@/components/ui/toast'
import { useToast } from '@/components/ui/use-toast'

export function Toaster() {
  const { toasts } = useToast()

  const positions = useMemo(() => {
    const posSet = new Set<ToastPosition>()
    toasts.forEach((toast) => {
      if (toast.position) {
        posSet.add(toast.position)
      }
    })
    return posSet
  }, [toasts])

  return (
    <ToastProvider>
      {Array.from(positions).map((position) => (
        <ToastViewport key={position} position={position} />
      ))}
      {toasts.map(function ({ id, title, description, action, ...props }) {
        return (
          <Toast key={id} {...props}>
            <div className='grid gap-1'>
              {title && <ToastTitle>{title}</ToastTitle>}
              {description && (
                <ToastDescription>{description}</ToastDescription>
              )}
            </div>
            {action}
            <ToastClose />
          </Toast>
        )
      })}
    </ToastProvider>
  )
}
