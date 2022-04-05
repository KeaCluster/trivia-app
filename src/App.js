import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Welcome from './components/Welcome'
import Home from './pages/Home'
import Game from './pages/Game'

/* <img className='blob blob-yellow' src='/images/blob-yellow.png' alt='blob1'/>
<img className='blob blob-blue' src='/images/blob-blue.png' alt='blob2'/> */

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/game' element={<Game />} />
      </Routes>
    </Router>
  );
}

export default App;
