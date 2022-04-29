import { useState, useEffect } from 'react'
import CreatePost from '../Post/CreatePost'
import PostList from '../Post/PostList'

const Main = () => {
  const getLocalStorage = () => {
    let localPosts = localStorage.getItem('posts')
    if (localPosts !== null) {
      return (localPosts = JSON.parse(localPosts))
    } else {
      return []
    }
  }

  const [name, setName] = useState('')
  const [post, setPost] = useState('')
  const [posts, setPosts] = useState(getLocalStorage())

  useEffect(() => {
    localStorage.setItem('posts', JSON.stringify(posts))
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
