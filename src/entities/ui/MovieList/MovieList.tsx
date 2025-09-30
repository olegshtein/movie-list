import { movies as moviesMock } from '@/entities/movie/model/mock'
import type { MovieType } from '@/entities/movie'
import type { ViewFilterType } from '@/entities/filter'
import Movie from '@/entities/ui/Movie'
import { LOCAL_STORAGE_KEYS } from '@/shared/constants/constants'
import styles from './MovieList.module.scss'

const MovieList = (props: { viewFilter: ViewFilterType }) => {
  const { viewFilter } = props

  let lcMovies = localStorage.getItem(LOCAL_STORAGE_KEYS.MOVIES)

  if (!lcMovies) {
    lcMovies = JSON.stringify(moviesMock)
    localStorage.setItem(LOCAL_STORAGE_KEYS.MOVIES, lcMovies)
  }

  const allMovies: MovieType[] = JSON.parse(lcMovies)
  let filteredMovies = null
  if (viewFilter === 'favorites') {
    filteredMovies = allMovies.filter(({ isFavorite }) => isFavorite)
  }

  return (
    <ul className={styles.movieList}>
      {(filteredMovies ?? allMovies).map((movie) => (
        <li key={movie.id}>
          <Movie {...movie} />
        </li>
      ))}
    </ul>
  )
}

export default MovieList
