import movies from '@/entities/movie/model/mock.ts'
import Movie from '@/entities/ui/Movie'
import styles from './MovieList.module.scss'

const MovieList = () => {
  return (
    <ul className={styles.movieList}>
      {movies.map(({ name, poster, year }) => (
        <li key={crypto.randomUUID()}>
          <Movie name={name} poster={poster} year={year} />
        </li>
      ))}
    </ul>
  )
}

export default MovieList
