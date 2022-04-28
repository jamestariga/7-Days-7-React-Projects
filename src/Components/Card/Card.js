import React from 'react'
import {
  CardContainer,
  TitleContainer,
  ImageContainer,
} from '../Styles/Card.styles'

const Card = (props) => {
  const { title, name, backdrop_path, poster_path } = props

  return (
    <>
      <CardContainer
        layout
        animate={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        <TitleContainer>
          {title ? <h2>{title}</h2> : <h2>{name}</h2>}
        </TitleContainer>
        <ImageContainer>
          {backdrop_path ? (
            <img
              src={`https://image.tmdb.org/t/p/w500${backdrop_path}`}
              alt=''
            />
          ) : (
            <img src={`https://image.tmdb.org/t/p/w500${poster_path}`} alt='' />
          )}
        </ImageContainer>
      </CardContainer>
    </>
  )
}

export default Card
