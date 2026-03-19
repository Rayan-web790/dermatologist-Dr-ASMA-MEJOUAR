import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';
import ScrollToTop from './components/ScrollToTop';
import SideColumns from './components/SideColumns';
import InteractiveEffects from './components/InteractiveEffects';
import Home from './pages/Home';
import Services from './pages/Services';
import Specialites from './pages/Specialites';
import Contact from './pages/Contact';
import About from './pages/About';
import FAQ from './pages/FAQ';
import Testimonials from './pages/Testimonials';

function App() {
  useEffect(() => {
    document.body.classList.add('has-fixed-navbar');
    return () => {
      document.body.classList.remove('has-fixed-navbar');
    };
  }, []);

  return (
    <Router>
      <ScrollToTop />
      <div className="App">
        <SideColumns />
        <Header />
        <main className="page-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/specialites" element={<Specialites />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/testimonials" element={<Testimonials />} />
          </Routes>
        </main>
        <Footer />
        <BackToTop />
        <InteractiveEffects />
      </div>
    </Router>
  );
}

export default App;

