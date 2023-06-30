import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import DisplayItems from './components/DisplayItems';
import OpenItem from './components/OpenItem';

function App() {
  return (
    <div className="App">
          {/* <h1>I Love You Amma 🥺</h1> */}
          <Router>
              <Navbar/>
              <Routes>
                 <Route path="/" element={<Home/>}/>
                 <Route path="/all/:name" element={<DisplayItems/>}/>
                 <Route path="/openItem" element={<OpenItem/>}/>
              </Routes>
          </Router>
    </div>
  );
}

export default App;
