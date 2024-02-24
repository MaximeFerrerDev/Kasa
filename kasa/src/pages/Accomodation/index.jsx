import { useParams } from 'react-router-dom'
import Slideshow from '../../components/Slideshow'

function Accomodation() {
  const { accomodationNumber } = useParams()
  return (
    <main>
      <h1>Hello 😊</h1>
      <p> This is the page of the accomodation n°:{accomodationNumber}</p>
      <Slideshow />
    </main>
  )
}

export default Accomodation
