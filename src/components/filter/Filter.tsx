import React, { useContext } from 'react'
import { RangePicker } from '@components/range-picker/RangePicker'
import { format } from 'date-fns'
import FilterContext from './FilterContext'
import styles from './style.module.scss'
import moment from 'moment'

export const Filter = ({ callback }) => {
  const titleText = 'Search'
  const subTitleText = 'Select period'
  const applyFilterText = 'Apply filter'
  const { setFilter } = useContext(FilterContext)

  return (
    <>
      <h2 className={styles.title}>{titleText}</h2>
      <h4 className={styles.subtitle}>{subTitleText}</h4>
      <RangePicker
        textButton={applyFilterText}
        handleChange={(dateInterval) => {
          const date0 = moment()
            .set({
              year: dateInterval[0].year(),
              month: dateInterval[0].month(),
              date: dateInterval[0].date(),
            })
            .toDate()
          const date1 = moment()
            .set({
              year: dateInterval[1].year(),
              month: dateInterval[1].month(),
              date: dateInterval[1].date(),
            })
            .toDate()
          const filter = {
            start_date: format(date0, 'yyyy-MM-dd'),
            end_date: format(date1, 'yyyy-MM-dd'),
          }
          setFilter(filter)
          callback()
        }}
        handleOnlyClick
      />
    </>
  )
}
