import React from 'react'
import './App.scss'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Header from './components/Header/Header'
const App = () => {
  return (
     <>
     <Header/>
     <Routes>
      <Route path= '/' element={<Home/>}/>
     </Routes>
     
     
     
     
     
     </>
  )
}

export default App