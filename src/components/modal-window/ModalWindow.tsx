import React from 'react'
import { Modal, Box, IconButton } from '@material-ui/core'
import Styles from './style.module.scss'

interface IModalProps {
  open: boolean
  handleClose: () => void
  children: React.ReactNode
}

export const ModalWindow: React.FC<IModalProps> = (props) => {
  const { open, handleClose, children } = props

  return (
    <Modal
      onClick={(ev) => {
        ev.stopPropagation()
      }}
      open={open}
      onClose={handleClose}
      aria-labelledby='modal-modal-title'
      aria-describedby='modal-modal-description'
    >
      <Box className={Styles.modal}>
        {children}
        <IconButton
          style={{
            position: 'absolute',
            top: '0',
            right: '0',
          }}
          onClick={handleClose}
        />
      </Box>
    </Modal>
  )
}
