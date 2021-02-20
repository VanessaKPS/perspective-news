import React from 'react'
const reqCouSvgs = require.context('../../Assets/CountriesSVG', true, /\.svg$/)

const RequestedSearchTerms = (props) => {
    const { reqTerms, newSearch, categoryImages } = props
    const { keywords, limit, sort, categories, countries, languages } = reqTerms
    let keywordsArray = keywords
    if (keywords === '') {
        keywordsArray = null
    } else {
        keywordsArray = keywords.split(',')
    }

    return (
        <div className='search-wrapper'>
            <div className='search-params-wrapper'>
                <h1>News & Articles for</h1>
                <div className='search-term-wrapper'>
                    {keywordsArray === null
                        ? null
                        : keywordsArray.map((keywords) => (
                              <div className='search-params-text keywords'>
                                  {keywords}
                              </div>
                          ))}

                    <div
                        className={limit ? 'search-params-text limit' : 'hide'}
                    >
                        {limit}
                    </div>
                    <div className={sort ? 'search-params-text sort' : 'hide'}>
                        {sort}
                    </div>

                    {categories.map((category) => {
                        return (
                            <div
                                className='search-params-img'
                                key={category + 1}
                            >
                                <img
                                    src={
                                        categoryImages(`./${category}.svg`)
                                            .default
                                    }
                                    alt='country'
                                ></img>
                            </div>
                        )
                    })}
                    {countries.map((country) => {
                        return (
                            <div
                                className='search-params-img'
                                key={country + 1}
                            >
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
        </div>
    )
}

export default RequestedSearchTerms
