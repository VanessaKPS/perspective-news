import React, { useState } from 'react'
import { getRequestedNews } from './Data'
import {
    SortOptions,
    SearchLanguages,
    SearchCategories,
    SearchCountries,
} from './SearchOptions'
import '../styles.css'
const reqSvgs = require.context('../Assets/CountriesSVG', true, /\.svg$/)

const Explore = () => {
    const [searchParams, setSearchParams] = useState({
        keyword: '',
        limit: '',
        sort: '',
        categories: [],
        countries: [],
        languages: [],
    })
    const [reqNewsStories, setReqNewsStories] = useState([])
    const [isClicked, setIsClicked] = useState(false)
    const [reqNewSearch, setReqNewSearch] = useState(false)

    const getRequestedLiveNews = async (searchTerms) => {
        try {
            const result = await getRequestedNews(searchTerms)
            setReqNewsStories(result.data)
            console.log(`the result.data is :${result.data}`)
        } catch (err) {
            console.log(err)
        }
    }
    const handleClick = () => {
        // setReqNewSearch((prevValue) => !prevValue)
        setIsClicked((prevValue) => !prevValue)
        setSearchParams({
            keyword: '',
            limit: '',
            sort: '',
            categories: [],
            countries: [],
            languages: [],
        })
    }
    const handleSubmit = (e) => {
        setReqNewSearch((prevValue) => !prevValue)
        setIsClicked((prevValue) => !prevValue)
        getRequestedLiveNews(searchParams)
        e.preventDefault()
    }

    const handleInputChange = (e) => {
        if (e.target.name === 'keyword') {
            setSearchParams((prevValues) => ({
                ...prevValues,
                keyword: e.target.value,
            }))
        }
        if (e.target.name === 'limit') {
            setSearchParams((prevValues) => ({
                ...prevValues,
                limit: e.target.value,
            }))
        }
    }
    const handleSelectChange = (name, option) => {
        switch (name) {
            case 'sort':
                setSearchParams((prevValues) => ({
                    ...prevValues,
                    sort: option,
                }))

                break
            case 'categories':
                if (option === null) {
                    setSearchParams((prevValues) => ({
                        ...prevValues,
                        categories: [],
                        //
                    }))
                } else {
                    setSearchParams((prevValues) => ({
                        ...prevValues,
                        categories: option,
                        //
                    }))
                }

                break
            case 'countries':
                if (option === null) {
                    setSearchParams((prevValues) => ({
                        ...prevValues,
                        countries: [],
                        //
                    }))
                } else {
                    setSearchParams((prevValues) => ({
                        ...prevValues,
                        countries: option,
                        //
                    }))
                }
                break
            case 'languages':
                if (option === null) {
                    setSearchParams((prevValues) => ({
                        ...prevValues,
                        languages: [],
                        //
                    }))
                } else {
                    setSearchParams((prevValues) => ({
                        ...prevValues,
                        languages: option,
                        //
                    }))
                }
                break
            default:
                console.log('Sorry, there is no matching case')
        }
    }

    // const allSvgFilePaths = reqSvgs.keys()
    // const imagePath = allSvgFilePaths[0]
    // const image = reqSvgs(imagePath)
    // console.log(imagePath)
    // console.log(allSvgFilePaths)
    // console.log(image.default)

    return (
        <div>
            {/* <img src={image.default} alt='pic' /> */}
            <div className={isClicked ? 'hide' : 'explore-options-form'}>
                <form onSubmit={handleSubmit}>
                    <label htmlFor='keyword'>Keywords</label>
                    <input
                        className='keyword-input'
                        type='text'
                        id='keyword'
                        name='keyword'
                        value={searchParams.keyword}
                        onChange={handleInputChange}
                        placeholder='Separate multiple keywords with ","'
                    ></input>
                    <br />
                    <label htmlFor='limit'>No. of articles</label>
                    <input
                        className='limit-input'
                        type='text'
                        id='limit'
                        name='limit'
                        value={searchParams.limit}
                        onChange={handleInputChange}
                        placeholder='Maximum of 100 articles'
                    ></input>
                    <br />
                    <label htmlFor='sort-select'>Sort by</label>
                    <SortOptions
                        name='sort'
                        id='sort-select'
                        status={reqNewSearch}
                        // value={searchParams.sort}
                        chosen={handleSelectChange}
                    ></SortOptions>

                    <br />
                    <label htmlFor='categories-select'>Categories</label>
                    <SearchCategories
                        name='categories'
                        id='categories-select'
                        status={reqNewSearch}
                        // selected={searchParams.categories}
                        chosen={handleSelectChange}
                    ></SearchCategories>
                    <br />
                    <label htmlFor='countries-select'>Countries</label>
                    <SearchCountries
                        name='countries'
                        id='countries-select'
                        status={reqNewSearch}
                        // value={searchParams.countries}
                        chosen={handleSelectChange}
                    ></SearchCountries>

                    <br />
                    <label htmlFor='languages-select'>Languages</label>
                    <SearchLanguages
                        name='languages'
                        id='languages-select'
                        status={reqNewSearch}
                        // value={searchParams.languages}
                        chosen={handleSelectChange}
                    ></SearchLanguages>

                    <br />
                    <input type='submit' value='Submit'></input>
                </form>
            </div>
            <div className={isClicked ? 'news-wrapper' : 'hide'}>
                <div className='search-params-wrapper'>
                    <p>Displaying articles for:</p>
                    <div
                        className={
                            searchParams.keyword ? 'search-params' : 'hide'
                        }
                    >
                        {searchParams.keyword}
                    </div>
                    <div
                        className={
                            searchParams.limit ? 'search-params' : 'hide'
                        }
                    >
                        {searchParams.limit}
                    </div>
                    <div
                        className={searchParams.sort ? 'search-params' : 'hide'}
                    >
                        {searchParams.sort}
                    </div>

                    {searchParams.categories.map((category) => {
                        return (
                            <div className='search-params' key={category + 1}>
                                {category}
                            </div>
                        )
                    })}
                    {searchParams.countries.map((country) => {
                        return (
                            <div className='search-params' key={country + 1}>
                                <img
                                    src={reqSvgs(`./${country}.svg`).default}
                                    alt='country'
                                ></img>
                            </div>
                        )
                    })}
                    {searchParams.languages.map((language) => {
                        return (
                            <div className='search-params' key={language + 1}>
                                {language}
                            </div>
                        )
                    })}

                    <p>Not found what you're looking for? </p>
                    <button onClick={handleClick}>Try again</button>
                </div>
                {reqNewsStories.map((newsStory, index) => {
                    const {
                        url,
                        category,
                        source,
                        title,
                        description,
                    } = newsStory
                    return (
                        <div className='' key={`${index} ${title}`}>
                            <p>title: {title}</p>
                            <p>source: {source}</p>
                            <p>description: {description}</p>
                            <a href={url}>link</a>
                            <p>{category}</p>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Explore
