import { useState } from 'react'

import './App.css'
import User_context_provider from './Context/User_Context_provider'

function App() {
  const [count, setCount] = useState(0)

  return (
    <User_context_provider>
      <h1>Theme changer using Context API</h1>
    </User_context_provider>
  )
}

export default App
