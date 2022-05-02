import React from 'react'
import {
  ModalBackground,
  ModalContainer,
  ButtonContainer,
} from './Styles/Modal.styles'

const dropIn = {
  hidden: {
    y: '-100vh',
    opacity: 0,
  },
  visible: {
    y: '0',
    opacity: 1,
    transition: {
      duration: 0.1,
      type: 'spring',
      damping: 25,
      stiffness: 500,
    },
  },
  exit: {
    y: '100vh',
    opacity: 0,
  },
}

const Modal = ({ showModal, setShowModal }) => {
  const handleClick = () => {
    setShowModal(false)
  }

  return (
    <>
      <ModalBackground>
        {showModal && (
          <ModalContainer
            onClick={(e) => e.stopPropagation()}
            variants={dropIn}
            initial='hidden'
            animate='visible'
            exit='exit'
          >
            <ButtonContainer>
              <button onClick={handleClick}>X</button>
            </ButtonContainer>
            <h1>I hope you enjoyed this modal!✨🎉</h1>
          </ModalContainer>
        )}
      </ModalBackground>
    </>
  )
}

export default Modal
