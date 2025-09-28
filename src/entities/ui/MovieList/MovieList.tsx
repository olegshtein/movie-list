import { movies as moviesMock } from '@/entities/movie/model/mock.ts'
import type { Movie as MovieType } from '@/entities/movie'
import Movie from '@/entities/ui/Movie'
import styles from './MovieList.module.scss'

const MovieList = () => {
  let lcMovies = localStorage.getItem('movies')

  if (!lcMovies) {
    lcMovies = JSON.stringify(moviesMock)
    localStorage.setItem('movies', lcMovies)
  }

  const movies: MovieType[] = JSON.parse(lcMovies)

  return (
    <ul className={styles.movieList}>
      {movies.map((movie) => (
        <li key={movie.id}>
          <Movie {...movie} />
        </li>
      ))}
    </ul>
  )
}

export default MovieList
