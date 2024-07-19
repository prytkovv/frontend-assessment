import React from 'react'
import style from './style.module.scss'

interface IIntervalDateComponent {
  handleToday: () => any
  handleReset: () => any
  handleWeek: () => any
  handleMonth: () => any
}

export const IntervalDate: React.FC<IIntervalDateComponent> = (props) => {
  const { handleToday, handleWeek, handleMonth, handleReset } = props
  const todayText = 'Today'
  const weekText = 'Current week'
  const monthText = 'Current month'
  const resetText = 'Reset'

  return (
    <div className={style.container}>
      <ul className={style.list}>
        <li className={style.item}>
          <button onClick={handleToday}>{todayText}</button>
        </li>
        <li className={style.item}>
          <button onClick={handleWeek}>{weekText}</button>
        </li>
        <li className={style.item}>
          <button onClick={handleMonth}>{monthText}</button>
        </li>
        <li className={style.item}>
          <button onClick={handleReset} className={style.button}>
            <span>{resetText}</span>
            <svg
              style={{
                maxWidth: '15px',
                maxHeight: '14px',
              }}
              width='15'
              height='14'
              viewBox='0 0 15 14'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M0.666652 1.17704C0.998023 1.17704 1.26665 1.44567 1.26665 1.77704V5.17704H4.66665C4.99802 5.17704 5.26665 5.44567 5.26665 5.77704C5.26665 6.10842 4.99802 6.37704 4.66665 6.37704H0.666652C0.335281 6.37704 0.0666522 6.10842 0.0666522 5.77704V1.77704C0.0666522 1.44567 0.335281 1.17704 0.666652 1.17704Z'
                fill='#626E99'
              />
              <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M7.07951 0.580979C8.49648 0.38162 9.93985 0.648166 11.1922 1.34045C12.4445 2.03274 13.4379 3.11327 14.0227 4.41923C14.6075 5.7252 14.752 7.18584 14.4345 8.58109C14.117 9.97634 13.3546 11.2306 12.2623 12.1549C11.17 13.0792 9.80683 13.6235 8.37827 13.7057C6.94971 13.7879 5.53313 13.4036 4.34196 12.6108C3.15079 11.8179 2.24957 10.6594 1.77408 9.30976C1.66397 8.99722 1.82807 8.65459 2.14061 8.54448C2.45315 8.43437 2.79578 8.59847 2.90589 8.91101C3.29493 10.0152 4.03229 10.9631 5.00688 11.6118C5.98148 12.2606 7.1405 12.575 8.30932 12.5077C9.47814 12.4404 10.5934 11.9951 11.4872 11.2389C12.3809 10.4826 13.0046 9.45639 13.2644 8.31482C13.5242 7.17325 13.4059 5.97818 12.9275 4.90967C12.449 3.84115 11.6362 2.95708 10.6116 2.39066C9.58698 1.82425 8.40603 1.60616 7.2467 1.76928C6.08736 1.93239 5.01244 2.46786 4.18389 3.29501C4.17961 3.29928 4.17526 3.30349 4.17085 3.30764L1.07752 6.2143C0.836031 6.44122 0.456315 6.4294 0.2294 6.18792C0.00248537 5.94643 0.0142987 5.56671 0.255786 5.3398L3.34266 2.4392C4.35444 1.43197 5.66561 0.779907 7.07951 0.580979Z'
                fill='#626E99'
              />
            </svg>
          </button>
        </li>
      </ul>
    </div>
  )
}
