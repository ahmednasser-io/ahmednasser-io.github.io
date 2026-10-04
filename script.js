// Master Interactive Script for Ahmed Nasser Portfolio
// Theme Manager, Multilingual (EN/AR) Engine, RTL, Lightbox Gallery & Utilities

document.addEventListener('DOMContentLoaded', function() {
    initThemeManager();
    initLanguageManager();
    initProfileImageTilt();
    initSmoothNavigation();
    initCollapsibleSections();
    initLightboxManager();
});

/* ==========================================================================
   THEME MANAGER (LIGHT / DARK MODE)
   ========================================================================== */
function initThemeManager() {
    const themeToggleBtn = document.getElementById('theme-toggle');
    const updateIcon = (isDark) => {
        const iconEl = themeToggleBtn ? themeToggleBtn.querySelector('.svg-icon') : null;
        if (iconEl) {
            iconEl.style.setProperty('--icon', `url('assets/icons/${isDark ? 'sun' : 'moon'}.svg')`);
        }
    };

    // Load saved theme
    const savedTheme = localStorage.getItem('portfolio-theme') || 'dark';
    if (savedTheme === 'light') {
        document.documentElement.classList.remove('dark-mode');
        document.body.classList.remove('dark-mode');
        updateIcon(false);
    } else {
        document.documentElement.classList.add('dark-mode');
        document.body.classList.add('dark-mode');
        updateIcon(true);
    }

    if (themeToggleBtn) {
        themeToggleBtn.addEventListener('click', function() {
            const isDark = document.body.classList.toggle('dark-mode');
            document.documentElement.classList.toggle('dark-mode', isDark);
            const themeVal = isDark ? 'dark' : 'light';
            localStorage.setItem('portfolio-theme', themeVal);
            updateIcon(isDark);
        });
    }
}

/* ==========================================================================
   MULTILINGUAL (EN/AR) & RTL MANAGER
   ========================================================================== */
