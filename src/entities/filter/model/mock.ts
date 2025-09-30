import type { FieldType } from '@/entities/movie'

export const filterFields: FieldType[] = [
  {
    id: crypto.randomUUID(),
    label: 'Все фильмы',
    value: 'all',
  },
  {
    id: crypto.randomUUID(),
    label: 'Только избранные',
    value: 'favorites',
  },
]
