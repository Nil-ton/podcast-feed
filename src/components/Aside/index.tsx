import { theme } from '../../style/theme'
import { Icon } from '../Icon'
import { NavButtonHomeAndAbout,NavPodcastList,PodcastList, WrapperAside, WrapperOutlet } from './style'
import { useAsideHooks } from './hooks/useAsideHooks'
import { useFetch } from '../../hooks/useFetch'
import { Outlet } from 'react-router-dom'

export const Aside = () => {
  const {btnAbout,btnHome,handleBtnAbout,handleBtnHome, handlePodcastNavigate} = useAsideHooks()
  const {data, isLoading} = useFetch()

  return (
    <>
      <WrapperAside width={'12rem'}>
        <div>
          <Icon 
            size={theme.size.medium}
            src='https://i.pinimg.com/736x/f5/d9/8b/f5d98b3e305d45533bd32d558c70c5d9.jpg'
          />
        </div>
     
        <NavButtonHomeAndAbout width={'12rem'}>
          <ul>
            <li onClick={handleBtnHome}>
              <span style={{display: btnHome ? 'inline-block' : 'none'}}></span>
              <a
                style={{color: btnHome? theme.color.font.primary : theme.color.font.secondary}}
              >HOME</a>
              <i 
                className="fa-solid fa-house-chimney"
                style={{color: btnHome? theme.color.button.primary : theme.color.font.secondary}}
              />
            </li>


            <li onClick={handleBtnAbout}>
              <span style={{display: btnAbout ? 'inline-block' : 'none'}}></span>
              <a
                style={{color:  btnAbout? theme.color.font.primary : theme.color.font.secondary}}
              >ABOUT</a>
              <i
                className="fa-solid fa-address-card"
                style={{color:  btnAbout? theme.color.button.primary : theme.color.font.secondary}}
              />
            </li>
          </ul>
        </NavButtonHomeAndAbout>

        <h3 style={{fontFamily: theme.fontFamily.primary}}>PODCAST</h3>


      
        <NavPodcastList width={'12rem'}>
          <PodcastList width={'12rem'}>

            {isLoading && Array(5).fill('skeleton').map(item => (
              <li key = {item} className={item}>
                <span></span>
                <span></span>
              </li>
            ))}
            {data?.map(item => (

              <li
                key = {item.title}
                onClick = {() => handlePodcastNavigate(item)}
              >
                <Icon size={theme.size.small} src = {item.image}/>
                <p>{item.title === 'Matando Robôs Gigantes' ? 'MRG' : item.title}</p>
              </li>

            ))}

          </PodcastList>
        </NavPodcastList>
      </WrapperAside>

      <WrapperOutlet width={'12rem'}> 
        <Outlet/>
      </WrapperOutlet>
    </>
  )
}