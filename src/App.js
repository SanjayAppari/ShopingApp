import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import DisplayItems from './components/DisplayItems';
import OpenItem from './components/OpenItem';
import { Provider } from 'react-redux';
import store from './redux/store'
import Cart from './components/Cart';

function App() {
  return (
    <Provider store={store  }>
    <div className="App">
          {/* <h1>I Love You Amma 🥺</h1> */}
          <Router>
              <Navbar/>
              <Routes>
                 <Route exact path="/" element={<Home/>}/>
                 <Route exact path="/cart" element={<Cart/>}/>
                 <Route exact path="/:name" element={<DisplayItems/>}/>
                 <Route exact path="/openItem/:id" element={<OpenItem/>}/>
              </Routes>
          </Router>
    </div>
    </Provider>
  );
}

export default App;
