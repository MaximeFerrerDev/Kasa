import AccomodationCard from '../../components/AccomodationCard'
import '../../styles/pages/Home.scss'

// Need to find a solution to get a pretty display on all desktop sizes

function Home() {
  return (
    <>
      <div className="home-hero">
        <h1 className="home-hero__title">Chez vous, partout et ailleurs</h1>
      </div>
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
