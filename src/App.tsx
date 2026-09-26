import { useState } from 'react'
import Fetchdata from '../src/concept/fetch-api/FetchData'
import {UserProvider } from '../src/concept/context/UserContext'
import { ThemeProvider } from './concept/context/ThemeContext'
import './App.css'

function App() {
 

  return (
    <UserProvider>
<ThemeProvider >
  <Fetchdata/>
</ThemeProvider>
   
    </UserProvider>
  )
}

export default App
