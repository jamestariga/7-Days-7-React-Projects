import { useState, useEffect } from 'react'
import CreatePost from '../Post/CreatePost'
import PostList from '../Post/PostList'

const getLocalStorage = () => {
  let localPosts = localStorage.getItem('posts')
  if (localPosts) {
    return (localPosts = JSON.parse(localPosts))
  } else {
    return []
  }
}

const Main = () => {
  const [name, setName] = useState('')
  const [post, setPost] = useState('')
  const [posts, setPosts] = useState(getLocalStorage())

  useEffect(() => {
    const saveLocalStorage = () => {
      localStorage.setItem('posts', JSON.stringify(posts))
    }

    saveLocalStorage()
  }, [posts])

  return (
    <>
      <CreatePost
        setName={setName}
        name={name}
        setPost={setPost}
        post={post}
        setPosts={setPosts}
        posts={posts}
      />
      <PostList posts={posts} name={name} setPosts={setPosts} />
    </>
  )
}

export default Main
