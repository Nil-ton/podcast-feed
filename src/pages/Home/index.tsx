import { SwiperComponent } from '../../components/Swiper'
import { WrapperHome } from './style'

export const Home = () => {
  return (
    <WrapperHome>
      <div className='last-podcast'>
      </div>

      <div className='swipper'>
        <SwiperComponent></SwiperComponent>
      </div>
    </WrapperHome>
  )
}