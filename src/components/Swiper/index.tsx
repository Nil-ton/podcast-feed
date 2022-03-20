import 'react-responsive-carousel/lib/styles/carousel.min.css' // requires a loader
import { Carousel } from 'react-responsive-carousel'
import { useFetch } from '../../hooks/useFetch'
import { WrapperSwiper } from './style'
export const SwiperComponent = () => {
  const {data, isLoading} = useFetch()
  return (
    <Carousel 
      autoPlay = {true}
      interval = {3000}
      showStatus = {false}
      showThumbs = {false}
      infiniteLoop = {true}
      width = {'70%'}
    >
      {data?.map(item => (
        <WrapperSwiper key={item.title} src = {item.image}>
          <div>
            <h2>
              {item.title}
            </h2>
            <p>{item.description}</p>
          </div>
        </WrapperSwiper>
      ))}
    </Carousel>
  )
}