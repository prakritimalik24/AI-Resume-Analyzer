
import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
    return(
<div className="bg-[#080810] fixed top-0 w-full p-4 sm:p-6 md:p-8 z-50 left-0 flex backdrop-blur-lg items-center justify-between border-b-2 border-gray-800">

{/* Logo */}
<h1 className="text-lg sm:text-xl font-bold font-heading text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-950 to-pink-700">
    ResuMate
</h1>

{/* Main bars */}
<div className="flex gap-3 sm:gap-6 md:gap-10 text-xs sm:text-sm">

   <Link to="/about" className="text-white hover:text-gray-300 hover:font-bold hover:scale-105 cursor-pointer font-heading2 transition-all duration-100">
       About
   </Link>

   <Link to="/resources" className="text-white hover:text-gray-300 hover:font-bold hover:scale-105 cursor-pointer font-heading2 transition-all duration-100">
       Resources
   </Link>

   <Link to="/working" className="text-white hover:text-gray-300 hover:font-bold hover:scale-105 cursor-pointer font-heading2 transition-all duration-100">
       How it works
   </Link>

</div>
    
</div>
    )
}

export default Navbar;
