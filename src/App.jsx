import React from 'react'
import './App.scss'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Header from './components/Header/Header'
import Sale from './pages/Sale'
import SinglePage from './pages/SinglePage'
import LoginPage from './pages/LoginPage'
import SignupPage from './pages/SignupPage'
import Basket from './components/Basket/Basket'
import CatalogPage from './pages/CatalogPage'
const App = () => {
  return (
     <>
     <Header/>
     <Routes>
      <Route path= '/' element={<Home/>}/>
      <Route path= '/sale' element={<Sale/>}/>
      <Route path='/product/:id' element={<SinglePage/>}/>
   <Route path='/signup' element={<SignupPage/>} />
   <Route path='/login' element={<LoginPage/>} />
   <Route path='/basket'element={<Basket/>}/>
   <Route path='/catalog'element={<CatalogPage/> }/>

     </Routes>
     
     
     
     
     
     </>
  )
}

export default App