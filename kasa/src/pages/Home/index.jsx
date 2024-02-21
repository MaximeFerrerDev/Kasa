import AccomodationCard from '../../components/Accomodation Card'
import Hero from '../../components/Hero'
import '../../styles/Home.scss'

// Need to find a solution to get a pretty display on all desktop sizes

function Home() {
  return (
    <>
      <Hero />
      <div className="accomodation-cards-container">
        <AccomodationCard />
        <AccomodationCard />
        <AccomodationCard />
        <AccomodationCard />
        <AccomodationCard />
        <AccomodationCard />
      </div>
    </>
  )
}

export default Home
