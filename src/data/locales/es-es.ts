import { heroShowcase, screenshots, screenshotStory } from '../screenshots';
import { homePage } from '../site-content';
import { siteConfig } from '../site-config';
import {
  createHomeSchema,
  localeAlternates,
  localeRoutes,
  localeSwitcherLinks,
  localizedAppStore,
  localizedFooterLinks,
  localizedPath,
} from './shared';

const localePath = localeRoutes.esEs;

const faqItems = [
  {
    question: 'Que es Zebra?',
    answer:
      'Zebra es una app de iPhone para registrar sintomas de POTS, EDS y fibromialgia. Te ayuda a guardar tu historial introducido por ti y convertirlo en un informe listo para revisar antes de una cita medica.',
  },
  {
    question: 'Que registra Zebra?',
    answer:
      'Zebra registra brotes diarios, sintomas, medicacion, sal, agua, constantes ortostaticas, desencadenantes, notas e informes PDF para citas medicas.',
  },
  {
    question: 'Puede Zebra ayudarme a preparar una cita?',
    answer:
      'Si. Zebra mantiene tu historial de sintomas organizado, muestra patrones con el tiempo y exporta un informe que puedes revisar antes de una cita con un especialista.',
  },
  {
    question: 'En que se diferencia Zebra de Notas o de un tracker generico?',
    answer:
      'Notas y las hojas de calculo empiezan en blanco. Zebra ya trae estructura para estas condiciones, registro de constantes ortostaticas y un informe para el medico, sin rachas de bienestar ni configuracion generica.',
  },
  {
    question: 'Donde se guardan mis datos?',
    answer:
      'Los datos de salud de la app se guardan en tu iPhone y pueden sincronizarse mediante tu cuenta personal de iCloud. Zebra no requiere una cuenta de Zebra ni utiliza un servidor propio para tus datos de salud.',
  },
  {
    question: 'Zebra diagnostica o trata alguna enfermedad?',
    answer:
      'No. Zebra no diagnostica, no trata y no ofrece consejo medico. Te ayuda a organizar tu propio historial para conversaciones con profesionales sanitarios.',
  },
  {
    question: 'Que incluye Premium?',
    answer:
      'La version gratuita incluye el registro principal y 30 dias de historial. Premium desbloquea historial ilimitado, exportacion del informe PDF y el archivo ortostatico completo.',
  },
] as const;

