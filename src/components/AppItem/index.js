// Write your code here
import './index.css'

const AppItem = props => {
  const {appDetails} = props
  const {appName, imageUrl, category} = appDetails
  return (
    <li className="app-item-card">
      <img src={imageUrl} className="app-img" alt={appName} />

      <p>{appName}</p>
    </li>
  )
}

export default AppItem
