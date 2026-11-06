import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Home() {
    return(
       <div className="bg-[#080810] min-h-screen ">
            <Navbar />

            <main className="min-h-screen flex  flex-col items-center justify-center bg-[#080810] pt-30 px-4 sm:px-8 md:px-12 ">

<div className = " text-center">

<h1 className = "font-heading font-bold text-4xl sm:text-5xl md:text-6xl text-green-400">Make your resume stand out.</h1>
</div>

{/* 3d model */}
<div></div>

<div className = "w-full p-4 bg-white">


<form className =" w-full flex flex-col items-center justify-between gap-3">
   
    <div className = "w-full flex flex-col md:flex-row items-center justify-between gap-4">
         {/* upload resume */}
    <div className = "w-full md:w-1/2">


    </div>
  

    {/* job description */}
    <div className = "w-full md:w-1/2">


    </div>
    </div>

    <button type="submit">Analyze</button>

      </form>
</div>


            </main>

            <Footer />
        </div>

    )
}

export default Home;