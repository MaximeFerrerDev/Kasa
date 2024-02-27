import '../../styles/components/Hero.scss'
import HomeHeroBackground from '../../assets/homeherobackground.png'
import AboutHeroBackground from '../../assets/aboutherobackground.png'

function Hero(props) {
  // Putting the home background by default and changing it with props
  let background = HomeHeroBackground
  if (props.background === 'about') {
    background = AboutHeroBackground
  }

  return (
    <div className="hero">
      <img className="hero__background" src={background} alt="landscape" />
      <h1 className="hero__title">{props.title}</h1>
    </div>
  )
}

export default Hero
