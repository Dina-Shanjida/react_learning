import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter , set_counter] = useState(3)

  const inc_value = () => {
    if(counter == 10) set_counter(counter)
    else set_counter(counter + 1)
  }

  const dec_value = () => {
    if((counter) == 0) set_counter(counter)
    else set_counter(counter - 1)
  }



  return (
    <>
    <h1>MEOW</h1>
    <h2>Catto counter: {counter}</h2>
    <button onClick = {inc_value}>Increase catto</button>

    <button onClick = {dec_value} >Decrease catto</button>
    </>
  )
}

export default App
