import React from 'react'
import homeVector from '../assets/home_vector.svg'
export default function Home() {
    return (
        <div className="h-screen flex flex-wrap "
             style={{background: 'conic-gradient(from 200deg,#1F2833 0%, #0B0C10 100%) 50% 40% / 100% 100% no-repeat'}}
        >
            <div className="flex justify-center w-full md:w-1/2 lg:w-1/2 xl:w-1/2 bg-gray-400  self-center "> 
                <img  src={homeVector} alt="Home Vector"/>
             </div>
            <div className="self-center px-12 sm:px-24 md:px-10 w-full md:w-1/2 lg:w-1/2 xl:w-1/2 bg-gray-500 font-roboto font-normal text-third text-xl sm:text-2xl md:text-3xl lg:text-3xl xl:text-4xl ">
                Lorem ipsum dolor sit amet, 
                consectetur adipiscing elit.
                Class aptent taciti sociosqu 
                ad litora torquent per. 
            </div>

        </div>
    )
}
