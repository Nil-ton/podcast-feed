import axios from 'axios'
import { useQuery } from 'react-query'
import { IResponseApi } from '../service/api/type'

export const useFetch = () => {
  const {data, isLoading} = useQuery<IResponseApi[]>('podcasts', async () => {
    const response = await axios.get('https://rss-podcast-feed.herokuapp.com/')
    return response.data
  })
  return {data, isLoading}
}