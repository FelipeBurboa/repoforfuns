// All content from VENTAPLAY_LANDING_SPEC_2.md — single source of truth
// Content in Spanish (es-CL), used verbatim across all 5 designs

export const WHATSAPP_LINK = "https://wa.me/56959507128";

export const NAV_ITEMS = [
  { label: "Funcionalidades", href: "#funcionalidades" },
  { label: "Industrias", href: "#industrias" },
  { label: "Precios", href: "#precios" },
  { label: "Contacto", href: "#contacto" },
] as const;

export const HERO = {
  headline: "Agenda, Vende y Cobra por WhatsApp sin perder leads",
  subheadline:
    "WhatsApp oficial + Agenda + CRM + pagos/POS + automatizaciones con IA. Todo en un solo lugar.",
  cta1: { label: "Contratar Ventaplay", href: WHATSAPP_LINK },
  cta2: { label: "Agendar una demo", href: WHATSAPP_LINK },
  stats: [
    { value: "2000+", label: "Horas Agendas por agentes" },
    { value: "500+", label: "Millones en pagos" },
    { value: "20%", label: "Aumento de agendamiento" },
  ],
} as const;

export const SCROLL_PHASES = [
  {
    id: "chatea",
    number: 1,
    title: "Chatea",
    description: "Conecta con tus clientes por WhatsApp",
    start: 0.05,
    end: 0.22,
  },
  {
    id: "conecta",
    number: 2,
    title: "Conecta",
    description: "Convierte cada conversación en una oportunidad",
    start: 0.30,
    end: 0.47,
  },
  {
    id: "agenda",
    number: 3,
    title: "Agenda",
    description: "Confirma tus citas automáticamente",
    start: 0.55,
    end: 0.72,
  },
  {
    id: "cobra",
    number: 4,
    title: "Cobra",
    description: "Recibe pagos con POS o link de pago",
    start: 0.80,
    end: 0.97,
  },
] as const;

export const VALUE_PROPS = {
  headline: "Tú atiendes — Ventaplay se encarga del resto",
  items: [
    {
      title: "Vende más",
      description: "Convierte cada conversación en una venta",
    },
    {
      title: "Ahorra tiempo",
      description: "Deja que Ventaplay gestione tu agenda y cobros",
    },
    {
      title: "Reduce costos",
      description: "Un solo sistema y POS con tasa más baja",
    },
  ],
} as const;

export const FEATURES = {
  headline: "Tu operación más simple que nunca",
  sections: [
    {
      id: "comunicacion",
      title: "Comunicación",
      description:
        "El proceso de registro es simple y rápido. Solo necesitas completar el formulario con tus datos básicos y verificar tu correo electrónico.",
      items: [
        "Bandeja multiagente para WhatsApp",
        "Plantillas oficiales de WhatsApp",
        "Historial compartido entre vendedores",
        "Bot inteligente para atención 24/7",
      ],
      benefit:
        "Convierte conversaciones en oportunidades con un click",
    },
    {
      id: "agendas",
      title: "Agendas y reservas",
      description:
        "Calendario online para agendar citas y servicios, con recordatorios automáticos por WhatsApp, sincronizado al chat.",
      items: [
        "Reservas online 24/7",
        "Recordatorios automáticos por WhatsApp",
        "Gestión de calendario de profesionales",
        "Confirmaciones automáticas",
        "Reducción de no-shows hasta 70%",
      ],
      benefit:
        "Tus clientes pueden reservar fácil, y nunca más olvidarás sus citas.",
    },
    {
      id: "crm",
      title: "CRM y oportunidades",
      description:
        "Gestión de contactos y pipeline de ventas integrado. Ventaplay crea fichas automáticamente desde el primer mensaje de WhatsApp.",
      items: [
        "Base de datos automática desde WhatsApp",
        "Kanban de oportunidades de venta",
        "Historial completo de interacciones",
        "Segmentación inteligente de clientes",
        "Seguimiento automático de leads",
      ],
      benefit:
        "No pierdes seguimiento, cada contacto se convierte en oportunidad.",
    },
    {
      id: "membresias",
      title: "Membresías y fidelización",
      description:
        "Gestiona suscripciones, paquetes de servicios y programas de fidelización para mantener clientes por más tiempo.",
      items: [
        "Gestión de membresías y suscripciones",
        "Paquetes de servicios prepagados",
        "Programas de fidelización",
        "Renovaciones automáticas",
        "Descuentos para clientes frecuentes",
      ],
      benefit:
        "Crea membresías que hacen que tus clientes se queden contigo por más tiempo.",
    },
    {
      id: "cobros",
      title: "Cobros y puntos de venta",
      description:
        "Integración con pagos en línea y caja. Cobra fácil tras cada cita con links de pago y control completo de ventas.",
      items: [
        "Links de pagos desde el chat",
        "Control de caja integrado",
        "Medios de pago locales",
        "Boletas y facturación electrónica",
      ],
      benefit:
        "Cobra fácil, todo queda registrado sin conciliaciones manuales.",
    },
  ],
} as const;

