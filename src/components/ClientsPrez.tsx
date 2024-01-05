import ClientCard from "./ClientCard"
import Client from "./interfaces/Client"

export default function ClientsPrez() {

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
    return (<div id="gallery" className="grid grid-cols-3 gap-5 px-20">
        {clients.map((client) => (
            <ClientCard key={client.name} client={client} />
        ))}

    </div>)
}