import { Outlet, useNavigate } from 'react-router-dom'
import { useFetch } from '../../hooks/useFetch'
import { theme } from '../../style/theme'
import { asideHooks } from './hooks/asideHooks'
import { WrapperAside } from './style'

export const Aside = () => {
  const { data } = useFetch()

  const { actives } = asideHooks()
  const navigate = useNavigate()


  return (
    <WrapperAside>

      <aside>

        <div className='logo'>
          <h2>Feed Podcast</h2>
        </div>



        <div
          className='inicio'
          onClick={() => {
            actives[actives.length - 1].setActive()
            navigate('/')
          }}
        >
          <i
            className="fa-solid fa-house-chimney"
            style={{ color: actives[actives.length - 1].active ? theme.color.button.primary : '' }}
          ></i>
          <a style={{ color: actives[actives.length - 1].active ? 'white' : '' }}>Início</a>
        </div>


        <div className='label-podcast'>
          <h2>PODCASTS</h2>
        </div>



        <nav className='icon'>
          <ul>
            {data?.map((pod, i) => (
              <li
                key={pod.title}
                style={{ borderLeft: actives[i].active ? `4px solid ${theme.color.button.primary}` : 'none' }}
                onClick={() => {
                  actives[i].setActive()
                  navigate(pod.title)
                }}
              >
                <img src={pod.image} alt={`Icon do podcast ${pod.title}`} />
                <p style={{ color: actives[i].active ? 'white' : '' }}>
                  {pod.title === 'Matando Robôs Gigantes' ? 'MRG' : pod.title}
                </p>
              </li>
            ))}
          </ul>
        </nav>

      </aside>





      <div className='outlet'>


        <div className='search'>
          <input type="text" placeholder='Search' />
          <i className="fa-solid fa-magnifying-glass"></i>
        </div>


        <Outlet />
      </div>

    </WrapperAside>
  )
}