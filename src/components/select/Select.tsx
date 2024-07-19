import React, { useCallback, useEffect, useRef } from 'react'
import cn from 'classnames'
import styles from './style.module.scss'
import SVGCaretMini from '@icons/caretMiniIcon'

type ItemArray = {
  id: number
  value: string
}
interface SelectProps {
  isOpen: boolean
  itemArray?: Array<string> | Array<ItemArray>
  onClick: (value: boolean) => void
  selectedItem?: string
  changeSelectedItem: (value: string) => void
}

const Select: React.FC<SelectProps> = (props) => {
  const { isOpen, itemArray, selectedItem, changeSelectedItem, onClick } = props

  const ref = useRef<HTMLDivElement>(null)
  const [activeOption, setActiveOption] = React.useState<string>(selectedItem)

  const handleItemClick = (item: string | ItemArray) => {
    if (typeof item === 'string') {
      changeSelectedItem(item)
      setActiveOption(item)
    } else {
      changeSelectedItem(String(item.id))
    }
  }

  const handleClickOutside = useCallback(
    (e: MouseEvent) => {
      if (ref.current && e.target instanceof Node && ref.current.contains(e.target)) {
        return
      }
      onClick(false)
    },
    [onClick],
  )

  useEffect(() => {
    isOpen
      ? document.addEventListener('mousedown', handleClickOutside)
      : document.removeEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isOpen, handleClickOutside])

  return (
    <div ref={ref} className={styles.select}>
      <div className={styles.select__trigger} onClick={() => onClick(!isOpen)}>
        <span className={styles.select__trigger__value}>{selectedItem}</span>
        <SVGCaretMini />
      </div>
      {isOpen && (
        <div className={styles.select__content}>
          {itemArray.map((item: string | ItemArray, index: number) => (
            <div onClick={() => handleItemClick(item)} className={styles.select__item} key={index}>
              <span
                className={cn(
                  styles.select__item__value,
                  activeOption === item && styles['select__item__value--active'],
                )}
              >
                {typeof item === 'string' ? item : item.value}
              </span>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default Select
