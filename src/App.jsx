import './App.scss';
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import MainLayout from './layouts/Main/MainLayout';
import Home from './pages/Home/Home';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Routes>
              <Route element={<MainLayout />}>
                  <Route path='/' element={<Home/>}></Route>
                  <Route path='*' element={<Home/>}></Route>
              </Route>
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
