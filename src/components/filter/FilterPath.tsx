import React, { useState } from 'react'
import SVGFilterHeader from '@icons/filterSmall'
import SVGCaret from '@icons/caretIcon'
import { ModalWindow } from '@components/modal-window/ModalWindow'
import { Filter } from './Filter'
import styles from './style.module.scss'

export const FilterPath = () => {
  const filterText = 'FILTER'
  const [openModalSearch, setOpenModalSearch] = useState<boolean>(false)

  return (
    <div className={styles.path}>
      <div
        onClick={() => {
          setOpenModalSearch(() => true)
        }}
        className={styles.path__filter}
      >
        <SVGFilterHeader />
        <div className={styles.header__title}>{filterText}</div>
        <SVGCaret />
      </div>
      <ModalWindow
        handleClose={() => {
          if (document.querySelector('.ant-picker-dropdown-hidden')) {
            setOpenModalSearch(() => false)
          }
          if (!document.querySelector('div[aria-labelledby="modal-modal-title"]+div')) {
            setOpenModalSearch(() => false)
          }
        }}
        open={openModalSearch}
      >
        <Filter
          callback={() => {
            setOpenModalSearch(() => false)
          }}
        />
      </ModalWindow>
    </div>
  )
}
