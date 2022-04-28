import axios from 'axios'
import { useEffect, useState } from 'react'

const useFetch = (tag) => {
  const [data, setData] = useState([])
  const [filtered, setFiltered] = useState([])
  const [activeGenre, setActiveGenre] = useState(0)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  const url = `https://api.themoviedb.org/3/${tag}/popular?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`

  useEffect(() => {
    const getData = () => {
      axios
        .get(url)
        .then((res) => {
          setData(res.data.results)
          setFiltered(res.data.results)
          console.log(res.data.results)
        })
        .catch((err) => {
          setError(true)
          console.log(err)
        })
        .finally(() => {
          setLoading(false)
        })
    }

    setTimeout(() => {
      getData()
    }, 1000)
  }, [url])

  return [
    data,
    filtered,
    { setFiltered, setActiveGenre, activeGenre, loading, error },
  ]
}

export default useFetch
