import Client from "./interfaces/Client";

interface ClientCardProps {
    client: Client;
}

export default function ClientCard({ client }: ClientCardProps) {
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