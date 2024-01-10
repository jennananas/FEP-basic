import { motion } from 'framer-motion';
import useMousePosition from './hooks/MousePosition';
import Mask from '../assets/images/mask.svg'
import { useState } from 'react'

export default function Hero() {
    const { mouseX, mouseY } = useMousePosition()
    const [variant, setVariant] = useState("moving")

    const variants = {
        default: {
            x: window.innerWidth / 2,
            y: window.innerHeight / 2
        },
        moving: {
            x: mouseX - 48,
            y: mouseY - 48
        }

    }

    return (
        <div className='h-screen w-full absolute top-0 left-0'>
            <video autoPlay muted loop className="object-cover h-full w-full">
                <source src="https://cdn.sanity.io/files/8nn8fua5/production/c6fb986a862cbe643c40cbdd0318ebc495efb187.mp4" type="video/mp4" />
            </video>
            <div className='w-full h-full absolute top-28'
                onMouseLeave={() => setVariant("default")}
                onMouseEnter={() => setVariant("moving")}>
                <motion.div className="w-24 relative -top-28"
                    variants={variants}
                    animate={variant}
                    transition={{ type: 'tween', ease: "backOut" }}>
                    <img src={Mask} alt="" />
                </motion.div>
            </div>

        </div >

    )
}