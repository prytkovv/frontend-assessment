import React from 'react'
import { Box } from '@material-ui/core'
import styles from './style.module.scss'

interface ISwitcherProps {
  width: number
  height: number
  status: boolean
  callback: any
}

export const Switcher: React.FC<ISwitcherProps> = ({ width, height, status, callback }) => {
  return (
    <Box
      onClick={() => {
        callback()
      }}
      component='button'
      className={styles.switcher__container}
      sx={{
        width: `${width + 2}px`,
        height: `${height + 2}px`,
        justifyContent: status ? 'flex-end' : 'flex-start',
        bgcolor: status ? '#3862FA' : 'white',
        border: status ? 'none' : '2px solid #3862FA',
      }}
    >
      {height < 22 ? (
        <svg width='14' height='14' viewBox='0 0 14 14' fill='none' xmlns='http://www.w3.org/2000/svg'>
          <ellipse cx='6.99993' cy='7.00007' rx='6.82' ry='6.81818' fill={status ? 'white' : '#3862FA'} />
        </svg>
      ) : (
        <svg width='18' height='18' viewBox='0 0 18 18' fill='none' xmlns='http://www.w3.org/2000/svg'>
          <ellipse cx='9' cy='9' rx='9' ry='9' fill={status ? 'white' : '#3862FA'} />
        </svg>
      )}

      <Box className={styles.toggle__point} />
    </Box>
  )
}
