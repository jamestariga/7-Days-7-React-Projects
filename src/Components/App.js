import { useState, useRef, useCallback } from 'react'
import useSearch from './Hooks/useSearch'
import { AnimatePresence, motion } from 'framer-motion'

const App = () => {
  const [query, setQuery] = useState('')
  const [pageNumber, setPageNumber] = useState(1)

  const { loading, error, books, hasMore } = useSearch(query, pageNumber)

  const observer = useRef()

  const lastBookElementRef = useCallback(
    (node) => {
      if (loading) return
      if (observer.current) observer.current.disconnect()
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMore) {
          setPageNumber((prevPageNumber) => prevPageNumber + 1)
        }
      })
      if (node) observer.current.observe(node)
    },
    [loading, hasMore]
  )

  const spinTransition = {
    loop: Infinity,
    ease: 'linear',
    duration: 1,
  }

  const handleSearch = (e) => {
    e.preventDefault()
    setQuery(e.target.value)
    setPageNumber(1)
  }

  return (
    <>
      <div className='flex flex-col justify-center items-center pt-10 mx-10 gap-10'>
        <div>
          <h1 className='font-extrabold text-xl'>INFINITE SCROLLING</h1>
        </div>
        <div className='flex justify-center item-center p-10 w-full'>
          <input
            className='bg-gray-200 rounded-lg p-2 w-full md:w-3/4'
            type='text'
            placeholder='Search for books'
            value={query}
            onChange={handleSearch}
          />
        </div>
        <div className='grid gap-4 2xl:grid-cols-4 xl:grid-cols-3 md:grid-cols-2 transition-all'>
          {books.map((book, id) =>
            books.length === id + 1 ? (
              <div
                className='flex justify-center items-center min-h-[10rem] bg-slate-500 min-w-full p-6 rounded-lg'
                ref={lastBookElementRef}
                key={id}
              >
                <h3 className='font-bold text-xl'>{book}</h3>
              </div>
            ) : (
              <div
                className='flex justify-center items-center min-h-[10rem] bg-slate-500 min-w-full p-6 rounded-lg hover:scale-[1.05] duration-300 transition-all'
                key={id}
              >
                <h3 className='font-bold text-xl'>{book}</h3>
              </div>
            )
          )}
        </div>
        <>
          {loading && (
            <AnimatePresence>
              <div className='flex flex-col justify-center items-center min-h-[10rem] text-black'>
                <motion.span
                  className='flex justify-center items-center w-10 h-10 border-[0.4rem] border-solid border-slate-300 border-t-[0.4rem] border-t-slate-600 rounded-full'
                  animate={{ rotate: 360 }}
                  transition={spinTransition}
                ></motion.span>
                <span className='text-slate-300 font-extrabold mt-2 2xl:text-xl xl:text-xl'>
                  Loading...
                </span>
              </div>
            </AnimatePresence>
          )}
        </>
        <>
          {error && (
            <AnimatePresence>
              <div className='flex flex-col justify-center items-center min-h-[10rem] text-black'>
                <motion.span
                  className='flex justify-center items-center w-10 h-10 border-[0.4rem] border-solid border-slate-300 border-t-[0.4rem] border-t-red-600 rounded-full'
                  animate={{ rotate: 360 }}
                  transition={spinTransition}
                ></motion.span>
                <span className='text-slate-300 font-extrabold mt-2 2xl:text-xl xl:text-xl'>
                  Error...
                </span>
              </div>
            </AnimatePresence>
          )}
        </>
      </div>
    </>
  )
}

export default App
