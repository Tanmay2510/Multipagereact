
import './App.css';
import About from './About';
import Contact from './Contact';
import Home from './Home';
import {Route , BrowserRouter, Routes} from "react-router-dom";
import Navbar from './Navbar';

function App() {
  return (
    <div className="App">
    <Navbar />
   <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/contact" element={<Contact />} />
      <Route exact path="/about" element={<About />} />
      </Routes>


      </div>
  );
}

export default App;
