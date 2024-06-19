import type { MetadataProps } from '@/types'

export type MetadataWrapperProps = Partial<Omit<MetadataProps, 'title'>> & {
  title?: string
}

export interface MetadataDisplayProps {
  metadata?: MetadataWrapperProps
}
