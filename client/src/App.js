import './App.css';
import Home from './pages/Home';

import { Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import Menu from './components/Menu';
import Add from './pages/Add'
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {

  return (
    <div className="App">
      <header className="App-header">
  
        <Menu />
       
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/add"  element={<Add/>} />
          
        </Routes>
      </header>
    </div>
  );
}

export default App;
