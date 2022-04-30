import { useState } from 'react'
import fetchWeather from '../API/fetchWeather'
import {
  WeatherContainer,
  WeatherWrapper,
  DisplayWeather,
} from './Styles/Weather.styles'

const Weather = () => {
  const [query, setQuery] = useState('')
  const [weather, setWeather] = useState({})

  const getWeather = async (e) => {
    if (e.key === 'Enter') {
      const data = await fetchWeather(query)
      setWeather(data)
      setQuery('')
    }
  }

  return (
    <>
      <WeatherContainer>
        <h1>PWA Weather App</h1>
        <WeatherWrapper>
          <input
            type='text'
            placeholder='Search for a city...'
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyPress={getWeather}
          />
          {weather.main && (
            <DisplayWeather>
              <h2>
                {weather.name.toUpperCase()}, {weather.sys.country}
              </h2>
              <h3>
                Current: {Math.round(weather.main.temp)}
                <sup>&deg;C</sup>
              </h3>

              <img
                src={`https://openweathermap.org/img/w/${weather.weather[0].icon}.png`}
                alt={weather.weather[0].description}
              />
              <p>{weather.weather[0].description.toUpperCase()}</p>
            </DisplayWeather>
          )}
        </WeatherWrapper>
      </WeatherContainer>
    </>
  )
}

export default Weather
