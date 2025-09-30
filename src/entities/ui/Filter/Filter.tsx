import { filterFields } from '@/entities/filter/model/mock'
import type { FilterPropsType, ViewFilterType } from '@/entities/filter'
import styles from './Filter.module.scss'

const Filter = (props: FilterPropsType) => {
  const { viewFilter, setViewFilter } = props

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
              setViewFilter(event.target.value as ViewFilterType)
            }
          />
        </label>
      ))}
    </form>
  )
}

export default Filter
