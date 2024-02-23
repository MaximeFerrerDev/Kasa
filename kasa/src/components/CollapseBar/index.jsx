import CollapseIcon from '../../assets/collapseicon.svg'
import '../../styles/components/CollapseBar.scss'

function CollapseBar() {
  return (
    <div>
      <button className="collapse-bar">
        <p className="collapse-bar__heading">Heading</p>
        <img
          className="collapse-bar__icon"
          src={CollapseIcon}
          alt="collapse icon"
        />
      </button>
      <div className="collapse-content">
        <p className="collapse-content__text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non
          risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec,
          ultricies sed, dolor. Cras elementum ultrices diam.
        </p>
      </div>
    </div>
  )
}

export default CollapseBar
