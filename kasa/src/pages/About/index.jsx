import CollapseBar from '../../components/CollapseBar'
import '../../styles/pages/About.scss'
import Hero from '../../components/Hero'

function About() {
  const shortText =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi.'

  const longText =
    'Ut velit mauris, egestas sed, gravida nec, ornare ut, mi. Aenean ut orci vel massa suscipit pulvinar. Nulla sollicitudin. Fusce varius, ligula non tempus aliquam, nunc turpis ullamcorper nibh, in tempus sapien eros vitae ligula. Pellentesque rhoncus nunc et augue. Integer id felis. Curabitur aliquet pellentesque diam. Integer quis metus vitae elit lobortis egestas. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Morbi vel erat non mauris convallis vehicula. Nulla et sapien. Integer tortor tellus, aliquam faucibus, convallis id, congue eu, quam. Mauris ullamcorper felis vitae erat. Proin feugiat, augue non elementum posuere, metus purus iaculis lectus, et tristique ligula justo vitae magna.'

  return (
    <main className="about-main">
      <Hero title="" background="about" />
      <div className="about-collapse-bar-container">
        <CollapseBar heading="Fiabilité" textContent={shortText} />
        <CollapseBar heading="Respect" textContent={longText} />
        <CollapseBar heading="Service" textContent={shortText} />
        <CollapseBar heading="Sécurité" textContent={longText} />
      </div>
    </main>
  )
}

export default About
