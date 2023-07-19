// Write your code here.
import './index.css'

const Seasons = props => {
  const {bannerDetails, key} = props
  //   console.log(bannerDetails)
  const {headerText, description, className} = bannerDetails
  console.log(className)
  return (
    <li className={`${className} banner-card-item`}>
      <div className="bg-container">
        <h1 className="heading">{headerText}</h1>
        <p className="para"> {description}</p>
        <button type="button" className="button-1">
          Show More
        </button>
      </div>
    </li>
  )
}

export default Seasons
