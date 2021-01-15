import React from 'react'
const reqCouSvgs = require.context('../Assets/CountriesSVG', true, /\.svg$/)

const RequestedSearchTerms = (props) => {
    const { reqTerms, newSearch, categoryImages } = props
    const { keyword, limit, sort, categories, countries, languages } = reqTerms
    return (
        <div className='search-params-wrapper'>
            <p>Displaying articles for:</p>
            <div className={keyword ? 'search-params' : 'hide'}>{keyword}</div>
            <div className={limit ? 'search-params' : 'hide'}>{limit}</div>
            <div className={sort ? 'search-params' : 'hide'}>{sort}</div>

            {categories.map((category) => {
                return (
                    <div className='search-params' key={category + 1}>
                        <img
                            src={categoryImages(`./${category}.svg`).default}
                            alt='country'
                        ></img>
                    </div>
                )
            })}
            {countries.map((country) => {
                return (
                    <div className='search-params' key={country + 1}>
                        <img
                            src={reqCouSvgs(`./${country}.svg`).default}
                            alt='country'
                        ></img>
                    </div>
                )
            })}
            {languages.map((language) => {
                return (
                    <div className='search-params' key={language + 1}>
                        {language}
                    </div>
                )
            })}

            <p>Not found what you're looking for? </p>
            <button onClick={newSearch}>Try again</button>
        </div>
    )
}

export default RequestedSearchTerms
