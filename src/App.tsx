import Hero from "./components/Hero"
import Presentation from "./components/Presentation"
import ClientsPrez from "./components/ClientsPrez"
import Engagements from "./components/Engagements"

function App() {

  return (
    <div className="flex flex-col gap-10">
      <Hero />
      <Presentation />
      <ClientsPrez />
      <Engagements />
    </div>
  )
}

export default App
