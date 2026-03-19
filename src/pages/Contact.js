import React, { useEffect } from 'react';

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div style={{ marginTop: '76px', paddingTop: '40px' }}>
      <div className="container py-5">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <h1 className="text-center text-primary mb-5">Contactez-nous</h1>
            
            <div className="row mb-5">
              {/* Informations de contact */}
              <div className="col-md-6 mb-4">
                <div className="card shadow-lg border-0 h-100">
                  <div className="card-body p-5 text-center">
                    <h3 className="text-primary mb-4">
                      <i className="bi bi-telephone-fill me-2"></i>
                      Contact
                    </h3>
                    <div className="mb-4">
                      <a 
                        href="https://wa.me/2120661063999" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="btn btn-success btn-lg w-100 mb-3 d-flex align-items-center justify-content-center"
                        style={{ fontSize: '1.1rem' }}
                      >
                        <i className="bi bi-whatsapp me-2"></i>
                        WhatsApp : 0524408296 / 0661063999
                      </a>
                    </div>
                    
                    <div className="mb-4">
                      <a 
                        href="mailto:asmamejouar@gmail.com?subject=Prise%20de%20rendez-vous&body=Bonjour%20Docteur,%0D%0AJe%20souhaite%20prendre%20un%20rendez-vous."
                        className="btn btn-primary btn-lg w-100 mb-3 d-flex align-items-center justify-content-center"
                        style={{ fontSize: '1.1rem' }}
                      >
                        <i className="bi bi-envelope me-2"></i>
                        Email : asmamejouar@gmail.com
                      </a>
                    </div>
                    
                    <div className="mb-0">
                      <p className="mb-0 fs-5">
                        <i className="bi bi-geo-alt-fill text-primary me-2"></i>
                        Adresse : J24J+X68, Marrakech, Maroc
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Horaires */}
              <div className="col-md-6 mb-4">
                <div className="card shadow-lg border-0 h-100">
                  <div className="card-body p-5">
                    <h3 className="text-primary mb-4 text-center">
                      <i className="bi bi-clock-fill me-2"></i>
                      Horaires d'Ouverture
                    </h3>
                    <div className="text-center">
                      <div className="mb-3">
                        <h5 className="text-primary">Lundi - Vendredi</h5>
                        <p className="fs-5 mb-0">09:00 - 18:00</p>
                      </div>
                      <hr />
                      <div className="mb-3">
                        <h5 className="text-primary">Samedi</h5>
                        <p className="fs-5 mb-0">09:00 - 13:00</p>
                      </div>
                      <hr />
                      <div className="mb-3">
                        <h5 className="text-primary">Dimanche</h5>
                        <p className="fs-5 mb-0 text-muted">Fermé</p>
                      </div>
                      <div className="alert alert-info mt-4 mb-0">
                        <i className="bi bi-info-circle me-2"></i>
                        <strong>Sur rendez-vous uniquement</strong>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="card shadow-lg border-0">
              <div className="card-body p-0">
                <iframe 
                  src="https://www.google.com/maps?q=J24J%2BX68%2C%20Marrakech%2C%20Maroc&output=embed"
                  width="100%" 
                  height="400" 
                  style={{ border: 0, borderRadius: '10px' }}
                  allowFullScreen
                  loading="lazy"
                  title="Location Map"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;