export const homePageEsEs = {
  ...homePage,
  locale: {
    key: 'es-es',
    htmlLang: 'es-ES',
    path: localePath,
  },
  seo: {
    title: 'Zebra: tracker de sintomas para POTS, EDS y fibromialgia en iPhone',
    description:
      'Registra sintomas de POTS, EDS y fibromialgia, brotes, constantes ortostaticas y medicacion, y convierte el historial en un informe para tu medico.',
    ogImage: screenshots.appointmentPreparation.src,
    ogImageAlt:
      'Vista previa de un informe de Zebra creado a partir de sintomas, constantes ortostaticas, medicacion y notas para una cita.',
    alternates: localeAlternates,
  },
  header: {
    brand: {
      name: siteConfig.brand.name,
      subtitle: 'Para enfermedades cronicas invisibles',
      href: localePath,
      logo: siteConfig.brand.logo,
    },
    links: [
      { href: `${localePath}#doctor-report`, label: 'Informe' },
      { href: `${localePath}#daily-tracking`, label: 'Registro' },
      { href: localizedPath(localePath, siteConfig.routes.privacy), label: 'Privacidad' },
      { href: localizedPath(localePath, siteConfig.routes.blog), label: 'Guias' },
    ],
  },
  hero: {
    ...homePage.hero,
    eyebrow: 'Para POTS, EDS y fibromialgia',
    title: 'Llega a la cita con una historia clara de tus sintomas.',
    body:
      'Registra sintomas, brotes, constantes ortostaticas, medicacion, sal, agua y notas en un solo lugar tranquilo, y convierte ese historial en un informe para tu medico.',
    trustLine:
      'Gratis para registrar. Privado por diseno. Tus datos permanecen en tu dispositivo.',
    ctaSupport: ['Privado por diseno', 'Sin cuenta obligatoria', 'No es consejo medico'],
    bullets: [
      'Una app para POTS, EDS y fibromialgia',
      'Check-ins de menos de 60 segundos',
      'Informe PDF para el medico',
    ],
    showcase: heroShowcase.map((item) => ({
      ...item,
      alt: 'Video de la app Zebra para iPhone mostrando registro de sintomas, preparacion de citas e informes para el medico.',
      label: 'Intro de Zebra',
      meta: 'Mira la app en movimiento',
    })),
    supportCard: {
      eyebrow: 'El informe es el resultado',
      title: 'Abre Zebra antes de la cita en vez de reconstruir el mes de memoria.',
      body: 'El registro diario de brotes se convierte en informacion util: sintomas, medicacion, sal, agua, constantes ortostaticas y notas organizadas en un informe.',
    },
  },
  problem: {
    eyebrow: 'El problema',
    title: 'Lo dificil no es notar los sintomas. Es explicarlos despues.',
    statement: 'Cuando empieza la cita, la historia esta repartida entre Notas, capturas, trackers a medias y memoria.',
    support:
      'Por eso un historial real termina pareciendo una suposicion, sobre todo cuando la niebla mental dificulta recordar o el peor brote ya paso.',
    flowLabel: 'Como se siente el mes',
    flow: ['Notas', 'Capturas', 'Memoria', 'Zebra'],
    bullets: [
      'Recuerdas fragmentos, no la linea temporal',
      'La niebla mental hace mas dificil preparar la cita',
      'Los brotes son dificiles de reconstruir despues',
    ],
    quotes: [
      'Lo tengo todo repartido.',
      'Sabia que era importante, pero se me olvido en la cita.',
      'Nada mostraba la imagen completa cuando la necesitaba.',
    ],
  },
  doctorReport: {
    ...homePage.doctorReport,
    eyebrow: 'El resultado',
    title: 'El informe cambia la cita.',
    answer:
      'El registro diario se convierte en un PDF para tu medico: sintomas, constantes ortostaticas, medicacion, sal, agua, desencadenantes y notas, organizado para la cita con el especialista.',
    body: [
      'En vez de contar el mes de memoria, puedes revisar un historial con fechas: que paso, con que frecuencia y que cambio.',
    ],
    flow: ['Historial de 30 dias', 'Patrones', 'PDF para el medico', 'Cita'],
    bullets: [
      'Sintomas, brotes, medicacion y desencadenantes en un historial con fechas',
      'Constantes ortostaticas e hidratacion junto a la linea temporal',
      'Notas guardadas antes de que la niebla mental borre detalles',
      'Preguntas que merece la pena hablar antes de que acabe la cita',
    ],
    preview: {
      eyebrow: 'Vista previa',
      title: 'Que incluye el informe para el medico',
      body:
        'Un resumen claro para la cita creado a partir del historial que has registrado.',
      items: [
        { label: 'Linea temporal de sintomas', body: 'Cambios con fecha, brotes y frecuencia de sintomas.' },
        { label: 'Constantes ortostaticas', body: 'Observaciones tumbada, sentada y de pie junto a los sintomas.' },
        { label: 'Medicacion, hidratacion y sal', body: 'Contexto que ayuda a explicar que cambio alrededor de un brote.' },
        { label: 'Notas y preguntas', body: 'Contexto de sintomas y preguntas importantes para la cita.' },
      ],
    },
    sampleReport: {
      href: '/sample-doctor-report.pdf',
      label: 'Ver un informe de ejemplo',
      note: 'Usa datos ficticios de paciente solo para la vista previa.',
    },
    proofLabel: 'El resultado',
    proofTitle: 'El informe medico es lo que da valor al registro.',
    proofBody:
      'Los registros diarios sirven cuando te ayudan a prepararte, explicar que cambio y entregar un resumen que un especialista pueda revisar rapido.',
    outcomesLabel: 'Que tienes despues de 30 dias',
    outcomes: [
      'Un historial de sintomas mas claro en vez de notas dispersas',
      'Una linea temporal de brotes, cambios y notas',
      'Contexto sobre desencadenantes, medicacion y cambios ortostaticos',
      'Un informe para revisar o compartir antes de la cita',
    ],
    comparisonLabel: 'Antes y despues de Zebra',
    comparison: [
      {
        label: 'Antes de Zebra',
        title: 'Reconstruir el mes de memoria',
        points: ['Abrir Notas', 'Buscar capturas', 'Esperar recordar lo importante'],
      },
      {
        label: 'Con Zebra',
        title: 'Llegar con el historial ya hecho',
        points: ['Revisar la linea temporal', 'Exportar el informe', 'Usar la cita para hablar, no para reconstruir'],
      },
    ],
    ctaNote: 'Registra gratis. Exporta tu informe con Premium.',
    media: {
      ...screenshotStory.doctorReport,
      label: 'Vista previa del informe',
      meta: 'Resumen para consulta',
      alt: 'Pantalla de Zebra con informe para el medico y preparacion de cita a partir del historial introducido por la persona.',
    },
  },
  appointmentPrep: {
    ...homePage.appointmentPrep,
    eyebrow: 'Preparacion de cita',
    title: 'Siete dias antes de la visita, registra las partes que no quieres reconstruir de memoria.',
    intro:
      'Zebra te ayuda a convertir la semana antes de una cita en una historia mas clara: que cambio, que se repitio, que afecto la vida diaria y que quieres preguntar mientras estas en la consulta.',
    checklistTitle: 'Que capturar primero',
    checklist: [
      { label: 'Brotes recientes', body: 'Registra gravedad, duracion y que cambio para que los peores dias no desaparezcan cuando el brote pasa.' },
      { label: 'Sintomas principales', body: 'Elige los sintomas que mas importan en vez de intentar documentar cada sensacion perfectamente.' },
      { label: 'Cambios de medicamentos', body: 'Mantiene horarios, notas de dosis, efectos secundarios y preguntas junto al historial de sintomas.' },
      { label: 'Sal, agua y contexto', body: 'Registra hidratacion y sal junto a sintomas cuando sean relevantes para tu plan de cuidado.' },
      { label: 'Signos ortostaticos', body: 'Guarda observaciones acostada, sentada y de pie con los sintomas y notas del mismo dia.' },
      { label: 'Impacto funcional', body: 'Captura que cambiaron los sintomas sobre estar de pie, trabajar, estudiar, dormir, hacer recados o recuperarte.' },
      { label: 'Preguntas para la consulta', body: 'Escribe las preguntas que no quieres que borren el brain fog, el estres o una cita corta.' },
    ],
    pathsTitle: 'Ejemplos por condicion',
    paths: [
      { condition: 'POTS y disautonomia', body: 'Lleva sintomas al estar erguida, observaciones ortostaticas, contexto de sal y agua, notas de medicamentos y timing de brotes a una sola vista.' },
      { condition: 'EDS / hEDS', body: 'Mantiene dolor, inestabilidad, fatiga, lesiones, notas y sintomas solapados conectados en vez de dispersos.' },
      { condition: 'Fibromialgia y brotes solapados', body: 'Conserva dolor, fatiga, brain fog, cambios de medicamentos, contexto de sueno e impacto funcional para una conversacion de seguimiento mas clara.' },
    ],
    samplePreview: {
      eyebrow: 'Informe de ejemplo',
      title: 'Como puede verse una vista de cita de una pagina',
      meta: 'Solo ejemplo, con datos ficticios.',
      rows: [
        { label: 'Cambio principal', value: 'Mas mareo y fatiga despues de tareas cortas de pie' },
        { label: 'Brotes recientes', value: '3 dias de brote notables, recuperacion mas lenta que lo habitual' },
        { label: 'Contexto', value: 'Cambio de medicamento, menor hidratacion, dos dias de calor' },
        { label: 'Pregunta en cita', value: 'Que deberia registrar antes del proximo seguimiento?' },
      ],
      note: 'La vista previa del informe no es un diagnostico. Muestra como Zebra puede ordenar historial introducido por la persona para una conversacion mas clara.',
    },
    note:
      'Usa esto como ayuda de organizacion, no como lista diagnostica. Zebra no diagnostica, no trata y no dice que deberia concluir un clinico.',
  },
  howItWorks: {
    eyebrow: 'Como funciona Zebra',
    title: 'Tres pasos sencillos, incluso en dias de poca energia.',
    intro: 'El flujo se mantiene corto en dias malos y se vuelve mas util a medida que se acerca la cita.',
    timeline: ['Registra sintomas y contexto', 'Ve patrones con el tiempo', 'Exporta o revisa el informe'],
    steps: [
      {
        label: 'Registra sintomas y contexto',
        body: 'Guarda sintomas, brotes, constantes ortostaticas, medicacion, sal, agua, desencadenantes y notas en un check-in rapido.',
      },
      {
        label: 'Ve patrones con el tiempo',
        body: 'Mantiene las constantes ortostaticas y el contexto diario en la misma linea temporal para revisarlo mejor despues.',
      },
      {
        label: 'Exporta o revisa un informe para el medico',
        body: 'Revisa que cambio antes de la cita y exporta un informe claro cuando quieras llevar algo preparado.',
      },
    ],
  },
  screenshotCarousel: {
    eyebrow: 'Vista de la app',
    title: 'Mira todo el flujo: del registro al informe.',
    intro:
      'La pagina empieza por el informe, pero el producto sigue construido alrededor de check-ins cortos que funcionan tambien en dias malos.',
    label: 'Capturas de la app Zebra',
    items: [
      { ...screenshotStory.doctorReport, label: 'Vista previa del informe', meta: 'Resumen para consulta', title: 'Vista previa del informe', body: 'Revisa un resumen antes de la cita.' },
      { ...screenshotStory.dailyTracking, label: 'Check-in diario', meta: 'Sintomas, desencadenantes, hidratacion, medicacion', title: 'Check-in diario', body: 'Registra sintomas, desencadenantes, hidratacion, medicacion y notas.' },
      { ...screenshotStory.orthostaticTest, label: 'Evidencia ortostatica', meta: 'Test ortostatico dentro del flujo de informe', title: 'Evidencia ortostatica', body: 'Mantiene las constantes por posicion conectadas con el resto del dia.' },
      { ...screenshotStory.trends, label: 'Historial de patrones', meta: 'Los patrones se convierten en historial util', title: 'Historial de patrones', body: 'Observa patrones repetidos y conclusiones guardadas con el tiempo.' },
      { ...screenshots.todaySummary, meta: 'Resumen de hoy', title: 'Resumen de hoy', body: 'Comprueba el patron actual sin reconstruir toda la historia.' },
    ],
  },
  dailyTracking: {
    ...homePage.dailyTracking,
    eyebrow: 'Creada para dias de brote',
    title: 'En un dia dificil, un check-in rapido basta.',
    intro: 'Zebra esta pensada para seguir siendo usable con mareo, agotamiento, niebla mental o dolor.',
    body: [
      'Abre Zebra, toca lo que cambio y vuelve a tu dia. Sin configuracion en blanco. Sin deberes de bienestar. Sin rachas. El objetivo es tener un historial util, no pasar mas tiempo en la app.',
    ],
    momentLabel: 'Que pasa en menos de un minuto',
    sequence: ['Abre Zebra', 'Toca lo que cambio', 'Vuelve a tu dia'],
    bullets: ['Brotes y sintomas', 'Medicacion y notas', 'Sal, agua y desencadenantes'],
    cards: [
      { eyebrow: 'Por que pesa menos', title: 'Con estructura desde el principio', body: 'No tienes que inventar el sistema antes de empezar.' },
      { eyebrow: 'Por que importa despues', title: 'Todo queda en una linea temporal', body: 'Eso es lo que hace posible el informe para el medico.' },
    ],
    ctaLabel: 'Empieza a registrar hoy',
    ctaNote: 'Un solo lugar tranquilo para el historial diario.',
    media: {
      ...screenshotStory.dailyTracking,
      label: 'Check-in diario',
      meta: 'Sintomas, desencadenantes, hidratacion, medicacion',
      alt: 'Check-in de Zebra para iPhone con sintomas, desencadenantes, hidratacion, medicacion y notas.',
    },
  },
  orthostaticTest: {
    ...homePage.orthostaticTest,
    eyebrow: 'Test ortostatico',
    title: 'Registra constantes ortostaticas donde realmente pertenecen.',
    intro: 'En el mismo historial que todo lo demas, no en otra herramienta que tengas que reconciliar despues.',
    body: [
      'Zebra mantiene las mediciones tumbada, sentada y de pie conectadas con tus sintomas en lugar de separarlas en otra app.',
    ],
    momentLabel: 'La secuencia guiada',
    sequence: ['Tumbarse', 'Sentarse', 'Ponerse de pie', 'Guardar en la misma linea temporal'],
    bullets: [
      'Flujo guiado tumbada, sentada y de pie',
      'La misma linea temporal que sintomas y medicacion',
      'Mas facil de revisar despues con contexto',
    ],
    cards: [
      { eyebrow: 'Por que ayuda', title: 'Tus numeros no quedan aislados', body: 'El medico puede verlos junto al resto del dia.' },
      { eyebrow: 'Por que importa', title: 'Menos saltos, mas claridad', body: 'No tienes que moverte entre varias herramientas de salud.' },
    ],
    ctaLabel: 'Ver como se forma el informe',
    ctaNote: 'Las constantes son utiles porque se mantienen conectadas.',
    media: {
      ...screenshotStory.orthostaticTest,
      label: 'Evidencia ortostatica',
      meta: 'Test ortostatico dentro del flujo de informe',
      alt: 'Pantalla de Zebra con evidencia de test ortostatico, medicacion y preguntas para una cita.',
    },
  },
  trust: {
    eyebrow: 'Confianza, seguridad y privacidad',
    title: 'Privada, prudente en lo medico y clara sobre para que sirve Zebra.',
    intro:
      'Zebra se centra en organizar historial introducido por la persona para conversaciones sanitarias y citas con especialistas. No diagnostica, trata, previene ni sustituye la atencion medica.',
    highlight: {
      eyebrow: 'Confianza de un vistazo',
      title: 'Privada por diseno. Creada para la niebla mental. Ideal para preparar citas.',
      body:
        'Zebra ayuda a mantener un historial mas claro para citas con especialistas, especialmente cuando los sintomas se solapan y la memoria no es fiable. La app y el hub de conocimiento apoyan la organizacion personal y las conversaciones con profesionales, no el diagnostico, el tratamiento, la prevencion ni la venta de datos de salud.',
    },
    calmState: {
      eyebrow: 'El estado final',
      title: 'Mas preparada. Menos abrumada.',
      body:
        'El objetivo no es hacer que la enfermedad parezca ordenada. Es que la cita sea mas tranquila porque el historial ya esta ahi.',
    },
    items: [
      { title: 'Privacidad primero', body: 'Los datos de salud de la app se guardan en tu iPhone y pueden sincronizarse con tu cuenta personal de iCloud, segun los ajustes de Apple/iCloud y la version actual de la app. Zebra no requiere una cuenta de Zebra ni utiliza un servidor propio de datos de salud.' },
      { title: 'Mejor para preparar especialistas', body: 'Zebra encaja mejor cuando necesitas un historial mas claro antes de cardiologia, especialistas o citas de seguimiento.' },
      { title: 'Tu controlas el historial', body: 'Sin cuenta obligatoria, sin servidor de datos de salud y sin reconstruir tu historia dentro del sistema de otra empresa.' },
      { title: 'Amigable con la niebla mental', body: 'Flujos cortos, jerarquia clara y uso de baja energia para dias de brote.' },
      { title: 'Centrada en especialistas', body: 'Construida alrededor de citas, no de autooptimizacion ni rachas de bienestar.' },
      { title: 'Prudente en lo medico', body: 'Sin diagnostico, sin consejos de tratamiento, sin promesas de prevencion y sin exagerar lo que significan tus datos.' },
      { title: 'No es para emergencias', body: 'Zebra no es una herramienta de emergencia, un comprobador de sintomas ni un reemplazo de atencion medica urgente o profesional.' },
      { title: 'Datos introducidos por la persona', body: 'Lo que Zebra resume procede del historial que tu registras y revisas.' },
    ],
    links: [
      { label: 'Conoce Zebra Editorial', href: localizedPath(localePath, '/authors/zebra-editorial/') },
      { label: 'Explora el hub de conocimiento', href: localizedPath(localePath, siteConfig.routes.knowledge) },
      { label: 'Lee la politica de privacidad', href: localizedPath(localePath, siteConfig.routes.privacy) },
      { label: 'Visita soporte', href: localizedPath(localePath, siteConfig.routes.support) },
    ],
    resources: [
      { eyebrow: 'Feedback', title: 'Enviar feedback o pedir una funcion', body: 'Cuentanos que haria Zebra mas facil antes de una cita, especialmente en dias de brote.', href: `mailto:${siteConfig.support.email}?subject=Zebra%20feedback` },
      { eyebrow: 'Estandares editoriales', title: 'Ver como se revisa el contenido de Zebra', body: 'Conoce el proceso editorial, la politica de actualizacion y los limites del lenguaje medico.', href: localizedPath(localePath, '/authors/zebra-editorial/') },
      { eyebrow: 'Hub de conocimiento', title: 'Explora conceptos conectados de sintomas y condiciones', body: 'Ve como POTS, disautonomia, niebla mental, fatiga, informes y preparacion de citas se conectan en el sitio.', href: localizedPath(localePath, siteConfig.routes.knowledge) },
      { eyebrow: 'Guias', title: 'Lee primero las guias practicas mas utiles', body: 'Compara Zebra con Notas, aprende que registrar y entiende como funciona el informe antes de descargar.', href: localizedPath(localePath, siteConfig.routes.blog) },
    ],
    resourcesIntro: {
      eyebrow: 'Confianza editorial',
      title: 'Como Zebra mantiene su contenido y el hub de conocimiento.',
    },
    resourcesCtaLabel: 'Abrir pagina',
  },
  faq: {
    eyebrow: 'FAQ',
    title: 'Preguntas sobre Zebra.',
    items: faqItems,
  },
  finalCta: {
    eyebrow: 'Descarga Zebra',
    title: 'Llega a la cita con una historia clara de tus sintomas.',
    body:
      'Empieza hoy con la version gratuita. Actualiza a Premium cuando quieras historial ilimitado e informes PDF para el medico.',
    points: ['Registra a diario', 'Ve el patron', 'Exporta el informe'],
    pointsLabel: 'Por que descargar Zebra',
    endState: 'Una cita mas tranquila empieza con un historial que no tienes que reconstruir.',
    trustLine: 'Registra gratis · Privada por diseno · Cancela cuando quieras',
  },
  mobileStickyCta: {
    label: 'Descargar Zebra',
    note: 'Lleva historial a tu cita',
    ariaLabel: 'Descargar Zebra en el App Store',
  },
  footer: {
    body: 'Zebra es una app de iPhone para registrar sintomas de POTS, disautonomia, EDS, fibromialgia y enfermedades cronicas invisibles solapadas, creada para historiales mas claros y citas con especialistas.',
    trustLine: 'Privada por diseno. Creada para iPhone. Solo datos introducidos por la persona. No es una herramienta diagnostica.',
    links: localizedFooterLinks(localePath, {
      blog: 'Guias',
      knowledge: 'Hub de conocimiento',
      symptomTracking: 'Registro de sintomas',
      fatigue: 'Fatiga',
      dizziness: 'Mareo',
      brainFog: 'Niebla mental',
      doctorReports: 'Informes medicos',
      authors: 'Autores',
      support: 'Soporte',
      privacy: 'Privacidad',
      terms: 'Terminos',
      contact: 'Contacto',
    }),
    navLabel: 'Pie de pagina',
    consentPreferencesLabel: 'Preferencias de cookies',
  },
  appStore: localizedAppStore('es-es', 'Descargar en el App Store'),
  localeSwitcher: {
    label: 'Idioma',
    links: localeSwitcherLinks,
  },
  consentBanner: {
    title: 'Medicion de nuestros anuncios',
    body: 'Usamos el pixel de Meta para medir si nuestros anuncios llegan a las personas adecuadas. No se recopila nada sobre tu salud; este sitio no tiene acceso a nada dentro de la app.',
    acceptLabel: 'Aceptar',
    declineLabel: 'Rechazar',
  },
  schema: createHomeSchema({
    localePath,
    appDescription:
      'Zebra es una app de iPhone para registrar sintomas de POTS, EDS, fibromialgia, disautonomia y enfermedades invisibles solapadas. Registra brotes, sintomas, constantes ortostaticas, medicacion, sal, agua y notas, y exporta un informe PDF para citas medicas.',
    webPageName: 'Zebra tracker de sintomas para POTS, EDS y disautonomia',
    webPageDescription:
      'Landing page de Zebra, una app de iPhone para registrar sintomas de POTS, EDS, disautonomia y preparar citas medicas.',
    faqItems,
    offerDescriptions: {
      free: 'Version gratuita con funciones principales y 30 dias de historial.',
      monthly: 'Premium mensual desbloquea historial ilimitado, exportacion de informe PDF y archivo ortostatico completo.',
      annual: 'Premium anual desbloquea historial ilimitado, exportacion de informe PDF y archivo ortostatico completo.',
    },
    featureList: [
      'Registrar brotes diarios, sintomas, desencadenantes, hidratacion, sal y medicacion',
      'Guardar constantes ortostaticas en un flujo guiado',
      'Organizar historial de POTS, EDS, disautonomia, fibromialgia, Long COVID y ME/CFS',
      'Exportar un informe PDF para citas medicas',
    ],
  }),
} as const;
