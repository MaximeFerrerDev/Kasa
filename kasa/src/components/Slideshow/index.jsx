import PrevButton from '../../assets/prevbutton.svg'
import NextButton from '../../assets/nextbutton.svg'
import '../../styles/components/Slideshow.scss'

function Slideshow() {
  return (
    <div className="slideshow-container">
      {/* Example of one slide, need to generate with map instead */}
      <div className="slide">
        <img
          className="slide__picture"
          src="https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-1.jpg"
          alt="example pic"
        />
        <p className="slide__number">1/4</p>
      </div>
      {/* This part doesn't change with slides */}
      <img
        className="slideshow-container__prev-button"
        src={PrevButton}
        alt="previous"
      />
      <img
        className="slideshow-container__next-button"
        src={NextButton}
        alt="next"
      />
    </div>
  )
}

export default Slideshow
