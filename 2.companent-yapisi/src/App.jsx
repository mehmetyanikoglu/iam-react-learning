import { useState } from 'react'

import './App.css'
import Login from './login'
import {users} from './login'


function App() {

  console.log(users);

  return (
    <div>
      <Login/>
      <hr/>
      <Login/>
    </div>
  )
}

export default App
