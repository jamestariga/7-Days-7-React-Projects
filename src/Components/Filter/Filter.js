import { useEffect } from 'react'
import { FilterContainer } from '../Styles/Filter.styles'
import Genre from './Genre'

const Filter = (props) => {
  const { data, setFiltered, activeGenre, setActiveGenre } = props

  useEffect(() => {
    if (activeGenre === 0) {
      setFiltered(data)
      return
    }
    const filtered = data.filter((movie) => {
      return movie.genre_ids.includes(activeGenre)
    })
    setFiltered(filtered)
  }, [activeGenre, data, setFiltered])

  return (
    <FilterContainer>
      <select onClick={(e) => setActiveGenre(parseInt(e.target.value))}>
        {Genre.map((genre, id) => {
          return (
            <option key={id} value={genre.value}>
              {genre.title}
            </option>
          )
        })}
      </select>
    </FilterContainer>
  )
}

export default Filter
