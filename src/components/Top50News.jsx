import React, { useState, useEffect } from 'react'
import sampleData from '../sampleData'
// import { getTop50 } from './DataServices'
import News from './News'

const Top50News = () => {
    const [liveNews, setLiveNews] = useState([])

    // const getLiveNews = async () => {
    //     const response = await getTop50()
    //     console.log('client response received:', response.data)
    //     setLiveNews(response.data)
    // }

    // useEffect(() => {
    //     getLiveNews()
    // }, [])

    useEffect(() => {
        setLiveNews(sampleData)
    }, [])

    return (
        <div className='top-50-news-wrapper'>
            <h1>Top 50 News & Articles</h1>
            <News newsArray={liveNews} />
            {/* // <div>
        //     {liveNews.map((newsStory, index) => {
        //         const { url, category, source, title, description } = newsStory
        //         return (
        //             <div className='' key={`${index} ${title}`}>
        //                 <p>title: {title}</p>
        //                 <p>source: {source}</p>
        //                 <p>description: {description}</p>
        //                 <a href={url}>link</a>
        //                 <p>{category}</p>
        //             </div>
        //         )
        //     })}
        // </div> */}
        </div>
    )
}

export default Top50News
