import { useState, useEffect, SetStateAction } from 'react'

export default function useScrollDirection() {
    const [scrollDirection, setScrollDirection] = useState<SetStateAction<null> | string>(null);

    useEffect(() => {
        let lastScrollY = window.scrollY;


        const updateScrollDirection = () => {
            const scrollY = window.scrollY;

            const direction = scrollY > lastScrollY ? "down" : "up";
            console.log(direction)
            if (direction !== scrollDirection) {
                setScrollDirection(direction);
            }
            lastScrollY = scrollY > 0 ? scrollY : 0;
        };
        window.addEventListener("scroll", updateScrollDirection); // add event listener
        return () => {
            window.removeEventListener("scroll", updateScrollDirection); // clean up
        }
    }, [scrollDirection]);

    return scrollDirection;
}

/* from https://www.codemzy.com/blog/react-sticky-header-disappear-scroll */