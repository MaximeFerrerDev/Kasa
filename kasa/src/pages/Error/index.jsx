import '../../styles/pages/Error.scss'
import { Link } from 'react-router-dom'

function Error() {
  return (
    <div className="error">
      <h1 className="error__title">404</h1>
      <p className="error__description">
        Oups! La page que vous demandez n'existe pas
      </p>
      <Link to="/kasa/" className="error__linkback">
        Retourner sur la page d'accueil
      </Link>
    </div>
  )
}

export default Error
