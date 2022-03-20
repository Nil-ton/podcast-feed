import { SwiperComponent } from '../../components/Swiper'

export const Home = () => {
  return (
    <>
      <div
        style={{width: '300px', height: '500px', position: 'absolute', backgroundColor:'red',
          right: '0',
          top: 0
        }}
      >
      </div>
      {/* swapper react with imagens of podcast */}
      <div>
        <SwiperComponent></SwiperComponent>
      </div>
      {/* last podcast lançado */}

    </>
  )
}