const translations = {
    en: {
        page_title: "Ahmed Nasser - Data Engineer && Data Analyst Portfolio",
        page_desc: "Portfolio of Ahmed Nasser, Data Engineer && Data Analyst. Excellent IS Student @ FCAI Cairo University.",
        "hero.name": "Ahmed Nasser",
        "hero.headline": "Data Engineer && Data Analyst",
        "hero.subline": "Excellent IS Student @ FCAI Cairo University",
        "hero.btn_resume": "Download Resume",
        "hero.btn_contact": "Contact Me",
        "nav.about": "About",
        "nav.experience": "Experience",
        "nav.education": "Education",
        "nav.skills": "Skills",
        "nav.projects": "Projects",
        "nav.certificates": "Certificate",
        "nav.contact": "Contact",
        "about.title": "About Me",
        "about.bio1": "I am an Information Systems (IS) student at Cairo University (Faculty of Computers and Artificial Intelligence) specializing in Data Engineering and Data Analytics. I design scalable relational database architectures (PostgreSQL/SQL), construct efficient ETL/ELT pipelines, and automate complex data workflows to ensure high-performance, production-ready data delivery.",
        "about.bio2": "Leveraging Python (Pandas, NumPy, Seaborn), Advanced SQL, and workflow automation tools, I perform in-depth Exploratory Data Analysis (EDA), model structured datasets, and build data visualization pipelines. I bridge raw data infrastructure with business strategy to deliver high-impact analytics solutions that drive strategic decision-making.",
        "about.lang_en": `<svg class="svg-icon" style="color: var(--theme-primary); --icon: url('assets/icons/globe.svg')"></svg> <span><strong>English:</strong> B2 Professional</span>`,
        "about.lang_ar": `<svg class="svg-icon" style="color: var(--theme-primary); --icon: url('assets/icons/language.svg')"></svg> <span><strong>Arabic:</strong> Native</span>`,
        "experience.title": "Enterprise Experience & Internships",
        "experience.depi_role": "Data Analyst Intern",
        "experience.depi_date": "July 2026 - Present",
        "experience.depi_org": `Digital Egypt Pioneers Initiative (DEPI) &bull; <span class="exp-loc">Cairo, Egypt</span>`,
        "experience.depi_b1": "Extracting, cleaning, and preparing multi-source datasets to conduct descriptive analysis and deliver actionable business insights.",
        "experience.depi_b2": "Building interactive data visualization dashboards and reporting pipelines to empower executive decision-making.",
        "experience.depi_b3": "Applying modern data analytics frameworks, statistical techniques, and ETL processes aligned with industry demands.",
        "experience.huawei_role": "Big Data Intern",
        "experience.huawei_date": "September 2026 - Present",
        "experience.huawei_org": `Huawei Ministry of Youth Academy &bull; <span class="exp-loc">Cairo, Egypt</span>`,
        "experience.huawei_b1": "Learning the core foundations of Big Data, including the 5 Vs, distributed storage, and parallel processing, along with the Hadoop ecosystem (HDFS, MapReduce, YARN) for handling large-scale datasets.",
        "experience.huawei_b2": "Practicing large-scale data processing and analysis with Apache Spark and Hive, building SQL and Python (PySpark) workflows to clean, transform, and query massive structured and semi-structured data.",
        "experience.huawei_b3": "Exploring batch and real-time data ingestion pipelines and data warehouse architectures, and applying best practices to build scalable, reliable pipelines that feed analytics and decision-making.",
        "experience.nbe_role": "IT Infrastructure intern",
        "experience.nbe_date": "July 2026",
        "experience.nbe_org": `National Bank of Egypt (NBE) &bull; <span class="exp-loc">Cairo, Egypt</span>`,
        "experience.nbe_b1": "Designed disaster recovery plans for critical data centers and core banking services.",
        "experience.nbe_b2": "Contributed to the IT automation and disaster recovery sector to ensure the resilience of enterprise infrastructure.",
        "experience.elevvo_role": "AI/ML Trainee",
        "experience.elevvo_date": "September 2025",
        "experience.elevvo_org": `Elevvo Internship Program &bull; <span class="exp-loc">Cairo, Egypt</span>`,
        "experience.elevvo_b1": "Developed 5 end-to-end ML pipelines across regression, classification, and time-series forecasting tasks using Python, Scikit-learn, and XGBoost, delivering production-ready models with documented results",
        "experience.elevvo_b2": "Evaluated and compared diverse machine learning models to identify the optimal architecture for each regression, classification, and forecasting task",
        "experience.cib_role": "Summer Intern",
        "experience.cib_date": "August 2025",
        "experience.cib_org": `Commercial International Bank (CIB) &bull; <span class="exp-loc">Cairo, Egypt</span>`,
        "experience.cib_b1": "Completed CIB’s competitive “The Green Leap” program, analyzing ESG data and digital transformation frameworks across Egyptian corporate case studies",
        "experience.cib_b2": "Conducted quantitative research on corporate governance and cybersecurity risk models, presenting findings to senior banking leaders",
        "education.title": "Education",
        "education.degree": "Bachelor of Science in Computer Science",
        "education.school": "Faculty of Computers and Artificial Intelligence, Cairo University",
        "education.badge_year": `<svg class="svg-icon" style="--icon: url('assets/icons/calendar-check.svg')"></svg> Expected 2029 (Currently 2nd Year)`,
        "education.badge_gpa": `<svg class="svg-icon" style="--icon: url('assets/icons/bolt.svg')"></svg> GPA: 3.1 / 4.0 - Very Good`,
        "education.badge_rank": `<svg class="svg-icon" style="--icon: url('assets/icons/award.svg')"></svg> Ranked Top 10 in Cohort`,
        "education.badge_major": `<svg class="svg-icon" style="--icon: url('assets/icons/microchip.svg')"></svg> IS Major`,
        "skills.title": "Skills Matrix",
        "skills.lang_title": `<svg class="svg-icon" style="--icon: url('assets/icons/terminal.svg')"></svg> Programming Languages`,
        "skills.tools_title": `<svg class="svg-icon" style="--icon: url('assets/icons/server.svg')"></svg> Databases, Tools & OS`,
        "skills.analysis_title": `<svg class="svg-icon" style="--icon: url('assets/icons/calculator.svg')"></svg> Data Analysis & Visualization`,
        "skills.de_title": `<svg class="svg-icon" style="--icon: url('assets/icons/diagram-project.svg')"></svg> Data Engineering`,
        "skills.bigdata_title": `<svg class="svg-icon" style="--icon: url('assets/icons/cube.svg')"></svg> Big Data`,
        "projects.title": "Featured Projects",
        "projects.specs_title": "System Specifications:",
        "projects.finding_title": "Key Finding:",
        "projects.btn_more": "Show More Projects",
        "projects.btn_less": "Show Less Projects",
        "projects.medtrace_title": "Medical Identical Trace (Med Trace)",
        "projects.medtrace_subtitle": "National Digital Medical Record System",
        "projects.medtrace_badge": "HealthTech | Startup Project",
        "projects.medtrace_desc": "A national digital medical-record platform where every citizen registers with their national ID through a mobile app, and all diseases, health information, doctor visits (with full visit details), and surgeries are recorded across their entire lifetime. It helps doctors diagnose with a complete patient history, gives emergency responders instant access to critical medical history to save lives, and produces accurate periodic national health statistics.",
        "projects.c360_title": "Customer 360 Analytics",
        "projects.c360_subtitle": "Data Cleaning, Integration & EDA across 9 CSV Files",
        "projects.c360_badge": "Data Analytics | EDA",
        "projects.c360_desc": "An end-to-end customer analytics project that cleans and merges 9 raw CSV files (customers, subscriptions, support tickets, quarterly transactions, and marketing campaigns) into a single Customer 360 table of 1,500 customers and 31 features. It handles mixed date formats, currency strings, duplicate records, and city-country mismatches, then engineers KPIs such as a 65.1% active rate, 24.1% churn rate, and about $990 ARPU. Nineteen business questions are answered with Seaborn and Matplotlib visuals, ending in data-backed findings and recommendations on retention, support quality, and plan upselling.",
        "projects.superstore_title": "Superstore Data Warehouse",
        "projects.superstore_subtitle": "PostgreSQL Star Schema, ETL & 16 Analytical Queries",
        "projects.superstore_badge": "PostgreSQL | SQL",
        "projects.superstore_desc": "A PostgreSQL data warehouse built on the Superstore retail dataset. Raw order, manager, and returns data is loaded into a staging layer, then transformed into a star schema with one fact table and four dimension tables (customer, product, location, ship mode), enforced with primary and foreign keys and cleaned with DISTINCT ON and COALESCE logic. The project adds indexes on the join and date columns, a denormalized reporting view, and a PL/pgSQL stored procedure for yearly KPIs. Sixteen analytical queries use CTEs and window functions (LAG, RANK, NTILE, running totals) to cover profitability by category and region, discount impact, customer tiers, RFM scoring, month-over-month growth, and return rates, and EXPLAIN ANALYZE is used to verify query performance.",
        "projects.monster_title": "Monster Wrangler Game",
        "projects.monster_subtitle": "2D Arcade Game Engine",
        "projects.monster_badge": "Pygame OOP",
        "projects.monster_desc": "A fast-paced 2D arcade game built with Pygame featuring object-oriented game state management, sprite animation, dynamic collision handling, and progressive difficulty.",
        "projects.photoshop_title": "Baby Photoshop - C++ Image Processor",
        "projects.photoshop_subtitle": "Image Processing Application with 18 Filters + Qt Desktop GUI",
        "projects.photoshop_badge": "C++ + Qt GUI",
        "projects.photoshop_desc": "Baby Photoshop is a desktop image-processing application written in C++, with 18 filters implemented from scratch on raw pixel data. It covers geometric transforms (rotate, flip, crop, resize, skew, merge), tonal adjustments (grayscale, black & white, invert, darken, lighten), spatial filters (blur, edge detection), and creative effects such as infrared, old TV, oil painting, purple tint, and sunlight correction. A reusable variadic-template pipeline loads, filters, and saves each image, which keeps every filter independent and easy to extend, while a Qt GUI puts the whole toolkit behind a clean desktop interface.",
        "projects.interstellar_title": "Interstellar - Cinematic Movie Website",
        "projects.interstellar_subtitle": "Multi-Page Front-End Project with an Interactive Audio Player",
        "projects.interstellar_badge": "HTML + CSS + JavaScript",
        "projects.interstellar_desc": "A cinematic, multi-page front-end website themed around the movie Interstellar. The landing page pairs a full-screen space hero and movie synopsis with a custom vinyl-record player that plays and pauses the soundtrack, built with vanilla JavaScript, the HTML5 Audio API, and promise-based playback handling. The site also includes a modern split-panel Login/Register page with a password show/hide icon and social sign-up buttons, and a Crew page with glassmorphism cast cards, all connected through a clean navigation bar.",
        "certs.title": "Verified Certifications",
        "certs.verify": "Verify Credential",
        "certs.btn_more": "Show More Certifications",
        "certs.btn_less": "Show Less Certifications",
        "certs.c1_title": "IBM Data Fundamentals",
        "certs.c1_desc": "Core concepts in data processing, relational databases, data analytics frameworks, and data pipeline fundamentals.",
        "certs.c1_issuer": `<svg class="svg-icon" style="--icon: url('assets/icons/database.svg')"></svg> IBM SkillsBuild`,
        "certs.c2_title": "IBM Data Science Professional",
        "certs.c2_desc": "End-to-end data science workflows across 12 courses, covering Python, SQL, data analysis, visualization, machine learning, and a capstone project.",
        "certs.c2_issuer": `<svg class="svg-icon" style="--icon: url('assets/icons/database.svg')"></svg> IBM via Coursera`,
        "certs.c3_title": "CS50's Intro to Databases with SQL",
        "certs.c3_desc": "Relational database design, SQL querying, indexing, and query optimization, completed through seven problem sets and a final project.",
        "certs.c3_issuer": `<svg class="svg-icon" style="--icon: url('assets/icons/server.svg')"></svg> Harvard University`,
        "contact.title": "Contact Me",
        "contact.email_label": "Email",
        "contact.linkedin_label": "LinkedIn",
        "contact.github_label": "GitHub",
        "contact.location_label": "Location",
        "contact.location_val": "Cairo, Egypt",
        "form.status": "Open to collaboration",
        "form.heading": "Got an idea? Let's make it real.",
        "form.lead": "Tell me what you're building, what's stuck, or what you wish existed. I read every message myself and reply by email.",
        "form.name": "Your name",
        "form.email": "Your email",
        "form.message": "What's on your mind?",
        "form.submit": "Start the conversation",
    },
    ar: {
        page_title: "أحمد ناصر - سابقة أعمال مهندس بيانات ومحلل بيانات",
        page_desc: "سابقة أعمال أحمد ناصر، مهندس بيانات ومحلل بيانات. طالب بتقدير امتياز في نظم المعلومات بحاسبات القاهرة.",
        "hero.name": "أحمد ناصر",
        "hero.headline": "Data Engineer && Data Analyst",
        "hero.subline": "طالب بتقدير امتياز في نظم المعلومات @ حاسبات القاهرة",
        "hero.btn_resume": "تحميل السيرة الذاتية (CV)",
        "hero.btn_contact": "تواصل معي",
        "nav.about": "نبذة عني",
        "nav.experience": "الخبرات والتدريب",
        "nav.education": "التعليم",
        "nav.skills": "المهارات",
        "nav.projects": "المشاريع",
        "nav.certificates": "الشهادات",
        "nav.contact": "تواصل معي",
        "about.title": "نبذة عني",
        "about.bio1": "أنا طالب نظم معلومات (IS) بجامعة القاهرة (كلية الحاسبات والذكاء الاصطناعي)، متخصص في هندسة البيانات وتحليل البيانات. أصمم معماريات قواعد بيانات علائقية قابلة للتوسع (PostgreSQL/SQL)، وأبني خطوط ETL/ELT فعّالة، وأؤتمت مسارات عمل البيانات المعقدة لضمان تسليم بيانات عالي الأداء وجاهز للإنتاج.",
        "about.bio2": "باستخدام Python (Pandas وNumPy وSeaborn) وSQL المتقدمة وأدوات أتمتة مسارات العمل، أجري تحليلاً استكشافياً معمقاً للبيانات (EDA)، وأنمذج مجموعات البيانات المهيكلة، وأبني خطوط تصوير البيانات. أربط البنية التحتية للبيانات الخام باستراتيجية الأعمال لأقدم حلول تحليلية عالية التأثير تدعم اتخاذ القرارات الاستراتيجية.",
        "about.lang_en": `<svg class="svg-icon" style="color: var(--theme-primary); --icon: url('assets/icons/globe.svg')"></svg> <span><strong>الإنجليزية:</strong> مستوى متقدم للعمل (B2 Professional)</span>`,
        "about.lang_ar": `<svg class="svg-icon" style="color: var(--theme-primary); --icon: url('assets/icons/language.svg')"></svg> <span><strong>العربية:</strong> اللغة الأم (Native)</span>`,
        "experience.title": "الخبرات المهنية وفترات التدريب",
        "experience.depi_role": "متدرب تحليل بيانات (Data Analyst Intern)",
        "experience.depi_date": "يوليو 2026 - حتى الآن",
        "experience.depi_org": `مبادرة رواد تكنولوجيا مصر (DEPI) &bull; <span class="exp-loc">القاهرة، مصر</span>`,
        "experience.depi_b1": "استخراج وتنظيف وتجهيز البيانات من مصادر متعددة لإجراء تحليلات وصفية واستخراج رؤى دقيقة تدعم القرارات التشغيلية والتجارية.",
        "experience.depi_b2": "بناء لوحات بيانات تفاعلية (Dashboards) وخطوط تقارير مؤتمتة لمساعدة متخذي القرار على متابعة الأداء في الوقت الفعلي.",
        "experience.depi_b3": "تطبيق أحدث منهجيات تحليل البيانات، الأساليب الإحصائية، وعمليات الـ ETL المتوافقة مع معايير سوق العمل.",
        "experience.huawei_role": "متدرب بيانات ضخمة (Big Data Intern)",
        "experience.huawei_date": "سبتمبر 2026 - حتى الآن",
        "experience.huawei_org": `أكاديمية هواوي - وزارة الشباب &bull; <span class="exp-loc">القاهرة، مصر</span>`,
        "experience.huawei_b1": "تعلّم الأسس الجوهرية للبيانات الضخمة (Big Data) من خصائص الـ 5 Vs والتخزين الموزع والمعالجة المتوازية، مع منظومة Hadoop (HDFS وMapReduce وYARN) للتعامل مع مجموعات البيانات الضخمة.",
        "experience.huawei_b2": "التدرّب على معالجة وتحليل البيانات واسعة النطاق باستخدام Apache Spark وHive، وبناء مسارات عمل بـ SQL وPython (PySpark) لتنظيف وتحويل والاستعلام عن بيانات ضخمة منظمة وشبه منظمة.",
        "experience.huawei_b3": "استكشاف خطوط استيعاب البيانات الدفعية واللحظية ومعماريات مستودعات البيانات، وتطبيق أفضل الممارسات لبناء خطوط بيانات قابلة للتوسع وموثوقة تغذي التحليلات واتخاذ القرار.",
        "experience.nbe_role": "متدرب بنية تحتية لتكنولوجيا المعلومات (IT Infrastructure)",
        "experience.nbe_date": "يوليو 2026",
        "experience.nbe_org": `البنك الأهلي المصري (NBE) &bull; <span class="exp-loc">القاهرة، مصر</span>`,
        "experience.nbe_b1": "المساهمة في تصميم خطط التعافي من الكوارث (Disaster Recovery) لمراكز البيانات والخدمات المصرفية الأساسية فائقة الأهمية.",
        "experience.nbe_b2": "المشاركة في قطاع أتمتة البنية التحتية للـ IT لضمان استمرارية الخدمات ومرونة الأنظمة ضد أي توقف.",
        "experience.elevvo_role": "متدرب ذكاء اصطناعي وتعلم آلة (AI/ML Trainee)",
        "experience.elevvo_date": "سبتمبر 2025",
        "experience.elevvo_org": `برنامج تدريب إيليفو (Elevvo) &bull; <span class="exp-loc">القاهرة، مصر</span>`,
        "experience.elevvo_b1": "بناء وتطوير 5 خطوط تعلم آلة متكاملة (End-to-End) لمهام التنبؤ والتصنيف والسلاسل الزمنية باستخدام Python وScikit-learn وXGBoost ونماذج جاهزة للإنتاج بنتائج موثقة.",
        "experience.elevvo_b2": "تقييم ومقارنة نماذج تعلم الآلة المختلفة لاختيار البنية المعمارية الأنسب والأعلى كفاءة لكل مهمة تنبؤ وتصنيف.",
        "experience.cib_role": "متدرب صيفي (Summer Intern)",
        "experience.cib_date": "أغسطس 2025",
        "experience.cib_org": `البنك التجاري الدولي (CIB) &bull; <span class="exp-loc">القاهرة، مصر</span>`,
        "experience.cib_b1": "إتمام برنامج 'The Green Leap' التنافسي بالبنك، وتحليل بيانات الحوكمة البيئية والاجتماعية (ESG) وأطر التحول الرقمي عبر دراسات حالة للشركات المصرية.",
        "experience.cib_b2": "إجراء أبحاث كمية حول نماذج إدارة المخاطر المؤسسية والأمن السيبراني وعرض النتائج والتوصيات على قيادات مصرفية بالبنك.",
        "education.title": "التعليم والمؤهلات الأكاديمية",
        "education.degree": "بكالوريوس في علوم الحاسب (B.Sc. in Computer Science)",
        "education.school": "كلية الحاسبات والذكاء الاصطناعي، جامعة القاهرة",
        "education.badge_year": `<svg class="svg-icon" style="--icon: url('assets/icons/calendar-check.svg')"></svg> متوقع التخرج 2029 (حالياً بالفرقة الثانية)`,
        "education.badge_gpa": `<svg class="svg-icon" style="--icon: url('assets/icons/bolt.svg')"></svg> المعدل التراكمي: 3.1 / 4.0 - تقدير جيد جداً`,
        "education.badge_rank": `<svg class="svg-icon" style="--icon: url('assets/icons/award.svg')"></svg> ضمن أفضل 10 طلاب على مستوى الدفعة`,
        "education.badge_major": `<svg class="svg-icon" style="--icon: url('assets/icons/microchip.svg')"></svg> تخصص رئيسي: نظم المعلومات (IS Major)`,
        "skills.title": "مصفوفة المهارات التقنية",
        "skills.lang_title": `<svg class="svg-icon" style="--icon: url('assets/icons/terminal.svg')"></svg> لغات البرمجة`,
        "skills.tools_title": `<svg class="svg-icon" style="--icon: url('assets/icons/server.svg')"></svg> قواعد البيانات والأدوات وأنظمة التشغيل`,
        "skills.analysis_title": `<svg class="svg-icon" style="--icon: url('assets/icons/calculator.svg')"></svg> تحليل البيانات وتصويرها`,
        "skills.de_title": `<svg class="svg-icon" style="--icon: url('assets/icons/diagram-project.svg')"></svg> هندسة البيانات`,
        "skills.bigdata_title": `<svg class="svg-icon" style="--icon: url('assets/icons/cube.svg')"></svg> البيانات الضخمة (Big Data)`,
        "projects.title": "أبرز المشاريع",
        "projects.specs_title": "المواصفات التقنية للنظام:",
        "projects.finding_title": "النتيجة الخوارزمية الأساسية:",
        "projects.btn_more": "عرض المزيد من المشاريع",
        "projects.btn_less": "عرض مشاريع أقل",
        "projects.medtrace_title": "Medical Identical Trace (Med Trace)",
        "projects.medtrace_subtitle": "منظومة قومية رقمية للسجلات الطبية",
        "projects.medtrace_badge": "HealthTech | مشروع شركة ناشئة",
        "projects.medtrace_desc": "منصة قومية رقمية للسجلات الطبية، يسجّل فيها كل مواطن برقمه القومي عبر تطبيق موبايل، وتُدوَّن على مدار حياته كل الأمراض والمعلومات الصحية وزيارات الأطباء (بكامل تفاصيل كل زيارة) والعمليات الجراحية. تساعد الأطباء على التشخيص بتاريخ مرضي كامل، وتتيح لفرق الطوارئ والإسعاف الوصول الفوري للتاريخ الطبي الحرج لإنقاذ المصاب، وتوفّر إحصائيات صحية قومية دقيقة ودورية.",
        "projects.c360_title": "Customer 360 - تحليل بيانات العملاء",
        "projects.c360_subtitle": "تنظيف ودمج واستكشاف بيانات من 9 ملفات CSV",
        "projects.c360_badge": "Data Analytics | EDA",
        "projects.c360_desc": "مشروع تحليل بيانات عملاء متكامل، يُنظّف ويدمج 9 ملفات CSV خام (العملاء والاشتراكات وتذاكر الدعم والمعاملات الربع سنوية والحملات التسويقية) في جدول واحد شامل لـ 1,500 عميل و31 خاصية (Customer 360). يعالج تنسيقات التواريخ المختلطة وقيم العملة النصية والسجلات المكررة وعدم تطابق المدن مع الدول، ثم يستخرج مؤشرات أداء رئيسية مثل نسبة نشاط 65.1% ومعدل تسرّب 24.1% ومتوسط إيراد لكل مستخدم يقارب 990 دولاراً. يجيب على 19 سؤالاً تجارياً برسوم Seaborn وMatplotlib، وينتهي باستنتاجات وتوصيات مبنية على البيانات حول الاحتفاظ بالعملاء وجودة الدعم وترقية الباقات.",
        "projects.superstore_title": "مستودع بيانات Superstore",
        "projects.superstore_subtitle": "Star Schema على PostgreSQL مع ETL و16 استعلاماً تحليلياً",
        "projects.superstore_badge": "PostgreSQL | SQL",
        "projects.superstore_desc": "مستودع بيانات على PostgreSQL مبني على بيانات Superstore للتجزئة. تُحمَّل بيانات الطلبات والمديرين والمرتجعات الخام في طبقة Staging، ثم تُحوَّل إلى Star Schema من جدول حقائق واحد وأربعة جداول أبعاد (العميل والمنتج والموقع وطريقة الشحن)، مع مفاتيح أساسية وأجنبية وتنظيف بمنطق DISTINCT ON وCOALESCE. يضيف المشروع فهارس على أعمدة الربط والتاريخ، وعرضاً (View) مُسطَّحاً للتقارير، وإجراءً مخزناً بلغة PL/pgSQL لمؤشرات الأداء السنوية. و16 استعلاماً تحليلياً بتعبيرات CTE والدوال النافذة (LAG وRANK وNTILE والإجمالي التراكمي) تغطي الربحية حسب الفئة والمنطقة وأثر الخصومات وتصنيف العملاء وتحليل RFM والنمو الشهري ومعدلات الإرجاع، مع استخدام EXPLAIN ANALYZE للتحقق من أداء الاستعلامات.",
        "projects.monster_title": "لعبة Monster Wrangler ثنائية الأبعاد",
        "projects.monster_subtitle": "محرك ألعاب أركيد ثنائية الأبعاد",
        "projects.monster_badge": "Pygame OOP",
        "projects.monster_desc": "لعبة أركيد سريعة ثنائية الأبعاد مبنية بـ Pygame، تعتمد على بنية كائنية التوجه (OOP) لإدارة حالة اللعبة، وتحريك الـ Sprites، والتعامل الديناميكي مع التصادمات، ومستويات صعوبة تصاعدية.",
        "projects.photoshop_title": "Baby Photoshop - معالج صور بلغة C++",
        "projects.photoshop_subtitle": "تطبيق معالجة صور بـ 18 فلتراً + واجهة رسومية بـ Qt",
        "projects.photoshop_badge": "C++ + Qt GUI",
        "projects.photoshop_desc": "Baby Photoshop تطبيق سطح مكتب لمعالجة الصور مكتوب بلغة C++، يضم 18 فلتراً مبنياً من الصفر على بيانات البكسل الخام. يغطي التحويلات الهندسية (التدوير والقلب والقص وتغيير الحجم والإمالة والدمج)، وضبط الألوان والإضاءة (التدرج الرمادي والأبيض والأسود والعكس والتغميق والتفتيح)، والفلاتر المكانية (التغبيش وكشف الحواف)، وتأثيرات إبداعية مثل الأشعة تحت الحمراء والتلفزيون القديم واللوحة الزيتية والتدرج البنفسجي وإصلاح ضوء الشمس. يعتمد على خط معالجة قابل لإعادة الاستخدام (variadic templates) يحمّل كل صورة ويطبّق عليها الفلتر ويحفظها، فيبقى كل فلتر مستقلاً وسهل التوسعة، بينما تتيح واجهة Qt الرسومية استخدام كل الأدوات من واجهة سطح مكتب أنيقة.",
        "projects.interstellar_title": "Interstellar - موقع سينمائي",
        "projects.interstellar_subtitle": "مشروع Front-End متعدد الصفحات مع مشغّل صوتي تفاعلي",
        "projects.interstellar_badge": "HTML + CSS + JavaScript",
        "projects.interstellar_desc": "موقع Front-End سينمائي متعدد الصفحات بتصميم مستوحى من فيلم Interstellar. تجمع الصفحة الرئيسية بين خلفية فضائية بملء الشاشة وملخص القصة ومشغّل مخصص على شكل أسطوانة (Vinyl) يشغّل موسيقى الفيلم ويوقفها، مبني بـ JavaScript الخام وواجهة HTML5 Audio مع معالجة التشغيل بالـ Promises. ويضم الموقع أيضاً صفحة تسجيل دخول وإنشاء حساب بتصميم عصري منقسم إلى لوحتين مع أيقونة إظهار/إخفاء كلمة المرور وأزرار تسجيل عبر الشبكات الاجتماعية، وصفحة لطاقم العمل ببطاقات زجاجية (Glassmorphism)، وكلها مرتبطة بشريط تنقل واضح.",
        "certs.title": "الشهادات المهنية المعتمدة",
        "certs.verify": "التحقق من الاعتماد",
        "certs.btn_more": "عرض المزيد من الشهادات",
        "certs.btn_less": "عرض شهادات أقل",
        "certs.c1_title": "أساسيات البيانات من IBM",
        "certs.c1_desc": "المفاهيم الأساسية في معالجة البيانات وقواعد البيانات العلائقية وأطر تحليل البيانات وأساسيات خطوط نقل البيانات.",
        "certs.c1_issuer": `<svg class="svg-icon" style="--icon: url('assets/icons/database.svg')"></svg> IBM SkillsBuild`,
        "certs.c2_title": "الاحتراف في علم البيانات من IBM",
        "certs.c2_desc": "مسارات علم بيانات متكاملة عبر 12 مساقاً، تغطي بايثون وSQL وتحليل البيانات وتمثيلها وتعلم الآلة ومشروع تخرج ختامي.",
        "certs.c2_issuer": `<svg class="svg-icon" style="--icon: url('assets/icons/database.svg')"></svg> IBM via Coursera`,
        "certs.c3_title": "مقدمة قواعد البيانات باستخدام SQL (CS50)",
        "certs.c3_desc": "تصميم قواعد البيانات العلائقية، والاستعلام بلغة SQL، والفهرسة، وتحسين الاستعلامات، من خلال سبع مجموعات مسائل ومشروع نهائي.",
        "certs.c3_issuer": `<svg class="svg-icon" style="--icon: url('assets/icons/server.svg')"></svg> Harvard University`,
        "contact.title": "تواصل معي",
        "contact.email_label": "البريد الإلكتروني",
        "contact.linkedin_label": "لينكد إن",
        "contact.github_label": "جيت هاب",
        "contact.location_label": "الموقع الجغرافي",
        "contact.location_val": "القاهرة، مصر",
        "form.status": "متاح للتعاون",
        "form.heading": "لديك فكرة؟ لنحوّلها إلى واقع.",
        "form.lead": "أخبرني بما تبنيه، أو ما يعطّل عملك، أو ما تتمنى لو كان موجوداً. أقرأ كل رسالة بنفسي وأردّ عليها عبر البريد الإلكتروني.",
        "form.name": "اسمك",
        "form.email": "بريدك الإلكتروني",
        "form.message": "ما الذي يدور في ذهنك؟",
        "form.submit": "ابدأ المحادثة",
    }
};

