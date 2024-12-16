import React from "react"
import Image from "next/image"

const Hero = () => {
    return (

        <div className="my-[100] container flex mx-auto w-[1440] h-[900] md:flex-row flex-col items-center bg-[#FBEBB5]">
            <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                <h1 className="title-font sm:text-5xl text-5xl mb-4 font-medium text-gray-900">
                Rocket single 
                    <br className="hidden lg:inline-block" />
                    seater
                </h1>
                <p className="mb-6 text-center text-[50] leading-relaxed">
                Shop Now
                </p>                
            </div>
            <div className="funiroFunitureBox" ><Image src="/img/rocket.png" width={1440} height={721} alt="rocket" /></div>      
           
        </div>

    )
}

export default Hero
