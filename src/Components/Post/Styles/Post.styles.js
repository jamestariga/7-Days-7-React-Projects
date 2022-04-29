import styled from 'styled-components'

export const PostWrapper = styled.div`
  margin: 4rem;
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 768px) {
    margin: 4rem 2rem;
  }
`

export const PostContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #424242;
  padding: 4rem;
  width: 80vw;
  border-radius: 1rem;

  @media screen and (max-width: 768px) {
    padding: 4rem 2rem;
  }
`

export const TitleContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: nowrap;

  h1 {
    color: #fff;
  }
`

export const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  width: 100%;

  input {
    padding: 1rem;
    border: 1px solid #ccc;
    border-radius: 1rem;
    width: 100%;
    background-color: transparent;
    color: #fff;
    font-size: 1rem;

    &:focus {
      outline: none;
    }
  }

  textarea {
    padding: 1rem;
    border: 1px solid #ccc;
    border-radius: 5px;
    margin-bottom: 1rem;
    height: 10rem;
    resize: none;
    width: 100%;
    background-color: transparent;
    color: #fff;
    font-size: 1rem;

    &:focus {
      outline: none;
    }
  }

  button {
    padding: 1em;
    border: 1px solid #ccc;
    border-radius: 5px;
    background-color: transparent;
    color: #fff;
    font-size: 1em;
    font-weight: bold;
    cursor: pointer;
  }

  button:hover {
    background-color: #fff;
    color: #333;
    animation: btn 0.3s ease-in-out;
  }

  @keyframes btn {
    0% {
      background-color: transparent;
      color: #fff;
    }

    100% {
      background-color: #fff;
      color: #333;
    }
  }
`
