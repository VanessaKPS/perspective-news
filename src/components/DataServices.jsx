import axios from 'axios'

const getTop50 = async () => {
    try {
        const news = await axios.get('http://localhost:4000/top50')
        return news.data
    } catch (err) {
        console.log(`there was an error retrieving data :${err}`)
    }
}

const getRequestedNews = async (requestTerms) => {
    try {
        const news = await axios.post('http://localhost:4000/explore', {
            requestTerms,
        })
        return news.data
    } catch (err) {
        console.log(`there was an error retrieving data :${err}`)
    }
}
export { getTop50, getRequestedNews }
