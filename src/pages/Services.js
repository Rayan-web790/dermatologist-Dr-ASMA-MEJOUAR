import React, { useEffect } from 'react';

const Services = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const services = [
    {
      title: "Diagnostic de la peau",
      images: [
        "/images/DIagnostic de la peau.jpg",
        "/images/DP.jpg",
        "/images/Diagnostic de la peau3.jpg"
      ],
      description: "Le diagnostic de la peau est une étape fondamentale en dermatologie. Il consiste à analyser en profondeur l'état de la peau grâce à des outils spécialisés et à l'expertise du dermatologue. Cette évaluation permet d'identifier les affections cutanées (acné, eczéma, psoriasis, infections, allergies, taches, vieillissement prématuré…) et de déterminer le traitement le plus adapté. Un bon diagnostic prend en compte l'historique médical, les habitudes de vie, ainsi que les caractéristiques propres à chaque patient (type de peau, sensibilité, exposition au soleil). C'est une étape essentielle pour prévenir, traiter efficacement et assurer une peau saine et équilibrée.",
      arabic: "تشخيص الجلد هو خطوة أساسية في طب الأمراض الجلدية. يهدف إلى تحليل حالة الجلد بشكل معمّق باستعمال أدوات متخصّصة وخبرة طبيب الجلد. يساعد هذا التقييم على تحديد الأمراض الجلدية مثل حبّ الشباب، الإكزيما، الصدفية، الالتهابات، الحساسية، البقع والتقدّم المبكر في العمر، ثم اختيار العلاج الأنسب. يأخذ التشخيص بعين الاعتبار التاريخ الطبي للمريض، ونمط حياته، وخصائص بشرته (نوع البشرة، حساسيتها، ومدى تعرضها للشمس). يُعد التشخيص الدقيق أساسياً للوقاية والعلاج وضمان بشرة صحية ومتوازنة."
    },
    {
      title: "Traitement de l'acné",
      images: [
        "/images/acne.jpg",
        "/images/acné2.jpg",
        "/images/acné3.jpg"
      ],
      description: "Le traitement de l'acné vise à réduire les boutons, points noirs, inflammations et cicatrices laissées par cette affection fréquente. Selon la gravité, il peut inclure des crèmes ou gels topiques, des médicaments oraux (antibiotiques, rétinoïdes), des soins dermatologiques tels que le peeling ou la lumière LED, et des conseils d'hygiène de vie adaptés. L'objectif est non seulement d'améliorer l'apparence de la peau, mais aussi de prévenir les cicatrices permanentes et de renforcer la confiance en soi du patient.",
      arabic: "علاج حبّ الشباب يهدف إلى التخفيف من البثور، الرؤوس السوداء، الالتهابات والندوب التي يخلّفها هذا المرض الشائع. يعتمد العلاج على شدّة الحالة، وقد يشمل كريمات أو جلّات موضعية، أدوية عبر الفم (مثل المضادات الحيوية أو الريتينويدات)، أو جلسات علاجية عند طبيب الجلد كالتقشير أو العلاج بالضوء. الهدف من العلاج هو تحسين مظهر البشرة، منع تكوّن ندوب دائمة، وتعزيز ثقة المريض بنفسه."
    },
    {
      title: "Peeling chimique",
      images: [
        "/images/Peeling1.jpg",
        "/images/Peeling2.jpg",
        "/images/Peeling3.jpg"
      ],
      description: "Le peeling chimique est une technique dermatologique esthétique qui consiste à appliquer une solution chimique contrôlée sur la peau afin de provoquer une exfoliation et stimuler le renouvellement cellulaire. Il permet de corriger diverses imperfections : taches pigmentaires, cicatrices d'acné, rides fines, pores dilatés et teint terne. Adapté à chaque type de peau et réalisé sous supervision médicale, le peeling redonne éclat, douceur et uniformité au visage, avec une peau visiblement plus jeune et revitalisée.",
      arabic: "التقشير الكيميائي هو إجراء تجميلي جلدي يقوم على وضع محلول كيميائي مدروس على البشرة لإحداث تقشير وتحفيز تجديد الخلايا. يساعد هذا العلاج على تصحيح عيوب متعددة مثل التصبغات، ندوب حبّ الشباب، التجاعيد الدقيقة، المسام الواسعة وشحوب الوجه. يتم اختيار نوع التقشير حسب طبيعة البشرة وتحت إشراف الطبيب المختص. يمنح هذا العلاج إشراقة وحيوية للبشرة، ويجعلها أكثر نعومة وتجانساً وشباباً."
    },
    {
      title: "Laser dermatologique",
      images: [
        "/images/Laser dermatologique1.jpg",
        "/images/Laser dermatologique2.jpg",
        "/images/Laser dermatologique3.jpg"
      ],
      description: "Le laser dermatologique est une technologie médicale avancée utilisée pour traiter un large éventail de problèmes cutanés. Grâce à la précision du faisceau lumineux, il agit de manière ciblée sur les taches brunes, cicatrices, rides, varicosités, angiomes ou poils indésirables. Chaque type de laser est adapté à une indication spécifique, ce qui permet d'obtenir des résultats efficaces et sécurisés. Ce traitement offre un rajeunissement cutané non invasif, améliore la texture de la peau et redonne confiance aux patients.",
      arabic: "الليزر الجلدي هو تقنية طبية متطوّرة تُستعمل لعلاج مجموعة واسعة من مشاكل البشرة. بفضل دقة شعاع الضوء، يعمل بشكل موجّه على البقع الداكنة، الندوب، التجاعيد، الشعيرات الدموية الظاهرة، الأورام الوعائية أو الشعر غير المرغوب فيه. يتم اختيار نوع الليزر حسب الحالة للحصول على نتائج فعّالة وآمنة. هذا العلاج يوفّر تجديداً للبشرة دون جراحة، يحسّن ملمس الجلد ويعيد الثقة للمريض."
    },
    {
      title: "Chirurgie des grains de beauté",
      images: [
        "/images/Chirurgie des grains de beauté1.jpg",
        "/images/Chirurgie des grains de beauté2.jpg",
        "/images/Chirurgie des grains de beauté3.jpg"
      ],
      description: "La chirurgie des grains de beauté consiste à retirer un nævus (grain de beauté) jugé inesthétique ou suspect d'un point de vue médical. L'intervention est réalisée sous anesthésie locale, de manière rapide et indolore. Après l'excision, le grain de beauté peut être analysé en laboratoire pour détecter toute anomalie éventuelle (prévention du mélanome). Ce geste simple allie sécurité médicale et souci esthétique, offrant au patient tranquillité et confort.",
      arabic: "جراحة إزالة الشامات (الوحَمات) تهدف إلى استئصال الشامة التي قد تكون غير مرغوبة جمالياً أو يُشكّ في طبيعتها من الناحية الطبية. تُجرى العملية تحت تخدير موضعي بطريقة سريعة وغير مؤلمة. بعد الإزالة، يمكن تحليل الشامة في المختبر للكشف عن أي تغيّرات غير طبيعية (للوقاية من سرطان الجلد). هذا الإجراء يجمع بين الأمان الطبي والجانب الجمالي، مما يمنح المريض راحة واطمئناناً."
    },
    {
      title: "Traitement des verrues",
      images: [
        "/images/Traitement des verrues1.jpg",
        "/images/Traitement des verrues2.jpg",
        "/images/Traitement des verrues3.jpg"
      ],
      description: "Le traitement des verrues repose sur différentes techniques médicales, selon leur localisation, leur nombre et leur résistance. Les méthodes les plus courantes incluent la cryothérapie (azote liquide), l'électrocoagulation, le laser ou l'application de produits kératolytiques. Ces interventions visent à détruire la verrue, limiter la récidive et améliorer le confort du patient. Un suivi dermatologique est important pour éviter la propagation et choisir le traitement le plus adapté.",
      arabic: "علاج الثآليل يعتمد على عدّة تقنيات طبية وفقاً لمكانها، عددها ومقاومتها. من أكثر الطرق استعمالاً: التجميد بالنيتروجين السائل (الكرايوثيرابي)، الكيّ الكهربائي، الليزر أو وضع مواد مذيبة للجلد المتصلب. الهدف من العلاج هو إزالة الثآليل، منع عودتها وتحسين راحة المريض. يُعتبر المتابعة مع طبيب الجلدية مهمة لتفادي انتشارها واختيار أنسب وسيلة علاجية."
    },
    {
      title: "Consultation des enfants",
      images: [
        "/images/enfants1.jpg",
        "/images/enfants2.jpg",
        "/images/enfants3.jpg"
      ],
      description: "La consultation dermatologique pédiatrique concerne les affections cutanées propres aux nourrissons, enfants et adolescents. Elle prend en charge des pathologies fréquentes comme l'eczéma, les allergies, les infections cutanées, les taches de naissance, l'acné juvénile ou les maladies génétiques de la peau. Le dermatologue adapte ses explications et ses traitements à l'âge de l'enfant et rassure les parents, offrant ainsi un accompagnement spécialisé et bienveillant.",
      arabic: "الاستشارة الجلدية للأطفال تهتم بالأمراض الجلدية الخاصة بالرضّع، الأطفال والمراهقين. وتشمل متابعة حالات شائعة مثل الإكزيما، الحساسية، الالتهابات الجلدية، الوحمات، حبّ الشباب عند المراهقين أو الأمراض الوراثية الجلدية. يقوم طبيب الجلدية بتكييف العلاج وشرحه بما يتناسب مع عمر الطفل ويطمئن الأهل، مما يوفّر رعاية متخصّصة ولطيفة."
    },
    {
      title: "Injections esthétiques",
      images: [
        "/images/injection1.jpg",
        "/images/injection2.jpg",
        "/images/injection3.jpg"
      ],
      description: "Les injections esthétiques (toxine botulique et acide hyaluronique) sont des techniques non chirurgicales visant à rajeunir et embellir le visage. Le Botox agit sur les muscles responsables des rides d'expression, tandis que l'acide hyaluronique redonne du volume et hydrate la peau en profondeur. Ces traitements offrent un résultat naturel, rapide et réversible, permettant de lisser les rides, harmoniser les traits et restaurer l'éclat du visage sans intervention lourde.",
      arabic: "الحقن التجميلية (البوتوكس وحمض الهيالورونيك) هي تقنيات غير جراحية تهدف إلى تجديد شباب الوجه وتحسين مظهره. يعمل البوتوكس على إرخاء العضلات المسؤولة عن التجاعيد التعبيرية، بينما يعيد حمض الهيالورونيك امتلاء البشرة ويرطّبها بعمق. تمنح هذه العلاجات نتيجة طبيعية وسريعة ويمكن تعديلها، حيث تساعد على تنعيم التجاعيد، تحسين تناسق الملامح واسترجاع إشراقة الوجه دون تدخل جراحي."
    }
  ];

  return (
    <div style={{ marginTop: '76px', paddingTop: '40px' }}>
      <div className="container py-5">
        <h1 className="text-center text-primary mb-5">Nos Services</h1>
        
        {services.map((service, index) => (
          <div key={index} className="card shadow-lg border-0 mb-5" data-aos="fade-up">
            <div className="card-body p-4">
              <h2 className="text-primary mb-4">{service.title}</h2>
              
              <div className="row g-3 mb-4">
                {service.images.map((img, imgIndex) => (
                  <div key={imgIndex} className="col-md-4">
                    <img 
                      src={img} 
                      alt={service.title}
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
              
              <p className="mb-3">{service.description}</p>
              <p className="arabic">{service.arabic}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;





