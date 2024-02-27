import AccomodationCard from '../../components/AccomodationCard'
import '../../styles/pages/Home.scss'
import AccomodationData from '../../datas/accomodations.json'

function Home() {
  return (
    <>
      <div className="home-hero">
        <h1 className="home-hero__title">Chez vous, partout et ailleurs</h1>
      </div>
      <div className="accomodation-cards-container">
        {AccomodationData.map((accomodation) => (
          <AccomodationCard id={accomodation.id} key={accomodation.id} />
        ))}
      </div>
    </>
  )
}

export default Home
