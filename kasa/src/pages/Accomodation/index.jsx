import { useParams } from 'react-router-dom'
import Slideshow from '../../components/Slideshow'
import '../../styles/pages/Accomodation.scss'
import GreyRatingStar from '../../assets/greyratingstar.svg'
import OrangeRatingStar from '../../assets/orangeratingstar.svg'
import DefaultHostPicture from '../../assets/defaulthostpicture.svg'
import CollapseBar from '../../components/CollapseBar'
import AccomodationData from '../../datas/accomodations.json'

function Accomodation() {
  //Getting id from params and finding the corresponding data
  const { id } = useParams()
  const accomodation = AccomodationData.find(
    (accomodation) => accomodation.id === id
  )

  return (
    <main className="accomodation-main">
      <Slideshow id={id} />
      <div className="accomodation-infos-container">
        <div className="accomodation-primary">
          <p className="accomodation-primary__title">{accomodation.title}</p>
          <p className="accomodation-primary__location">
            {accomodation.location}
          </p>
          <div className="accomodation-primary__tags-container">
            {accomodation.tags.map((value, index) => (
              <div key={`${value}-tag-${index}`}>{value}</div>
            ))}
          </div>
        </div>
        <div className="accomodation-secondary">
          <div className="accomodation-secondary__host">
            <div className="accomodation-secondary__host__name">
              {accomodation.host.name}
            </div>
            <img
              className="accomodation-secondary__host__picture"
              src={
                accomodation.host.picture
                  ? accomodation.host.picture
                  : DefaultHostPicture
              }
              alt="host"
            />
          </div>
          <div className="accomodation-secondary__rating">
            <img
              src={accomodation.rating <= 0 ? GreyRatingStar : OrangeRatingStar}
              alt="rating star"
            />
            <img
              src={accomodation.rating <= 1 ? GreyRatingStar : OrangeRatingStar}
              alt="rating star"
            />
            <img
              src={accomodation.rating <= 2 ? GreyRatingStar : OrangeRatingStar}
              alt="rating star"
            />
            <img
              src={accomodation.rating <= 3 ? GreyRatingStar : OrangeRatingStar}
              alt="rating star"
            />
            <img
              src={accomodation.rating <= 4 ? GreyRatingStar : OrangeRatingStar}
              alt="rating star"
            />
          </div>
        </div>
        <div className="accomodation-collapse-bar-container">
          <CollapseBar
            heading="Description"
            textContent={accomodation.description}
          />
          <CollapseBar
            heading="Equipements"
            textContent={accomodation.equipments.join(`
            `)}
          />
        </div>
      </div>
    </main>
  )
}

export default Accomodation
