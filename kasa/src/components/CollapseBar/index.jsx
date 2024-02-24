import CollapseIcon from '../../assets/collapseicon.svg'
import '../../styles/components/CollapseBar.scss'
import { useState } from 'react'

function CollapseBar(props) {
  const heading = props.heading
  const textContent = props.textContent

  const [isActive, setActive] = useState(false)

  const handleClick = (event) => {
    // Setting the max-height manually from the scroll height to fit every text
    let content = event.target.nextElementSibling
    if (content.style.maxHeight) {
      content.style.maxHeight = null
    } else {
      content.style.maxHeight = content.scrollHeight + 'px'
    }
    // Toggling the class "active" with the rest of the animation in CSS
    setActive(!isActive)
  }

  return (
    <div>
      <button
        className={`collapse-bar ${isActive ? 'active' : ''}`}
        onClick={(event) => handleClick(event)}
      >
        <p className="collapse-bar__heading">{heading}</p>
        <img
          className="collapse-bar__icon"
          src={CollapseIcon}
          alt="collapse icon"
        />
      </button>
      <div className="collapse-content">
        <p className="collapse-content__text">{textContent}</p>
      </div>
    </div>
  )
}

export default CollapseBar
