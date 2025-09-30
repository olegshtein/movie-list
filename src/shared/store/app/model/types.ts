export type ViewFilterType = 'all' | 'favorites'

export type Store = {
  viewFilter: ViewFilterType
  setFilter: (filter: ViewFilterType) => void
}
