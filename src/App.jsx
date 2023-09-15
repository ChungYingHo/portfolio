import './App.scss';
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import MainLayout from './layouts/Main/MainLayout';
import Home from './pages/Home/Home';
import Skill from './pages/Skill/Skill';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Routes>
              <Route element={<MainLayout />}>
                  <Route path='/' element={<Home/>}></Route>
                  <Route path='*' element={<Home/>}></Route>
                  <Route path='/home' element={<Home/>}></Route>
                  <Route path='/skill' element={<Skill/>}></Route>
              </Route>
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
