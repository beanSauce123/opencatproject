import './App.css';
import Pump from './Pump'
import About from './About'
import Home from './Home'
import Library from './Library'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'

function App() {

  return (
      <Router>
        <Routes>

          <Route path="/sodium-potassium-pump" element={<Pump/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/library" element={<Library/>}/>
          <Route path="/" element={<Home/>}/>
      
        </Routes>
      </Router>
  );
}

export default App;
