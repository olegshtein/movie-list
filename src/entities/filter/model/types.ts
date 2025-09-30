export type ViewFilterType = 'all' | 'favorites'

export type FilterPropsType = {
  viewFilter: ViewFilterType
  setViewFilter: (filter: ViewFilterType) => void
}
