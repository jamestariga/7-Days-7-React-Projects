import Form from './Form'
import { useState } from 'react'
import { createContext } from 'react'
import ReactSwitch from 'react-switch'

export const ThemeContext = createContext(null)

const App = () => {
  const [theme, setTheme] = useState('light')

  const toggleTheme = () => {
    setTheme((curr) => (curr === 'light' ? 'dark' : 'light'))
  }

  return (
    <>
      <ThemeContext.Provider value={{ theme, toggleTheme }}>
        <div
          className='flex flex-col justify-center item-center h-screen w-screen'
          id={theme}
        >
          <Form />
          <div className='flex justify-center item-center'>
            <ReactSwitch
              onColor='#86d3ff'
              onHandleColor='#2693e6'
              handleDiameter={30}
              uncheckedIcon={false}
              checkedIcon={false}
              boxShadow='0px 1px 5px rgba(0, 0, 0, 0.6)'
              activeBoxShadow='0px 0px 1px 10px rgba(0, 0, 0, 0.2)'
              height={20}
              width={48}
              onChange={toggleTheme}
              checked={theme === 'dark'}
            />
          </div>
        </div>
      </ThemeContext.Provider>
    </>
  )
}

export default App
