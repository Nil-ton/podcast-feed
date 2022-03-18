import { useParams } from 'react-router-dom'
import { useFetch } from '../../hooks/useFetch'

export const Podcast = () => {
  const {title} = useParams()
  const {data,isLoading} = useFetch()
  const filterDataByTitle = data?.find(item => item.title === title)
  return (
    <div>
      {isLoading && <h1>carregando...</h1>}
      {filterDataByTitle?.items.map(item => (
        <div key={item.title}>
          <h3>{item.title}</h3>
          <p dangerouslySetInnerHTML={{__html: item.description}}></p>
        </div>
      ))}
    </div>
  )
}