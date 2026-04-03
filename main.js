// ── EMAIL: construido por JS para evitar obfuscation de Cloudflare ──
(function(){
  var u = 'contact';
  var d = 'nexuslabsai.dev';
  var full = u + '@' + d;
  var mailto = 'mailto:' + full;

  var display = document.getElementById('contact-email-display');
  if(display) display.textContent = full;

  var btn = document.getElementById('contact-email-btn');
  if(btn) btn.href = mailto;

  var footerLink = document.getElementById('footer-contact-link');
  if(footerLink) footerLink.href = mailto;
})();

// ── SCROLL: Conectar button ──
document.getElementById('btn-connect').addEventListener('click', function(e){
  e.preventDefault();
  var target = document.getElementById('contact');
  if(target) target.scrollIntoView({ behavior: 'smooth' });
});

// ═══════════════════════════════════════════════════
// MEJORA 1: Scroll Reveal (Intersection Observer)
// ═══════════════════════════════════════════════════
(function(){
  var revealEls = document.querySelectorAll('.reveal, .reveal-left, .reveal-scale');
  if(!revealEls.length) return;

  var observer = new IntersectionObserver(function(entries){
    entries.forEach(function(entry){
      if(entry.isIntersecting){
        entry.target.classList.add('visible');
        observer.unobserve(entry.target); // animate once only
      }
    });
  }, {
    threshold: 0.12,
    rootMargin: '0px 0px -40px 0px'
  });

  revealEls.forEach(function(el){ observer.observe(el); });
})();

// ═══════════════════════════════════════════════════
// MEJORA 2: Mobile Hamburger Menu
// ═══════════════════════════════════════════════════
(function(){
  var hamburger = document.getElementById('hamburger-btn');
  var mobileNav = document.getElementById('mobile-nav');
  if(!hamburger || !mobileNav) return;

  var links = mobileNav.querySelectorAll('a');

  function toggleMenu(){
    var isOpen = mobileNav.classList.toggle('open');
    hamburger.classList.toggle('active', isOpen);
    document.body.style.overflow = isOpen ? 'hidden' : '';
    hamburger.setAttribute('aria-expanded', isOpen);
  }

  function closeMenu(){
    mobileNav.classList.remove('open');
    hamburger.classList.remove('active');
    document.body.style.overflow = '';
    hamburger.setAttribute('aria-expanded', 'false');
  }

  hamburger.addEventListener('click', toggleMenu);

  // Close on link click
  links.forEach(function(link){
    link.addEventListener('click', function(){
      closeMenu();
    });
  });

  // Close on Escape key
  document.addEventListener('keydown', function(e){
    if(e.key === 'Escape' && mobileNav.classList.contains('open')){
      closeMenu();
    }
  });
})();

