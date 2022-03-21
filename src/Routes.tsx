import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Aside } from './components/Aside'
import { Podcast } from './pages/podcast'

function RoutesComponent() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element = {<Aside />}>
          <Route path='/:title' element = {<Podcast/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default RoutesComponent
