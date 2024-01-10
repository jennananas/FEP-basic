import { useEffect, useState } from 'react'

export default function useMousePosition() {
    const [mousePosition, setMousePosition] = useState(
        {
            mouseX: window.innerWidth / 2,
            mouseY: window.innerHeight / 2
        })

    useEffect(() => {
        const updateMousePosition = (e: { clientX: number; clientY: number; }) => {
            setMousePosition({
                mouseX: e.clientX,
                mouseY: e.clientY
            })
        }
        window.addEventListener("mousemove", updateMousePosition)
        return () => {
            window.removeEventListener("mousemove", updateMousePosition)
        }
    }, [])


    return mousePosition
}