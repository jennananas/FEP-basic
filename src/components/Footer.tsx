export default function Footer() {
    const footerContent = [{
        title: "Social",
        links: ["Instagram", "Twitter", "LinkedIn", "Facebook"]
    },
    {
        title: "Initiatives",
        links: ["Instagram", "Twitter", "LinkedIn", "Facebook"]
    },
    {
        title: "Offices",
        links: ["Instagram", "Twitter", "LinkedIn", "Facebook"]
    }]

    return (

        <div className=" text-neutral-50 bg-neutral-800  relative top-52">
            <section className="grid grid-cols-[1fr_1.5fr] grid-rows-[100px_1fr] px-20 py-48 gap-x-48 gap-y-10">
                <div className="flex flex-col gap-20 w-1/3">
                    <svg className="w-16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 307 100"><path fill="white" d="M0 86.8h41.9c19.6 0 31.3-8.3 31.3-24.5 0-10.2-6-16.2-15.1-19.2 7.2-3.4 12.1-9.4 12.1-19.2 0-12.5-7.9-21.5-27.2-21.5H0v84.4zm47.2-58.5c0 5.7-3.8 8.7-11.7 8.7H23V19.6h12.5c8.3 0 11.7 3 11.7 8.7zm2.6 32.5c0 6-3.8 8.7-12.1 8.7H22.6V51.7h15.1c8.3.4 12.1 3 12.1 9.1zM128.3 0h-18.9L73.6 100h18.5L128.3 0zm88.3 44.5c0-23.8-12.8-42.3-46-42.3h-35.5v84.5h35.5c32.8.1 46-18.4 46-42.2zm-24.1 0c0 16.6-9.4 22.6-22.3 22.6h-12.1V21.9h12.1c12.8 0 22.3 6 22.3 22.6zM224.2 46.4c0 22.6 18.5 41.1 41.1 41.1s41.1-18.5 41.1-41.1-18.5-41.1-41.1-41.1c-22.7 0-41.1 18.5-41.1 41.1zm7.9 0c0-18.9 14.7-34 33.2-34 18.5 0 33.2 15.1 33.2 34s-15.1 34-33.2 34c-18.5-.4-33.2-15.5-33.2-34zM246 66.8h12.8v-14h7.5l7.5 14h14l-9.4-16.6c4.2-1.9 7.5-6.8 7.5-12.1 0-9.4-6-14-16.6-14h-23.8v42.6h.5zm26.8-28.7c0 3.4-2.3 4.9-6.4 4.9h-7.9v-9h7.9c4.5.3 6.4 1.1 6.4 4.1z"></path></svg>
                </div>
                <div className="grid grid-cols-3 grid-rows-[100px_2fr] gap-y-10">
                    <p className="text-[32px] col-span-3">We collaborate with ambitious brands and people. Let's build.</p>
                </div>
                <div>
                    <h4>Stay in the now</h4>
                    <div className="relative">
                        <input type="email" placeholder="Email Address" className="w-full placeholder:text-white 
                        bg-transparent 
                        border-b-[1px] p-2 
                        focus:outline-none
                        "/>
                        <svg className="absolute top-1/2 right-2 transform -translate-y-1/2 w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                        </svg>

                    </div>
                </div>
                <div className="flex gap-48">
                    {footerContent.map((section, index) => (
                        <div className="flex flex-col gap-4" key={index}>
                            <h4>{section.title}</h4>
                            <ul>
                                {
                                    section.links.map((link, Linkindex) => (
                                        <li key={Linkindex}><a href="">{link}</a></li>
                                    ))
                                }
                            </ul>

                        </div>
                    ))}
                </div>
            </section>
            <footer className="h-[60px] bg-neutral-900 
            flex justify-between items-center 
            px-20 
            text-xs text-neutral-500">
                <p>BASIC/DEPT®, INC 10 - 24©</p>
                <p>EASY TO UNDERSTAND, IMPOSSIBLE TO IGNORE.™</p>
                <p><a href="">TERMS</a>, <a href="">PRIVACY POLICY</a></p>
            </footer>
        </div>
    )
}