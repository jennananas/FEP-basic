export default function Header() {
    const navItems = ["work", "about", "news", "thinking", "pledge", "careers", "contact"]
    return (
        <div className="video-container h-screen w-100 relative overflow-hidden">
            <video autoPlay muted loop className="absolute top-0 left-0 object-cover z-0">
                <source src="src/assets/images/pexels_videos_1966382(2160p).mp4" type="video/mp4" />
            </video>
            <div className="flex justify-between text-neutral-50 p-16 cursor-pointer ">
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
            </div>



        </div>


    )
}