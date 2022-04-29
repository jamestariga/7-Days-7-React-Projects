import styled from 'styled-components'

export const CardWrapper = styled.div`
  margin: 4rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;

  @media screen and (max-width: 768px) {
    margin: 4rem 2rem;
  }
`

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  padding: 2rem;
  background-color: #424242;
  color: #fff;
  border-radius: 1rem;

  h3 {
    font-size: 1.5rem;
  }

  p {
    font-size: 1rem;
  }
`

export const ButtonContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 2rem;

  button {
    padding: 1em;
    border: 1px solid #ccc;
    border-radius: 5px;
    min-width: 50px;
    background-color: transparent;
    color: #fff;
    font-size: 0.75em;
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
