import React, { useEffect } from 'react';

const Testimonials = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const testimonials = [
    {
      name: "Fatima A.",
      location: "Marrakech",
      rating: 5,
      text: "Excellent service ! Le Dr. Mejouar est très professionnelle et à l'écoute. Elle a su traiter mon problème d'acné avec beaucoup de patience. Je recommande vivement !",
      arabic: "خدمة ممتازة! الدكتورة مجوار محترفة جداً ومستمع جيد. عالجت مشكلة حب الشباب لدي بصبر كبير. أنصح بشدة!",
      treatment: "Traitement de l'acné"
    },
    {
      name: "Ahmed B.",
      location: "Marrakech",
      rating: 5,
      text: "Consultation très professionnelle. Le Dr. Mejouar a su diagnostiquer rapidement mon problème de peau et m'a proposé un traitement adapté. Résultats visibles après quelques semaines.",
      arabic: "استشارة احترافية جداً. الدكتورة مجوار استطاعت تشخيص مشكلة بشرتي بسرعة واقترحت علاجاً مناسباً. النتائج ظاهرة بعد بضعة أسابيع.",
      treatment: "Consultation dermatologique"
    },
    {
      name: "Sara M.",
      location: "Marrakech",
      rating: 5,
      text: "J'ai consulté pour mon fils de 8 ans qui avait un eczéma. Le Dr. Mejouar a été très douce avec lui et a su le rassurer. Le traitement a été efficace et mon fils se sent beaucoup mieux maintenant.",
      arabic: "استشرت من أجل ابني البالغ من العمر 8 سنوات الذي كان يعاني من إكزيما. الدكتورة مجوار كانت لطيفة جداً معه واستطاعت طمأنته. العلاج كان فعالاً وابني يشعر بتحسن كبير الآن.",
      treatment: "Dermatologie pédiatrique"
    },
    {
      name: "Youssef K.",
      location: "Marrakech",
      rating: 5,
      text: "Traitement au laser pour des taches pigmentaires. Le Dr. Mejouar m'a bien expliqué le processus et les résultats sont excellents. Cabinet moderne et équipé.",
      arabic: "علاج بالليزر للبقع الصبغية. الدكتورة مجوار شرحت لي العملية بشكل جيد والنتائج ممتازة. عيادة حديثة ومجهزة.",
      treatment: "Laser dermatologique"
    },
    {
      name: "Aicha L.",
      location: "Marrakech",
      rating: 5,
      text: "Injection esthétique réalisée avec beaucoup de professionnalisme. Résultat naturel et harmonieux. Je suis très satisfaite et je reviendrai certainement.",
      arabic: "حقن تجميلية تم إجراؤها باحترافية كبيرة. النتيجة طبيعية ومتناسقة. أنا راضية جداً وسأعود بالتأكيد.",
      treatment: "Injections esthétiques"
    },
    {
      name: "Mohamed R.",
      location: "Marrakech",
      rating: 5,
      text: "Consultation rapide et efficace. Le Dr. Mejouar est très compétente et prend le temps d'expliquer. Je recommande ce cabinet sans hésitation.",
      arabic: "استشارة سريعة وفعالة. الدكتورة مجوار كفؤة جداً وتأخذ الوقت للشرح. أنصح بهذه العيادة دون تردد.",
      treatment: "Consultation générale"
    }
  ];

  return (
    <div style={{ marginTop: '76px', paddingTop: '40px' }}>
      {/* Header */}
      <div 
        className="text-white text-center py-5"
        style={{
          background: 'linear-gradient(135deg, #1976d2 0%, #125ea5 100%)',
          marginBottom: '60px'
        }}
      >
        <div className="container">
          <h1 className="display-4 mb-3">
            <i className="bi bi-star-fill me-3"></i>
            Témoignages de nos Patients
          </h1>
          <p className="lead">Découvrez ce que nos patients disent de nos services</p>
        </div>
      </div>

      <div className="container py-5">
        <div className="row">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="col-lg-6 mb-4">
              <div className="card shadow-lg border-0 h-100" style={{ borderRadius: '15px' }}>
                <div className="card-body p-4">
                  {/* Rating */}
                  <div className="mb-3">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <i key={i} className="bi bi-star-fill text-warning"></i>
                    ))}
                  </div>

                  {/* Testimonial text */}
                  <p className="mb-4" style={{ fontSize: '1.1rem', lineHeight: '1.8' }}>
                    "{testimonial.text}"
                  </p>

                  {/* Arabic version */}
                  <p 
                    className="arabic mb-4 text-muted"
                    style={{
                      direction: 'rtl',
                      textAlign: 'right',
                      fontSize: '1rem',
                      lineHeight: '1.8',
                      paddingTop: '15px',
                      borderTop: '1px solid #e0e0e0'
                    }}
                  >
                    "{testimonial.arabic}"
                  </p>

                  {/* Treatment type */}
                  <div className="mb-3">
                    <span className="badge bg-primary">
                      <i className="bi bi-heart-pulse me-1"></i>
                      {testimonial.treatment}
                    </span>
                  </div>

                  {/* Author */}
                  <div className="d-flex align-items-center">
                    <div 
                      className="rounded-circle d-flex align-items-center justify-content-center me-3"
                      style={{
                        width: '50px',
                        height: '50px',
                        backgroundColor: '#1976d2',
                        color: 'white',
                        fontSize: '1.2rem',
                        fontWeight: 'bold'
                      }}
                    >
                      {testimonial.name.charAt(0)}
                    </div>
                    <div>
                      <h6 className="mb-0">{testimonial.name}</h6>
                      <small className="text-muted">
                        <i className="bi bi-geo-alt me-1"></i>
                        {testimonial.location}
                      </small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to action */}
        <div className="text-center mt-5">
          <div className="card shadow-lg border-0" style={{ background: 'linear-gradient(135deg, #1976d2 0%, #125ea5 100%)' }}>
            <div className="card-body p-5 text-white">
              <h2 className="mb-3">Vous souhaitez partager votre expérience ?</h2>
              <p className="lead mb-4">
                Votre avis nous est précieux et aide d'autres patients à prendre leur décision.
              </p>
              <a 
                href="mailto:asmamejouar@gmail.com?subject=Témoignage"
                className="btn btn-light btn-lg"
              >
                <i className="bi bi-envelope me-2"></i>
                Envoyer un témoignage
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;

