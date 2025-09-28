import { useEffect, useState } from 'react'
import clsx from 'clsx'
import type { Movie as MovieType } from '@/entities/movie'
import HeartIcon from '@/shared/assets/icons/heart.svg?react'
import styles from './Movie.module.scss'

const Movie = (props: MovieType) => {
  const { id, name, poster, year, isFavorite: initialIsFavorite } = props

  const [isFavorite, setIsFavorite] = useState(initialIsFavorite)

  useEffect(() => {
    const movies: MovieType[] = JSON.parse(
      localStorage.getItem('movies') as string,
    )
    const newMovies = movies.map((movie) => {
      if (movie.id === id) {
        return { ...movie, isFavorite }
      }

      return movie
    })

    localStorage.setItem('movies', JSON.stringify(newMovies))
  }, [isFavorite])

  return (
    <div className={clsx(styles.movie, isFavorite && styles.isFavorite)}>
      <a href="" target="_blank">
        <img width={600} height={900} src={poster} alt={`${name} (${year})`} />
      </a>
      <button
        className={styles.heartButton}
        type="button"
        onClick={() => setIsFavorite(!isFavorite)}
      >
        <HeartIcon className={styles.heartIcon} />
      </button>
    </div>
  )
}

export default Movie
