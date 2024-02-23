import WhiteLogo from '../../assets/whitelogo.svg'
import '../../styles/components/Footer.scss'

function Footer() {
  return (
    <footer className="footer">
      <img className="footer__logo" src={WhiteLogo} alt="Kasa logo" />
      <p className="footer__copyright">© 2020 Kasa. All rights reserved</p>
    </footer>
  )
}

export default Footer
