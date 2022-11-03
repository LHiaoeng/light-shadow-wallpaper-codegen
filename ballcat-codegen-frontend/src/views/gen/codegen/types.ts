import type { FileEntry } from '@/api/gen/template-entry/types'

export interface GenerateStepInstance {
  enter?: (...args: any[]) => void
  validate?: () => Promise<any>
  next?: () => void
}

export interface GenerateModalInstance {
  open: (dsName: string, tableNames: string[]) => void
  close: () => void
}

export interface PreviewModalInstance {
  open: (fileEntryList?: FileEntry[]) => void
}
