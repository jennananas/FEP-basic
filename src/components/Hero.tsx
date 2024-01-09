import { motion } from 'framer-motion';
import Header from './Header';
export default function Hero() {


    return (
        <div className='min-h-dvh min-w-full relative'>
            <video autoPlay muted loop className="absolute top-0 left-0 object-cover z-0 h-full w-full">
                <source src="src/assets/images/pexels_videos_1966382(2160p).mp4" type="video/mp4" />
            </video>
            <div className=" flex flex-col min-h-dvh" >
                <Header />
                <div id="content" className='relative grow'>
                    <motion.div className={`
                pointer-events-none
                absolute top-0 left-0
                
                `}

                    >
                        <div className='w-32 h-32 bg-neutral-50 rounded-full'>
                            <p className="flex justify-center items-center uppercase p-10 text-center font-bold">watch reel</p>
                        </div>
                        <p className='uppercase text-neutral-50 font-bold text-center'>basic/dept</p>
                    </motion.div>


                </div>

            </div>

        </div>



    )
}