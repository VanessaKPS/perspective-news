import React from 'react'
import Cube from './Cube'
const reqCatSvgs = require.context('../Assets/CategoriesSVG', true, /\.svg$/)

const News = (props) => {
    const { newsArray } = props
    return (
        <div className='news-wrapper'>
            {newsArray.map((newsStory, index) => {
                const {
                    image,
                    title,
                    source,
                    description,
                    category,
                    url,
                } = newsStory
                return (
                    <div className='news' key={`${index} ${title}`}>
                        <a href={url}>
                            <div className='news-image-wrapper'>
                                {image ? (
                                    <img
                                        className='news-image'
                                        src={image}
                                        alt='article'
                                    />
                                ) : (
                                    <div className='cube'>
                                        <Cube usage='placeholder' />
                                    </div>
                                )}
                            </div>
                            <div className='news-info-wrapper'>
                                <h3 className='news-title'>{title}</h3>
                                <p className='news-source'>{source}</p>
                                <p className='news-description'>
                                    {description.substring(0, 100)}...
                                </p>
                            </div>
                            <div className='news-category-wrapper'>
                                <img
                                    className='news-category-image'
                                    src={
                                        reqCatSvgs(`./${category}.svg`).default
                                    }
                                    alt='country'
                                ></img>
                            </div>
                        </a>
                    </div>
                )
            })}
        </div>
    )
}

export default News
