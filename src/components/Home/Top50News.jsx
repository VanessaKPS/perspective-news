import React, { useState, useEffect } from 'react'
import Cube from '../shared/Cube'
import { getTop50 } from '../../services/DataServices'
import News from '../shared/News'

const Top50News = () => {
    const [liveNews, setLiveNews] = useState([])
    const [isLoading, setIsLoading] = useState(false)

    const getLiveNews = async () => {
        try {
            setIsLoading(true)
            const response = await getTop50()

            setLiveNews(response.data)
            console.log(response)
        } catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        getLiveNews()
        return setIsLoading(false)
    }, [])

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
