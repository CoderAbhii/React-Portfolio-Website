import './App.css';
import Footer from './components/Footer';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Portfolio from './components/Portfolio';
import Blog from './components/Blog';
import Contact from './components/Contact';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";


function App() {
  return (
    <>
    <Router>
    <Navbar />
    <Routes>
      <Route exact path="/" element={<Home/>}></Route>
      <Route exact path="/portfolio" element={<Portfolio/>}></Route>
      <Route exact path="/blog" element={<Blog/>}></Route>
      <Route exact path="/contact" element={<Contact/>}></Route>
    </Routes>
    <Footer />
    </Router>
     
    </>
  );
}

export default App;
