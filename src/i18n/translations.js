// Textos de interfaz en español e inglés. El sitio recuerda el idioma
// elegido (localStorage) igual que el tema. Para agregar un idioma nuevo,
// duplica uno de los dos bloques y traduce sus valores.
export const I18N = {
  es: {
    nav: { inicio:"Inicio", servicios:"Servicios", proyectos:"Proyectos", sobreMi:"Sobre mí", contacto:"Contacto", cta:"Contratar servicio", cv:"CV" },
    hero: {
      eyebrow: "Ingeniero de Sistemas",
      h1Pre: "Construyo software que convierte ",
      h1Accent: "problemas en soluciones.",
      ledePre: "Desarrollo aplicaciones, analizo datos y automatizo procesos con ",
      ledePost: ". Creo soluciones escalables, seguras y orientadas a resultados — desde la idea hasta el deploy.",
      ctaPrimary: "Contratar un servicio",
      ctaSecondary: "Ver proyectos",
      ctaCv: "Descargar CV",
      locationSuffix: "Trabajo remoto / LATAM",
      badgeFullStack: "Full Stack",
      badgeData: "Datos → Decisiones"
    },
    services: { num:"01.", eyebrow:"Servicios", heading:"Soluciones tecnológicas a tu medida", body:"Desde el desarrollo de aplicaciones web hasta el análisis de datos y la automatización de procesos, con foco en seguridad y buenas prácticas.", linkMore:"Solicitar cotización →" },
    projects: { num:"02.", eyebrow:"Proyectos", heading:"Proyectos destacados", body:"Soluciones reales, datos que importan. Cada entrada tiene su propia página con el detalle técnico.", viewDetails:"Ver detalles" },
    stack: { num:"03.", eyebrow:"Stack", heading:"Mi stack tecnológico", body:"Herramientas que uso a diario, adapto según el proyecto y sigo explorando." },
    about: {
      num:"04.", eyebrow:"Sobre mí", heading:"Ingeniero de sistemas con mentalidad de producto",
      body:"Ingeniero de Sistemas con experiencia en gestión, procesamiento y análisis de datos, enfocado en transformar información en soluciones que apoyan la toma de decisiones. Construyo soluciones end-to-end: desde backend robusto con Django hasta interfaces dinámicas en React, con foco en código limpio y seguridad desde el diseño.",
      whyTitle:"¿Por qué trabajar conmigo?", learnMore:"Conocer más sobre mí"
    },
    contact: { num:"05.", eyebrow:"Contacto", heading:"¿Tienes un proyecto en mente?", body:"Hablemos y hagamos que suceda. Ya sea una app, un dashboard, una automatización o una idea que aún está en papel.", wa:"Escribir por WhatsApp", more:"Más información", email:"Email", linkedin:"LinkedIn", github:"GitHub" },
    footer: { tagline:"soysanti.dev — Full Stack · Python · Data-driven · Security-minded" },
    detail: {
      back:"← Volver a proyectos", ctaSimilar:"Quiero algo así", more:"Más información",
      about:"Sobre el proyecto", highlights:"Puntos clave", sheet:"Ficha técnica",
      role:"Rol", year:"Año", status:"Estado", stackLabel:"Stack", other:"Otros proyectos",
      ctaTalk:"Hablemos de tu proyecto", mailSubject:"Sobre "
    },
    wa: {
      nav: "Hola Santi, vi tu portafolio y quiero contratar un servicio.",
      quote: "Hola Santi, quiero cotizar un servicio.",
      contact: "Hola Santi, quiero hablar sobre un proyecto.",
      about: "Hola Santi, quiero saber más sobre tu experiencia.",
      similar: (title) => "Hola Santi, vi el proyecto \"" + title + "\" y quiero algo similar.",
      like: (title) => "Hola Santi, quiero un proyecto como \"" + title + "\"."
    }
  },
  en: {
    nav: { inicio:"Home", servicios:"Services", proyectos:"Projects", sobreMi:"About", contacto:"Contact", cta:"Hire me", cv:"CV" },
    hero: {
      eyebrow: "Systems Engineer",
      h1Pre: "I build software that turns ",
      h1Accent: "problems into solutions.",
      ledePre: "I develop applications, analyze data and automate processes with ",
      ledePost: ". I build scalable, secure, results-driven solutions — from idea to deploy.",
      ctaPrimary: "Hire a service",
      ctaSecondary: "View projects",
      ctaCv: "Download CV",
      locationSuffix: "Remote work / LATAM",
      badgeFullStack: "Full Stack",
      badgeData: "Data → Decisions"
    },
    services: { num:"01.", eyebrow:"Services", heading:"Tech solutions tailored to you", body:"From web application development to data analysis and process automation, with a focus on security and best practices.", linkMore:"Request a quote →" },
    projects: { num:"02.", eyebrow:"Projects", heading:"Featured projects", body:"Real-world solutions, data that matters. Each entry has its own page with the technical detail.", viewDetails:"View details" },
    stack: { num:"03.", eyebrow:"Stack", heading:"My tech stack", body:"Tools I use daily, adapt per project, and keep exploring." },
    about: {
      num:"04.", eyebrow:"About me", heading:"Systems engineer with a product mindset",
      body:"Systems Engineer with experience in data management, processing and analysis, focused on turning information into decision-support solutions. I build end-to-end solutions: from robust Django backends to dynamic React interfaces, with a focus on clean code and security by design.",
      whyTitle:"Why work with me?", learnMore:"Learn more about me"
    },
    contact: { num:"05.", eyebrow:"Contact", heading:"Have a project in mind?", body:"Let's talk and make it happen. Whether it's an app, a dashboard, an automation, or an idea still on paper.", wa:"Message on WhatsApp", more:"More information", email:"Email", linkedin:"LinkedIn", github:"GitHub" },
    footer: { tagline:"soysanti.dev — Full Stack · Python · Data-driven · Security-minded" },
    detail: {
      back:"← Back to projects", ctaSimilar:"I want something like this", more:"More information",
      about:"About the project", highlights:"Key highlights", sheet:"Tech sheet",
      role:"Role", year:"Year", status:"Status", stackLabel:"Stack", other:"Other projects",
      ctaTalk:"Let's talk about your project", mailSubject:"About "
    },
    wa: {
      nav: "Hi Santi, I saw your portfolio and I'd like to hire a service.",
      quote: "Hi Santi, I'd like a quote for a service.",
      contact: "Hi Santi, I'd like to talk about a project.",
      about: "Hi Santi, I'd like to know more about your experience.",
      similar: (title) => "Hi Santi, I saw the project \"" + title + "\" and I'd like something similar.",
      like: (title) => "Hi Santi, I'd like a project like \"" + title + "\"."
    }
  }
};
