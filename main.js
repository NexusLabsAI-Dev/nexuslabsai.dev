/* ── Nexus Labs AI S.A.S. — main.js ────────────────────────────────────── */

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

// ── SCROLL: botón Conectar ──
var btnConnect = document.getElementById('btn-connect');
if(btnConnect){
  btnConnect.addEventListener('click', function(e){
    e.preventDefault();
    var target = document.getElementById('contact');
    if(target) target.scrollIntoView({ behavior: 'smooth' });
  });
}

// ── I18N ──────────────────────────────────────────────────────────────────
var T = {
  es:{
    nav_home:"INICIO", nav_projects:"PRODUCTOS", nav_cta:"CONECTAR",
    hero_status:"ESTADO: SISTEMA_ACTIVO",
    hero_desc:"Estudio de desarrollo digital e inteligencia artificial con sede en México. Construimos software con precisión técnica y criterio estratégico — para negocios que necesitan soluciones reales, no promesas.",
    hero_cta1:"VER_PRODUCTOS", hero_cta2:"CONTACTO",
    about_title:"Sobre el Estudio",
    about_desc:"Nexus Labs AI S.A.S. es un estudio de desarrollo digital independiente con sede en México. Construimos software, implementamos inteligencia artificial y desarrollamos productos propios para negocios y organizaciones que necesitan tecnología real con precisión técnica.",
    about_loc_lbl:"SEDE", about_loc_val:"México · LATAM",
    about_role_lbl:"ACTIVIDAD", about_role_val:"Desarrollo de Software · Consultoría en IA",
    lines_title:"Líneas de Actividad",
    lines_1:"Desarrollo de software", lines_2:"Consultoría en IA",
    lines_3:"Productos propios", lines_4:"Contenido digital",
    lines_note:"NEXUS LABS AI S.A.S. · MÉXICO",
    lab_title:"Productos", lab_desc:"Software funcional construido para resolver problemas reales. Disponible ahora.",
    p1_desc:"Sistema de gestión operativa PWA para negocios de alimentos y bebidas. Punto de venta, gestión de mesas, menú personalizable, cobro con propina y reportes del día.",
    p2_desc:"Sistema de gestión académica PWA. Panel, calendario, tareas por materia, integración con Telegram y autenticación Google.",
    status_active:"Activo",
    btn_launch:"ABRIR_APP",
    contact_title:"¿Iniciamos sesión?",
    contact_desc:"¿Tienes un proyecto, una consultoría o quieres implementar IA en tu negocio? Abre un canal.",
    contact_btn_email:"ENVIAR_MENSAJE",
    footer_privacy:"PRIVACIDAD"
  },
  en:{
    nav_home:"HOME", nav_projects:"PRODUCTS", nav_cta:"CONNECT",
    hero_status:"STATUS: SYSTEM_ACTIVE",
    hero_desc:"Digital development and artificial intelligence studio based in Mexico. We build software with technical precision and strategic thinking — for businesses that need real solutions, not promises.",
    hero_cta1:"VIEW_PRODUCTS", hero_cta2:"CONTACT",
    about_title:"About the Studio",
    about_desc:"Nexus Labs AI S.A.S. is an independent digital development studio based in Mexico. We build software, implement artificial intelligence, and develop proprietary products for businesses that need real technology — precise, strategic, and built to last.",
    about_loc_lbl:"HQ", about_loc_val:"Mexico · LATAM",
    about_role_lbl:"ACTIVITY", about_role_val:"Software Development · AI Consulting",
    lines_title:"Lines of Activity",
    lines_1:"Software development", lines_2:"AI consulting",
    lines_3:"Proprietary products", lines_4:"Digital content",
    lines_note:"NEXUS LABS AI S.A.S. · MEXICO",
    lab_title:"Products", lab_desc:"Functional software built to solve real problems. Available now.",
    p1_desc:"PWA operations management system for food and beverage businesses. Point of sale, table management, customizable menu, tip collection and daily reports.",
    p2_desc:"PWA academic management system. Dashboard, calendar, tasks by subject, Telegram integration and Google authentication.",
    status_active:"Active",
    btn_launch:"LAUNCH_APP",
    contact_title:"Ready to initialize?",
    contact_desc:"Have a project, a consulting need, or want to implement AI in your business? Open a channel.",
    contact_btn_email:"SEND_MESSAGE",
    footer_privacy:"PRIVACY"
  },
  pt:{
    nav_home:"INÍCIO", nav_projects:"PRODUTOS", nav_cta:"CONECTAR",
    hero_status:"STATUS: SISTEMA_ATIVO",
    hero_desc:"Estúdio de desenvolvimento digital e inteligência artificial com sede no México. Construímos software com precisão técnica e critério estratégico — para negócios que precisam de soluções reais, não promessas.",
    hero_cta1:"VER_PRODUTOS", hero_cta2:"CONTATO",
    about_title:"Sobre o Estúdio",
    about_desc:"Nexus Labs AI S.A.S. é um estúdio de desenvolvimento digital independente com sede no México. Construímos software, implementamos inteligência artificial e desenvolvemos produtos próprios para negócios que precisam de tecnologia real com precisão técnica.",
    about_loc_lbl:"SEDE", about_loc_val:"México · LATAM",
    about_role_lbl:"ATIVIDADE", about_role_val:"Desenvolvimento de Software · Consultoria em IA",
    lines_title:"Linhas de Atividade",
    lines_1:"Desenvolvimento de software", lines_2:"Consultoria em IA",
    lines_3:"Produtos próprios", lines_4:"Conteúdo digital",
    lines_note:"NEXUS LABS AI S.A.S. · MÉXICO",
    lab_title:"Produtos", lab_desc:"Software funcional construído para resolver problemas reais. Disponível agora.",
    p1_desc:"Sistema de gestão operacional PWA para negócios de alimentos e bebidas. Ponto de venda, gestão de mesas, cardápio personalizável, cobrança com gorjeta e relatórios do dia.",
    p2_desc:"Sistema de gestão acadêmica PWA. Painel, calendário, tarefas por matéria, integração com Telegram e autenticação Google.",
    status_active:"Ativo",
    btn_launch:"ABRIR_APP",
    contact_title:"Pronto para iniciar?",
    contact_desc:"Tem um projeto, uma consultoria ou quer implementar IA no seu negócio? Abra um canal.",
    contact_btn_email:"ENVIAR_MENSAGEM",
    footer_privacy:"PRIVACIDADE"
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

// Botones de idioma
document.getElementById('btn-es').addEventListener('click', function(){ setLang('es'); });
document.getElementById('btn-en').addEventListener('click', function(){ setLang('en'); });
document.getElementById('btn-pt').addEventListener('click', function(){ setLang('pt'); });

// Restaurar idioma guardado
try{
  var saved = localStorage.getItem('nlai_lang');
  if(saved && saved !== 'es') setLang(saved);
}catch(e){}
