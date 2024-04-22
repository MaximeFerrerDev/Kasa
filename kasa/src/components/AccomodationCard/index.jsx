import '../../styles/components/AccomodationCard.scss'
import { Link } from 'react-router-dom'
import AccomodationData from '../../datas/accomodations.json'

function AccomodationCard(props) {
  const id = props.id
  const accomodation = AccomodationData.find(
    (accomodation) => accomodation.id === id
  )

  return (
    <Link to={`/kasa/accomodation/${id}`} key={id}>
      <div className="accomodation-card">
        <img
          className="accomodation-card__picture"
          src={accomodation.pictures[0]}
          alt="accomodation"
        />
        <p className="accomodation-card__title">{accomodation.title}</p>
      </div>
    </Link>
  )
}

export default AccomodationCard
