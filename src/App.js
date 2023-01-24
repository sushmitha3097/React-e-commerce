import { Route, Link, BrowserRouter, Routes } from 'react-router-dom'
import './App.css';
import Login from './Components/Login'
import SignUp from './Components/SignUp'
import Home from './Components/Home'
import 'bootstrap/dist/css/bootstrap.min.css';
import Men from './Components/OffCanvas/Men';
import Women from './Components/OffCanvas/Women';
import Kids from './Components/OffCanvas/Kids';
import MenProducts from './Components/OffCanvas/MenProducts';
import MenShirts from './Components/OffCanvas/MenShirts';

function App() {
  return (
    <div className="App">

      
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login />} ></Route>
          <Route path='SignUp' element={<SignUp />}></Route>
          <Route path='Home' element={<Home />}></Route>
          <Route path='Men' element={<Men />}></Route>
          <Route path='MenShirts' element={<MenShirts />}></Route>
          <Route path='Women' element={<Women />}></Route>
          <Route path='Kids' element={<Kids />}></Route>
        
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;



