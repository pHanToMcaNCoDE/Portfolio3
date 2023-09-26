import React from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import Home from './Components/Home/Home'
import Experiences from './Components/Experiences/Experiences'
import Portfolio from './Components/Portfolio/Portfolio'

const App = () => {
  return (
    <div>
      {/* <Skeleton/> */}
      <BrowserRouter>
        <Routes>
          <Route path='/'>
            <Route path='home' element={<Home/>}/>
             <Route path='/' element={<Navigate to='home' />}/>
             <Route path='experiences' element={<Experiences/>} />
             <Route path='portfolio' element={<Portfolio/>}/>
             <Route/>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
