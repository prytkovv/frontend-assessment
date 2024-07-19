import React from 'react'
import styles from './style.module.scss'

export const Wrapper = ({ children }): React.ReactElement => {
  return (
    <section className={styles.main__wrapper}>
      <div
        style={{
          width: '100%',
          overflow: 'hidden',
        }}
        className={styles.components__wrapper}
      >
        {children}
      </div>
    </section>
  )
}
