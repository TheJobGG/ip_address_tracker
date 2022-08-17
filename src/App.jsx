import React from 'react';

import { useContext } from 'react'
import { Background } from './components/Background/Background'
import { Information } from './components/Information/Information'
import { Input } from './components/Input/Input'

import { MapProvider } from '../src/services/map-context';

function App() {

  return (
    <MapProvider>
      <Background />
      <Input />
      <Information />
    </MapProvider>
  )
}

export default App
