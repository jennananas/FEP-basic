export default function Spotlight() {
    return (
        <div className="flex p-20 text-[#f9cdcd] bg-[#252422]">
            <div id="left" className="w-1/2">
                <p className="text-[100px] font-bold">BASIC/DEPT® HELPS BRANDS ● CONNECT W/ CULTURE</p>
                <p>ADWEEK AGENCY SPOTLIGHT</p>
                <button className=" uppercase text-left text-xs border border-[#f9cdcd] w-max p-2 rounded-3xl mt-10">About Us</button>
            </div>
            <div id="right">
                <video autoPlay muted loop className="w-full h-full">
                    <source src="https://cdn.sanity.io/files/8nn8fua5/production/e4a840ba8dfeded08ac4d0ba6e930be56fc68e3b.mp4" type="video/mp4" />
                </video>
            </div>
        </div>
    )
}