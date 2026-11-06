
import React from 'react';

function Footer() {
    return (
        <div className="bg-[#080810] w-full p-4 sm:p-6 md:p-8 z-50 left-0 bottom-0 flex flex-col gap-2 sm:gap-3 items-center justify-center border-t-2 border-gray-800">

            <h1 className="font-heading font-bold text-sm sm:text-base md:text-lg text-blue-200 text-center">
                Don't just apply. Stand out !
            </h1>

            <h1 className="text-lg sm:text-xl font-bold font-heading text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-950 to-pink-700">
                ResuMate
            </h1>

        </div>
    );
}

export default Footer;
