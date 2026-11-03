import React from 'react'
import {Routes ,Route, BrowserRouter } from "react-router-dom";
import Home from './pages/Home';
import Intro from './pages/Intro';



function App() {

  return (
    <BrowserRouter>
<Routes>
<Route path='/home' element={<Home/>}/>
<Route path='/' element={<Intro/>}/>

</Routes>
    </BrowserRouter>
  )
}

export default App
