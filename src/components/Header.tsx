import useScrollDirection from './hooks/ScrollDirection';


export default function Header() {
    const navItems = ["work", "about", "news", "thinking", "pledge", "careers", "contact"]
    const scrollDirection = useScrollDirection()

    return (
        <header className={`flex justify-between text-neutral-50 cursor-pointer py-10 px-20
        h-28 bg-neutral-950 backdrop-blur-xl bg-opacity-20
        sticky ${scrollDirection === "down" ? "-top-32" : "top-0"}
        transition-all duration-200
        `}>
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
    )
}