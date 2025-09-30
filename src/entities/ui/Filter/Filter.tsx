import { filterFields } from '@/entities/filter/model/mock'
import { useStore } from '@/shared/store/app/model/store.ts'
import type { ViewFilterType } from '@/shared/store/app/model/types'
import styles from './Filter.module.scss'

const Filter = () => {
  const { viewFilter, setFilter } = useStore()

  return (
    <form className={styles.filterForm}>
      {filterFields.map(({ id, label, value }) => (
        <label className={styles.filterLabel} htmlFor="view-filter" key={id}>
          {label}
          <input
            className={styles.filterInput}
            type="radio"
            name="view-filter"
            value={value}
            checked={value === viewFilter}
            onChange={(event) =>
              setFilter(event.target.value as ViewFilterType)
            }
          />
        </label>
      ))}
    </form>
  )
}

export default Filter
