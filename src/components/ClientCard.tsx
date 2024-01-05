import Client from "./interfaces/Client";

interface ClientCardProps {
    client: Client;
}

export default function ClientCard({ client }: ClientCardProps) {
    return (
        <div className="flex flex-col gap-2">
            <div className="h-[720px]">
                <img src={client.thumb} alt="" className="h-full w-full" />
            </div>
            <h2 className="uppercase font-heading text-xl">{client.name}</h2>
            <p>{client.description}</p>
        </div>
    )
}