import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card.jsx'

function App() {
  const [count, setCount] = useState(0)


  return (
    <>
    <h1 className='bg-pink-900 text-purple-300 rounded-4xl p-3'>tailwind test</h1>
    
    <Card avaibilty = "Available soon!!!!"/>
    <Card avaibilty = "But not forever:(("/>
    <Card />
        
    </>

  )
}

export default App
