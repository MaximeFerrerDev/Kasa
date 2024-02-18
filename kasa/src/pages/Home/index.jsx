import { Link } from 'react-router-dom'

function Home() {
  return (
    <>
      <h1>Hello 😊</h1>
      <p> This is the homepage</p>
      <Link to="/accomodation/42">Cliquez ici pour voir le logement 42</Link>
      <br />
      <Link to="/about">A propos</Link>
      <br />
      <Link to="/error">Error 404</Link>
    </>
  )
}

export default Home
