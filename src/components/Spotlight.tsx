import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLayoutEffect, useRef } from "react"


export default function Spotlight() {
    const section = useRef(null)
    const leftDiv = useRef(null)
    const btn = useRef(null)

    useLayoutEffect(() => {
        gsap.registerPlugin(ScrollTrigger)
        const ctx = gsap.context(() => {
            gsap.to(document.body, {
                color: "pink",
                backgroundColor: "black",
                scrollTrigger: {
                    trigger: section.current,
                    start: 'top-=200px',
                    end: 'top',
                    scrub: true,
                    endTrigger: 'bottom bottom'
                }
            })
            ScrollTrigger.create({
                trigger: leftDiv.current,
                start: 'top-=100px top',
                end: 'bottom 50%+=300px',
                scrub: true,
                markers: true,
                pin: true
            })
        })
        return () => ctx.revert()
    }, [])

    return (
        <div ref={section} className="flex px-20 py-40">
            <div ref={leftDiv} className="w-1/2" >
                <p id="pin" className="text-[120px] font-bold leading-[6rem] pb-8">BASIC/DEPT® HELPS BRANDS ● CONNECT W/ CULTURE</p>
                <p ref={btn}>ADWEEK AGENCY SPOTLIGHT</p>
                <button className="mt-32">About Us</button>
            </div>
            <div id="right">
                <video autoPlay muted loop className="w-full h-full">
                    <source src="https://cdn.sanity.io/files/8nn8fua5/production/e4a840ba8dfeded08ac4d0ba6e930be56fc68e3b.mp4" type="video/mp4" />
                </video>
            </div>
        </div>
    )
}