import axios from 'axios'

const fetchWeather = async (query) => {
  const URL = 'https://api.openweathermap.org/data/2.5/weather'

  const { data } = await axios.get(URL, {
    params: {
      q: query,
      units: 'metric',
      APPID: process.env.REACT_APP_API_KEY,
    },
  })

  console.log(data)

  return data
}

export default fetchWeather
