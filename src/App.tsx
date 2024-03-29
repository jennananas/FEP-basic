import Hero from "./components/Hero"
import Presentation from "./components/Presentation"
import Engagements from "./components/Engagements"
import Spotlight from "./components/Spotlight"
import News from "./components/News"
import Footer from "./components/Footer"
import Rewards from "./components/Rewards"
import Header from "./components/Header"
import { useEffect } from 'react'


function App() {

  useEffect(() => {
    (
      async () => {
        const LocomotiveScroll = (await import('locomotive-scroll')).default;
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const locomotiveScroll = new LocomotiveScroll();
      }
    )()
  }, [])

  return (
    <div className="flex flex-col">
      <Header />
      <Hero />
      <div className="relative top-[700px]">
        <Rewards />
        <Presentation />
        <Engagements />
        <Spotlight />
        <News />
        <Footer />
      </div>

    </div>
  )
}

export default App
