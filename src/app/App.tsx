import { useState } from 'react'
import MovieList from '@/entities/ui/MovieList'
import Filter from '@/entities/ui/Filter'
import type { ViewFilterType } from '@/entities/filter'
import './styles'

const App = () => {
  const [viewFilter, setViewFilter] = useState('all' as ViewFilterType)

  return (
    <>
      <Filter viewFilter={viewFilter} setViewFilter={setViewFilter} />
      <MovieList viewFilter={viewFilter} />
    </>
  )
}

export default App
