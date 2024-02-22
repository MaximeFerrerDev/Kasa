import { Link } from 'react-router-dom'
import OrangeLogo from '../../assets/orangelogo.svg'
import '../../styles/Header.scss'
import '../../styles/CSSReset.scss'

function Header() {
  return (
    <header>
      <img className="header__logo" src={OrangeLogo} alt="Kasa logo" />
      <nav className="header__nav-container">
        <Link className="header__nav-container__link" to="/">
          Accueil
        </Link>
        <Link className="header__nav-container__link" to="/about">
          A propos
        </Link>
      </nav>
    </header>
  )
}

export default Header
