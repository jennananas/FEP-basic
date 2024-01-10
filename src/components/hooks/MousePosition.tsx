import { useEffect, useState } from 'react'

export default function useMousePosition() {
    const [mousePosition, setMousePosition] = useState(
        {
            mouseX: 0,
            mouseY: 0
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