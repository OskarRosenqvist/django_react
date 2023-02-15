import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Adds } from './components/Adds/Adds';
import { Login } from './components/Auth/Login';
import './App.css';

function App() {
  return (
    <div className="App">
      <img alt="" src={require("./static/images/plocket.png")}></img>
      <Router>
        <Routes>
          <Route path='/' element={<Adds />} />
          <Route path='/login' element={<Login />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
