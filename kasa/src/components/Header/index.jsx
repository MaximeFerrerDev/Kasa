import { Link } from 'react-router-dom'
import OrangeLogo from '../../assets/orangelogo.svg'
import '../../styles/components/Header.scss'

function Header() {
  return (
    <header className="header">
      <img className="header__logo" src={OrangeLogo} alt="Kasa logo" />
      <nav className="header__nav-container">
        <Link className="header__nav-container__link" to="/kasa/">
          Accueil
        </Link>
        <Link className="header__nav-container__link" to="/kasa/about">
          A propos
        </Link>
      </nav>
    </header>
  )
}

export default Header
