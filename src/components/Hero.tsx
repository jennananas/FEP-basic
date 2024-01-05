import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function Hero() {
    const navItems = ["work", "about", "news", "thinking", "pledge", "careers", "contact"]

    const [mousePosition, setMousePosition] = useState({
        x: 0,
        y: 0
    })
    const [cursorVariant, setCursorVariant] = useState("default")

    useEffect(() => {
        const mouseMove = (e: MouseEvent) => {
            setMousePosition({
                x: e.clientX,
                y: e.clientY
            })
        }
        window.addEventListener("mousemove", mouseMove)
        return () => {
            window.removeEventListener("mousemove", mouseMove)
        }
    }, [])

    const variants = {
        text: {
            x: mousePosition.x - 64,
            y: mousePosition.y - 64
        },
        default: {
            x: '850px',
            y: '300px'

        }
    }
    const textEnter = () => setCursorVariant("text")
    const textLeave = () => setCursorVariant("default")

    return (
        <div className='min-h-dvh min-w-full relative cursor-none px-20'>
            <video autoPlay muted loop className="absolute top-0 left-0 object-cover z-0 h-full w-full">
                <source src="src/assets/images/pexels_videos_1966382(2160p).mp4" type="video/mp4" />
            </video>
            <div className=" flex flex-col min-h-dvh" >
                <header className="flex justify-between text-neutral-50 cursor-pointer py-10">
                    <h1 className="uppercase z-10 text-2xl">Basic/Dept</h1>
                    <nav className="flex gap-10 z-10">
                        {navItems.map((item, index) => (
                            <li className="list-none uppercase 
                        relative hover:text-neutral-50
                        after:content-['']
                        after:abosulte after:block after:w-100 after:h-[1px] after:bottom-0 after:left-0
                        after:scale-x-0 after:ease-linear after:transition-transform after:bg-neutral-50
                        hover:after:scale-x-100
                        " key={index}>{item}</li>
                        ))}
                    </nav>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 z-10">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM18.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                    </svg>
                </header>
                <div id="content" className='relative grow border-red-600 border-4' onMouseEnter={textEnter} onMouseLeave={textLeave}>
                    <motion.div className={`
                pointer-events-none
                absolute top-0 left-0
                
                `}
                        variants={variants}
                        animate={cursorVariant}
                    >
                        <div className='w-32 h-32 bg-neutral-50 rounded-full'>
                            <p className="flex justify-center items-center uppercase p-10 text-center font-bold">watch reel</p>
                        </div>
                        <p className='uppercase text-neutral-50 font-bold text-center'>basic/dept</p>
                    </motion.div>


                </div>

            </div>

        </div>



    )
}