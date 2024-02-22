import CollapseIcon from '../../assets/collapseicon.svg'
import '../../styles/CollapseBar.scss'

function CollapseBar() {
  return (
    <div className="collapse-bar">
      <p className="collapse-bar__heading">Heading</p>
      <img
        className="collapse-bar__icon"
        src={CollapseIcon}
        alt="collapse icon"
      />
    </div>
  )
}

export default CollapseBar