export const INDUSTRIES = {
  headline: "Diseñado para empresas de servicios",
  items: [
    {
      title: "Centros de bienestar",
      description:
        "Agenda pacientes, cobra y envía recordatorios por WhatsApp.",
      examples: "Kinesiólogos, fisioterapeuta, terapias alternativas.",
    },
    {
      title: "Salones de belleza y Spas",
      description:
        "Gestiona reservas, vende paquetes y cobra fácil desde el celular.",
      examples: "Peluquerías, centros de estética, cuidado de uñas.",
    },
    {
      title: "Gimnasios y centros deportivos",
      description:
        "Administra clases y membresías. Mantén a tus clientes activos con recordatorios.",
      examples: "Centros de crossfit, yoga, pilates.",
    },
    {
      title: "Veterinarias",
      description:
        "Agenda consultas y recuerda vacunas o controles de mascotas.",
      examples:
        "Clínicas veterinarias, pet shops con servicios como grooming.",
    },
    {
      title: "Educación y cursos",
      description:
        "Organiza clases y envía recordatorios de sesiones individuales o grupales.",
      examples:
        "Academias de música, academias de idiomas, coaching, tutorías.",
    },
    {
      title: "Servicios profesionales",
      description:
        "Agenda reuniones y mantén tus servicios y clientes organizados.",
      examples:
        "Consultorías, inmobiliarias, servicios a domicilio, terapia psicológica.",
    },
  ],
  cta: {
    headline: "¿Tu negocio es distinto?",
    description:
      "Si agendas citas, vendes servicios o atiendes por WhatsApp podemos ayudarte. Cuéntanos tu caso y veremos la mejor forma de hacerlo funcionar.",
    label: "Contactar a Ventaplay",
    href: "#contacto",
  },
} as const;

export const PRICING = {
  headline: "¿Qué incluye cada plan?",
  plans: [
    {
      name: "Play Conecta",
      monthlyPrice: "$53.900/mes",
      annualPrice: "$539.000 anual",
      savings: "Ahorra $107.800",
      recommended: false,
      features: [
        "Módulo comunicación",
        "WhatsApp API",
        "Envío masivo de WhatsApp",
        "Soporte Bots",
      ],
    },
    {
      name: "Play Base",
      monthlyPrice: "$53.900/mes",
      annualPrice: "$539.000 anual",
      savings: "Ahorra $107.800",
      recommended: false,
      features: [
        "Hasta 5 Profesionales",
        "Agenda Online ilimitada",
        "Recordatorios por e-mail",
        "1 Funnel de Ventas",
        "Hasta 5 Planes de membresía",
        "Soporte Bots",
      ],
    },
    {
      name: "Play Emprende",
      monthlyPrice: "$99.000/mes",
      annualPrice: "$990.000 anual",
      savings: "Ahorra $198.000",
      recommended: true,
      features: [
        "Hasta 25 Profesionales",
        "Agenda Online ilimitada",
        "Recordatorios por WhatsApp",
        "3 Funnel de Ventas",
        "Hasta 15 Planes de membresía",
        "Soporte Ticket",
        "Multiagente (10 Agentes)",
        "Envío masivo de WhatsApp",
      ],
    },
    {
      name: "Play Empresa",
      monthlyPrice: "$198.000/mes",
      annualPrice: "$1.980.000 anual",
      savings: "Ahorra $396.000",
      recommended: false,
      features: [
        "Todo lo anterior +",
        "Hasta 100 Profesionales",
        "Multisucursal (hasta 3)",
        "Funnel de ventas ilimitado",
        "Membresías ilimitadas",
        "Soporte Personalizado",
        "Agentes Ilimitados",
        "Integración Toku",
      ],
    },
  ],
  addons: {
    headline: "Complementa tu plan con agentes IA",
    items: [
      {
        name: "Agente IA Conecta",
        price: "$65.000/mes",
        annualPrice: "$650.000 anual",
        savings: "Ahorra $130.000",
        description:
          "Ofrece chatbots que pueden interactuar con los clientes, responder preguntas frecuentes, guiar a los usuarios y recopilar información de contacto.",
      },
      {
        name: "Agente IA Impulsa",
        price: "$155.500/mes",
        annualPrice: "$1.555.000 anual",
        savings: "Ahorra $311.000",
        description:
          "Utilizamos la IA para automatizar tareas, programa citas automáticamente desde conversaciones, califica prospectos y captura leads, integra con tu CRM, email y herramientas existentes.",
      },
    ],
  },
  cta: {
    label: "Contactarme por Ventaplay",
    href: WHATSAPP_LINK,
    note: "Escríbenos para conocer el valor exacto de cada plan.",
  },
} as const;

