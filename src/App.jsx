import { useState } from 'react'
import { Background } from './components/Background/Background'
import { Information } from './components/Information/Information'
import { Input } from './components/Input/Input'
import { Pointer } from './components/Pointer/Pointer'

function App() {
  return (
    <div>
      <Background />
      <Input />
      <Information />
      <Pointer />
    </div>
  )
}

export default App
