import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer-3d text-white mt-5">
      <div className="container py-5 footer-inner">
        <div className="row">
          {/* Informations du cabinet */}
          <div className="col-lg-4 mb-4 mb-lg-0">
            <h5 className="mb-3">
              <img 
                src="/images/logo.jpg" 
                alt="Logo" 
                className="me-2"
                style={{ height: '40px', borderRadius: '5px' }}
              />
              Dr. Asma Mejouar
            </h5>
            <p className="text-white-50 mb-3">
              Cabinet de Dermatologie, Vénéréologie et Médecine Esthétique
            </p>
            <p className="mb-2">
              <i className="bi bi-geo-alt-fill me-2 text-primary"></i>
              J24J+X68, Marrakech, Maroc
            </p>
            <p className="mb-2">
              <i className="bi bi-telephone-fill me-2 text-primary"></i>
              0524408296 / 0661063999
            </p>
            <p className="mb-0">
              <i className="bi bi-envelope-fill me-2 text-primary"></i>
              <a href="mailto:asmamejouar@gmail.com" className="text-white-50 text-decoration-none">
                asmamejouar@gmail.com
              </a>
            </p>
          </div>

          {/* Liens rapides */}
          <div className="col-lg-2 col-md-6 mb-4 mb-lg-0">
            <h5 className="mb-3">Liens Rapides</h5>
            <ul className="list-unstyled">
              <li className="mb-2">
                <Link to="/" className="text-white-50 text-decoration-none">
                  <i className="bi bi-chevron-right me-1"></i>Accueil
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/about" className="text-white-50 text-decoration-none">
                  <i className="bi bi-chevron-right me-1"></i>À Propos
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/specialites" className="text-white-50 text-decoration-none">
                  <i className="bi bi-chevron-right me-1"></i>Spécialités
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/services" className="text-white-50 text-decoration-none">
                  <i className="bi bi-chevron-right me-1"></i>Services
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/contact" className="text-white-50 text-decoration-none">
                  <i className="bi bi-chevron-right me-1"></i>Contact
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/faq" className="text-white-50 text-decoration-none">
                  <i className="bi bi-chevron-right me-1"></i>FAQ
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/testimonials" className="text-white-50 text-decoration-none">
                  <i className="bi bi-chevron-right me-1"></i>Témoignages
                </Link>
              </li>
            </ul>
          </div>

          {/* Horaires */}
          <div className="col-lg-3 col-md-6 mb-4 mb-lg-0">
            <h5 className="mb-3">Horaires d'Ouverture</h5>
            <div className="text-white-50">
              <p className="mb-2">
                <strong className="text-white">Lundi - Vendredi:</strong><br />
                09:00 - 18:00
              </p>
              <p className="mb-2">
                <strong className="text-white">Samedi:</strong><br />
                09:00 - 13:00
              </p>
              <p className="mb-0">
                <strong className="text-white">Dimanche:</strong><br />
                Fermé
              </p>
              <p className="mt-3 mb-0 text-white">
                <small>
                  <i className="bi bi-info-circle me-1"></i>
                  Sur rendez-vous uniquement
                </small>
              </p>
            </div>
          </div>

          {/* Contact et réseaux sociaux */}
          <div className="col-lg-3">
            <h5 className="mb-3">Contactez-nous</h5>
            <div className="d-grid gap-2 mb-3">
              <a 
                href="https://wa.me/2120661063999" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn btn-success"
              >
                <i className="bi bi-whatsapp me-2"></i>
                WhatsApp
              </a>
              <a 
                href="mailto:asmamejouar@gmail.com?subject=Prise%20de%20rendez-vous"
                className="btn btn-primary"
              >
                <i className="bi bi-envelope me-2"></i>
                Email
              </a>
            </div>
            <div>
              <h6 className="mb-2">Suivez-nous</h6>
              <div className="d-flex gap-2">
                <a 
                  href="#" 
                  className="text-white-50"
                  style={{ fontSize: '1.5rem' }}
                  title="Facebook"
                >
                  <i className="bi bi-facebook"></i>
                </a>
                <a 
                  href="#" 
                  className="text-white-50"
                  style={{ fontSize: '1.5rem' }}
                  title="Instagram"
                >
                  <i className="bi bi-instagram"></i>
                </a>
                <a 
                  href="https://wa.me/2120661063999" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-white-50"
                  style={{ fontSize: '1.5rem' }}
                  title="WhatsApp"
                >
                  <i className="bi bi-whatsapp"></i>
                </a>
              </div>
            </div>
          </div>
        </div>

        <hr className="my-4 bg-white-50" />

        <div className="row">
          <div className="col-md-6 text-center text-md-start">
            <p className="mb-0 text-white-50">
              &copy; 2025 Cabinet Dermatologique - Dr. Asma Mejouar. Tous droits réservés.
            </p>
          </div>
          <div className="col-md-6 text-center text-md-end">
            <p className="mb-0 text-white-50">
              <small>
                Conçu avec <i className="bi bi-heart-fill text-danger"></i> pour votre santé
              </small>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;