// ── I18N ──
var T = {
  es:{
    nav_home:"INICIO", nav_projects:"PROYECTOS", nav_stack:"STACK", nav_cta:"CONECTAR",
    hero_status:"ESTADO: SISTEMA_ACTIVO",
    hero_desc:"Laboratorio personal de tecnología. Proyectos reales, aprendizaje continuo y código con propósito — por Fernando, profesional de IT con enfoque en ciberseguridad.",
    hero_cta1:"VER_PROYECTOS", hero_cta2:"CONTACTO",
    about_title:"Sobre el Lab",
    about_desc:"Nexus Labs AI es el espacio de Fernando — profesional de IT con más de 4 años en soporte técnico global y estudiante de Licenciatura en Informática. Aquí viven los proyectos en construcción, los experimentos y el aprendizaje en tiempo real.",
    about_loc_lbl:"UBICACIÓN", about_loc_val:"México · Remoto",
    about_role_lbl:"ROL", about_role_val:"IT Support · Service Desk",
    edu_title:"Formación", edu_lbl1:"01 // GRADO", edu_degree:"Licenciatura en Informática",
    edu_lbl2:"02 // CERTIFICACIONES",
    edu_note:"Preparando certificaciones CompTIA con enfoque en seguridad ofensiva y sistemas Linux.",
    lab_title:"The Lab", lab_desc:"Nada está terminado aquí todavía — y ese es el punto. Proyectos reales en distintas etapas de construcción.",
    p1_desc:"Repositorio de aprendizaje estructurado en Java. Ejercicios y fundamentos de programación orientada a objetos.",
    p2_desc:"Marca digital de contenido enfocada en IA. Identidad visual completa y presencia en nexuslabsai.dev.",
    p3_desc:"Sistema de gestión académica personal. Panel, calendario, tareas por materia, integración con Telegram y autenticación Google.",
    p4_desc:"Herramienta de práctica interactiva de SQL con motor SQLite en el navegador. 57 ejercicios, 13 bloques y validación automática.",
    p5_desc:"Generador de recibos de renta en el navegador. Folio autoincremental con localStorage, exportación a PDF con jsPDF. Sin backend ni dependencias externas.",
    p6_desc:"Sistema punto de venta PWA para negocio local. Gestión de productos, ventas y reportes con Firebase Firestore y notificaciones por correo vía EmailJS.",
    status_progress:"En_Progreso", status_active:"Activo", status_private:"Privado",
    btn_repo:"VER_REPO", btn_launch:"ABRIR_APP",
    stack_title:"Stack & Herramientas",
    contact_title:"¿Iniciamos sesión?",
    contact_desc:"¿Tienes un proyecto, una idea o simplemente quieres conectar? Abre un canal.",
    contact_btn_email:"ENVIAR_MENSAJE", contact_btn_gh:"VER_GITHUB",
    footer_logs:"SYS_LOGS", footer_privacy:"PRIVACIDAD"
  },
  en:{
    nav_home:"HOME", nav_projects:"PROJECTS", nav_stack:"STACK", nav_cta:"CONNECT",
    hero_status:"STATUS: SYSTEM_ACTIVE",
    hero_desc:"Personal technology lab. Real projects, continuous learning and purposeful code — by Fernando, IT professional focused on cybersecurity.",
    hero_cta1:"EXPLORE_PROJECTS", hero_cta2:"CONTACT",
    about_title:"About the Lab",
    about_desc:"Nexus Labs AI is Fernando's space — an IT professional with over 4 years in global tech support and a Computer Science student. This is where projects, experiments and real-time learning live.",
    about_loc_lbl:"LOCATION", about_loc_val:"Mexico · Remote",
    about_role_lbl:"ROLE", about_role_val:"IT Support · Service Desk",
    edu_title:"Education", edu_lbl1:"01 // DEGREE", edu_degree:"Bachelor's in Computer Science",
    edu_lbl2:"02 // CERTIFICATIONS",
    edu_note:"Preparing CompTIA certifications focused on offensive security and Linux systems.",
    lab_title:"The Lab", lab_desc:"Nothing is finished here yet — and that's the point. Real projects at different stages of construction.",
    p1_desc:"Structured Java learning repository. Exercises and fundamentals of object-oriented programming.",
    p2_desc:"Digital content brand focused on AI. Complete visual identity and presence at nexuslabsai.dev.",
    p3_desc:"Personal academic management system. Dashboard, calendar, tasks by subject, Telegram integration and Google authentication.",
    p4_desc:"Interactive SQL practice tool with SQLite engine in the browser. 57 exercises, 13 blocks and automatic query validation.",
    p5_desc:"Browser-based rent receipt generator. Auto-incremental folio via localStorage and PDF export with jsPDF. No backend or external dependencies.",
    p6_desc:"PWA point-of-sale system for a local business. Product, sales and reporting management with Firebase Firestore and email notifications via EmailJS.",
    status_progress:"In_Progress", status_active:"Active", status_private:"Private",
    btn_repo:"VIEW_REPO", btn_launch:"LAUNCH_APP",
    stack_title:"Stack & Tools",
    contact_title:"Ready to initialize?",
    contact_desc:"Have a project, an idea, or just want to connect? Open a channel.",
    contact_btn_email:"SEND_MESSAGE", contact_btn_gh:"VIEW_GITHUB",
    footer_logs:"SYS_LOGS", footer_privacy:"PRIVACY"
  },
  pt:{
    nav_home:"INÍCIO", nav_projects:"PROJETOS", nav_stack:"STACK", nav_cta:"CONECTAR",
    hero_status:"STATUS: SISTEMA_ATIVO",
    hero_desc:"Laboratório pessoal de tecnologia. Projetos reais, aprendizado contínuo e código com propósito — por Fernando, profissional de TI com foco em cibersegurança.",
    hero_cta1:"VER_PROJETOS", hero_cta2:"CONTATO",
    about_title:"Sobre o Lab",
    about_desc:"Nexus Labs AI é o espaço de Fernando — profissional de TI com mais de 4 anos em suporte técnico global e estudante de Bacharelado em Informática. Aqui vivem os projetos em construção, os experimentos e o aprendizado em tempo real.",
    about_loc_lbl:"LOCALIZAÇÃO", about_loc_val:"México · Remoto",
    about_role_lbl:"FUNÇÃO", about_role_val:"Suporte TI · Service Desk",
    edu_title:"Formação", edu_lbl1:"01 // GRAU", edu_degree:"Bacharelado em Informática",
    edu_lbl2:"02 // CERTIFICAÇÕES",
    edu_note:"Preparando certificações CompTIA com foco em segurança ofensiva e sistemas Linux.",
    lab_title:"The Lab", lab_desc:"Nada está terminado aqui ainda — e esse é o ponto. Projetos reais em diferentes etapas de construção.",
    p1_desc:"Repositório de aprendizado estruturado em Java. Exercícios e fundamentos de programação orientada a objetos.",
    p2_desc:"Marca de conteúdo digital focada em IA. Identidade visual completa e presença em nexuslabsai.dev.",
    p3_desc:"Sistema de gestão acadêmica pessoal. Painel, calendário, tarefas por matéria, integração com Telegram e autenticação Google.",
    p4_desc:"Ferramenta de prática interativa de SQL com motor SQLite no navegador. 57 exercícios, 13 blocos e validação automática.",
    p5_desc:"Gerador de recibos de aluguel no navegador. Numeração automática com localStorage e exportação para PDF via jsPDF. Sem backend nem dependências externas.",
    p6_desc:"Sistema de ponto de venda PWA para negócio local. Gestão de produtos, vendas e relatórios com Firebase Firestore e notificações por e-mail via EmailJS.",
    status_progress:"Em_Progresso", status_active:"Ativo", status_private:"Privado",
    btn_repo:"VER_REPO", btn_launch:"ABRIR_APP",
    stack_title:"Stack & Ferramentas",
    contact_title:"Pronto para iniciar?",
    contact_desc:"Tem um projeto, uma ideia ou só quer conectar? Abra um canal.",
    contact_btn_email:"ENVIAR_MENSAGEM", contact_btn_gh:"VER_GITHUB",
    footer_logs:"SYS_LOGS", footer_privacy:"PRIVACIDADE"
  }
};

function setLang(lang){
  var t = T[lang];
  if(!t) return;
  var els = document.querySelectorAll('[data-i18n]');
  for(var i=0; i<els.length; i++){
    var k = els[i].getAttribute('data-i18n');
    if(t[k] !== undefined) els[i].textContent = t[k];
  }
  document.documentElement.lang = lang;
  ['es','en','pt'].forEach(function(l){
    var b = document.getElementById('btn-'+l);
    if(b) b.classList.toggle('active', l === lang);
  });
  try{ localStorage.setItem('nlai_lang', lang); }catch(e){}
}

// Botones de idioma con addEventListener
document.getElementById('btn-es').addEventListener('click', function(){ setLang('es'); });
document.getElementById('btn-en').addEventListener('click', function(){ setLang('en'); });
document.getElementById('btn-pt').addEventListener('click', function(){ setLang('pt'); });

// Restaurar idioma guardado
try{
  var saved = localStorage.getItem('nlai_lang');
  if(saved && saved !== 'es') setLang(saved);
}catch(e){}
