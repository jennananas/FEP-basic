export default function Presentation() {

    return (
        <div className="min-w-full p-20 relative top-52">
            <div className="grid grid-cols-2 gap-x-48">
                <div className="flex flex-col justify-between">
                    <p className="text-[36px] leading-tight">
                        BASIC/DEPT® is a global branding and digital design agency building products, services, and eCommerce experiences that turn cultural values into company value.
                    </p>
                    <button className="text-neutral-950 uppercase text-left text-xs border border-neutral-950 w-max p-2 rounded-3xl">See the work</button>

                </div>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 307 100"><path d="M0 86.8h41.9c19.6 0 31.3-8.3 31.3-24.5 0-10.2-6-16.2-15.1-19.2 7.2-3.4 12.1-9.4 12.1-19.2 0-12.5-7.9-21.5-27.2-21.5H0v84.4zm47.2-58.5c0 5.7-3.8 8.7-11.7 8.7H23V19.6h12.5c8.3 0 11.7 3 11.7 8.7zm2.6 32.5c0 6-3.8 8.7-12.1 8.7H22.6V51.7h15.1c8.3.4 12.1 3 12.1 9.1zM128.3 0h-18.9L73.6 100h18.5L128.3 0zm88.3 44.5c0-23.8-12.8-42.3-46-42.3h-35.5v84.5h35.5c32.8.1 46-18.4 46-42.2zm-24.1 0c0 16.6-9.4 22.6-22.3 22.6h-12.1V21.9h12.1c12.8 0 22.3 6 22.3 22.6zM224.2 46.4c0 22.6 18.5 41.1 41.1 41.1s41.1-18.5 41.1-41.1-18.5-41.1-41.1-41.1c-22.7 0-41.1 18.5-41.1 41.1zm7.9 0c0-18.9 14.7-34 33.2-34 18.5 0 33.2 15.1 33.2 34s-15.1 34-33.2 34c-18.5-.4-33.2-15.5-33.2-34zM246 66.8h12.8v-14h7.5l7.5 14h14l-9.4-16.6c4.2-1.9 7.5-6.8 7.5-12.1 0-9.4-6-14-16.6-14h-23.8v42.6h.5zm26.8-28.7c0 3.4-2.3 4.9-6.4 4.9h-7.9v-9h7.9c4.5.3 6.4 1.1 6.4 4.1z"></path></svg>
            </div>
            <ClientsPresentation />

        </div>
    )
}

interface Client {
    name: string;
    thumb: string;
    description: string
}

interface ClientCardProps {
    client: Client;
}

function ClientCard({ client }: ClientCardProps) {
    return (
        <div className="flex flex-col gap-2 group">
            <div className="h-[720px] overflow-hidden">
                <img src={client.thumb} alt="" className="h-full w-full scale-105 hover:scale-100 ease-linear duration-300" />
            </div>
            <h2 className="uppercase font-heading text-xl group-hover:underline">{client.name}</h2>
            <p className="underline-none">{client.description}</p>
        </div>
    )
}

function ClientsPresentation() {

    const clients: Client[] = [{
        name: "Patagonia",
        description: "AN ECOMMERCE EXPERIENCE DRIVEN BY PATAGONIA’S BRAND MISSION",
        thumb: "src/assets/images/Patagonia.jpg"
    }, {
        name: "Wilson",
        description: "A CENTURY-OLD SPORTS BRAND FINDING ITS PLACE IN CULTURE",
        thumb: "src/assets/images/Wilson.jpg"
    }, {
        name: "Google Store",
        description: "AN ECOMMERCE EXPERIENCE HELPING GOOGLE BRING ITS HARDWARE TO PEOPLE ACROSS THE GLOBE",
        thumb: "src/assets/images/GoogleStore.jpg"
    }]
    return (<div id="gallery" className="grid grid-cols-3 gap-5 py-20 border-b-[1px]">
        {clients.map((client) => (
            <ClientCard key={client.name} client={client} />
        ))}

    </div>)
}