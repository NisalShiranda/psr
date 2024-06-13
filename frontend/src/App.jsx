import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { useNavigate } from 'react-router-dom'
import './App.css'

function App() {
  const navigate = useNavigate();

  return (
    <>
      <div>
        <h1>Welcome to PSR</h1>
        <button className="users-btn" onClick={() => {navigate('/users')}}>Users</button>
      </div>
    </>
  )
}

export default App
