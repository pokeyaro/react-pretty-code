import React, { useState, useEffect } from 'react'
import clsx from 'clsx'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select'
import { fileTypeList } from './config'
import type { Category, SelectFileTypeProps } from './types'
import type { Lang } from '@/types'
import { truncateText } from '@/lib/truncate'
import { useFileStore } from '@/stores/useFileStore'

const SelectFileType: React.FC<SelectFileTypeProps> = ({
  fileType,
  className,
  backgroundColor,
  onFileTypeChange
}) => {
  const [selectedValue, setSelectedValue] = useState<string>('')
  const [state, setState] = useState({
    isSelected: false,
    title: '',
    truncatedTitle: '',
    backgroundColor: backgroundColor ?? ''
  })

  const {
    actions: { setLabel, setExt }
  } = useFileStore()

  useEffect(() => {
    if (fileType) {
      const categoryKeys = Object.keys(fileTypeList) as Category[]
      for (const category of categoryKeys) {
        const fileTypeOption = fileTypeList[category].find(
          (ft) => ft.value === fileType
        )
        if (fileTypeOption) {
          setSelectedValue(fileType)
          setState({
            isSelected: false,
            title: fileTypeOption.label,
            truncatedTitle: truncateText(fileTypeOption.label, 10),
            backgroundColor: backgroundColor ?? ''
          })
          break
        }
      }
    }
  }, [fileType, backgroundColor])

  const handleValueChange = (value: string) => {
    const categoryKeys = Object.keys(fileTypeList) as Category[]
    for (const category of categoryKeys) {
      const fileTypeOption = fileTypeList[category].find(
        (ft) => ft.value === value
      )
      if (fileTypeOption) {
        setLabel(fileTypeOption.label)
        setExt(fileTypeOption.ext.length > 0 ? fileTypeOption.ext[0] : '')

        setSelectedValue(value)
        setState({
          isSelected: false,
          title: fileTypeOption.label,
          truncatedTitle: truncateText(fileTypeOption.label, 10),
          backgroundColor: `#${Math.floor(Math.random() * 16777215).toString(16)}`
        })

        onFileTypeChange && onFileTypeChange(fileTypeOption.value as Lang)
        break
      }
    }
  }

  const handleOpenChange = (isOpen: boolean) => {
    setState((prevState) => ({ ...prevState, isSelected: isOpen }))
  }

  return (
    <Select
      value={selectedValue}
      onValueChange={handleValueChange}
      onOpenChange={handleOpenChange}
    >
      <SelectTrigger
        className={clsx(
          `bg-[${state.backgroundColor}] transition-all duration-500 ease-in-out`,
          state.isSelected ? 'w-[180px]' : 'w-auto',
          className
        )}
        title={state.title}
      >
        <SelectValue>{state.truncatedTitle}</SelectValue>
      </SelectTrigger>
      <SelectContent>
        {(Object.keys(fileTypeList) as Category[]).map((category) => (
          <SelectGroup key={category}>
            <SelectLabel className='text-gray-400'>{category}</SelectLabel>
            {fileTypeList[category].map((fileType) => (
              <SelectItem key={fileType.value} value={fileType.value}>
                <div className='flex items-center justify-between gap-2'>
                  <img
                    src={fileType.icon}
                    alt={`${fileType.label} icon`}
                    className='inline-block h-4 w-4'
                  />
                  <span className='text-sm font-medium text-gray-800'>
                    {fileType.label}&nbsp;
                    <code className='rounded-sm bg-slate-200 text-xs font-light'>
                      {fileType.ext.length > 0
                        ? fileType.ext[0]
                        : fileType.file}
                    </code>
                  </span>
                </div>
              </SelectItem>
            ))}
          </SelectGroup>
        ))}
      </SelectContent>
    </Select>
  )
}

export default SelectFileType
