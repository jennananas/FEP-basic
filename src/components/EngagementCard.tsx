import Client from "./interfaces/ClientInterface";

interface EngagementProps {
    engagement: Client
}

export default function EngagementCard({ engagement }: EngagementProps) {
    return (
        <div className="flex-shrink-0 grid grid-rows-[4fr, 1fr, 1fr] gap-10 mr-28">
            <img src={engagement.thumb} alt="logo" className="h-10 object-contain" />
            <h3 className="uppercase font-bold relative text-lg before:content-[''] before:absolute before:top-[-25px] before:left-0 before:w-5 before:h-[2px] before:bg-neutral-950">{engagement.name}</h3>
            <p>{engagement.description}</p>
        </div>
    )
}