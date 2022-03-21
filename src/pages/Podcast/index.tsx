import { useParams } from 'react-router-dom'

export const Podcast = () => {
  const {title} = useParams()
  return <div><h1>{title}</h1></div>
}