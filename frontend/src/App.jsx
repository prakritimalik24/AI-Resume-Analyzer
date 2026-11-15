import React from 'react'
import {Routes ,Route, BrowserRouter } from "react-router-dom";
import Home from './pages/Home';
import Intro from './pages/Intro';
import Result from './pages/Result';
import About from "./pages/About";
import Resources from "./pages/Resources";
import Working from "./pages/Working";



function App() {

  return (
    <BrowserRouter>
<Routes>
<Route path='/home' element={<Home/>}/>
<Route path='/' element={<Intro/>}/>
<Route path='/results' element={<Result/>}/>
<Route path="/about" element={<About />} />
<Route path="/resources" element={<Resources />} />
<Route path="/how-it-works" element={<Working />} />

</Routes>
    </BrowserRouter>
  )
}

export default App
