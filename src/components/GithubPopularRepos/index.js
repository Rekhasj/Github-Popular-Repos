import {Component} from 'react'
import Loader from 'react-loader-spinner'
import LanguageFilterItem from '../LanguageFilterItem'
import RepositoryItem from '../RepositoryItem'
import './index.css'

const languageFiltersData = [
  {id: 'ALL', language: 'All'},
  {id: 'JAVASCRIPT', language: 'Javascript'},
  {id: 'RUBY', language: 'Ruby'},
  {id: 'JAVA', language: 'Java'},
  {id: 'CSS', language: 'CSS'},
]

class GithubPopularRepos extends Component {
  state = {repositoryList: [], isLanguage: 'ALL', isLoading: true}

  componentDidMount() {
    this.getRepositoryItem()
  }

  getRepositoryItem = async () => {
    const {isLanguage} = this.state

    const apiUrl = `https://apis.ccbp.in/popular-repos?language=${isLanguage}`
    const response = await fetch(apiUrl)
    const data = await response.json()
    const popularRepos = data.popular_repos
    console.log(data)

    const updatedRepositoryList = popularRepos.map(repository => ({
      avatarUrl: repository.avatar_url,
      forksCount: repository.forks_count,
      issuesCount: repository.issues_count,
      starsCount: repository.stars_count,
      name: repository.name,
      id: repository.id,
    }))

    this.setState({repositoryList: updatedRepositoryList, isLoading: false})
  }

  activeLanguage = id => {
    this.setState({isLanguage: id}, this.getRepositoryItem)
  }

  render() {
    const {repositoryList, isLanguage, isLoading} = this.state
    console.log(isLanguage)
    // testid="loader"
    return (
      <div className="github-popular-repos-container">
        <h1 className="popular-heading">Popular</h1>
        <ul>
          {languageFiltersData.map(eachLanguage => (
            <LanguageFilterItem
              languageDetails={eachLanguage}
              key={eachLanguage.id}
              activeLanguage={this.activeLanguage}
            />
          ))}
        </ul>

        {isLoading ? (
          <div testid="loader">
            <Loader type="ThreeDots" color="#0284c7" height={80} width={80} />
          </div>
        ) : (
          <ul className="repository-container">
            {repositoryList.map(eachRepository => (
              <RepositoryItem
                repositoryListDetails={eachRepository}
                key={eachRepository.id}
              />
            ))}
          </ul>
        )}
      </div>
    )
  }
}
export default GithubPopularRepos
