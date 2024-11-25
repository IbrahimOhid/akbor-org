// router
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// components
import Navbar from './components/Navbar/Navbar';
// pages
import Home from './pages/Home/Home';
import Contact from './pages/Contact/Contact';
import Services from './pages/Services/Services';
import Footer from './components/Footer/Footer';
import Blog from './pages/Blog/Blog';
import Portfolio from './pages/Portfolio/Portfolio';


function App() {
  return (
    <Router>
      <Navbar />
      <div>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/services' element={<Services />} />
          <Route path='/blog' element={<Blog />} />
          <Route path='/portfolio' element={<Portfolio />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </div>
      <Footer/>
    </Router>
  );
}

export default App;
