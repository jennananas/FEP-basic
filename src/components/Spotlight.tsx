import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLayoutEffect, useRef } from "react"


export default function Spotlight() {
    const section = useRef(null)
    const leftDiv = useRef(null)
    const btn = useRef(null)


    useLayoutEffect(() => {
        gsap.registerPlugin(ScrollTrigger)
        const buttons = document.querySelectorAll("button");
        const ctx = gsap.context(() => {

            ScrollTrigger.create({
                trigger: leftDiv.current,
                start: 'top-=100px top',
                end: 'bottom 50%+=300px',
                scrub: true,
                pin: true
            })
            ScrollTrigger.create({
                trigger: section.current,
                start: "top 20%",
                end: "bottom 50%",

                onEnter: () => {
                    gsap.to(['body', 'header'], { duration: 1.0, backgroundColor: '#252422', color: '#f9cdcd' })
                    buttons.forEach(btn => btn.classList.add("scrolled-btn"))
                },
                onLeaveBack: () => {
                    gsap.to(['body', 'header'], { duration: 1.0, backgroundColor: '#f4f4f4', color: '#252422' })
                    buttons.forEach(btn => btn.classList.remove("scrolled-btn"))
                },


            })
            ScrollTrigger.create({
                trigger: section.current,
                start: "bottom 0%",
                end: "bottom bottom",
                markers: true,
                onEnter: () => {
                    gsap.to(['body', 'header'], { duration: 1.0, backgroundColor: '#f4f4f4', color: '#252422' })
                    buttons.forEach(btn => btn.classList.remove("scrolled-btn"))
                },
                onLeaveBack: () => {
                    gsap.to(['body', 'header'], { duration: 1.0, backgroundColor: '#252422', color: '#f9cdcd' })
                    buttons.forEach(btn => btn.classList.add("scrolled-btn"))

                },


            })

        })
        return () => ctx.revert()
    }, [])

    return (
        <div ref={section} className="flex px-20 py-40">
            <div ref={leftDiv} className="w-1/2" >
                <p id="pin" className="text-[120px] font-bold leading-[6rem] pb-8">BASIC/DEPT® HELPS BRANDS ● CONNECT W/ CULTURE</p>
                <p ref={btn}>ADWEEK AGENCY SPOTLIGHT</p>
                <button className={`mt-32`}>About Us</button>
            </div>
            <div id="right">
                <video autoPlay muted loop className="w-full h-full">
                    <source src="https://cdn.sanity.io/files/8nn8fua5/production/e4a840ba8dfeded08ac4d0ba6e930be56fc68e3b.mp4" type="video/mp4" />
                </video>
            </div>
        </div>
    )
}