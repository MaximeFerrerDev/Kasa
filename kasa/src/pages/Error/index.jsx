import '../../styles/Error.scss'
import { Link } from 'react-router-dom'

function Error() {
  return (
    <div className="error-container">
      <h1 className="error-title">404</h1>
      <p className="error-description">
        Oups! La page que vous demandez n'existe pas
      </p>
      <Link to="/" className="error-linkback">
        Retourner sur la page d'accueil
      </Link>
    </div>
  )
}

export default Error
