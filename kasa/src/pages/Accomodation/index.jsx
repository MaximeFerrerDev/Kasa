import { useParams } from 'react-router-dom'

function Accomodation() {
  const { accomodationNumber } = useParams()
  return (
    <>
      <h1>Hello 😊</h1>
      <p> This is the page of the accomodation n°:{accomodationNumber}</p>
    </>
  )
}

export default Accomodation
