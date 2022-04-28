import styled from 'styled-components'
import { motion } from 'framer-motion'

export const CardContainer = styled(motion.div)`
  img {
    width: 100%;
    height: 30vh;
    object-fit: cover;
    transition: all 0.3s ease-in-out;
  }

  img:hover {
    transform: scale(1.05);
  }
`

export const ImageContainer = styled(motion.div)`
  overflow: hidden;
  height: 30vh;
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.3);
  border-radius: 1.5rem;
  margin-bottom: 1rem;
`

export const TitleContainer = styled(motion.div)`
  min-height: 3.5rem;

  h2 {
    font-size: 1rem;
    text-align: center;
  }
`
