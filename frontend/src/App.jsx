import React from 'react'
import {Routes ,Route, BrowserRouter } from "react-router-dom";
import Home from './pages/Home';
import Intro from './pages/Intro';
import Result from './pages/Result';



function App() {

  return (
    <BrowserRouter>
<Routes>
<Route path='/home' element={<Home/>}/>
<Route path='/' element={<Intro/>}/>
<Route path='/result' element={<Result/>}/>

</Routes>
    </BrowserRouter>
  )
}

export default App