function initLanguageManager() {
    const langToggleBtn = document.getElementById('lang-toggle');
    const savedLang = localStorage.getItem('portfolio-language') || 'en';

    function setLanguage(lang) {
        const isAr = (lang === 'ar');
        document.documentElement.lang = lang;
        document.documentElement.dir = isAr ? 'rtl' : 'ltr';

        const dict = translations[lang] || translations.en;

        // Update Page Title and Meta Description
        if (dict.page_title) document.title = dict.page_title;
        const metaDesc = document.querySelector('meta[name="description"]');
        if (metaDesc && dict.page_desc) metaDesc.setAttribute('content', dict.page_desc);

        // Update Text Elements
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (dict[key]) {
                el.textContent = dict[key];
            }
        });

        // Update HTML Elements
        document.querySelectorAll('[data-i18n-html]').forEach(el => {
            const key = el.getAttribute('data-i18n-html');
            if (dict[key]) {
                el.innerHTML = dict[key];
            }
        });

        // Update Placeholders
        document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
            const key = el.getAttribute('data-i18n-placeholder');
            if (dict[key]) el.setAttribute('placeholder', dict[key]);
        });

        // Update Collapsible Buttons State
        updateCollapsibleButtonsState(lang);

        // Update Floating Language Switcher Button Display
        if (langToggleBtn) {
            const icon = isAr ? 'globe' : 'language';
            const label = isAr ? 'EN' : 'عربي';
            const title = isAr ? 'Switch Language to English' : 'تغيير اللغة إلى العربية';
            langToggleBtn.innerHTML = `<svg class="svg-icon" style="--icon: url('assets/icons/${icon}.svg')"></svg> <span class="lang-toggle-text">${label}</span>`;
            langToggleBtn.setAttribute('title', title);
            langToggleBtn.setAttribute('aria-label', title);
        }

        localStorage.setItem('portfolio-language', lang);
    }

    // Initialize with saved language
    setLanguage(savedLang);

    if (langToggleBtn) {
        langToggleBtn.addEventListener('click', function() {
            const currentLang = document.documentElement.lang || 'en';
            const nextLang = (currentLang === 'en') ? 'ar' : 'en';
            setLanguage(nextLang);
        });
    }
}

