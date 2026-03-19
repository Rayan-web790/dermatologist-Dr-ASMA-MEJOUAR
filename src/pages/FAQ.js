import React, { useEffect, useState } from 'react';

const FAQ = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [openIndex, setOpenIndex] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const faqCategories = [
    {
      title: "Rendez-vous",
      icon: "bi-calendar-check",
      items: [
        {
          question: "Comment prendre un rendez-vous ?",
          answer: "Vous pouvez prendre un rendez-vous de plusieurs façons : Par WhatsApp : 0524408296 / 0661063999, Par email : asmamejouar@gmail.com, Par téléphone : Appelez-nous directement, Via le formulaire de contact : Sur notre site web",
          arabic: "يمكنك حجز موعد بعدة طرق: عبر الواتساب: 0524408296 / 0661063999، عبر البريد الإلكتروني: asmamejouar@gmail.com، عبر الهاتف: اتصل بنا مباشرة، عبر نموذج الاتصال: على موقعنا الإلكتروني"
        },
        {
          question: "Quels sont les horaires de consultation ?",
          answer: "Pour connaître nos horaires d'ouverture, veuillez nous contacter directement par téléphone ou WhatsApp. Nous serons ravis de vous renseigner sur les disponibilités.",
          arabic: "لمعرفة أوقات الاستشارة، يرجى الاتصال بنا مباشرة عبر الهاتف أو الواتساب. سنكون سعداء لإعلامك بالتواريخ المتاحة."
        },
        {
          question: "Puis-je annuler ou reporter mon rendez-vous ?",
          answer: "Oui, vous pouvez annuler ou reporter votre rendez-vous. Nous vous demandons de nous prévenir au moins 24 heures à l'avance pour permettre à d'autres patients de bénéficier du créneau. Contactez-nous par WhatsApp ou téléphone.",
          arabic: "نعم، يمكنك إلغاء أو تأجيل موعدك. نطلب منك إعلامنا قبل 24 ساعة على الأقل للسماح لمرضى آخرين بالاستفادة من الموعد. اتصل بنا عبر الواتساب أو الهاتف."
        }
      ]
    },
    {
      title: "Services et Traitements",
      icon: "bi-heart-pulse",
      items: [
        {
          question: "Quels types de problèmes cutanés traitez-vous ?",
          answer: "Nous traitons une large gamme de problèmes cutanés, notamment : Acné et cicatrices d'acné, Eczéma et psoriasis, Allergies cutanées, Infections cutanées, Problèmes de cheveux et d'ongles, Maladies sexuellement transmissibles, Traitements esthétiques (rides, taches, etc.)",
          arabic: "نعالج مجموعة واسعة من مشاكل الجلد، بما في ذلك: حب الشباب وندوب حب الشباب، الإكزيما والصدفية، الحساسية الجلدية، الالتهابات الجلدية، مشاكل الشعر والأظافر، الأمراض المنقولة جنسياً، العلاجات التجميلية (التجاعيد، البقع، إلخ)"
        },
        {
          question: "Combien de séances sont nécessaires pour un traitement au laser ?",
          answer: "Le nombre de séances dépend du type de traitement et de votre condition. En général, les traitements au laser nécessitent entre 3 à 6 séances espacées de 4 à 6 semaines. Le Dr. Mejouar évaluera votre cas lors de la première consultation et vous donnera un plan de traitement personnalisé.",
          arabic: "يعتمد عدد الجلسات على نوع العلاج وحالتك. بشكل عام، تتطلب علاجات الليزر ما بين 3 إلى 6 جلسات متباعدة من 4 إلى 6 أسابيع. ستقوم الدكتورة مجوار بتقييم حالتك في الاستشارة الأولى وستعطيك خطة علاج شخصية."
        },
        {
          question: "Les traitements sont-ils douloureux ?",
          answer: "La plupart de nos traitements sont bien tolérés. Certains traitements comme le laser ou le peeling peuvent causer une légère sensation de picotement ou de chaleur, mais ils sont généralement très supportables. Pour les interventions plus invasives, une anesthésie locale est utilisée pour votre confort.",
          arabic: "معظم علاجاتنا جيدة التحمل. بعض العلاجات مثل الليزر أو التقشير قد تسبب إحساساً خفيفاً بالوخز أو الحرارة، لكنها عادة ما تكون محتملة جداً. للتدخلات الأكثر توغلاً، يتم استخدام تخدير موضعي لراحتك."
        },
        {
          question: "Quels sont les délais de récupération après un traitement ?",
          answer: "Les délais de récupération varient selon le type de traitement : Injections esthétiques : Aucun temps d'arrêt, retour immédiat aux activités, Peeling chimique : 2-7 jours selon l'intensité, Laser : 1-3 jours de rougeur légère, Chirurgie dermatologique : 7-14 jours selon la procédure. Le Dr. Mejouar vous donnera des instructions précises pour votre cas.",
          arabic: "تختلف أوقات التعافي حسب نوع العلاج: الحقن التجميلية: لا يوجد وقت توقف، العودة الفورية للأنشطة، التقشير الكيميائي: 2-7 أيام حسب الشدة، الليزر: 1-3 أيام من الاحمرار الخفيف، الجراحة الجلدية: 7-14 يوماً حسب الإجراء"
        }
      ]
    },
    {
      title: "Tarifs et Paiement",
      icon: "bi-currency-euro",
      items: [
        {
          question: "Quels sont les tarifs des consultations et traitements ?",
          answer: "Les tarifs varient selon le type de consultation et de traitement. Pour obtenir des informations précises sur les prix, veuillez nous contacter directement. Nous serons heureux de vous fournir un devis personnalisé adapté à vos besoins.",
          arabic: "تختلف الأسعار حسب نوع الاستشارة والعلاج. للحصول على معلومات دقيقة حول الأسعار، يرجى الاتصال بنا مباشرة. سنكون سعداء لتزويدك بعرض أسعار شخصي يناسب احتياجاتك."
        },
        {
          question: "Quels modes de paiement acceptez-vous ?",
          answer: "Nous acceptons les paiements en espèces et par carte bancaire. Pour plus d'informations sur les modes de paiement disponibles, contactez-nous.",
          arabic: "نقبل المدفوعات نقداً وبالبطاقة المصرفية. لمزيد من المعلومات حول طرق الدفع المتاحة، اتصل بنا."
        }
      ]
    },
    {
      title: "Informations Générales",
      icon: "bi-info-circle",
      items: [
        {
          question: "Où se trouve le cabinet ?",
          answer: "Notre cabinet est situé à : Adresse : J24J+X68, Marrakech, Maroc. Vous pouvez consulter la carte sur notre page de contact pour trouver l'itinéraire exact.",
          arabic: "يقع عيادتنا في: العنوان: J24J+X68، مراكش، المغرب. يمكنك الاطلاع على الخريطة في صفحة الاتصال للعثور على المسار الدقيق."
        },
        {
          question: "Le Dr. Mejouar accepte-t-elle les enfants ?",
          answer: "Oui, le Dr. Asma Mejouar est spécialisée en dermatologie pédiatrique et accepte les consultations pour les nourrissons, enfants et adolescents. Elle adapte son approche et ses traitements à l'âge de l'enfant.",
          arabic: "نعم، الدكتورة أسماء مجوار متخصصة في الأمراض الجلدية للأطفال وتقبل الاستشارات للرضع والأطفال والمراهقين. تكيف نهجها وعلاجاتها مع عمر الطفل."
        },
        {
          question: "Dois-je apporter quelque chose à ma première consultation ?",
          answer: "Pour votre première consultation, il est recommandé d'apporter : Votre carte d'identité, Vos anciens dossiers médicaux (si vous en avez), La liste des médicaments que vous prenez actuellement, Les résultats d'analyses récentes (le cas échéant), Des photos de l'évolution de votre problème (si applicable).",
          arabic: "لاستشارتك الأولى، يُنصح بإحضار: بطاقة الهوية، ملفاتك الطبية السابقة (إن وجدت)، قائمة الأدوية التي تتناولها حالياً، نتائج التحليلات الحديثة (إن وجدت)، صور لتطور مشكلتك (إن أمكن)"
        },
        {
          question: "Les consultations sont-elles remboursées par l'assurance ?",
          answer: "Cela dépend de votre assurance maladie. Les consultations de dermatologie médicale sont généralement remboursées, tandis que les traitements esthétiques ne le sont généralement pas. Nous vous recommandons de vérifier avec votre assurance avant la consultation.",
          arabic: "يعتمد ذلك على تأمينك الصحي. عادة ما يتم استرداد استشارات الأمراض الجلدية الطبية، بينما لا يتم استرداد العلاجات التجميلية عادة. ننصحك بالتحقق مع تأمينك قبل الاستشارة."
        }
      ]
    }
  ];

  const toggleFAQ = (categoryIndex, itemIndex) => {
    const key = `${categoryIndex}-${itemIndex}`;
    setOpenIndex(openIndex === key ? null : key);
  };

  const filteredCategories = faqCategories.map(category => ({
    ...category,
    items: category.items.filter(item =>
      item.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.answer.toLowerCase().includes(searchTerm.toLowerCase())
    )
  })).filter(category => category.items.length > 0);

  return (
    <div style={{ marginTop: '76px', paddingTop: '40px' }}>
      {/* Header */}
      <div 
        className="text-white text-center py-5"
        style={{
          background: 'linear-gradient(135deg, #1976d2 0%, #125ea5 100%)',
          marginBottom: '40px'
        }}
      >
        <div className="container">
          <h1 className="display-4 mb-3">
            <i className="bi bi-question-circle-fill me-3"></i>
            Questions Fréquentes
          </h1>
          <p className="lead">Trouvez rapidement les réponses à vos questions</p>
        </div>
      </div>

      {/* Search Box */}
      <div className="container mb-5">
        <div className="row justify-content-center">
          <div className="col-lg-6">
            <div className="position-relative">
              <input
                type="text"
                className="form-control form-control-lg"
                placeholder="Rechercher une question..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                style={{
                  padding: '15px 50px 15px 20px',
                  borderRadius: '50px',
                  border: '2px solid #e0e0e0'
                }}
              />
              <i 
                className="bi bi-search position-absolute"
                style={{
                  right: '20px',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  color: '#1976d2',
                  fontSize: '20px'
                }}
              ></i>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Content */}
      <div className="container mb-5">
        {filteredCategories.length === 0 ? (
          <div className="text-center py-5">
            <i className="bi bi-search" style={{ fontSize: '64px', color: '#ddd' }}></i>
            <h3 className="mt-3 text-muted">Aucun résultat trouvé</h3>
            <p className="text-muted">Essayez avec d'autres mots-clés</p>
          </div>
        ) : (
          filteredCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="mb-5">
              <h2 
                className="mb-4"
                style={{
                  color: '#1976d2',
                  fontSize: '28px',
                  fontWeight: '700',
                  paddingBottom: '15px',
                  borderBottom: '3px solid #1976d2'
                }}
              >
                <i className={`bi ${category.icon} me-2`}></i>
                {category.title}
              </h2>

              {category.items.map((item, itemIndex) => {
                const key = `${categoryIndex}-${itemIndex}`;
                const isOpen = openIndex === key;

                return (
                  <div
                    key={itemIndex}
                    className="card shadow-sm border-0 mb-3"
                    style={{
                      borderRadius: '15px',
                      overflow: 'hidden',
                      transition: 'all 0.3s ease'
                    }}
                  >
                    <button
                      className="btn w-100 text-start p-4"
                      onClick={() => toggleFAQ(categoryIndex, itemIndex)}
                      style={{
                        background: 'white',
                        border: 'none',
                        fontSize: '18px',
                        fontWeight: '600',
                        color: '#333'
                      }}
                    >
                      <div className="d-flex justify-content-between align-items-center">
                        <span>{item.question}</span>
                        <i 
                          className={`bi bi-chevron-${isOpen ? 'up' : 'down'}`}
                          style={{ color: '#1976d2' }}
                        ></i>
                      </div>
                    </button>
                    {isOpen && (
                      <div className="px-4 pb-4">
                        <div 
                          className="text-muted"
                          style={{ lineHeight: '1.8', paddingTop: '15px' }}
                        >
                          <p>{item.answer}</p>
                          <p 
                            className="arabic mt-3 pt-3"
                            style={{
                              direction: 'rtl',
                              textAlign: 'right',
                              borderTop: '1px solid #e0e0e0'
                            }}
                          >
                            {item.arabic}
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default FAQ;

