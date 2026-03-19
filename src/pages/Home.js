import React, { useEffect, useLayoutEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import Medical3DHero from '../components/Medical3DHero';

const Home = () => {
  const topRef = useRef(null);

  // useLayoutEffect runs synchronously before browser paint
  useLayoutEffect(() => {
    // Force scroll to top immediately before render
    const forceScroll = () => {
      // Reset all scroll positions
      if (window.pageYOffset !== 0) {
        window.scrollTo(0, 0);
      }
      if (document.documentElement.scrollTop !== 0) {
        document.documentElement.scrollTop = 0;
      }
      if (document.body.scrollTop !== 0) {
        document.body.scrollTop = 0;
      }
      if (document.scrollingElement && document.scrollingElement.scrollTop !== 0) {
        document.scrollingElement.scrollTop = 0;
      }
    };
    
    forceScroll();
  }, []);

  useEffect(() => {
    // Aggressive scroll to top when component mounts
    const forceScroll = () => {
      // Reset all scroll positions
      window.scrollTo(0, 0);
      window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
      if (document.scrollingElement) {
        document.scrollingElement.scrollTop = 0;
      }
      
      // Try scrolling to ref element
      if (topRef.current) {
        try {
          topRef.current.scrollIntoView({ behavior: 'auto', block: 'start' });
        } catch (e) {
          // Ignore errors
        }
      }
    };
    
    // Immediate
    forceScroll();
    
    // Multiple attempts with different timings
    const timers = [
      setTimeout(forceScroll, 0),
      setTimeout(forceScroll, 1),
      setTimeout(forceScroll, 10),
      setTimeout(forceScroll, 50),
      setTimeout(forceScroll, 100),
      setTimeout(forceScroll, 200)
    ];
    
    // Also use requestAnimationFrame
    requestAnimationFrame(forceScroll);
    requestAnimationFrame(() => {
      requestAnimationFrame(forceScroll);
    });
    
    return () => {
      timers.forEach(timer => clearTimeout(timer));
    };
  }, []);

  return (
    <div style={{ minHeight: '100vh', width: '100%', position: 'relative', marginTop: '0', paddingTop: '0' }}>
      {/* Scroll anchor - positioned at the very top */}
      <div 
        ref={topRef}
        id="home-top" 
        style={{ 
          position: 'absolute', 
          top: 0, 
          left: 0, 
          height: '1px', 
          width: '1px',
          pointerEvents: 'none',
          visibility: 'hidden'
        }}
      ></div>
      
      {/* Hero Section */}
      <section 
        className="hero-section d-flex align-items-center justify-content-center text-center text-white"
        style={{
          backgroundImage: 'linear-gradient(rgba(25, 118, 210, 0.5), rgba(25, 118, 210, 0.5)), url(/images/bienvenueDERMA.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          minHeight: 'calc(100vh - 76px)',
          position: 'relative',
          marginTop: '76px',
          paddingTop: '0',
          paddingBottom: '0',
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxSizing: 'border-box'
        }}
      >
        <div className="overlay" style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.4)',
          zIndex: 1
        }}></div>
        <div className="container position-relative" style={{ zIndex: 2 }}>
          <h1 className="display-3 fw-bold mb-4" style={{ textShadow: '2px 2px 8px rgba(0,0,0,0.6)' }}>
            Bienvenue au Cabinet Dermatologique, Vénéréologie et Médecine Esthétique
          </h1>
          <p className="lead mb-4" style={{ textShadow: '1px 1px 6px rgba(0,0,0,0.6)', maxWidth: '700px', margin: '0 auto' }}>
            Un espace de soins spécialisés pour votre peau, vos cheveux et vos ongles,
            dirigé par la Dr. Asma Mejouar, dermatologue expérimentée.
          </p>
          <Link to="/contact" className="btn btn-light btn-lg px-5 py-3 mt-3 shadow-lg">
            Prendre Rendez-vous
          </Link>
        </div>
      </section>

      <Medical3DHero />

      {/* Main Content Section */}
      <div className="container my-5" style={{ position: 'relative', zIndex: 10 }}>
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="card shadow-lg border-0" style={{ marginTop: '-150px', position: 'relative', zIndex: 5, borderRadius: '15px' }}>
              <div className="card-body p-5">
                <h2 className="text-primary mb-4">Qu'est-ce que la dermatologie ?</h2>
                <p className="mb-4">
                  La dermatologie est une spécialité médicale dédiée au diagnostic et au traitement des maladies de la peau,
                  des cheveux, des ongles et des muqueuses. Elle comprend également des soins esthétiques comme le traitement
                  des rides, des cicatrices ou des taches pigmentaires. Le dermatologue est également formé pour effectuer
                  des interventions chirurgicales mineures et des traitements au laser.
                </p>
                <p className="arabic mb-5">
                  الأمراض الجلدية هي تخصص طبي يهتم بتشخيص وعلاج أمراض الجلد والشعر والأظافر والأغشية المخاطية.
                  كما تشمل العلاجات التجميلية مثل معالجة التجاعيد والندوب والبقع الصبغية.
                  كما يتم تدريب طبيب الأمراض الجلدية على القيام بعمليات جراحية طفيفة وعلاجات بالليزر.
                </p>

                <h2 className="text-primary mb-4">À propos du Dr. Asma Mejouar</h2>
                <p className="mb-4">
                  Le Dr. Asma Mejouar est un médecin spécialiste en dermatologie, vénéréologie et médecine esthétique. Elle est diplômée de la faculté de médecine de Casablanca, ancienne interne du CHU Ibn Rochd (Casablanca), et lauréate de la faculté de médecine de Marrakech. Dr. ASMA MEJOUAR est une dermatologue diplômée avec plusieurs années d'expérience dans le domaine médical.
                  Elle allie professionnalisme, écoute et expertise pour offrir à ses patients un suivi personnalisé,
                  que ce soit en dermatologie médicale, chirurgicale ou esthétique.
                </p>
                <p className="arabic mb-5">
                  الدكتورة أسماء مجوار هي طبيبة متخصصة في الأمراض الجلدية، والأمراض التناسلية، وطب التجميل.
                  حاصلة على دبلوم من كلية الطب بالدار البيضاء، وكانت طبيبة داخلية سابقة بالمستشفى الجامعي ابن رشد (الدار البيضاء)، وخريجة كلية الطب بمراكش.
                  الدكتورة أسماء مجوار هي طبيبة جلدية حاصلة على شهادة تخصص ولديها سنوات عديدة من الخبرة في المجال الطبي.
                  تجمع بين الاحترافية، وحسن الإصغاء، والخبرة لتقديم متابعة شخصية لمرضاها، سواء في الأمراض الجلدية الطبية أو الجراحية أو التجميلية
                </p>

                <h2 className="text-primary mb-4">Son champ de spécialisation couvre :</h2>
                <div className="row mb-4">
                  <div className="col-md-6">
                    <ul className="list-unstyled">
                      <li className="mb-2"><i className="bi bi-check-circle-fill text-primary me-2"></i>Les maladies de la peau, des ongles et des cheveux</li>
                      <li className="mb-2"><i className="bi bi-check-circle-fill text-primary me-2"></i>Les allergies cutanées</li>
                      <li className="mb-2"><i className="bi bi-check-circle-fill text-primary me-2"></i>La chirurgie dermatologique</li>
                    </ul>
                  </div>
                  <div className="col-md-6">
                    <ul className="list-unstyled">
                      <li className="mb-2"><i className="bi bi-check-circle-fill text-primary me-2"></i>Les maladies sexuellement transmissibles</li>
                      <li className="mb-2"><i className="bi bi-check-circle-fill text-primary me-2"></i>La dermatologie pédiatrique</li>
                      <li className="mb-2"><i className="bi bi-check-circle-fill text-primary me-2"></i>La dermatologie esthétique</li>
                    </ul>
                  </div>
                </div>
                <p className="arabic">
                  أمراض الجلد والأظافر والشعر<br/>
                  الحساسية الجلدية<br/>
                  الجراحة الجلدية<br/>
                  الأمراض المنقولة جنسياً<br/>
                  الأمراض الجلدية عند الأطفال (الأمراض الجلدية للأطفال)<br/>
                  الأمراض الجلدية التجميلية (الأمراض الجلدية الجمالية)
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

