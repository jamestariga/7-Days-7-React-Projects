import useFetch from '../Hooks/useFetch'
import Card from '../Card/Card'
import {
  LayoutContainer,
  LayoutWrapper,
  TitleContainer,
} from '../Styles/Layout.styles'
import { AnimateContainer, AnimateSpan } from '../Styles/Animation.styles'
import Filter from '../Filter/Filter'
import { spinTransition } from './Animation'
import { AnimatePresence } from 'framer-motion'

const Movies = () => {
  const [
    data,
    filtered,
    { setActiveGenre, setFiltered, activeGenre, loading, error },
  ] = useFetch('tv')

  if (loading) {
    return (
      <AnimatePresence>
        <AnimateContainer>
          <AnimateSpan animate={{ rotate: 360 }} transition={spinTransition} />
          <span>Loading...</span>
        </AnimateContainer>
      </AnimatePresence>
    )
  }

  if (error) {
    return (
      <AnimatePresence>
        <AnimateContainer>
          <AnimateSpan animate={{ rotate: 360 }} transition={spinTransition} />
          <span>Error...</span>
        </AnimateContainer>
      </AnimatePresence>
    )
  }

  return (
    <>
      <LayoutContainer>
        <TitleContainer>
          <h3>TV Shows</h3>
        </TitleContainer>
        <Filter
          data={data}
          setFiltered={setFiltered}
          activeGenre={activeGenre}
          setActiveGenre={setActiveGenre}
        />
        <LayoutWrapper layout animate={{ opacity: 1 }} initial={{ opacity: 0 }}>
          <AnimatePresence>
            {filtered.map((res) => {
              return (
                <div key={res.id}>
                  <Card {...res} />
                </div>
              )
            })}
          </AnimatePresence>
        </LayoutWrapper>
      </LayoutContainer>
    </>
  )
}

export default Movies
