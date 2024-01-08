import Hero from "./components/Hero"
import Presentation from "./components/Presentation"
import ClientsPrez from "./components/ClientsPrez"
import Engagements from "./components/Engagements"
import Spotlight from "./components/Spotlight"
import News from "./components/News"
import Footer from "./components/Footer"
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
    <div className="flex flex-col gap-10">
      <Hero />
      <Presentation />
      <ClientsPrez />
      <Engagements />
      <Spotlight />
      <News />
      <Footer />
    </div>
  )
}

export default App
