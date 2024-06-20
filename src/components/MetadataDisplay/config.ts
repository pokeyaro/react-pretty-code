import type { MetadataProps } from '@/types'

export const METADATA_PROPERTY_NAMES: Array<keyof MetadataProps> = [
  'title',
  'description',
  'filename',
  'author',
  'date',
  'tags'
]

export const defaultMetadata: MetadataProps = {
  uniqueKey: 'default-key',
  title: 'Untitled',
  description: 'No description available.',
  tags: ['No tags']
}
