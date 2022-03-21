import { SwiperComponent } from '../../components/Swiper'
import { useFetch } from '../../hooks/useFetch'
import { LastPodcast, WrapperHome } from './style'

export const Home = () => {
  const {data} = useFetch()
  const podcastDate = data?.reduce((total, item) => total.items[0].pubDate < item.items[0].pubDate ? item : total)
  

  console.log(podcastDate)

  return (
    <WrapperHome>
      <LastPodcast src={podcastDate?.items[0].image as string}>
        <div>
          <h2>Last podcast</h2>
          <h3>{podcastDate?.title} - {podcastDate?.items[0].title}</h3>
        </div>
      </LastPodcast>

      <div className='swipper'>
        <SwiperComponent></SwiperComponent>
      </div>
    </WrapperHome>
  )
}