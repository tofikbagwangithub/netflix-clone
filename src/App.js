import './App.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Components/Home/Home';
import Header from './Components/Header/Header';
function App() {
  return (
    <BrowserRouter basename='/netflix-clone'>

      <Header/> 
      <Routes> 
        <Route path='/' element={<Home/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
