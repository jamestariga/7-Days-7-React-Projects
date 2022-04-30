import styled from 'styled-components'

export const WeatherContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 4rem;

  h1 {
    font-size: 3rem;
    font-weight: 700;
    color: #fff;

    @media (max-width: 576px) {
      font-size: 2rem;
    }
  }

  @media screen and (max-width: 768px) {
    margin: 4rem 2rem;
  }
`

export const WeatherWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80%;
  min-height: 30vh;
  padding: 4rem;
  background: transparent;
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  border-radius: 2rem;
  border: 1px solid rgba(255, 255, 255, 0.1);

  input {
    width: 80%;
    padding: 1rem;
    border: none;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    background: transparent;
    color: #fff;
    font-size: 1.5rem;
    font-weight: 500;
    transition: all 0.3s ease-in-out;

    &:focus {
      outline: none;
      border-bottom: 1px solid #fff;
    }
  }

  @media screen and (max-width: 768px) {
    padding: 4rem 2rem;
  }
`

export const DisplayWeather = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80%;
  margin-top: 2rem;
  padding: 2rem;
  color: #fff;
  background: transparent;
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  border-radius: 2rem;
  border: 1px solid rgba(255, 255, 255, 0.1);

  h2,
  h3 {
    font-size: 2.5rem;
    font-weight: 500;
    margin-bottom: 1rem;

    @media screen and (max-width: 576px) {
      font-size: 1.75rem;
    }
  }

  p {
    font-size: 1.5rem;
  }

  img {
    width: 100px;
    height: 100px;
  }
`
