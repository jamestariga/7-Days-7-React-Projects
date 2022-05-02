import React from 'react'
import { useState } from 'react'
import Modal from '../Modal/Modal'
import { MainContainer } from './Styles/Main.styles'
import { AnimatePresence } from 'framer-motion'

const Main = () => {
  const [showModal, setShowModal] = useState(false)

  return (
    <>
      <MainContainer>
        <h1>Modal with Framer Motion Animation</h1>
        <button onClick={() => setShowModal(true)}>Open Modal</button>
      </MainContainer>
      <AnimatePresence
        initial={false}
        exitBeforeEnter={true}
        onExitComplete={() => null}
      >
        {showModal && (
          <Modal showModal={showModal} setShowModal={setShowModal} />
        )}
      </AnimatePresence>
    </>
  )
}

export default Main
