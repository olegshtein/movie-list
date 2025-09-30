import { create } from 'zustand'
import type { Store, ViewFilterType } from '@/shared/store/app/model/types'

export const useStore = create<Store>((set) => ({
  viewFilter: 'all',
  setFilter: (viewFilter: ViewFilterType) => set({ viewFilter }),
}))
