import EngagementCard from "./EngagementCard"
import Client from "./interfaces/ClientInterface";
import Slider from 'react-slick'
import { useState } from 'react'




export default function Engagements() {

    const engagements: Client[] = [
        {
            name: "Google",
            thumb: "https://cdn.sanity.io/images/8nn8fua5/production/7121121ed910b145bdb6df487966a7888c2eb7c3-272x92.svg?w=720&fm=webp&q=65",
            description: "Our embedded partnership with Google is as deep as it gets. We’re the lead creative agency for Google Store and provide strategy, design, and prototyping to other divisions."
        },
        {
            name: "KFC",
            thumb: "https://cdn.sanity.io/images/8nn8fua5/production/09a68ec6d03469bfd5bbb9726a58225acb900ae2-128x42.svg?w=720&fm=webp&q=65",
            description: "An award-winning global, digital transformation engagement spanning eCommerce, mobile app, and new drive thru experiences. Bringing KFC’s brand story to life while making it easier for customers to buy chicken. Learn more about our partnership "
        },
        {
            name: "Wilson",
            thumb: "https://cdn.sanity.io/images/8nn8fua5/production/fbb650ce74c1849cb4da2d9951fad89149494cc9-171x42.svg?w=720&fm=webp&q=65",
            description: "A reimagining of Wilson’s brand visual identity, and brand campaign, to support a new product drop and the launch of the first brick and mortar retail location in the brand’s 108-year history."
        }, {
            name: "AT&T",
            thumb: "https://cdn.sanity.io/images/8nn8fua5/production/b2624b2d49d9c14eec0cd30203c5eec0331eac42-42x42.svg?w=720&fm=webp&q=65",
            description: "Redesigning the digital flagship for the largest telecommunications company in the world. Creating frictionless paths to purchase for a wide range of consumers across a vast portfolio of products and services."
        },
        {
            name: "Patagonia",
            thumb: "https://cdn.sanity.io/images/8nn8fua5/production/8dd2f090726c8d5befeaa2924b44678e69452945-1024x200.svg?w=720&fm=webp&q=65",
            description: "Ongoing partnership providing strategy, branding, experience design, and development focused on bringing their mission and offerings to consumers through brand-led programs and platforms. "
        }
    ]
    const settings = {
        arrows: false,
        infinite: false,
        className: "center",
        centerPadding: "60px",
        swipeToSlide: true,
        speed: 500,
        slidesToShow: 3,
        afterChange: (current: number) => {
            setProgress(100 / (engagements.length - slideToShow + 1) * (current + 1))
        }
    }
    const slideToShow = 3 /* Use useState for responsive */
    const [progress, setProgress] = useState(100 / (engagements.length - slideToShow + 1))


    return (
        <div className="min-w-full px-20">
            <h2 className="pb-20">Featured Engagements</h2>
            <div className="relative">
                <Slider {...settings}>
                    {engagements.map((engagement, index) => <EngagementCard engagement={engagement} key={index} />)}
                </Slider>
                <div className="h-[2px] bg-black-500 w-full absolute -bottom-10 left-0">
                    <div className="bg-black-950 absolute h-full transition-all" style={{ width: `${progress}%` }}></div>
                </div>

            </div>




        </div>
    )
}
