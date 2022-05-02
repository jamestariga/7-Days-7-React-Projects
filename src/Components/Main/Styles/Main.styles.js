import styled from 'styled-components'

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #fff;
  position: absolute;
  right: 0;
  left: 0;

  h1 {
    font-size: 2rem;
    font-weight: bold;
    margin-bottom: 1rem;
  }

  button {
    border: 1px solid #ccc;
    border-radius: 5px;
    padding: 1rem;
    font-size: 1rem;
    font-weight: bold;
    color: #000;
    cursor: pointer;
    margin: 2rem;
  }
`
