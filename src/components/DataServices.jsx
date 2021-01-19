import axios from 'axios'

const getTop50 = async () => {
    try {
        const news = await axios.get(`${process.env.REACT_APP_SERVER}/top50`)
        return news.data
    } catch (err) {
        console.log(`there was an error retrieving data :${err}`)
    }
}

const getRequestedNews = async (requestTerms) => {
    try {
        const news = await axios.post(
            `${process.env.REACT_APP_SERVER}/search`,
            {
                requestTerms,
            }
        )
        return news.data
    } catch (err) {
        console.log(`there was an error retrieving data :${err}`)
    }
}
export { getTop50, getRequestedNews }
