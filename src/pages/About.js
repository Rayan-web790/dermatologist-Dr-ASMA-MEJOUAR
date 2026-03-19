import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div style={{ marginTop: '76px', paddingTop: '40px' }}>
      {/* Hero Section */}
      <section 
        className="text-white text-center py-5"
        style={{
          background: 'linear-gradient(135deg, #1976d2 0%, #125ea5 100%)',
          marginBottom: '60px'
        }}
      >
        <div className="container">
          <h1 className="display-4 fw-bold mb-3">À Propos du Dr. Asma Mejouar</h1>
          <p className="lead">Une expertise au service de votre santé dermatologique</p>
        </div>
      </section>

      <div className="container py-5">
        <div className="row">
          {/* Photo et informations principales */}
          <div className="col-lg-4 mb-5">
            <div className="card shadow-lg border-0 text-center">
              <div className="card-body p-4">
                <img 
                  src="/images/logo.jpg" 
                  alt="Dr. Asma Mejouar"
                  className="img-fluid rounded-circle mb-4"
                  style={{ 
                    width: '250px', 
                    height: '250px', 
                    objectFit: 'cover',
                    border: '5px solid #1976d2'
                  }}
                />
                <h3 className="text-primary mb-3">Dr. Asma Mejouar</h3>
                <p className="text-muted mb-4">Dermatologue, Vénéréologue et Médecin Esthétique</p>
                
                <div className="d-grid gap-2">
                  <Link to="/contact" className="btn btn-primary btn-lg">
                    <i className="bi bi-calendar-check me-2"></i>
                    Prendre Rendez-vous
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Biographie et informations */}
          <div className="col-lg-8">
            <div className="card shadow-lg border-0 mb-4">
              <div className="card-body p-5">
                <h2 className="text-primary mb-4">
                  <i className="bi bi-person-badge me-2"></i>
                  Biographie
                </h2>
                <p className="lead mb-4">
                  Le Dr. Asma Mejouar est une dermatologue expérimentée et passionnée, 
                  spécialisée en dermatologie, vénéréologie et médecine esthétique. 
                  Elle consacre sa carrière à offrir des soins dermatologiques de qualité 
                  à ses patients à Marrakech, au Maroc.
                </p>
                <p className="mb-4">
                  Avec une approche personnalisée et bienveillante, le Dr. Mejouar s'engage 
                  à fournir des diagnostics précis et des traitements adaptés à chaque patient. 
                  Son expertise couvre un large éventail de conditions dermatologiques, 
                  allant des affections médicales aux soins esthétiques.
                </p>
                <p className="mb-4">
                  Le Dr. Mejouar accorde une attention particulière à la dermatologie pédiatrique, 
                  offrant des soins spécialisés et adaptés aux nourrissons, enfants et adolescents. 
                  Sa pratique combine l'excellence médicale avec une approche humaine et rassurante.
                </p>
                <p className="arabic mb-0" style={{ direction: 'rtl', textAlign: 'right' }}>
                  الدكتورة أسماء مجوار هي طبيبة جلدية ذات خبرة وشغف، متخصصة في الأمراض الجلدية 
                  والأمراض المنقولة جنسياً والطب التجميلي. تكرس حياتها المهنية لتقديم رعاية جلدية 
                  عالية الجودة لمرضاها في مراكش، المغرب.
                </p>
              </div>
            </div>

            {/* Spécialités */}
            <div className="card shadow-lg border-0 mb-4">
              <div className="card-body p-5">
                <h2 className="text-primary mb-4">
                  <i className="bi bi-award me-2"></i>
                  Domaines d'Expertise
                </h2>
                <div className="row">
                  <div className="col-md-6 mb-3">
                    <div className="d-flex align-items-start">
                      <i className="bi bi-check-circle-fill text-primary me-3 fs-5"></i>
                      <div>
                        <h5>Dermatologie Médicale</h5>
                        <p className="text-muted mb-0">
                          Diagnostic et traitement des maladies de la peau, 
                          des ongles et des cheveux
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 mb-3">
                    <div className="d-flex align-items-start">
                      <i className="bi bi-check-circle-fill text-primary me-3 fs-5"></i>
                      <div>
                        <h5>Dermatologie Pédiatrique</h5>
                        <p className="text-muted mb-0">
                          Soins spécialisés pour les nourrissons, 
                          enfants et adolescents
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 mb-3">
                    <div className="d-flex align-items-start">
                      <i className="bi bi-check-circle-fill text-primary me-3 fs-5"></i>
                      <div>
                        <h5>Médecine Esthétique</h5>
                        <p className="text-muted mb-0">
                          Traitements esthétiques non invasifs : 
                          laser, injections, peeling
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 mb-3">
                    <div className="d-flex align-items-start">
                      <i className="bi bi-check-circle-fill text-primary me-3 fs-5"></i>
                      <div>
                        <h5>Vénéréologie</h5>
                        <p className="text-muted mb-0">
                          Dépistage et traitement des maladies 
                          sexuellement transmissibles
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 mb-3">
                    <div className="d-flex align-items-start">
                      <i className="bi bi-check-circle-fill text-primary me-3 fs-5"></i>
                      <div>
                        <h5>Chirurgie Dermatologique</h5>
                        <p className="text-muted mb-0">
                          Interventions chirurgicales pour l'ablation 
                          de lésions cutanées
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 mb-3">
                    <div className="d-flex align-items-start">
                      <i className="bi bi-check-circle-fill text-primary me-3 fs-5"></i>
                      <div>
                        <h5>Allergologie Cutanée</h5>
                        <p className="text-muted mb-0">
                          Diagnostic et traitement des allergies 
                          et réactions cutanées
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Approche et valeurs */}
            <div className="card shadow-lg border-0">
              <div className="card-body p-5">
                <h2 className="text-primary mb-4">
                  <i className="bi bi-heart me-2"></i>
                  Notre Approche
                </h2>
                <div className="row">
                  <div className="col-md-4 mb-4 text-center">
                    <div className="p-4">
                      <i className="bi bi-person-check-fill text-primary" style={{ fontSize: '3rem' }}></i>
                      <h5 className="mt-3 mb-2">Écoute et Empathie</h5>
                      <p className="text-muted">
                        Chaque patient est unique. Nous prenons le temps 
                        d'écouter et de comprendre vos préoccupations.
                      </p>
                    </div>
                  </div>
                  <div className="col-md-4 mb-4 text-center">
                    <div className="p-4">
                      <i className="bi bi-shield-check-fill text-primary" style={{ fontSize: '3rem' }}></i>
                      <h5 className="mt-3 mb-2">Excellence Médicale</h5>
                      <p className="text-muted">
                        Utilisation des dernières techniques et protocoles 
                        pour des soins de qualité supérieure.
                      </p>
                    </div>
                  </div>
                  <div className="col-md-4 mb-4 text-center">
                    <div className="p-4">
                      <i className="bi bi-star-fill text-primary" style={{ fontSize: '3rem' }}></i>
                      <h5 className="mt-3 mb-2">Résultats Personnalisés</h5>
                      <p className="text-muted">
                        Traitements adaptés à vos besoins spécifiques 
                        pour des résultats optimaux.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

