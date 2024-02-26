import { useParams } from 'react-router-dom'
import Slideshow from '../../components/Slideshow'
import '../../styles/pages/Accomodation.scss'
import GreyRatingStar from '../../assets/greyratingstar.svg'
import OrangeRatingStar from '../../assets/orangeratingstar.svg'
import DefaultHostPicture from '../../assets/defaulthostpicture.svg'
import CollapseBar from '../../components/CollapseBar'

function Accomodation() {
  const { accomodationNumber } = useParams()
  const shortText =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi.'

  return (
    <main className="accomodation-main">
      <Slideshow id="c67ab8a7" />
      <div className="accomodation-infos-container">
        <div className="accomodation-primary">
          <p className="accomodation-primary__title">
            Cozy loft on the Canal Saint-Martin n°{accomodationNumber}
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
        <div className="accomodation-collapse-bar-container">
          <CollapseBar heading="Description" textContent={shortText} />
          <CollapseBar heading="Equipements" textContent={shortText} />
        </div>
      </div>
    </main>
  )
}

export default Accomodation
