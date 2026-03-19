import React, { useEffect } from 'react';

const Specialites = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const specialites = [
    {
      title: "Maladies de la peau, ongles et cheveux",
      images: [
        "/images/skin.jpg",
        "/images/cheveux.jpg",
        "/images/ongles.jpg"
      ],
      description: "Nous prenons en charge l'ensemble des affections dermatologiques touchant la peau, les ongles et les cheveux. Cela inclut les problèmes courants comme l'eczéma, le psoriasis, la chute de cheveux, les mycoses, ainsi que les maladies plus complexes nécessitant un suivi médical spécialisé. Notre objectif est d'offrir des traitements adaptés à chaque patient pour améliorer la santé et l'apparence de la peau et des phanères.",
      arabic: "نحن نهتم بجميع الأمراض الجلدية التي تصيب الجلد والأظافر والشعر. يشمل ذلك المشاكل الشائعة مثل الأكزيما، الصدفية، تساقط الشعر، الفطريات، بالإضافة إلى الأمراض المعقدة التي تتطلب متابعة طبية متخصصة. هدفنا هو توفير علاجات مناسبة لكل مريض لتحسين صحة ومظهر الجلد والشعر والأظافر"
    },
    {
      title: "Allergies cutanées",
      images: [
        "/images/allergie.jpg",
        "/images/Allergies cutanées2.jpg",
        "/images/Allergies cutanées3.jpg"
      ],
      description: "Les allergies cutanées se manifestent par des rougeurs, démangeaisons, éruptions ou irritations. Nous proposons un diagnostic précis via des tests cutanés (tests d'allergie, patch tests) pour identifier la cause et fournir un traitement personnalisé. L'intervention médicale vise à soulager les symptômes et à prévenir les récidives.",
      arabic: "تظهر الحساسية الجلدية في شكل احمرار، حكة، بثور أو تهيج. نحن نقدم تشخيصًا دقيقًا عبر اختبارات جلدية (اختبارات الحساسية، اختبار الرقعة) لتحديد السبب وتوفير علاج مخصص. يهدف التدخل الطبي إلى تخفيف الأعراض ومنع تكرارها."
    },
    {
      title: "Chirurgie dermatologique",
      images: [
        "/images/CD.jpg",
        "/images/Chirurgie dermatologique2.jpg",
        "/images/Chirurgie dermatologique3.jpg"
      ],
      description: "La chirurgie dermatologique consiste à enlever les lésions cutanées bénignes ou suspectes (grains de beauté, kystes, lipomes, tumeurs cutanées). Elle permet à la fois un geste thérapeutique et esthétique, en assurant une cicatrisation optimale et une analyse histologique si nécessaire.",
      arabic: "الجراحة الجلدية تهدف إلى إزالة الآفات الجلدية الحميدة أو المشبوهة (الشامات، الأكياس، الأورام الدهنية، الأورام الجلدية). تُمكّن هذه التدخلات من تحقيق علاج طبي وجمالي في نفس الوقت، مع ضمان التئام جيد للجرح وإجراء فحص نسيجي عند الحاجة."
    },
    {
      title: "Maladies sexuellement transmissibles",
      images: [
        "/images/mst.jpg",
        "/images/Maladies sexuellement transmissibles2.jpg",
        "/images/Maladies sexuellement transmissibles3.jpg"
      ],
      description: "Nous assurons le dépistage, le diagnostic et le traitement des maladies sexuellement transmissibles (MST), telles que l'herpès, la syphilis, la chlamydia ou le VIH. Une prise en charge confidentielle et personnalisée est proposée, associée à des conseils de prévention et d'éducation à la santé sexuelle.",
      arabic: "نقوم بالكشف، التشخيص والعلاج للأمراض المنقولة جنسيًا مثل الهربس، الزهري، الكلاميديا أو فيروس نقص المناعة. نقدم متابعة طبية بسرية تامة وبأسلوب شخصي، مع تقديم نصائح للوقاية والتثقيف الصحي الجنسي."
    },
    {
      title: "Dermatologie pédiatrique",
      images: [
        "/images/enfant.jpg",
        "/images/Dermatologie pédiatrique2.jpg",
        "/images/Dermatologie pédiatrique3.jpg"
      ],
      description: "La dermatologie pédiatrique prend en charge les affections cutanées chez les nourrissons, enfants et adolescents. Cela comprend l'eczéma atopique, les infections cutanées, les taches congénitales, les verrues et l'acné juvénile. Notre approche est adaptée à l'âge de l'enfant, douce et rassurante pour les parents.",
      arabic: "الأمراض الجلدية للأطفال تهتم بعلاج مشاكل الجلد عند الرضع، الأطفال والمراهقين. يشمل ذلك الأكزيما التأتبية، الالتهابات الجلدية، البقع الخُلقية، الثآليل وحب الشباب عند المراهقين. نعتمد على أسلوب علاجي لطيف يتناسب مع عمر الطفل ويطمئن الأهل"
    },
    {
      title: "Dermatologie esthétique",
      images: [
        "/images/esthetique.jpg",
        "/images/Dermatologie esthétique2.jpg",
        "/images/Dermatologie esthétique3.jpg"
      ],
      description: "La dermatologie esthétique regroupe des soins visant à améliorer l'apparence de la peau : traitement des rides, cicatrices, taches pigmentaires, perte de volume, relâchement cutané. Nous utilisons des techniques modernes comme les injections, le peeling, le laser et la mésothérapie, tout en respectant le naturel et l'harmonie du visage.",
      arabic: "الأمراض الجلدية التجميلية تشمل علاجات تهدف إلى تحسين مظهر البشرة: معالجة التجاعيد، الندوب، البقع الصبغية، فقدان الحجم وترهل الجلد. نعتمد على تقنيات حديثة مثل الحقن، التقشير الكيميائي، الليزر والميزوثيرابي، مع الحفاظ على مظهر طبيعي ومتناسق للوجه."
    }
  ];

  return (
    <div style={{ marginTop: '76px', paddingTop: '40px' }}>
      <div className="container py-5">
        <h1 className="text-center text-primary mb-5">Nos Spécialités</h1>
        
        {specialites.map((specialite, index) => (
          <div key={index} className="card shadow-lg border-0 mb-5">
            <div className="card-body p-4">
              <h2 className="text-primary mb-4">{specialite.title}</h2>
              
              <div className="row g-3 mb-4">
                {specialite.images.map((img, imgIndex) => (
                  <div key={imgIndex} className="col-md-4">
                    <img 
                      src={img} 
                      alt={specialite.title}
                      className="img-fluid rounded shadow-sm"
                      style={{ 
                        width: '100%', 
                        height: '250px', 
                        objectFit: 'cover',
                        transition: 'transform 0.3s ease'
                      }}
                      onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                      onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                    />
                  </div>
                ))}
              </div>
              
              <p className="mb-3">{specialite.description}</p>
              <p className="arabic">{specialite.arabic}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Specialites;





