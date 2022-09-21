import { Route, BrowserRouter, Routes } from 'react-router-dom';
import About from '../pages/About';
import Contact from '../pages/Contact';
import Main from '../pages/Main';
import Portfolio from '../pages/Portfolio';

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={ <Main /> } />
        <Route path='/about' element={ <About /> } />
        <Route path='/contact' element={ <Contact /> } />
        <Route path='/portfolio' element={ <Portfolio /> } />
        {/* <Route path='*' element={ NotFound } /> */}
      </Routes>
    </BrowserRouter>
  )
};

export default AppRoutes;
