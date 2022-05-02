import styled from 'styled-components'
import { motion } from 'framer-motion'

export const ModalBackground = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10;
`

export const ModalContainer = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: clamp(50%, 600px, 90%);
  height: min(50%, 300px);
  background: #fafafa;
  box-shadow: rgba(0, 0, 0, 0.5) 0px 5px 15px;
  z-index: 1;
  border-radius: 2rem;
  padding: 1rem;
  margin: 2rem;

  h1 {
    font-size: 2rem;
    font-weight: bold;
    margin-bottom: 1rem;
    color: #333;
    height: 100%;
  }
`

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;

  button {
    border: none !important;
    padding: 0.5rem;
    font-size: 2rem !important;
    font-weight: bold;
    color: #333;
    background: transparent;
    margin: 0;
  }
`
