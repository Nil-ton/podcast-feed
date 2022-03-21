import { useState } from 'react'

export const asideHooks = () => {
  const [activeBtn0, setActiveBtn0] = useState(false)
  const [activeBtn1, setActiveBtn1] = useState(false)
  const [activeBtn2, setActiveBtn2] = useState(false)
  const [activeBtn3, setActiveBtn3] = useState(false)
  const [activeBtn4, setActiveBtn4] = useState(false)
  const [activeInicial, setActiveInicial] = useState(true)

  const actives = [
    {
      active: activeBtn0, 
      setActive:() => {
        setActiveBtn0(true)
        setActiveBtn1(false)
        setActiveBtn2(false)
        setActiveBtn3(false)
        setActiveBtn4(false)
        
        setActiveInicial(false)
      }},
    {
      active:activeBtn1, 
      setActive:() => {
        setActiveBtn0(false)
        setActiveBtn1(true)
        setActiveBtn2(false)
        setActiveBtn3(false)
        setActiveBtn4(false)

        setActiveInicial(false)
      }
    },
    {
      active:activeBtn2, 
      setActive:() => {
        setActiveBtn0(false)
        setActiveBtn1(false)
        setActiveBtn2(true)
        setActiveBtn3(false)
        setActiveBtn4(false)

        setActiveInicial(false)
      }
    },
    {
      active:activeBtn3, 
      setActive:() => {
        setActiveBtn0(false)
        setActiveBtn1(false)
        setActiveBtn2(false)
        setActiveBtn3(true)
        setActiveBtn4(false)

        setActiveInicial(false)
      }
    },
    {
      active:activeBtn4, 
      setActive:() => {
        setActiveBtn0(false)
        setActiveBtn1(false)
        setActiveBtn2(false)
        setActiveBtn3(false)
        setActiveBtn4(true)

        setActiveInicial(false)
      }
    },
    {
      active: activeInicial,
      setActive: () => {
        setActiveBtn0(false)
        setActiveBtn1(false)
        setActiveBtn2(false)
        setActiveBtn3(false)
        setActiveBtn4(false)
        setActiveInicial(true)
      }
    }
  ]





  return {actives}
}