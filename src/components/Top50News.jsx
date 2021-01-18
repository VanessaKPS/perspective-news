import React, { useState, useEffect } from 'react'
import sampleData from '../sampleData'
import Cube from './Cube'
// import { getTop50 } from './DataServices'
import News from './News'

const Top50News = () => {
    const [liveNews, setLiveNews] = useState([])
    const [isLoading, setIsLoading] = useState(false)

    // const getLiveNews = async () => {
    //     const response = await getTop50()
    //     console.log('client response received:', response.data)

    //     setLiveNews(response.data)
    // }

    // useEffect(() => {
    //     setIsLoading(true)
    //     getLiveNews()
    //     return setIsLoading(false)
    // }, [])

    useEffect(() => {
        setIsLoading(true)
        setLiveNews(sampleData)
        return setIsLoading(false)
    }, [])
    console.log(isLoading)
    return (
        <div className='top-50-news-wrapper'>
            <h1>Top 50 News & Articles</h1>

            {isLoading ? (
                <div className='loading-cube cube'>
                    <Cube />
                </div>
            ) : (
                <News newsArray={liveNews} />
            )}
        </div>
    )
}

export default Top50News
