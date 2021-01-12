import React, { useState } from 'react'
import { getRequestedNews } from './Data'
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
        setIsClicked((prevValue) => !prevValue)
        getRequestedLiveNews(searchParams)
        e.preventDefault()
    }

    const handleChange = (e) => {
        // console.log(e.target.name)
        switch (e.target.name) {
            case 'keyword':
                setSearchParams((prevValues) => ({
                    ...prevValues,
                    keyword: e.target.value,
                }))
                break
            case 'limit':
                setSearchParams((prevValues) => ({
                    ...prevValues,
                    limit: e.target.value,
                }))
                break
            case 'sort':
                setSearchParams((prevValues) => ({
                    ...prevValues,
                    sort: e.target.value,
                }))
                break
            case 'categories':
                setSearchParams((prevValues) => ({
                    ...prevValues,
                    categories: Array.from(
                        e.target.selectedOptions,
                        (option) => option.value
                    ),
                }))

                break
            case 'countries':
                setSearchParams((prevValues) => ({
                    ...prevValues,
                    countries: Array.from(
                        e.target.selectedOptions,
                        (option) => option.value
                    ),
                }))
                break
            case 'languages':
                setSearchParams((prevValues) => ({
                    ...prevValues,
                    languages: Array.from(
                        e.target.selectedOptions,
                        (option) => option.value
                    ),
                }))
                break
            default:
                console.log('Sorry, there is no matching case')
        }
    }
    const allSvgFilePaths = reqSvgs.keys()
    const imagePath = allSvgFilePaths[0]
    const image = reqSvgs(imagePath)
    console.log(imagePath)
    console.log(allSvgFilePaths)
    console.log(image.default)

    return (
        <div>
            {/* <img src={image.default} alt='pic' /> */}
            <div className={isClicked ? 'hide' : 'explore-options-form'}>
                <form onSubmit={handleSubmit}>
                    <label htmlFor='keyword'>Keywords:</label>
                    <input
                        type='text'
                        id='keyword'
                        name='keyword'
                        value={searchParams.keyword}
                        onChange={handleChange}
                        placeholder='Separate multiple keywords with ","'
                    ></input>
                    <br />
                    <label htmlFor='limit'>No. of articles:</label>
                    <input
                        type='text'
                        id='limit'
                        name='limit'
                        value={searchParams.limit}
                        onChange={handleChange}
                        placeholder='Maximum of 100 articles'
                    ></input>
                    <br />
                    <label htmlFor='sort-select'>Sort by:</label>
                    <select
                        name='sort'
                        id='sort-select'
                        value={searchParams.sort}
                        onChange={handleChange}
                    >
                        <option value=''>--Please choose an option--</option>
                        <option value='published_desc'>
                            Date published (desc)
                        </option>
                        <option value='published_asc'>
                            Date published (asc)
                        </option>
                        <option value='popularity'>Popularity</option>
                    </select>
                    <br />
                    <label htmlFor='categories-select'>
                        Choose categories:
                    </label>
                    <select
                        name='categories'
                        id='categories-select'
                        multiple
                        value={searchParams.categories}
                        onChange={handleChange}
                    >
                        <option value=''>--Please choose an option--</option>
                        <option name='business' value='business'>
                            Business
                        </option>
                        <option value='entertainment'>Entertainment</option>
                        <option value='general'>General</option>
                        <option value='health'>Health</option>
                        <option value='science'>Science</option>
                        <option value='sports'>Sports</option>
                        <option value='technology'>Tech</option>
                    </select>
                    <br />
                    <label htmlFor='countries-select'>Choose countries:</label>
                    <select
                        name='countries'
                        id='countries-select'
                        multiple
                        value={searchParams.countries}
                        onChange={handleChange}
                    >
                        <option value=''>--Please choose an option--</option>
                        <option value='ar'>Argentina</option>
                        <option value='au'>Australia</option>
                        <option value='at'>Austria</option>
                        <option value='be'>Belgium</option>
                        <option value='br'>Brazil</option>
                        <option value='bg'>Bulgaria</option>
                        <option value='ca'>Canada</option>
                        <option value='cn'>China</option>

                        <option value='co'>Columbia</option>
                        <option value='cz'>Czech Republic</option>
                        <option value='eg'>Egypt</option>
                        <option value='fr'>France</option>
                        <option value='de'>Germany</option>
                        <option value='gr'>Greece</option>
                        <option value='hk'>Hong Kong</option>
                        <option value='hu'>Hungary</option>

                        <option value='in'>India</option>
                        <option value='id'>Indonesia</option>
                        <option value='ie'>Ireland</option>
                        <option value='il'>Israel</option>
                        <option value='it'>Italy</option>
                        <option value='jp'>Japan</option>
                        <option value='lv'>Latvia</option>
                        <option value='lt'>Lithuania</option>

                        <option value='my'>Malaysia</option>
                        <option value='mx'>Mexico</option>
                        <option value='ma'>Morocco</option>
                        <option value='nl'>Netherlands</option>
                        <option value='nz'>New Zealand</option>
                        <option value='ng'>Nigeria</option>
                        <option value='no'>Norway</option>
                        <option value='ph'>Philippines</option>

                        <option value='pl'>Poland</option>
                        <option value='pt'>Portugal</option>
                        <option value='ro'>Romania</option>
                        <option value='sa'>Saudi Arabia</option>
                        <option value='rs'>Serbia</option>
                        <option value='sg'>Singapore</option>
                        <option value='sk'>Slovakia</option>
                        <option value='si'>Slovenia</option>

                        <option value='za'>South Africa</option>
                        <option value='kr'>South Korea</option>
                        <option value='se'>Sweden</option>
                        <option value='ch'>Switzerland</option>
                        <option value='tw'>Taiwan</option>
                        <option value='th'>Thailand</option>
                        <option value='tr'>Turkey</option>
                        <option value='ae'>UAE</option>

                        <option value='ua'>Ukraine</option>
                        <option value='gb'>United Kingdom</option>
                        <option value='us'>United States</option>
                        <option value='ve'>Venezuela</option>
                    </select>
                    <br />
                    <label htmlFor='languages-select'>Choose languages:</label>
                    <select
                        name='languages'
                        id='languages-select'
                        multiple
                        value={searchParams.languages}
                        onChange={handleChange}
                    >
                        <option value=''>--Please choose an option--</option>
                        <option value='ar'>Arabic</option>
                        <option value='zh'>Chinese</option>
                        <option value='nl'>Dutch</option>
                        <option value='en'>English</option>
                        <option value='fr'>French</option>
                        <option value='de'>German</option>
                        <option value='he'>Hebrew</option>
                        <option value='it'>Italian</option>
                        <option value='no'>Norwegian</option>
                        <option value='pt'>Portuguese</option>
                        <option value='ru'>Russian</option>
                        <option value='es'>Spanish</option>
                        <option value='sw'>Swedish</option>
                    </select>
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
                        return <div className='search-params'>{category}</div>
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
                        return <div className='search-params'>{language}</div>
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
