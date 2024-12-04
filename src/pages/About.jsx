import React from 'react'

const About = () => {
    return (
        <div id="aboutus" className="md:mt-10 w-full flex justify-center px-4 md:px-12">
            <div className="max-w-7xl border rounded-md relative overflow-hidden bg-white">
                <img src="./wheat2.png" alt="wheat" className="w-96 absolute right-0 object-cover opacity-30 md:opacity-60" />
                <div className="p-6 md:p-10">
                    <h1 className="text-lg md:text-2xl font-bold">About us</h1>
                    <p className="mt-4 text-sm md:text-base leading-relaxed text-justify z-20">At <span className="text-sky-700 font-medium">RATION STORE</span>, we are committed to revolutionizing the way ration distribution is managed. Our mission is to build a transparent, efficient, and accessible platform that ensures every family receives their entitlements without hassle. <br /><br /> By leveraging modern technology like RFID integration and real-time tracking, we aim to eliminate fraud, minimize wastage, and empower both beneficiaries and administrators. Together, we’re shaping a better future for public distribution.</p>
                </div>
            </div>
        </div>
    )
}

export default About;