import React, { FC, useCallback, useState } from 'react'
import type { Moment } from 'moment'
import moment from 'moment'
import 'moment/locale/ru'
import 'antd/dist/antd.css'
import { DatePicker } from 'antd'
import localeEn from 'antd/es/date-picker/locale/en_US'
import { IntervalDate } from '@components/range-picker/interval-date/IntervalDate'
import styles from './style.module.scss'

interface IRangePickerProps {
  handleChange: (dateString: Moment[]) => void
  handleOnlyClick?: boolean
  classPicker?: string
  textButton?: string
  children?: React.ReactNode
}

export const FORMAT = 'DD.MM.YYYY'

export const RangePicker: FC<IRangePickerProps> = (props) => {
  const buttonText = 'Select'
  const { handleChange, handleOnlyClick = true, classPicker, textButton = buttonText, children } = props
  const { RangePicker } = DatePicker
  const [value, setValue] = useState<[Moment, Moment] | null>(null)
  const chooseToday = useCallback(() => setValue(() => [moment().startOf('day'), moment()]), [])
  const chooseWeek = useCallback(() => setValue(() => [moment().startOf('week'), moment()]), [])
  const chooseMonth = useCallback(() => setValue(() => [moment().startOf('month'), moment()]), [])
  const resetValue = useCallback(() => setValue(() => null), [])

  return (
    <>
      <RangePicker
        locale={localeEn}
        popupStyle={{
          zIndex: 16_000,
        }}
        value={value}
        onChange={(payload) => {
          if (!handleOnlyClick) {
            handleChange(payload)
          }
          setValue(() => payload)
        }}
        placement='bottomLeft'
        format={FORMAT}
      />
      <IntervalDate
        handleToday={chooseToday}
        handleWeek={chooseWeek}
        handleMonth={chooseMonth}
        handleReset={resetValue}
      />
      {children}
      <button
        className={styles.button}
        style={{
          opacity: value ? '1' : '.5',
          cursor: value ? 'pointer' : 'default',
        }}
        disabled={!value}
        onClick={() => {
          if (value) {
            handleChange(value)
          }
        }}
      >
        {textButton}
      </button>
    </>
  )
}
