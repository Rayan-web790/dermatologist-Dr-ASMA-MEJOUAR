import React, { useState, useEffect, useLayoutEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  // Inject style tag in head to ensure it's always applied
  useEffect(() => {
    const styleId = 'navbar-fixed-size-style';
    let styleTag = document.getElementById(styleId);
    
    if (!styleTag) {
      styleTag = document.createElement('style');
      styleTag.id = styleId;
      document.head.appendChild(styleTag);
    }
    
    styleTag.textContent = `
      header.navbar, .navbar, #main-navbar {
        min-height: 80px !important;
        height: 80px !important;
        max-height: 80px !important;
        padding: 0 !important;
        padding-top: 0 !important;
        padding-bottom: 0 !important;
      }
      header.navbar .navbar-brand img, .navbar .navbar-brand img, #main-navbar .navbar-brand img {
        height: 52px !important;
        max-height: 52px !important;
        min-height: 52px !important;
      }
      header.navbar .navbar-brand span, .navbar .navbar-brand span, #main-navbar .navbar-brand span {
        font-size: 1.25rem !important;
      }
    `;
    
    return () => {
      // Don't remove on unmount, keep it for all pages
    };
  }, []);

  // Force header to stay uniform size - use useLayoutEffect to run before paint
  useLayoutEffect(() => {
    const enforceHeaderSize = () => {
      const header = document.querySelector('.navbar') || document.getElementById('main-navbar');
      if (header) {
        // Remove any classes that might change size
        header.classList.remove('navbar-scrolled');
        
        // Force all size properties
        header.style.setProperty('min-height', '80px', 'important');
        header.style.setProperty('height', '80px', 'important');
        header.style.setProperty('max-height', '80px', 'important');
        header.style.setProperty('padding', '0', 'important');
        header.style.setProperty('padding-top', '0', 'important');
        header.style.setProperty('padding-bottom', '0', 'important');
        
        // Also enforce logo size
        const logo = header.querySelector('.navbar-brand img');
        if (logo) {
          logo.style.setProperty('height', '52px', 'important');
          logo.style.setProperty('max-height', '52px', 'important');
          logo.style.setProperty('min-height', '52px', 'important');
          logo.style.setProperty('width', 'auto', 'important');
        }
        
        // Enforce text size
        const brandText = header.querySelector('.navbar-brand span');
        if (brandText) {
          brandText.style.setProperty('font-size', '1.25rem', 'important');
          brandText.style.setProperty('line-height', '50px', 'important');
        }
        
        // Enforce brand container
        const brand = header.querySelector('.navbar-brand');
        if (brand) {
          brand.style.setProperty('height', '52px', 'important');
          brand.style.setProperty('line-height', '52px', 'important');
        }
      }
    };
    
    // Immediate enforcement before paint
    enforceHeaderSize();
  }, [location.pathname]);

  // Also enforce after mount and on route changes
  useEffect(() => {
    const enforceHeaderSize = () => {
      const header = document.querySelector('.navbar') || document.getElementById('main-navbar');
      if (header) {
        // Remove any classes that might change size
        header.classList.remove('navbar-scrolled');
        
        // Force all size properties
        header.style.setProperty('min-height', '80px', 'important');
        header.style.setProperty('height', '80px', 'important');
        header.style.setProperty('max-height', '80px', 'important');
        header.style.setProperty('padding', '0', 'important');
        header.style.setProperty('padding-top', '0', 'important');
        header.style.setProperty('padding-bottom', '0', 'important');
        
        // Also enforce logo size
        const logo = header.querySelector('.navbar-brand img');
        if (logo) {
          logo.style.setProperty('height', '52px', 'important');
          logo.style.setProperty('max-height', '52px', 'important');
          logo.style.setProperty('min-height', '52px', 'important');
        }
        
        // Enforce text size
        const brandText = header.querySelector('.navbar-brand span');
        if (brandText) {
          brandText.style.setProperty('font-size', '1.25rem', 'important');
        }
      }
    };
    
    // Multiple attempts to ensure it sticks
    enforceHeaderSize();
    const timers = [
      setTimeout(enforceHeaderSize, 0),
      setTimeout(enforceHeaderSize, 10),
      setTimeout(enforceHeaderSize, 50),
      setTimeout(enforceHeaderSize, 100),
      setTimeout(enforceHeaderSize, 200)
    ];
    
    // Use MutationObserver to watch for any style changes
    const header = document.querySelector('.navbar') || document.getElementById('main-navbar');
    if (header) {
      const observer = new MutationObserver(() => {
        enforceHeaderSize();
      });
      
      observer.observe(header, {
        attributes: true,
        attributeFilter: ['style', 'class'],
        childList: false,
        subtree: true
      });
      
      // Also enforce on scroll to prevent any changes
      const handleScroll = () => {
        enforceHeaderSize();
      };
      window.addEventListener('scroll', handleScroll, { passive: true });
      
      return () => {
        timers.forEach(timer => clearTimeout(timer));
        window.removeEventListener('scroll', handleScroll);
        observer.disconnect();
      };
    }
    
    return () => {
      timers.forEach(timer => clearTimeout(timer));
    };
  }, [location.pathname]);

  const isActive = (path) => location.pathname === path;

  return (
    <header 
      className="navbar professional-navbar navbar-expand-lg navbar-dark fixed-top" 
      id="main-navbar"
    >
      <div className="container">
        <Link className="navbar-brand d-flex align-items-center" to="/">
          <img 
            src="/images/logo.jpg" 
            alt="Logo du cabinet dermatologique" 
            className="me-2" 
          />
          <span className="d-none d-md-inline">Dr. Asma Mejouar</span>
        </Link>
        
        <button
          className="navbar-toggler"
          type="button"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-controls="navbarNav"
          aria-expanded={isMobileMenuOpen}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className={`collapse navbar-collapse ${isMobileMenuOpen ? 'show' : ''}`} id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link 
                className={`nav-link ${isActive('/') ? 'active' : ''}`} 
                to="/"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Accueil
              </Link>
            </li>
            <li className="nav-item">
              <Link 
                className={`nav-link ${isActive('/specialites') ? 'active' : ''}`} 
                to="/specialites"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Spécialités
              </Link>
            </li>
            <li className="nav-item">
              <Link 
                className={`nav-link ${isActive('/services') ? 'active' : ''}`} 
                to="/services"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Nos Services
              </Link>
            </li>
            <li className="nav-item">
              <Link 
                className={`nav-link ${isActive('/contact') ? 'active' : ''}`} 
                to="/contact"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact
              </Link>
            </li>
            <li className="nav-item">
              <Link 
                className={`nav-link ${isActive('/about') ? 'active' : ''}`} 
                to="/about"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                À Propos
              </Link>
            </li>
            <li className="nav-item">
              <Link 
                className={`nav-link ${isActive('/faq') ? 'active' : ''}`} 
                to="/faq"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                FAQ
              </Link>
            </li>
            <li className="nav-item">
              <Link 
                className={`nav-link ${isActive('/testimonials') ? 'active' : ''}`} 
                to="/testimonials"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Témoignages
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;





