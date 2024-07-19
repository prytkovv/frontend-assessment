import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import styles from './style.module.scss'

export const Header = (props) => {
  const { path } = props
  const [show, toggleShow] = useState(false)
  const [title, setTitle] = useState('')
  const location = useLocation()

  useEffect(() => {
    toggleShow(() => !(location.pathname === '/' || location.pathname === '/logout'))
    setTitle((prevValue) => 'Location')
  }, [location])

  return (
    <>
      {show ? (
        <header className={styles.header}>
          {path !== undefined ? path : <h1 className={styles.header__title}>{title}</h1>}
        </header>
      ) : null}
    </>
  )
}
