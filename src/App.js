import './App.css';
import Home from './pages/Home';
import DashBoard from './pages/DashBoard'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

function App() {
  return (
    <div className="App font-poppins">
      <Router>
        <Routes>
          <Route path='/' exact element={<Home />}/>
          <Route path='/dashboard' element={<DashBoard />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
