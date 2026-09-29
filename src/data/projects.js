// Datos de todos los proyectos del portafolio. Cada proyecto tiene texto
// separado para español (es) e inglés (en); los campos sin sufijo (id, tags,
// year, gradient) no se traducen. Para agregar un proyecto nuevo, copia un
// objeto completo y cambia sus campos: aparece automáticamente en la grilla
// y en su propia página de detalle en /proyecto/<id>.

export const PROJECTS = [
  {
    id: "app-ese",
    tags: ["Python", "Django", "MySQL"],
    year: "2024",
    gradient: ["#4f8cff", "#0a0e14"],
    image: { src: "/projects/app-ese-screenshot.png", type: "screenshot" },
    infographic: "/projects/app-ese-infographic.jpg",
    es: {
      title: "App ESE",
      category: "Full Stack · Datos educativos",
      status: "En producción",
      role: "Desarrollador Full Stack",
      summary: "Plataforma interna para ESE Grupo Educación y Empresa que centraliza la gestión, evaluación y analítica educativa.",
      description: "Aplicación Django (MVT) que automatiza procesos que antes se hacían manualmente en Excel: carga masiva y validación de archivos, normalización de resultados de pruebas como Saber Pro y Saber TyT, y consolidación de resultados históricos por universidad y estudiante. Universidades y estudiantes consultan sus propios reportes, y la información alimenta procesos de analítica en Power BI.",
      highlights: [
        "Automatizó la normalización y consolidación de resultados, antes 100% manual en Excel",
        "Gestión de usuarios, roles y permisos para universidades y estudiantes",
        "Alimenta reportes y dashboards de Power BI con datos consolidados"
      ]
    },
    en: {
      title: "App ESE",
      category: "Full Stack · Education Data",
      status: "In production",
      role: "Full Stack Developer",
      summary: "Internal platform for ESE Grupo Educación y Empresa that centralizes educational management, evaluation and analytics.",
      description: "A Django (MVT) application that automates processes previously handled manually in Excel: bulk file upload and validation, normalization of test results such as Saber Pro and Saber TyT, and consolidation of historical results by university and student. Universities and students can access their own reports, and the data feeds Power BI analytics processes.",
      highlights: [
        "Automated result normalization and consolidation, previously 100% manual in Excel",
        "User, role and permission management for universities and students",
        "Feeds Power BI reports and dashboards with consolidated data"
      ]
    }
  },
  {
    id: "aquareport",
    tags: ["React", "Django", "MySQL"],
    year: "2024",
    gradient: ["#0ea5e9", "#0a0e14"],
    image: { src: "/projects/aquareport-logo.png", type: "logo" },
    infographic: "/projects/aquareport-infographic.jpg",
    certificate: "/projects/aquareport-certificado.jpg",
    es: {
      title: "AquaReport — PTAP",
      category: "Full Stack · Operaciones",
      status: "En producción",
      role: "Desarrollador Full Stack",
      summary: "Plataforma para digitalizar la gestión y el análisis de la información operacional de una planta de tratamiento de agua potable (PTAP).",
      description: "Nació como mi proyecto de grado para el título de Ingeniería de Sistemas en la Universidad Católica Luis Amigo, titulado \"Transformación Digital en la Industria del Tratamiento de Agua: El Rol Fundamental del Análisis de Datos\" (junio de 2024), y ganó reconocimiento a mejor trabajo de grado. Frontend en React y backend en Django con MySQL, centraliza registros operacionales (caudales, turbidez, color, pH, cloro, temperatura, responsables) que antes se llevaban en papel, y los convierte en indicadores, gráficos y reportes periódicos. Hoy lo usa activamente la Empresa de Servicios Públicos de Valparaíso (Antioquia) para su operación diaria, y sigue en producción con soporte activo.",
      highlights: [
        "Proyecto de grado de Ingeniería de Sistemas (Universidad Católica Luis Amigo), reconocido como mejor trabajo de grado",
        "En uso real por la Empresa de Servicios Públicos de Valparaíso (Antioquia)",
        "Reemplazó registros manuales en papel por captura digital estructurada",
        "API REST en Django desacoplada de una SPA en React, con indicadores y reportes consolidados"
      ]
    },
    en: {
      title: "AquaReport — Water Treatment Plant",
      category: "Full Stack · Operations",
      status: "In production",
      role: "Full Stack Developer",
      summary: "A platform to digitize the management and analysis of operational data for a drinking water treatment plant (PTAP).",
      description: "Started as my thesis project for my Systems Engineering degree at Universidad Católica Luis Amigo, titled \"Transformación Digital en la Industria del Tratamiento de Agua: El Rol Fundamental del Análisis de Datos\" (June 2024), and won recognition as best thesis project. React frontend and Django backend with MySQL, it centralizes operational records (flow rates, turbidity, color, pH, chlorine, temperature, responsible staff) previously kept on paper, turning them into indicators, charts and periodic reports. It's now actively used by the Empresa de Servicios Públicos de Valparaíso (Antioquia) for its daily operations, and remains in production with active support.",
      highlights: [
        "Systems Engineering thesis project (Universidad Católica Luis Amigo), recognized as best thesis project",
        "In real use by the Empresa de Servicios Públicos de Valparaíso (Antioquia)",
        "Replaced manual paper records with structured digital capture",
        "REST API in Django decoupled from a React SPA, with indicators and consolidated reports"
      ]
    }
  },
  {
    id: "stock-and-go",
    tags: ["Next.js", "Supabase", "Blob Storage"],
    year: "2026",
    gradient: ["#c792ea", "#0a0e14"],
    image: { src: "/projects/stock-and-go-logo.png", type: "logo" },
    infographic: "/projects/stock-and-go-infographic.jpg",
    es: {
      title: "Stock & Go",
      category: "E-commerce · Fulfillment",
      status: "En fase de prueba",
      role: "Full Stack Developer",
      summary: "Plataforma de e-commerce de moda que integra ventas, inventario, pedidos, facturación y operación logística.",
      description: "No se limita al storefront: cubre catálogo con variantes de talla y color, carrito y checkout, comunicación por WhatsApp, y todo el proceso posterior a la venta — inventario, pedidos, facturación, escaneo de productos y guías, checklist de empaque y seguimiento hasta la entrega. Construida en Next.js, usa Turso durante la fase de pruebas con transición planeada a Supabase en producción, y Blob Storage para las imágenes de producto.",
      highlights: [
        "Trazabilidad completa del pedido: preparación, validación, empaque, guía y despacho",
        "Escaneo de productos y guías para reducir errores en preparación y despacho",
        "Migración de base de datos en curso: Turso (pruebas) → Supabase (producción)"
      ]
    },
    en: {
      title: "Stock & Go",
      category: "E-commerce · Fulfillment",
      status: "In testing phase",
      role: "Full Stack Developer",
      summary: "A fashion e-commerce platform that integrates sales, inventory, orders, invoicing and logistics operations.",
      description: "It's not just a storefront: it covers a catalog with size and color variants, cart and checkout, WhatsApp communication, and the whole post-sale process — inventory, orders, invoicing, product and shipping-label scanning, a packing checklist, and tracking through to delivery. Built with Next.js, it uses Turso during the testing phase with a planned transition to Supabase in production, and Blob Storage for product images.",
      highlights: [
        "Full order traceability: preparation, validation, packing, label and dispatch",
        "Product and shipping-label scanning to reduce errors during preparation and dispatch",
        "Database migration in progress: Turso (testing) → Supabase (production)"
      ]
    }
  },
  {
    id: "digital-booking",
    tags: ["AWS", "React", "Java"],
    year: "2022",
    gradient: ["#f5a623", "#0a0e14"],
    es: {
      title: "Digital Booking",
      category: "Cloud · Full Stack",
      status: "Finalizado",
      role: "Especialista en la nube (equipo)",
      summary: "Plataforma de reservas construida en equipo durante mi formación en Digital House, donde lideré la infraestructura Cloud en AWS.",
      description: "Como parte del equipo del proyecto Digital Booking en Digital House (beca de MercadoLibre y Globant), asumí el rol de especialista en la nube: implementé la infraestructura en AWS y acompañé a las áreas de desarrollo dando soporte en frontend (React), backend (Java) y gestión de bases de datos.",
      highlights: [
        "Implementación de la infraestructura Cloud en AWS como especialista en la nube",
        "Soporte cruzado en frontend (React), backend (Java) y bases de datos",
        "Proyecto desarrollado en equipo dentro del programa Certified Tech Developer"
      ]
    },
    en: {
      title: "Digital Booking",
      category: "Cloud · Full Stack",
      status: "Completed",
      role: "Cloud Specialist (team)",
      summary: "A booking platform built as a team during my Digital House fellowship, where I led the AWS cloud infrastructure.",
      description: "As part of the Digital Booking project team at Digital House (MercadoLibre & Globant fellowship), I took on the cloud specialist role: implemented the AWS infrastructure and supported the development teams on frontend (React), backend (Java) and database management.",
      highlights: [
        "Implemented the AWS cloud infrastructure as cloud specialist",
        "Cross-functional support on frontend (React), backend (Java) and databases",
        "Team project built within the Certified Tech Developer program"
      ]
    }
  },
  {
    id: "strategicshipping",
    tags: ["React", "Logística"],
    year: "2022",
    gradient: ["#22d97a", "#0a0e14"],
    es: {
      title: "StrategicShipping (SAC PRO)",
      category: "Frontend · Logística",
      status: "Finalizado",
      role: "Desarrollador Frontend (equipo)",
      summary: "Sistema integral de gestión de picking, packing e inventario logístico, desarrollado como parte de un equipo.",
      description: "Colaboré en el frontend (React) de StrategicShipping (SAC PRO), un sistema para la gestión de picking, packing e inventario logístico, pensado para optimizar la eficiencia operativa y el control logístico, incluyendo la generación automatizada de vales de envío.",
      highlights: [
        "Desarrollo frontend en React para la gestión de picking, packing e inventario",
        "Interfaz para la generación automatizada de vales de envío",
        "Desarrollado en equipo con foco en eficiencia operativa"
      ]
    },
    en: {
      title: "StrategicShipping (SAC PRO)",
      category: "Frontend · Logistics",
      status: "Completed",
      role: "Frontend Developer (team)",
      summary: "An end-to-end picking, packing and logistics inventory management system, built as part of a team.",
      description: "Worked on the frontend (React) of StrategicShipping (SAC PRO), a system for managing picking, packing and logistics inventory, designed to optimize operational efficiency and logistics control, including automated shipping-voucher generation.",
      highlights: [
        "React frontend development for picking, packing and inventory management",
        "Interface for automated shipping-voucher generation",
        "Built as part of a team with a focus on operational efficiency"
      ]
    }
  }
];
