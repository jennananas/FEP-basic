
export default function News() {
    const news: News[] = [
        {
            src: "https://cdn.sanity.io/images/8nn8fua5/production/162fd00622e522dddacedbb98f34181c860a6bbd-1000x734.png?w=720&fm=webp&q=65",
            title: "The new roadmap for auto brands",
            date: "8.1.23"
        }, {
            src: "https://cdn.sanity.io/images/8nn8fua5/production/662f84ebd1a959663ce02b538af1acef645219b6-2000x1468.png?w=720&fm=webp&q=65",
            title: "breaking through the branding blahs",
            date: "6.16.23"
        },
        {
            src: "https://cdn.sanity.io/images/8nn8fua5/production/8d1b579ad65366a487e57e88035fbd660124ee38-870x544.png?w=720&fm=webp&q=65",
            title: "Ryan Parkhurst moderates talk on “The art and science of brand purpose and creativity”",
            date: "6.5.23"
        },
        {
            src: "https://cdn.sanity.io/images/8nn8fua5/production/7bfa1142f0f770512f035212055fb32dedc8b75b-1000x734.png?w=720&fm=webp&q=65",
            title: "John Waters, Bare Walls, and Sparking Creativity",
            date: "5.15.23"
        },
        {
            src: "https://cdn.sanity.io/images/8nn8fua5/production/7015b4f1394f3902d211e59c17901811843cda0e-870x544.png?w=720&fm=webp&q=65",
            title: "BASIC/DEPT® is the 27th Webby Awards: Agency of the Year",
            date: "4.25.23"
        }
    ]
    return (
        <div className="px-20 flex flex-col gap-10 py-40  relative top-52">
            <header className="flex justify-between">
                <h2>Featured News</h2>
                <button>View All</button>
            </header>
            <section className="flex flex-col gap-8">
                {news.map((newsItem, index) => (
                    <NewsItem key={index} {...newsItem} />
                ))}

            </section>
        </div>
    )
}

interface News {
    src: string;
    title: string;
    date: string;
}

function NewsItem({ src, title, date }: News) {

    return (
        <div className="grid grid-cols-[500px_1fr_48px] grid-rows-2 border-t-[1px] pt-6 gap-4 group cursor-pointer">
            <div className="w-[500px] row-span-2 overflow-hidden">
                <img src={src} alt="" className="h-full w-full scale-105 group-hover:scale-100 ease-linear duration-300" />
            </div>
            <h3 className="uppercase text-[48px] group-hover:underline underline-offset-4">{title}</h3>
            <span className=" group-hover:animate-slide">
                <svg className="w-12" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                </svg>

            </span>
            <p className="self-end"><strong>PRESS</strong> {date}</p>

        </div>
    )
}