import type { Movie } from './types.ts'

export const movies: Movie[] = [
  {
    id: crypto.randomUUID(),
    name: 'Побег из Шоушенка',
    poster: 'src/shared/assets/images/posters/shawshank-redemption.webp',
    year: 1994,
    isFavorite: false,
  },
  {
    id: crypto.randomUUID(),
    name: 'Крёстный отец',
    poster: 'src/shared/assets/images/posters/godfather.webp',
    year: 1972,
    isFavorite: false,
  },
  {
    id: crypto.randomUUID(),
    name: 'Тёмный рыцарь',
    poster: 'src/shared/assets/images/posters/dark-knight.webp',
    year: 2008,
    isFavorite: false,
  },
  {
    id: crypto.randomUUID(),
    name: 'Крёстный отец 2',
    poster: 'src/shared/assets/images/posters/godfather-2.webp',
    year: 1974,
    isFavorite: false,
  },
  {
    id: crypto.randomUUID(),
    name: '12 разгневанных мужчин',
    poster: 'src/shared/assets/images/posters/twelve-angry-men.webp',
    year: 1957,
    isFavorite: false,
  },
  {
    id: crypto.randomUUID(),
    name: 'Властелин колец: Возвращение короля',
    poster: 'src/shared/assets/images/posters/lotr-return.webp',
    year: 2003,
    isFavorite: false,
  },
  {
    id: crypto.randomUUID(),
    name: 'Список Шиндлера',
    poster: 'src/shared/assets/images/posters/schindler-list.webp',
    year: 1993,
    isFavorite: false,
  },
  {
    id: crypto.randomUUID(),
    name: 'Криминальное чтиво',
    poster: 'src/shared/assets/images/posters/pulp-fiction.webp',
    year: 1994,
    isFavorite: false,
  },
  {
    id: crypto.randomUUID(),
    name: 'Властелин колец: Братство Кольца',
    poster: 'src/shared/assets/images/posters/lotr-fellowship.webp',
    year: 2001,
    isFavorite: false,
  },
  {
    id: crypto.randomUUID(),
    name: 'Форрест Гамп',
    poster: 'src/shared/assets/images/posters/forrest-gump.webp',
    year: 1994,
    isFavorite: false,
  },
]
