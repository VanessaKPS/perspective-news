import React from 'react'
const reqCouSvgs = require.context('../Assets/CountriesSVG', true, /\.svg$/)

const RequestedSearchTerms = (props) => {
    const { reqTerms, newSearch, categoryImages } = props
    const { keyword, limit, sort, categories, countries, languages } = reqTerms
    let keywordArray = keyword
    if (keyword === null) {
        keywordArray = null
    } else {
        keywordArray = keyword.split(',')
    }

    return (
        <div className='search-params-wrapper'>
            <h1>News & Articles for</h1>
            <div className='search-term-wrapper'>
                {keywordArray === null
                    ? null
                    : keywordArray.map((keyword) => (
                          <div className='search-params-text keyword'>
                              {keyword}
                          </div>
                      ))}

                <div className={limit ? 'search-params-text limit' : 'hide'}>
                    {limit}
                </div>
                <div className={sort ? 'search-params-text sort' : 'hide'}>
                    {sort}
                </div>

                {categories.map((category) => {
                    return (
                        <div className='search-params-img' key={category + 1}>
                            <img
                                src={
                                    categoryImages(`./${category}.svg`).default
                                }
                                alt='country'
                            ></img>
                        </div>
                    )
                })}
                {countries.map((country) => {
                    return (
                        <div className='search-params-img' key={country + 1}>
                            <img
                                src={reqCouSvgs(`./${country}.svg`).default}
                                alt='country'
                            ></img>
                        </div>
                    )
                })}
                {languages.map((language) => {
                    return (
                        <div
                            className='search-params-text language'
                            key={language + 1}
                        >
                            {language}
                        </div>
                    )
                })}
            </div>

            <p>Not found what you're looking for? </p>
            <button className='btn' onClick={newSearch}>
                Try again
            </button>
        </div>
    )
}

export default RequestedSearchTerms
