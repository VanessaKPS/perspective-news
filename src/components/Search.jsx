import React, { useState } from 'react'
import { getRequestedNews } from './DataServices'
import SearchForm from './SearchForm'
import RequestedSearchTerms from './RequestedSearchTerms'
import News from './News'
import Cube from './Cube'
const reqCatSvgs = require.context('../Assets/CategoriesSVG', true, /\.svg$/)

const Search = () => {
    //state for searchParameters collected and sent to database
    const [searchParams, setSearchParams] = useState({
        keyword: '',
        limit: '',
        sort: '',
        categories: [],
        countries: [],
        languages: [],
    })
    // state for data retrieved from database
    const [reqNewsStories, setReqNewsStories] = useState([])
    //state controlling tryAgain request to render search form or news stories
    const [isClicked, setIsClicked] = useState(false)
    //state to reset/re-render search form
    const [reqNewSearch, setReqNewSearch] = useState(false)
    //state for loading
    const [isLoading, setIsLoading] = useState(false)

    //function to make get req to database and set data
    const getRequestedLiveNews = async (searchTerms) => {
        try {
            const result = await getRequestedNews(searchTerms)
            setReqNewsStories(result.data)
            setIsLoading(false)
            console.log(`the result.data is :${result.data}`)
        } catch (err) {
            setIsLoading(false)
            console.log(err)
        }
    }
    //function to change tryAgain state and re-set searchParams state to null
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
    //function to change state to re-render search form, change tryAgain state to render News stories, get data from database
    const handleSubmit = (e) => {
        setReqNewSearch((prevValue) => !prevValue)
        setIsClicked((prevValue) => !prevValue)
        getRequestedLiveNews(searchParams)
        setIsLoading(true)
        e.preventDefault()
    }

    //function to set searchParams for strings
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

    //function to set searchParams for arrays
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

    return (
        <div className='search-news-wrapper'>
            <div className={isClicked ? 'hide' : 'search-form-wrapper'}>
                <SearchForm
                    reqStatus={reqNewSearch}
                    reqTerms={searchParams}
                    submission={handleSubmit}
                    inputChange={handleInputChange}
                    selectChange={handleSelectChange}
                />
            </div>
            <div className={isClicked ? 'results-wrapper' : 'hide'}>
                <RequestedSearchTerms
                    reqTerms={searchParams}
                    newSearch={handleClick}
                    categoryImages={reqCatSvgs}
                />
                {isLoading ? (
                    <div className='loading-cube cube'>
                        <Cube />
                    </div>
                ) : (
                    <News
                        newsArray={reqNewsStories}
                        categoryImages={reqCatSvgs}
                    />
                )}
            </div>
        </div>
    )
}

export default Search
