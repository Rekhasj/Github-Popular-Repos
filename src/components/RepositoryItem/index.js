import './index.css'

const RepositoryItem = props => {
  const {repositoryListDetails} = props
  const {
    avatarUrl,
    forksCount,
    issuesCount,
    starsCount,
    name,
  } = repositoryListDetails

  return (
    <li className="repository-list">
      <img alt={name} className="avatar-image" src={avatarUrl} />
      <h1 className="name">{name}</h1>
      <div className="list-card">
        <img
          alt="stars"
          className="list-image"
          src="https://assets.ccbp.in/frontend/react-js/stars-count-img.png"
        />
        <p>{starsCount}</p>
      </div>
      <div className="list-card">
        <img
          alt="forks"
          className="list-image"
          src="https://assets.ccbp.in/frontend/react-js/forks-count-img.png"
        />
        <p>{forksCount}</p>
      </div>
      <div className="list-card">
        <img
          alt="open issues"
          className="list-image"
          src="https://assets.ccbp.in/frontend/react-js/issues-count-img.png"
        />
        <p>{issuesCount}</p>
      </div>
    </li>
  )
}
export default RepositoryItem
