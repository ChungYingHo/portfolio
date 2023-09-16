import './App.scss';
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import MainLayout from './layouts/Main/MainLayout';
import Home from './pages/Home/Home';
import Skill from './pages/Skill/Skill';
import Portfolio from './pages/Portfolio/Portfolio';
import About from './pages/About/About';

const basename = process.env.PUBLIC_URL;


function App() {
  return (
    <div className="App">
      <BrowserRouter basename={basename}>
          <Routes>
              <Route element={<MainLayout />}>
                  <Route path='/' element={<Navigate to='/home'/>}></Route>
                  <Route path='/home' element={<Home/>}></Route>
                  <Route path='/skill' element={<Skill/>}></Route>
                  <Route path='/portfolio' element={<Portfolio/>}></Route>
                  <Route path='/about' element={<About/>}></Route>
              </Route>
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
