import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Adds } from './components/Adds/Adds';
import { Login } from './components/Auth/Login';
import { AuthContext, AuthContextProvider } from './contexts/AuthContext' 
import './App.css';

function App() {
  return (
    <div className="App">
      <img alt="" src={require("./static/images/plocket.png")}></img>
      <Router>
        <AuthContextProvider>
        <Routes>
          <Route path='/' element={<Adds />} />
          <Route path='/login' element={<Login />} />
        </Routes>
        </AuthContextProvider>
      </Router>
    </div>
  );
}

export default App;
