import React, { useState } from 'react'
import {
  Bot,
  User,
  Tags,
  FileCode2,
  BadgeInfo,
  CalendarDays,
  ShieldQuestion
} from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger
} from '@/components/ui/hover-card'
import getIconForFileType from '@/components/SelectFileType/utils'
import { formatDate } from '@/lib/datetime'
import { defaultMetadata, METADATA_PROPERTY_NAMES } from './config'
import type { MetadataDisplayProps, MetadataWrapperProps } from './types'
import './index.scss'

const MetadataDisplay: React.FC<MetadataDisplayProps> = ({
  metadata = defaultMetadata
}) => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const iconMapping: Record<string, JSX.Element> = {
    filename: <FileCode2 className='h-5 w-5' />,
    author: <User className='h-5 w-5' />,
    date: <CalendarDays className='h-5 w-5' />,
    tags: <Tags className='h-5 w-5' />
  }

  const displayedProperties = (
    METADATA_PROPERTY_NAMES as Array<keyof MetadataWrapperProps>
  ).filter((prop) => metadata[prop] !== undefined)

  const handleClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % displayedProperties.length)
  }

  const currentProperty = displayedProperties[currentIndex]
  const currentValue = metadata[currentProperty]

  const currentIcon =
    currentProperty === 'title' || currentProperty === 'description' ? (
      <BadgeInfo className='h-5 w-5' />
    ) : (
      iconMapping[currentProperty as string] || (
        <ShieldQuestion className='h-5 w-5' />
      )
    )

  const titleBar = (
    <div
      className='flex w-auto flex-shrink-0 cursor-pointer items-center justify-center gap-2 transition-opacity duration-200 ease-in-out hover:opacity-80'
      onClick={handleClick}
    >
      {currentValue ? (
        <>
          {currentIcon}
          {currentProperty === 'description' ? (
            <div
              className={`scroll-container ${currentValue === defaultMetadata.description ? '' : 'scroll'}`}
            >
              <div
                className={`text-lg ${currentValue === defaultMetadata.description ? '' : 'scroll-text'}`}
              >
                {currentValue}
              </div>
            </div>
          ) : currentProperty === 'tags' ? (
            <div className='tags-container'>
              {Array.isArray(currentValue) &&
                currentValue.map((tag, index) => (
                  <Badge key={index} className='text-xs'>
                    {tag}
                  </Badge>
                ))}
            </div>
          ) : (
            <div className='text-lg'>{currentValue}</div>
          )}
        </>
      ) : (
        <p className='flex items-center justify-center gap-2 text-lg'>
          <ShieldQuestion className='h-5 w-5' />
          Untitled
        </p>
      )}
    </div>
  )

  const iconSrc = getIconForFileType(metadata.filename || '')

  return (
    <HoverCard>
      <HoverCardTrigger>{titleBar}</HoverCardTrigger>
      <HoverCardContent className='z-[100] w-80'>
        <div className='flex justify-between space-x-4'>
          <Avatar>
            {iconSrc ? (
              <AvatarImage src={iconSrc} />
            ) : (
              <AvatarFallback>
                <Bot />
              </AvatarFallback>
            )}
          </Avatar>
          <div className='space-y-1'>
            <h4 className='text-sm font-semibold'>{metadata.title}</h4>
            <p className='text-sm'>
              {metadata.description || 'No description provided'}
            </p>
            <div className='flex items-center gap-4 pt-2'>
              <span className='flex gap-2 text-xs text-muted-foreground'>
                <CalendarDays className='h-4 w-4 opacity-70' />
                {metadata.date || formatDate(new Date()).slice(0, 12)}
              </span>
              <span className='flex gap-2 text-xs text-muted-foreground'>
                <User className='h-4 w-4 opacity-70' />
                {metadata.author || 'Anonymous'}
              </span>
            </div>
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  )
}

export default MetadataDisplay
