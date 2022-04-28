import styled from 'styled-components'
import { motion } from 'framer-motion'

export const LayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
`

export const LayoutWrapper = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-column-gap: 2rem;
  margin: 0 2rem;
  padding-bottom: 3rem;
`

export const TitleContainer = styled.div`
  padding-top: 2rem;
  margin: 0 2rem;
  font-size: 2rem;

  h3 {
    margin: 0;
  }
`
