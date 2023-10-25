import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { ChakraProvider, theme, ColorModeScript  } from '@chakra-ui/react'
import ColorModeSwitcher from './ColorModeSwitcher.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <ColorModeScript/>
    <ChakraProvider theme={theme}>
    <ColorModeSwitcher/>
      <App/>
    </ChakraProvider>
  </React.StrictMode>,
)

export const server = `https://api.coingecko.com/api/v3`;