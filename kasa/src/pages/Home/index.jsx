import AccomodationCard from '../../components/AccomodationCard'
import '../../styles/pages/Home.scss'
import AccomodationData from '../../datas/accomodations.json'
import Hero from '../../components/Hero'

function Home() {
  return (
    <main>
      <Hero title="Chez vous, partout et ailleurs" background="home" />
      <div className="accomodation-cards-container">
        {AccomodationData.map((accomodation) => (
          <AccomodationCard id={accomodation.id} key={accomodation.id} />
        ))}
      </div>
    </main>
  )
}

export default Home
