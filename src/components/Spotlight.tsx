import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLayoutEffect, useRef } from "react"


export default function Spotlight() {
    const section = useRef(null)
    const leftDiv = useRef(null)
    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            gsap.registerPlugin(ScrollTrigger);
            gsap.to(document.documentElement, {
                backgroundColor: '#252422',
                color: '#f9cdcd',
                scrollTrigger: {
                    trigger: section.current,
                    start: "top-=300px top",
                    end: "bottom-=500px bottom",
                    scrub: true,
                    markers: true

                }
            });
            gsap.to(document.documentElement, {
                backgroundColor: "white",
                color: 'black',
                scrollTrigger: {
                    trigger: section.current,
                    start: "bottom+=500px bottom",
                    markers: true,
                    scrub: true
                }
            })
            ScrollTrigger.create({
                trigger: leftDiv.current,
                pin: true,
                start: "top-=100px",
                end: "bottom bottom",

            })
        })
        return () => ctx.revert()

    }, []);


    return (
        <div ref={section} className="flex p-20
        ">
            <div ref={leftDiv} className="w-1/2" >
                <p id="pin" className="text-[120px] font-bold leading-[6rem] pb-8">BASIC/DEPT® HELPS BRANDS ● CONNECT W/ CULTURE</p>
                <p>ADWEEK AGENCY SPOTLIGHT</p>
                <button className=" uppercase text-left text-xs border border-[#f9cdcd] w-max px-4 py-2 rounded-3xl mt-32">About Us</button>
            </div>
            <div id="right">
                <video autoPlay muted loop className="w-full h-full">
                    <source src="https://cdn.sanity.io/files/8nn8fua5/production/e4a840ba8dfeded08ac4d0ba6e930be56fc68e3b.mp4" type="video/mp4" />
                </video>
            </div>
        </div>
    )
}