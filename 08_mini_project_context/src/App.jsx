import './App.css'
import User_Context_Provider from './Context/User_Context_Provider'
import Login from './Components/Login'
import Profile from './Components/Profile'

function App() {
  return (
    <User_Context_Provider>
      <h1>Learning Context API</h1>
      <Login/>
      <Profile/>
    </User_Context_Provider>
  )
}

export default App
