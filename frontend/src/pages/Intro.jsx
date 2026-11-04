import React from 'react';
import {useState,useEffect} from 'react';
import {motion , AnimatePresence}  from "motion/react"

function Intro() {
    const [scene, setScene] = useState("brand");

    useEffect(() => {
        const timer = setTimeout(() => {
         setScene("upload")
        }, 1600);
        return () => clearTimeout(timer);
        }, []);


    return (
       <div className = "min-h-screen flex items-center justify-center bg-[#080810]">
        <AnimatePresence mode="wait">
            //brand name
            {scene === "brand" && (
        <motion.div
        key="brand"
        initial={{ opacity: 0, scale: 0.7 }}
        animate={{ opacity: 1,scale: 1 }}
        exit={{ opacity: 0, scale: 0.7  }}
        transition={{ duration: 1.0, ease: "easeOut" }}
        className="text-center relative"
      >
        <div className="absolute inset-0  flex items-center justify-center">
  <div className="h-40 w-80 rounded-full bg-fuchsia-800/20 blur-[100px]" />


</div>
               <h1 className='  font-heading z-10 font-bold text-8xl bg-gradient-to-r from-fuchsia-950 to-pink-700 bg-clip-text text-transparent'>ResuMate</h1>
        <p className='text-blue-200 mt-5 z-10 text-2xl font-heading '>Your  resume's  smartest  mate</p>
        </motion.div>
            )}

//upload
            {scene === "upload" && (
                <motion.div
                key="upload"
                initial={{ opacity: 0}}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="text-center "
                >
                    <h2 className='text-8xl font-bold font-heading text-white'>UPLOAD</h2>
                </motion.div>
            )}

            //Analyze

            {scene === "analyze" && (
                <motion.div
                key="analyze"
                initial={{ opacity: 0}}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="text-center "
                >
                    <h2 className='text-8xl font-bold font-heading text-white'>ANALYZE</h2>
                </motion.div>
            )}

//improve
             {scene === "improve" && (
                <motion.div
                key="improve"
                initial={{ opacity: 0}}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="text-center "
                >
                    <h2 className='text-8xl font-bold font-heading text-white'>IMPROVE</h2>
                </motion.div>
            )}
            </AnimatePresence>
     
       </div>
    )
}

export default Intro;