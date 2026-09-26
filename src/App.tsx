import { useState } from 'react'
import Fetchdata from '../src/concept/fetch-api/FetchData'
import {UserProvider } from '../src/concept/context/UserContext'
import './App.css'

function App() {
 

  return (
    <UserProvider>
     <Fetchdata/>
    </UserProvider>
  )
}

export default App
