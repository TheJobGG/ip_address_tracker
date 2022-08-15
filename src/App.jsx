import { useState } from 'react'
import { Background } from './components/Background/Background'
import { Information } from './components/Information/Information'
import { Input } from './components/Input/Input'


function App() {
  return (
    <div>
      <Background />
      <Input />
      <Information />
    </div>
  )
}

export default App
