import movies from '@/entities/movie/model/mock.ts'
import styles from './MovieList.module.scss'

const MovieList = () => {
  return (
    <ul className={styles.movieList}>
      {movies.map(({ name, poster, year }) => (
        <li className={styles.movieListItem} key={crypto.randomUUID()}>
          <a href="" target="_blank">
            <img
              width={600}
              height={900}
              src={poster}
              alt={`${name} (${year})`}
            />
          </a>
        </li>
      ))}
    </ul>
  )
}

export default MovieList