function updateCollapsibleButtonsState(lang) {
    const isAr = (lang === 'ar');
    
    // Projects button
    const projectsHidden = document.getElementById('projects-hidden');
    const projectsBtn = document.getElementById('projects-toggle-btn');
    if (projectsHidden && projectsBtn) {
        const isOpen = projectsHidden.style.display === 'flex' || projectsHidden.style.display === 'block';
        const label = isOpen 
            ? (isAr ? 'عرض مشاريع أقل' : 'Show Less Projects')
            : (isAr ? 'عرض المزيد من المشاريع' : 'Show More Projects');
        const iconName = isOpen ? 'chevron-up' : 'chevron-down';
        projectsBtn.innerHTML = `<svg class="svg-icon" style="--icon: url('assets/icons/${iconName}.svg')"></svg> <span>${label}</span>`;
    }

    // Certs button
    const certsHidden = document.getElementById('certs-hidden');
    const certsBtn = document.getElementById('certs-toggle-btn');
    if (certsHidden && certsBtn) {
        const isOpen = certsHidden.style.display === 'grid' || certsHidden.style.display === 'block';
        const label = isOpen 
            ? (isAr ? 'عرض شهادات أقل' : 'Show Less Certifications')
            : (isAr ? 'عرض المزيد من الشهادات' : 'Show More Certifications');
        const iconName = isOpen ? 'chevron-up' : 'chevron-down';
        certsBtn.innerHTML = `<svg class="svg-icon" style="--icon: url('assets/icons/${iconName}.svg')"></svg> <span>${label}</span>`;
    }
}

