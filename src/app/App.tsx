import { Routes, Route } from 'react-router-dom'
import Home from '@/pages/Home'
import MovieCard from '@/pages/MovieCard'
import './styles'

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/movies/:id" element={<MovieCard />} />
    </Routes>
  )
}

export default App
