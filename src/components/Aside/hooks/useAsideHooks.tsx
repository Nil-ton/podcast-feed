import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { IResponseApi } from '../../../service/api/type'

export const useAsideHooks = () => {
  const [btnHome, setBtnHome] = useState(true)
  const [btnAbout, setBtnAbout] = useState(false)
  const navigate = useNavigate()
  
  const handleBtnHome = () => {
    setBtnHome(true)
    setBtnAbout(false)
    navigate('/home')
  }
  const handleBtnAbout = () => {
    setBtnHome(false)
    setBtnAbout(true)
    navigate('/about')
  }

  const handlePodcastNavigate = (item:IResponseApi) => {
    setBtnAbout(false)
    setBtnHome(false)
    navigate(item.title)
  }
  return {
    btnHome,
    btnAbout,
    handlePodcastNavigate,
    handleBtnHome,
    handleBtnAbout,
    navigate,
    setBtnHome,
    setBtnAbout
  }
}