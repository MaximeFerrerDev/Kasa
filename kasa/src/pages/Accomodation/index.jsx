import { useParams } from 'react-router-dom'
import Slideshow from '../../components/Slideshow'
import '../../styles/pages/Accomodation.scss'
import GreyRatingStar from '../../assets/greyratingstar.svg'
import OrangeRatingStar from '../../assets/orangeratingstar.svg'
import DefaultHostPicture from '../../assets/defaulthostpicture.svg'

function Accomodation() {
  const { accomodationNumber } = useParams()
  return (
    <main>
      <p> This is the page of the accomodation n°:{accomodationNumber}</p>
      <Slideshow />
      <div className="accomodation-infos-container">
        <div className="accomodation-primary">
          <p className="accomodation-primary__title">
            Cozy loft on the Canal Saint-Martin
          </p>
          <p className="accomodation-primary__location">Paris, Ile-de-France</p>
          <div className="accomodation-primary__tags-container">
            <div>Cozy</div>
            <div>Canal</div>
            <div>Paris 10</div>
          </div>
        </div>
        <div className="accomodation-secondary">
          <div className="accomodation-secondary__host">
            <div className="accomodation-secondary__host__name">
              Alexandre Dumas
            </div>
            <img
              className="accomodation-secondary__host__picture"
              src={DefaultHostPicture}
              alt="default host"
            />
          </div>
          <div className="accomodation-secondary__rating">
            <img src={OrangeRatingStar} alt="rating star" />
            <img src={OrangeRatingStar} alt="rating star" />
            <img src={OrangeRatingStar} alt="rating star" />
            <img src={GreyRatingStar} alt="rating star" />
            <img src={GreyRatingStar} alt="rating star" />
          </div>
        </div>
      </div>
    </main>
  )
}

export default Accomodation
