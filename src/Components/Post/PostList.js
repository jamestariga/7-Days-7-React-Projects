import React from 'react'
import Post from './Post'
import { CardWrapper } from './Styles/Card.styles'

const PostList = (props) => {
  const { posts, setPosts } = props

  return (
    <>
      <CardWrapper>
        {posts.map((post) => (
          <Post
            key={post.id}
            name={post.title}
            post={post}
            posts={posts}
            setPosts={setPosts}
          />
        ))}
      </CardWrapper>
    </>
  )
}

export default PostList
