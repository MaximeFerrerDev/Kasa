import PrevButton from '../../assets/prevbutton.svg'
import NextButton from '../../assets/nextbutton.svg'
import '../../styles/components/Slideshow.scss'
import AccomodationData from '../../datas/accomodations.json'
import { useState } from 'react'

function Slideshow(props) {
  // Stores the current index of the slideshow
  const [currentIndex, setCurrentIndex] = useState(0)

  // Getting id from props and finding the corresponding data
  const id = props.id
  const accomodation = AccomodationData.find(
    (accomodation) => accomodation.id === id
  )

  // Setting the current index on the next slide or going back at the end
  const nextSlide = () => {
    if (currentIndex + 1 === accomodation.pictures.length) {
      setCurrentIndex(0)
    } else {
      setCurrentIndex((prev) => prev + 1)
    }
  }

  // Setting the current index on the previous slide or going forward at the beginning
  const prevSlide = () => {
    if (currentIndex === 0) {
      setCurrentIndex(accomodation.pictures.length - 1)
    } else {
      setCurrentIndex((prev) => prev - 1)
    }
  }

  return (
    <div className="slideshow-container">
      {/* Picture and number changing with each slide*/}

      {accomodation.pictures.map((value, index) => (
        <div
          className={`slide ${index === currentIndex ? 'active-slide' : ''}`}
          key={`${id}-${index}`}
        >
          <img className="slide__picture" src={value} alt={`accomodation`} />
          <p className="slide__number">
            {accomodation.pictures.length > 1
              ? `${index + 1}/${accomodation.pictures.length}`
              : ''}
          </p>
        </div>
      ))}

      {/* Fixed part for navigation */}
      {accomodation.pictures.length > 1 ? (
        <>
          <img
            className="slideshow-container__prev-button"
            src={PrevButton}
            alt="previous"
            onClick={() => prevSlide()}
          />
          <img
            className="slideshow-container__next-button"
            src={NextButton}
            alt="next"
            onClick={() => nextSlide()}
          />
        </>
      ) : (
        ''
      )}
    </div>
  )
}

export default Slideshow
