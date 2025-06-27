// lang.js
const translations = {
  en: {
    navHome: "Home",
    navVision: "Vision",
    navBackground: "Background",
    navQuestions: "Research Questions",
    navMethodology: "Methodology",
    navArchitecture: "Architecture",
    navDeployment: "Deployment",
    navEthics: "Ethics & Risk",
    navTimeline: "Timeline",
    navContact: "Contact",
    visionObjectives: "Vision & Objectives",
    visionHeroTitle: "Shaping the Future of Ethical AI",
    ourVision: "Our Vision",
    visionStatement: "Enigma AI envisions a future where artificial intelligence serves as a transparent, ethical, and adaptable tool that enhances human capabilities while maintaining strict ethical standards and user privacy.",
    userCentric: "User-Centric Design",
    userCentricDesc: "Prioritizing user needs and preferences in every aspect of AI development",
    modularArch: "Modular Architecture",
    modularArchDesc: "Flexible and scalable system design for easy integration and customization",
    ethicalFramework: "Ethical Framework",
    ethicalFrameworkDesc: "Built-in ethical guidelines and safety measures for responsible AI deployment",
    strategicObjectives: "Strategic Objectives",
    advancedAI: "Advanced AI Development",
    obj1: "Develop domain-specific AI capabilities",
    obj2: "Implement state-of-the-art neural architectures",
    obj3: "Create efficient model inference systems",
    ethicalImpl: "Ethical Implementation",
    obj4: "Ensure transparent AI decision-making",
    obj5: "Implement robust privacy protection",
    obj6: "Develop ethical guidelines and frameworks",
    userExp: "User Experience",
    obj7: "Create adaptive user interfaces",
    obj8: "Implement personalized dialogue systems",
    obj9: "Develop intuitive interaction patterns",
    techInnovation: "Technical Innovation",
    obj10: "Research modular integration techniques",
    obj11: "Develop scalable deployment solutions",
    obj12: "Create efficient resource management systems",
    expectedImpact: "Expected Impact",
    researchCommunity: "Research Community",
    impactResearch: "Contributing to AI research through open-source development and academic collaboration",
    industryStandards: "Industry Standards",
    impactIndustry: "Setting new benchmarks for ethical AI development and deployment",
    userExpImpact: "User Experience",
    impactUser: "Advancing the field of human-AI interaction through innovative interface design",
    joinJourney: "Join Our Journey",
    ctaJoin: "Be part of shaping the future of ethical AI",
    ctaGetInvolved: "Get Involved",
    ctaReadResearch: "Read Our Research"
  },
  ar: {
    navHome: "الرئيسية",
    navVision: "الرؤية",
    navBackground: "الخلفية",
    navQuestions: "أسئلة البحث",
    navMethodology: "المنهجية",
    navArchitecture: "الهندسة",
    navDeployment: "النشر",
    navEthics: "الأخلاقيات والمخاطر",
    navTimeline: "الجدول الزمني",
    navContact: "تواصل",
    visionObjectives: "الرؤية والأهداف",
    visionHeroTitle: "تشكيل مستقبل الذكاء الاصطناعي الأخلاقي",
    ourVision: "رؤيتنا",
    visionStatement: "تتطلع Enigma AI إلى مستقبل يخدم فيه الذكاء الاصطناعي كأداة شفافة وأخلاقية وقابلة للتكيف تعزز القدرات البشرية مع الحفاظ على معايير أخلاقية صارمة وخصوصية المستخدم.",
    userCentric: "تصميم يركز على المستخدم",
    userCentricDesc: "إعطاء الأولوية لاحتياجات وتفضيلات المستخدم في جميع جوانب تطوير الذكاء الاصطناعي",
    modularArch: "هيكلية معيارية",
    modularArchDesc: "تصميم نظام مرن وقابل للتوسع لسهولة التكامل والتخصيص",
    ethicalFramework: "إطار أخلاقي",
    ethicalFrameworkDesc: "إرشادات أخلاقية وتدابير أمان مدمجة لنشر الذكاء الاصطناعي بشكل مسؤول",
    strategicObjectives: "الأهداف الاستراتيجية",
    advancedAI: "تطوير الذكاء الاصطناعي المتقدم",
    obj1: "تطوير قدرات الذكاء الاصطناعي المتخصصة",
    obj2: "تنفيذ هياكل عصبية متقدمة",
    obj3: "إنشاء أنظمة استدلال نموذجية فعالة",
    ethicalImpl: "التنفيذ الأخلاقي",
    obj4: "ضمان شفافية اتخاذ القرار في الذكاء الاصطناعي",
    obj5: "تطبيق حماية قوية للخصوصية",
    obj6: "تطوير إرشادات وأطر أخلاقية",
    userExp: "تجربة المستخدم",
    obj7: "إنشاء واجهات مستخدم تكيفية",
    obj8: "تطبيق أنظمة حوار شخصية",
    obj9: "تطوير أنماط تفاعل بديهية",
    techInnovation: "الابتكار التقني",
    obj10: "بحث تقنيات التكامل المعياري",
    obj11: "تطوير حلول نشر قابلة للتوسع",
    obj12: "إنشاء أنظمة إدارة موارد فعالة",
    expectedImpact: "الأثر المتوقع",
    researchCommunity: "المجتمع البحثي",
    impactResearch: "المساهمة في أبحاث الذكاء الاصطناعي من خلال التطوير مفتوح المصدر والتعاون الأكاديمي",
    industryStandards: "معايير الصناعة",
    impactIndustry: "وضع معايير جديدة لتطوير ونشر الذكاء الاصطناعي الأخلاقي",
    userExpImpact: "تجربة المستخدم",
    impactUser: "تطوير مجال التفاعل بين الإنسان والذكاء الاصطناعي من خلال تصميم واجهات مبتكرة",
    joinJourney: "انضم إلى رحلتنا",
    ctaJoin: "كن جزءًا من تشكيل مستقبل الذكاء الاصطناعي الأخلاقي",
    ctaGetInvolved: "شارك معنا",
    ctaReadResearch: "اقرأ بحثنا"
  }
};

function setLanguage(lang) {
  document.documentElement.lang = lang;
  document.body.dir = lang === 'ar' ? 'rtl' : 'ltr';
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (translations[lang][key]) {
      el.textContent = translations[lang][key];
    }
  });
  // Update language switcher button styles for active language
  const enBtn = document.getElementById('lang-en');
  const arBtn = document.getElementById('lang-ar');
  if (enBtn && arBtn) {
    if (lang === 'en') {
      enBtn.classList.add('active-lang');
      arBtn.classList.remove('active-lang');
    } else {
      arBtn.classList.add('active-lang');
      enBtn.classList.remove('active-lang');
    }
  }
}

window.addEventListener('DOMContentLoaded', () => {
  const enBtn = document.getElementById('lang-en');
  const arBtn = document.getElementById('lang-ar');
  if (enBtn && arBtn) {
    enBtn.innerHTML = '<span style="font-size:1.3em;">🇬🇧</span> EN';
    arBtn.innerHTML = '<span style="font-size:1.3em;">🇸🇦</span> AR';
    enBtn.onclick = () => setLanguage('en');
    arBtn.onclick = () => setLanguage('ar');
  }
  setLanguage('en');
}); 