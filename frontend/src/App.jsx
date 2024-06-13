import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <h1>Welcome to PSR</h1>
        <button className="users-btn">Users</button>
      </div>
    </>
  )
}

export default App
