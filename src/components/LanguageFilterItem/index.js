import './index.css'

const LanguageFilterItem = props => {
  const {languageDetails, activeLanguage} = props
  const {language, id} = languageDetails

  const onClickLanguauge = () => {
    activeLanguage(id)
  }

  return (
    <button type="button" className="item-button" onClick={onClickLanguauge}>
      {language}
    </button>
  )
}

export default LanguageFilterItem
