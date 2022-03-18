import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Aside } from './components/Aside';
import { About } from './pages/About';
import { Home } from './pages/Home';
import { Podcast } from './pages/Podcast';

function RoutesComponent() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element = {<Aside />}>
          <Route path='/about' element = {<About />} />
          <Route path='/home' element = {<Home />} />
          <Route path='/:title' element = {<Podcast />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default RoutesComponent;