/* ==========================================================================
   LIGHTBOX MODAL GALLERY (PROJECTS & CERTIFICATIONS FULLSCREEN PREVIEW)
   ========================================================================== */
function initLightboxManager() {
    const modal = document.getElementById('lightboxModal');
    const modalImg = document.getElementById('lightboxImg');
    const prevBtn = document.getElementById('lightboxPrev');
    const nextBtn = document.getElementById('lightboxNext');
    const closeBtn = document.getElementById('lightboxClose');
    const counter = document.getElementById('lightboxCounter');

    if (!modal || !modalImg) return;

    let currentGallery = [];
    let currentIndex = 0;

    // 1. UltraTube Gallery Group
    const ultratubeSlides = document.querySelectorAll('.ultratube-carousel:not(.monster-gallery):not(.photoshop-gallery):not(.interstellar-gallery):not(.customer360-gallery) .carousel-slide img');
    const ultratubeImgs = Array.from(ultratubeSlides).map(img => img.src);

    ultratubeSlides.forEach((img, idx) => {
        img.addEventListener('click', () => {
            openLightbox(ultratubeImgs, idx);
        });
    });

    // 2. Monster Wrangler Gallery Group
    const monsterSlides = document.querySelectorAll('.monster-gallery .carousel-slide img');
    const monsterImgs = Array.from(monsterSlides).map(img => img.src);

    monsterSlides.forEach((img, idx) => {
        img.addEventListener('click', () => {
            openLightbox(monsterImgs, idx);
        });
    });

    // Customer 360 Gallery Group
    const customer360Slides = document.querySelectorAll('.customer360-gallery .carousel-slide img');
    const customer360Imgs = Array.from(customer360Slides).map(img => img.src);

    customer360Slides.forEach((img, idx) => {
        img.addEventListener('click', () => {
            openLightbox(customer360Imgs, idx);
        });
    });

    // Baby Photoshop Gallery Group
    const photoshopSlides = document.querySelectorAll('.photoshop-gallery .carousel-slide img');
    const photoshopImgs = Array.from(photoshopSlides).map(img => img.src);

    photoshopSlides.forEach((img, idx) => {
        img.addEventListener('click', () => {
            openLightbox(photoshopImgs, idx);
        });
    });

    // Interstellar Gallery Group
    const interstellarSlides = document.querySelectorAll('.interstellar-gallery .carousel-slide img');
    const interstellarImgs = Array.from(interstellarSlides).map(img => img.src);

    interstellarSlides.forEach((img, idx) => {
        img.addEventListener('click', () => {
            openLightbox(interstellarImgs, idx);
        });
    });

    // 3. Verified Certifications Gallery Group (All 6 Certifications)
    const certWrappers = document.querySelectorAll('.cert-img-wrapper');
    const certImgs = Array.from(certWrappers).map(wrapper => {
        const img = wrapper.querySelector('img');
        return img ? img.src : '';
    }).filter(src => src !== '');

    certWrappers.forEach((wrapper, idx) => {
        wrapper.addEventListener('click', (e) => {
            // Avoid triggering if clicking any nested link
            if (e.target.tagName.toLowerCase() === 'a') return;
            openLightbox(certImgs, idx);
        });
    });

    function openLightbox(imagesList, index) {
        if (!imagesList || imagesList.length === 0) return;
        currentGallery = imagesList;
        currentIndex = index;
        updateModalContent();
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    function closeLightbox() {
        modal.classList.remove('active');
        document.body.style.overflow = '';
    }

    function updateModalContent() {
        modalImg.src = currentGallery[currentIndex];
        if (counter) {
            counter.textContent = `${currentIndex + 1} / ${currentGallery.length}`;
        }
    }

    function showPrev() {
        if (currentGallery.length === 0) return;
        currentIndex = (currentIndex - 1 + currentGallery.length) % currentGallery.length;
        updateModalContent();
    }

    function showNext() {
        if (currentGallery.length === 0) return;
        currentIndex = (currentIndex + 1) % currentGallery.length;
        updateModalContent();
    }

    if (prevBtn) prevBtn.addEventListener('click', (e) => { e.stopPropagation(); showPrev(); });
    if (nextBtn) nextBtn.addEventListener('click', (e) => { e.stopPropagation(); showNext(); });
    if (closeBtn) closeBtn.addEventListener('click', closeLightbox);

    modal.addEventListener('click', (e) => {
        if (e.target === modal) closeLightbox();
    });

    // Keyboard Navigation
    document.addEventListener('keydown', (e) => {
        if (!modal.classList.contains('active')) return;
        if (e.key === 'Escape') closeLightbox();
        if (e.key === 'ArrowLeft') showPrev();
        if (e.key === 'ArrowRight') showNext();
    });
}

/* ==========================================================================
   COLLAPSIBLE SECTIONS (SHOW MORE / SHOW LESS WITH DYNAMIC I18N SUPPORT)
   ========================================================================== */
function initCollapsibleSections() {
    window.toggleSection = function(hiddenId, btnId, moreText, lessText) {
        const hiddenEl = document.getElementById(hiddenId);
        const btn = document.getElementById(btnId);
        if (!hiddenEl || !btn) return;

        const isHidden = hiddenEl.style.display === 'none' || hiddenEl.style.display === '';
        const currentLang = document.documentElement.lang || 'en';
        const isAr = (currentLang === 'ar');

        let dynamicMore = moreText;
        let dynamicLess = lessText;

        if (hiddenId === 'projects-hidden') {
            dynamicMore = isAr ? 'عرض المزيد من المشاريع' : 'Show More Projects';
            dynamicLess = isAr ? 'عرض مشاريع أقل' : 'Show Less Projects';
        } else if (hiddenId === 'certs-hidden') {
            dynamicMore = isAr ? 'عرض المزيد من الشهادات' : 'Show More Certifications';
            dynamicLess = isAr ? 'عرض شهادات أقل' : 'Show Less Certifications';
        }

        if (isHidden) {
            hiddenEl.style.display = (hiddenId === 'projects-hidden') ? 'flex' : 'grid';
            btn.innerHTML = `<svg class="svg-icon" style="--icon: url('assets/icons/chevron-up.svg')"></svg> <span>${dynamicLess}</span>`;
        } else {
            hiddenEl.style.display = 'none';
            btn.innerHTML = `<svg class="svg-icon" style="--icon: url('assets/icons/chevron-down.svg')"></svg> <span>${dynamicMore}</span>`;
        }
    };
}

/* ==========================================================================
   COVER PORTRAIT 3D MOUSE TILT EFFECT
   ========================================================================== */
function initProfileImageTilt() {
    const profileContainer = document.querySelector('.profile-image-container');
    const profileImage = document.querySelector('.profile-image');

    if (!profileContainer || !profileImage) return;

    const maxRotation = 14;
    let isAnimating = false;
    let lastMouseX = 0;
    let lastMouseY = 0;
    let raf;

    function handleMouseMove(e) {
        lastMouseX = e.clientX;
        lastMouseY = e.clientY;
        if (!isAnimating) {
            isAnimating = true;
            raf = requestAnimationFrame(animateTransform);
        }
    }

    function animateTransform() {
        const rect = profileContainer.getBoundingClientRect();
        const mouseX = lastMouseX - rect.left - rect.width / 2;
        const mouseY = lastMouseY - rect.top - rect.height / 2;

        const rotateY = (mouseX / rect.width) * maxRotation * 2;
        const rotateX = -(mouseY / rect.height) * maxRotation * 2;

        profileImage.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`;
        isAnimating = false;
    }

    function resetTransform() {
        isAnimating = false;
        cancelAnimationFrame(raf);
        profileImage.style.transition = 'transform 0.5s ease';
        profileImage.style.transform = 'rotateX(0deg) rotateY(0deg) scale(1)';
        setTimeout(() => {
            profileImage.style.transition = '';
        }, 500);
    }

    profileContainer.addEventListener('mousemove', handleMouseMove);
    profileContainer.addEventListener('mouseleave', resetTransform);
}

/* ==========================================================================
   SMOOTH NAVIGATION WITH NAVBAR OFFSET
   ========================================================================== */
function initSmoothNavigation() {
    document.querySelectorAll('nav.main-nav a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            if (targetId && targetId.startsWith('#')) {
                e.preventDefault();
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    const nav = document.querySelector('nav.main-nav');
                    const navHeight = nav ? nav.offsetHeight : 70;
                    const elementPosition = targetElement.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.pageYOffset - navHeight - 16;

                    window.scrollTo({
                        top: offsetPosition,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
}


/* ==========================================================================
   CONTACT FORM (Formspree)
   ========================================================================== */
function initContactForm() {
    const form = document.getElementById('contactForm');
    if (!form) return;

    const msg = document.getElementById('cf-message');
    const count = document.getElementById('cfCount');
    const btn = document.getElementById('cfSubmit');
    const label = btn.querySelector('.cf-submit-label');
    const feedback = document.getElementById('cfFeedback');
    const t = (en, ar) => (document.documentElement.lang === 'ar' ? ar : en);

    msg.addEventListener('input', () => { count.textContent = msg.value.length; });

    function showFeedback(type, html) {
        feedback.className = 'cf-feedback' + (type ? ' is-' + type : '');
        feedback.innerHTML = html;
    }

    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        if (form.elements['_gotcha'].value) return; // spam bot

        const data = new FormData(form);
        data.set('_subject', `Portfolio message from ${data.get('name')}`);

        btn.disabled = true;
        label.textContent = t('Sending…', 'جارٍ الإرسال…');
        showFeedback('', '');

        try {
            const res = await fetch(form.action, {
                method: 'POST',
                body: data,
                headers: { 'Accept': 'application/json' }
            });
            if (!res.ok) throw new Error('HTTP ' + res.status);
            form.reset();
            count.textContent = '0';
            showFeedback('success', t(
                "Thanks! Your message is on its way. I'll reply to you by email soon.",
                'شكراً لك! وصلتني رسالتك، وسأردّ عليك عبر البريد الإلكتروني قريباً.'
            ));
        } catch (err) {
            showFeedback('error', t(
                'Something went wrong while sending. Please try again, or email me directly at <a href="mailto:arzottkx@gmail.com">arzottkx@gmail.com</a>.',
                'حدث خطأ أثناء الإرسال. حاول مرة أخرى، أو راسلني مباشرة على <a href="mailto:arzottkx@gmail.com">arzottkx@gmail.com</a>.'
            ));
        } finally {
            btn.disabled = false;
            const lang = document.documentElement.lang;
            const dict = (typeof translations !== 'undefined' && translations[lang]) || {};
            label.textContent = dict['form.submit'] || 'Start the conversation';
        }
    });
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initContactForm);
} else {
    initContactForm();
}