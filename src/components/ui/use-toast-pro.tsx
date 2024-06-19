import { ToastAction, ToastPosition } from '@/components/ui/toast'
import { useToast as useBaseToast } from '@/components/ui/use-toast'

type ToastLevel = 'debug' | 'info' | 'warning' | 'error' | 'success'

interface ShowToastOptions {
  title: string
  description: string
  level: ToastLevel
  position?: ToastPosition
}

export const useToastPro = () => {
  const { toast } = useBaseToast()

  const showToast = ({
    title,
    description,
    level,
    position = 'bottom-right'
  }: ShowToastOptions) => {
    toast({
      title,
      description,
      variant: level,
      action: <ToastAction altText='Close'>Close</ToastAction>,
      position
    })
  }

  return { showToast }
}
