import { v4 as uuidv4 } from 'uuid'
import {
  PostWrapper,
  PostContainer,
  TitleContainer,
  Form,
} from './Styles/Post.styles'

const CreatePost = (props) => {
  const { name, setName, post, setPost, posts, setPosts } = props

  const handleNameChange = (e) => {
    setName(e.target.value)
  }

  const handlePostChange = (e) => {
    setPost(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setPosts([...posts, { item: post, title: name, id: uuidv4() }])
    setPost('')
    setName('')
  }

  return (
    <PostWrapper>
      <PostContainer>
        <TitleContainer>
          <h1>Create a Post</h1>
        </TitleContainer>
        <Form onSubmit={handleSubmit}>
          <input
            type='text'
            placeholder='Title'
            value={name}
            onChange={handleNameChange}
            required
          />
          <textarea
            id='PostArea'
            type='text'
            placeholder='Post'
            value={post}
            onChange={handlePostChange}
            required
          />
          <button type='submit'>SUBMIT</button>
        </Form>
      </PostContainer>
    </PostWrapper>
  )
}

export default CreatePost
