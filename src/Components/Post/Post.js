import React from 'react'
import { ButtonContainer, CardContainer } from './Styles/Card.styles'

const Post = (props) => {
  const { post, posts, setPosts } = props

  const handleDelete = (e) => {
    e.preventDefault()
    setPosts(posts.filter((state) => state.id !== post.id))
  }

  const handleLike = (e) => {
    e.preventDefault()
    setPosts(
      posts.map((state) =>
        state.id === post.id ? { ...state, liked: true } : state
      )
    )
  }

  return (
    <>
      <CardContainer>
        <h3>{post.title}</h3>
        <p>{post.item}</p>
        <ButtonContainer>
          <button onClick={handleLike}>Like</button>
          <button onClick={handleDelete}>Delete</button>
        </ButtonContainer>
      </CardContainer>
    </>
  )
}

export default Post
