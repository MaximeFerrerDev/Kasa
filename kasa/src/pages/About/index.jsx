import CollapseBar from '../../components/CollapseBar'
import '../../styles/About.scss'
import '../../styles/CSSReset.scss'

function About() {
  return (
    <main className="about-main">
      <div className="about-hero"></div>
      <CollapseBar />
      <CollapseBar />
      <CollapseBar />
      <CollapseBar />
    </main>
  )
}

export default About
