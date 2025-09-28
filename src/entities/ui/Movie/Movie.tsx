import clsx from 'clsx'
import { useState } from 'react'
import HeartIcon from '@/shared/assets/icons/heart.svg?react'
import type { Movie as MovieType } from '@/entities/movie'
import styles from './Movie.module.scss'

const Movie = (props: MovieType) => {
  const { name, poster, year } = props

  const [isFavorite, setIsFavorite] = useState(false)

  return (
    <div className={clsx(styles.movie, isFavorite && styles.isFavorite)}>
      <a href="" target="_blank">
        <img
          width={600}
          height={900}
          src={poster}
          alt={`${name} (${year})`}
        />
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