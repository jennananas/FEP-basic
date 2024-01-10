import useScrollDirection from './hooks/ScrollDirection';
import { useLayoutEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

export default function Header() {
    const navItems = ["work", "about", "news", "thinking", "pledge", "careers", "contact"]
    const scrollDirection = useScrollDirection()

    const header = useRef(null)

    useLayoutEffect(() => {
        gsap.registerPlugin(ScrollTrigger)
        gsap.to(header.current, {
            color: "black",
            backgroundColor: "white",
            opacity: 1,
            "--bgColor": "black",
            scrollTrigger: {
                trigger: header.current,
                start: 'top+=900px top',
                end: 'top+=900px top',
                scrub: true,
                markers: true,
            }
        });

    }, [])
    return (
        <header ref={header} className={`flex justify-between text-neutral-50 cursor-pointer pt-10 pb-20 px-20
        h-28 z-10
        sticky ${scrollDirection === "down" ? "-top-32" : "top-0"}
        transition-all duration-200
        `}>
            <h1 className="uppercase z-10 text-2xl">Basic/Dept</h1>
            <nav className="flex gap-10 z-10">
                {navItems.map((item, index) => (
                    <li className="navlist list-none uppercase 
                        relative 
                        after:content-['']
                        after:block after:w-100 after:h-[1px] after:bottom-0 after:left-0
                        after:scale-x-0 after:ease-linear after:transition-transform after:[backgroundColor:var(--bgColor)]
                        hover:after:scale-x-100
                        " key={index}>{item}</li>
                ))}
            </nav>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 z-10">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM18.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
            </svg>
        </header>
    )
}