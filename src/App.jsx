import React from 'react'
import ReactDOM from 'react-dom/client'

import { useContext } from 'react'
import { Background } from './components/Background/Background'
import { Information } from './components/Information/Information'
import { Input } from './components/Input/Input'

import { MapProvider } from '../src/services/map-context';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)


function App() {

  return (
    <MapProvider>
      <Background />
      <Input />
      <Information />
    </MapProvider>
  )
}