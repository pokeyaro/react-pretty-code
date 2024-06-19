import React, { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle
} from '@/components/ui/dialog'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select'
import { Badge } from '@/components/ui/badge'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { DEFAULT_FILE_NAME } from '@/constants'
import { generateFilename } from './generateFilename'
import { useToastPro } from '@/components/ui/use-toast-pro'
import downloadFile from './downloadFile'
import { fileTypeList } from './config'
import type { SaveFileDialogBoxProps, FileExt } from './types'
import './index.scss'

const SaveFileDialogBox: React.FC<SaveFileDialogBoxProps> = ({
  open,
  onClose
}) => {
  const [filename, setFilename] = useState<string>(DEFAULT_FILE_NAME)
  const [fileExt, setFileExt] = useState<FileExt | undefined>(undefined)
  const { showToast } = useToastPro()

  useEffect(() => {
    if (open) {
      setFilename(DEFAULT_FILE_NAME)
      setFileExt(undefined)
    }
  }, [open])

  const handleDownload = async () => {
    const finalFilename = generateFilename(filename, fileExt)
    const { isOk, msg } = await downloadFile(finalFilename, fileExt)
    if (isOk) {
      if (msg) {
        showToast({
          title: 'success',
          description: msg,
          level: 'success',
          position: 'top-right'
        })
      }
    } else {
      showToast({
        title: 'error',
        description: msg,
        level: 'error',
        position: 'top-right'
      })
    }
    onClose()
  }

  const finalFilename = fileExt
    ? generateFilename(filename, fileExt)
    : 'unknown'

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className='sm:max-w-[425px]'>
        <DialogHeader>
          <DialogTitle>Save As...</DialogTitle>
          <DialogDescription>Choose format to save the page.</DialogDescription>
        </DialogHeader>
        <div className='grid gap-4 py-4'>
          <div className='grid grid-cols-4 items-center gap-4'>
            <Label htmlFor='filename' className='text-right'>
              File Name
            </Label>
            <Input
              className='col-span-3'
              id='filename'
              value={filename}
              onChange={(e) => setFilename(e.target.value)}
              placeholder='Maximum 12 characters'
            />
          </div>
          <div className='grid grid-cols-4 items-center gap-4'>
            <Label className='text-right' htmlFor='fileExt'>
              File Ext
            </Label>
            <Select onValueChange={(val) => setFileExt(val as FileExt)}>
              <SelectTrigger className='col-span-3' id='fileExt'>
                <SelectValue placeholder='Select a file type' />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  {fileTypeList.map(({ value, label, ext, Icon }) => (
                    <SelectItem key={value} value={value}>
                      <div className='flex items-center justify-start'>
                        <Icon className='mr-3 text-base font-normal' />
                        <span className='text-base font-normal'>
                          {label}&nbsp;
                          <code className='rounded-[6px] bg-slate-100 px-1 py-[2px] text-xs'>
                            ({ext})
                          </code>
                        </span>
                      </div>
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
        </div>
        <DialogFooter className='grid grid-cols-4 items-center gap-4'>
          <span className='text-right text-base font-medium'>Generated as</span>
          <div className='col-span-3 flex items-center justify-between'>
            <Badge
              variant='outline'
              className='text-right text-base font-normal'
            >
              {finalFilename}
            </Badge>
            <Button
              type='button'
              onClick={handleDownload}
              disabled={filename.length === 0 || fileExt === undefined}
            >
              Download
            </Button>
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

export default SaveFileDialogBox