export const FAQ = {
  headline: "Tal vez te estás preguntando",
  items: [
    {
      question: "¿Cómo convierto un chat de WhatsApp en una venta?",
      answer:
        "Desde la misma conversación puedes crear una cita, enviar el link de pago o, si el cliente está presencial, cobrar con nuestra máquina POS. Todo ocurre en un solo flujo: cada mensaje puede transformarse en una venta sin cambiar de aplicación ni perder tiempo entre plataformas.",
    },
    {
      question: "¿Qué necesito para empezar hoy mismo?",
      answer:
        "No necesitas conocimientos técnicos. Nuestro equipo te guía paso a paso para que puedas comenzar sin complicaciones. Solo te pediremos 3 cosas:\n1. Un número de WhatsApp Business. Si aún no lo tienes, te ayudamos a configurarlo.\n2. Nuestra máquina POS. Te la enviamos lista para usar.\n3. Tu cuenta bancaria o sistema de boletas, si necesitas emitir comprobantes.",
    },
    {
      question:
        "¿Cómo funcionan los cobros con la máquina POS y quién la opera?",
      answer:
        "Te entregamos una terminal física de Haulmer lista para usar y nosotros gestionamos toda la configuración. Solo debes acercarla al cliente para que deslice o acerque su tarjeta; el pago se procesa de inmediato. Los montos se depositan directamente en la cuenta bancaria que definas, sin intermediarios ni pasos adicionales.",
    },
    {
      question: "¿Puedo emitir boletas y facturas electrónicas?",
      answer:
        "Sí. Ventaplay se integra con tu sistema de facturación o, si prefieres, con Haulmer. Tú eliges desde dónde emitir: directamente en Ventaplay o en tu proveedor habitual. Así, tus clientes reciben su boleta o factura en el formato legal correspondiente.",
    },
    {
      question:
        "¿Puedo integrar Ventaplay con otras herramientas que ya uso?",
      answer:
        "Sí. Puedes conectarlo con pasarelas de pago, sistemas de facturación electrónica como Haulmer, calendarios externos y otras soluciones que ya formen parte de tu operación. Durante el onboarding revisamos tus necesidades y dejamos todas las integraciones listas para funcionar.",
    },
    {
      question: "¿Qué soporte y capacitación ofrece Ventaplay?",
      answer:
        "Onboarding personalizado: Incluye una sesión guiada para aprender cada función, configurar tu POS y migrar la información que necesites. Soporte continuo: Te acompañamos por WhatsApp, correo o videollamada con respuestas rápidas y sin costos adicionales. Actualizaciones automáticas: Accedes siempre a las últimas mejoras sin instalar nada ni interrumpir tu operación.",
    },
  ],
  cta: {
    headline: "¿Todavía tienes dudas?",
    href: WHATSAPP_LINK,
  },
} as const;

export const CONTACT = {
  email: "contacto@ventaplay.com",
  whatsapp: {
    label: "Escríbenos",
    number: "+56 9 5950 7128",
    href: WHATSAPP_LINK,
  },
  phone: {
    label: "Atención de Lunes a Sábado",
    number: "+56 9 94462078",
  },
} as const;

export const FRAME_CONFIG = {
  totalFrames: 151,
  batchSize: 20,
  basePath: "/frames/frame-",
  extension: ".webp",
  paddingDigits: 4,
} as const;
