import styled from 'styled-components'
import { motion } from 'framer-motion'

export const AnimateContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 10rem;
  color: #333;
  height: 100vh;

  span {
    color: #333;
    font-size: 1.5rem;
    font-weight: bold;
  }
`

export const AnimateSpan = styled(motion.span)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 3rem;
  height: 3rem;
  border: 0.5rem solid #e9e9e9;
  border-top: 0.5rem solid #3498db;
  border-radius: 50%;
`
