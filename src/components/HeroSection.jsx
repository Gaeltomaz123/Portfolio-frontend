"use client";
import Image from "next/image";
import { TypeAnimation } from 'react-type-animation';

const HeroSection = () => {
    return (
        <section>
            <div className="grid grid-cols-1 sm:grid-cols-12">
                <div className="col-span-7 place-self-center text-center sm:text-left">
                    <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold">
                        <span className="text-transparent bg-clip-text bg-linear-to-br from-red-500 via-rose-500 to-pink-500 ">Hello, I'm{" "}</span>
                        <br></br>
                        <TypeAnimation
                        sequence={[
                            'Gabriel de Cezaro Tomaz',
                            1000,
                            'Developer',
                            1000,
                            'Researcher',
                            1000,
                            'Student',
                            1000
                        ]}
                        wrapper="span"
                        speed={50}
                        repeat={Infinity}
                        />
                    </h1>
                    <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur pulvinar leo nibh, et sagittis dui laoreet sed. Aenean quis imperdiet enim. 
                        Sed eleifend urna ac consequat dictum. Suspendisse ultricies justo a pellentesque rutrum. Fusce velit orci, lobortis vitae vestibulum a, porttitor non justo.
                    </p>
                    <div>
                        <button className="px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-linear-to-br from-red-500 via-rose-500 to-pink-500 hover:bg-slate-200 text-white">Download CV</button>
                    </div>
                </div>
                <div className="col-span-5 place-self-center mt-4 lg:mt-0">
                    <div className="rounded-full bg-[#181818] w-62.5 h-62.5 lg:w-100 lg:h-100 relative">
                        <Image
                            src="/images/hero-image.png"
                            alt="hero image"
                            className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                            width={300}
                            height={300}
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HeroSection