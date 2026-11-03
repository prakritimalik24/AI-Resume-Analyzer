import React from 'react';
import {motion} from "motion/react"

function Intro() {
    return (
       <div className = "min-h-screen flex items-center justify-center bg-[#080810]">
        <motion.div
        initial={{ opacity: 0, scale: 0.7 }}
        animate={{ opacity: 1,scale: 1 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="text-center"
      >
               <h1 className='  font-heading font-bold text-8xl bg-gradient-to-r from-fuchsia-950 to-pink-700 bg-clip-text text-transparent'>ResuMate</h1>
        <p className='text-blue-200 mt-5 text-2xl font-heading '>Your  resume's  smartest  mate</p>
        </motion.div>
     
       </div>
    )
}

export default Intro;