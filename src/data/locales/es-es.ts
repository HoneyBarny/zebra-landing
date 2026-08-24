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
    question: 'Cual es un buen tracker de sintomas para POTS?',
    answer:
      'Un buen tracker de POTS debe seguir siendo usable en dias de brote y antes de citas. Zebra esta creado para POTS, disautonomia, constantes ortostaticas, sodio/sal, hidratacion, frecuencia cardiaca, niebla mental, sintomas e informes para el medico.',
  },
  {
    question: 'Puede Zebra registrar constantes ortostaticas y frecuencia cardiaca?',
    answer:
      'Si. Zebra puede mantener mediciones tumbada, sentada y de pie en la misma linea temporal que sintomas, brotes, medicacion, sodio/sal, hidratacion, notas y preguntas para la cita.',
  },
  {
    question: 'Puede Zebra ayudarme a preparar una cita?',
    answer:
      'Si. Zebra mantiene tu historial de sintomas organizado, muestra patrones con el tiempo y exporta un informe para revisar antes de una cita con especialista, cardiologia o seguimiento.',
  },
  {
    question: 'Puedo registrar sodio, hidratacion, sintomas y niebla mental juntos?',
    answer:
      'Si. Zebra mantiene sodio/sal, agua, sintomas, niebla mental, fatiga, medicacion, desencadenantes, notas y contexto de brote juntos para revisar mejor el historial despues.',
  },
  {
    question: 'En que se diferencia Zebra de Notas o de un registro generico?',
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
    title: 'Tracker de POTS para brotes, constantes y citas medicas | Zebra',
    description:
      'Registra brotes de POTS, sintomas de disautonomia, constantes ortostaticas, sodio, hidratacion, frecuencia cardiaca, niebla mental, medicacion y notas de cita.',
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
      'Zebra te ayuda a registrar sintomas de POTS, EDS y fibromialgia, brotes, constantes ortostaticas, frecuencia cardiaca, medicacion, sodio/sal, agua y notas en un lugar tranquilo, y convertir el historial en un informe para el medico.',
    trustLine:
      'Gratis para registrar. Privado por diseno. Tus datos permanecen en tu dispositivo.',
    ctaSupport: ['Privado por diseno', 'Sin cuenta obligatoria', 'No es consejo medico'],
    bullets: [
      'Tracking para POTS, EDS y fibromialgia',
      'Constantes ortostaticas, sodio y sintomas',
      'Check-ins de menos de 60 segundos',
      'Informe listo para la cita',
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
  whatZebraTracks: {
    eyebrow: 'Que registra Zebra',
    title: 'Registra los detalles de POTS y disautonomia que normalmente quedan dispersos.',
    intro:
      'Zebra mantiene el historial diario corto, estructurado y util despues. En un dia dificil, registra solo el brote, sintoma, constante, sodio o niebla mental que importa.',
    items: [
      { title: 'Brotes de POTS y disautonomia', body: 'Registra intensidad, duracion, desencadenantes, recuperacion y que cambio para no reconstruir el brote de memoria despues.' },
      { title: 'Sintomas y niebla mental', body: 'Mantiene mareo, fatiga, dolor, palpitaciones, niebla mental, notas y sintomas solapados en un historial con fechas.' },
      { title: 'Constantes ortostaticas y frecuencia cardiaca', body: 'Guarda observaciones tumbada, sentada y de pie con frecuencia cardiaca y sintomas del mismo dia.' },
      { title: 'Sodio e hidratacion', body: 'Registra sodio, sal, agua e hidratacion junto a sintomas, dejando las decisiones medicas sobre liquidos y sodio a tu equipo clinico.' },
      { title: 'Medicacion y notas', body: 'Anota horario, dosis, efectos, preguntas y cambios para que el contexto de medicacion sea mas facil de revisar.' },
      { title: 'Desencadenantes y contexto del registro', body: 'Captura actividad, estres, infeccion, calor o notas cuando importan, y saltatelos cuando estas agotada.' },
      { title: 'Informes PDF para el medico', body: 'Convierte el seguimiento reciente en un resumen de cita claro en vez de una pila de notas desconectadas.' },
    ],
    note: 'Zebra es para seguimiento y preparacion de citas. No diagnostica, no trata y no reemplaza la atencion medica.',
  },
  trackingPaths: {
    eyebrow: 'Elige tu camino de registro',
    title: 'Empieza por la historia de sintomas que tu cita realmente necesita.',
    intro:
      'Cada condicion crea un tipo distinto de estres antes de una cita. Zebra da a cada camino un punto de partida claro para registrar lo importante sin construir un sistema desde cero.',
    items: [
      {
        label: 'POTS y disautonomia',
        title: 'Registra sintomas al estar de pie con contexto ortostatico.',
        body:
          'Usa Zebra como tracker de sintomas de POTS para mareo, palpitaciones, fatiga, brain fog, hidratacion, sal, notas de medicacion y observaciones acostada-sentada-de pie.',
        pain: 'Mejor cuando necesitas explicar que pasa despues de estar de pie, calor, deshidratacion, cambios de medicacion o un brote.',
        href: localizedPath(localePath, '/knowledge/pots/'),
        cta: 'Abrir el hub de POTS',
      },
      {
        label: 'EDS / hEDS',
        title: 'Mantiene dolor, inestabilidad, fatiga y sintomas solapados juntos.',
        body:
          'Usa Zebra como tracker de sintomas de EDS cuando dolor articular, lesiones, sintomas de disautonomia, fatiga y notas estan demasiado dispersos para resumir rapido.',
        pain: 'Mejor cuando un especialista pregunta por un sistema del cuerpo, pero tu mes afecto a varios.',
        href: localizedPath(localePath, '/knowledge/eds/'),
        cta: 'Abrir el hub de EDS',
      },
      {
        label: 'Fibromialgia',
        title: 'Guarda patrones de brotes antes de que el brain fog borre detalles.',
        body:
          'Usa Zebra como tracker de fibromialgia para dolor, fatiga, contexto de sueno, brain fog, cambios de medicacion, desencadenantes e impacto funcional.',
        pain: 'Mejor cuando dolor y fatiga cambiaron tu dia, pero la linea temporal exacta es dificil de reconstruir despues.',
        href: localizedPath(localePath, '/knowledge/fibromyalgia/'),
        cta: 'Abrir el hub de fibromialgia',
      },
      {
        label: 'Preparacion de cita',
        title: 'Convierte sintomas recientes en un informe para el medico.',
        body:
          'Usa Zebra antes de una visita con especialista para reunir brotes, sintomas principales, constantes ortostaticas, cambios de medicacion, preguntas e impacto diario.',
        pain: 'Mejor cuando la cita es corta y no quieres pasarla buscando notas o adivinando de memoria.',
        href: localizedPath(localePath, '/knowledge/chronic-illness-appointment-prep/'),
        cta: 'Abrir preparacion de cita',
      },
    ],
    note:
      'Zebra es una herramienta de organizacion para historial introducido por la persona. No diagnostica, no trata y no reemplaza la atencion medica.',
  },
  comparison: {
    eyebrow: 'Por que no usar solo Notas?',
    title: 'Notas, hojas de calculo y trackers genericos te hacen organizar dos veces.',
    intro:
      'Pueden guardar fragmentos, pero la cita sigue necesitando una linea temporal clara. Zebra esta pensado para ese salto: del historial diario de sintomas a un informe para el medico.',
    alternativesLabel: 'Solucion habitual',
    zebraLabel: 'Lo que Zebra mantiene conectado',
    items: [
      {
        name: 'Apple Notas',
        problem:
          'Rapido para una idea, pero dificil de ordenar despues por brote, sintoma, cambio de medicacion, constantes ortostaticas o pregunta para la cita.',
        zebra:
          'Zebra mantiene sintomas, brotes, medicacion, sal, agua, constantes, desencadenantes, notas y preguntas en una estructura con fechas.',
        href: '/zebra-vs-apple-notes/',
        cta: 'Comparar Zebra y Notas',
      },
      {
        name: 'Hojas de calculo',
        problem:
          'Flexibles, pero convierten el registro en trabajo de configuracion y pueden ser demasiado en dias de mareo, dolor o poca energia.',
        zebra:
          'Zebra empieza con check-ins tranquilos y mantiene utiles las entradas parciales, para que el historial sobreviva a los dias malos.',
        href: '/zebra-vs-spreadsheet/',
        cta: 'Comparar Zebra y hojas',
      },
      {
        name: 'Trackers genericos',
        problem:
          'Muchos separan constantes, sintomas, medicacion y notas, lo que dificulta revisar POTS, EDS e historial con sintomas solapados.',
        zebra:
          'Zebra esta creado primero para enfermedad invisible, contexto ortostatico, sintomas solapados y preparacion de citas con especialistas.',
        href: localizedPath(localePath, '/blog/symptom-tracker-vs-notes-app-vs-spreadsheet/'),
        cta: 'Leer la comparacion',
      },
      {
        name: 'Apps de habitos y bienestar',
        problem:
          'Las rachas y metas de bienestar pueden hacer que un dia de brote parezca un fallo, aunque sea un dia importante para documentar.',
        zebra:
          'Zebra trata el registro como construccion de evidencia, no como autooptimizacion. Un check-in util es suficiente.',
        href: localizedPath(localePath, '/blog/why-symptom-tracking-fails-on-bad-days/'),
        cta: 'Leer por que falla el registro',
      },
    ],
    note:
      'El objetivo no es registrar perfectamente. El objetivo es conservar suficiente historial introducido por ti para que la proxima cita empiece con menos suposiciones.',
  },
  proofBridge: {
    eyebrow: 'Que cambia con Zebra',
    title: 'De registros de sintomas dispersos a una historia lista para el medico.',
    intro:
      'Zebra no es solo un registro de sintomas. Es el puente entre un mes dificil y una cita mas clara, especialmente cuando POTS, disautonomia, niebla mental, sodio, constantes, medicacion y notas de brotes se solapan.',
    items: [
      { label: 'Un cuerpo, una linea temporal', title: 'Los sintomas solapados dejan de vivir en lugares separados.', before: 'Notas de POTS en una app, dolor en otra parte, cambios de medicacion en la memoria y capturas enterradas en Fotos.', after: 'Brotes, constantes ortostaticas, medicacion, sal, agua, desencadenantes, notas y sintomas solapados quedan conectados.' },
      { label: 'Prueba bajo presion', title: 'Preparar la cita requiere menos reconstruccion.', before: 'Intentas resumir semanas de sintomas estando cansada, con niebla mental, prisa o miedo a que te descarten otra vez.', after: 'Zebra te da una linea temporal reciente y un informe PDF para que sea mas facil revisar y compartir lo importante.' },
      { label: 'Amigable en dias malos', title: 'Una entrada parcial tambien cuenta.', before: 'Los dias que mas importan suelen ser los dias con menos energia para escribir, ordenar y explicar.', after: 'Un check-in rapido de brote puede servir por si solo, sin rachas, culpa ni necesidad de ponerse al dia perfectamente.' },
    ],
    note: 'Zebra organiza historial introducido por la persona para conversaciones medicas. No diagnostica, no trata ni promete que concluira un clinico.',
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
  searchContent: {
    eyebrow: 'Por que Zebra es diferente',
    title: 'Creada para enfermedad invisible — POTS, EDS y fibromialgia.',
    intro:
      'La mayoria de trackers te hacen crear tu propio sistema o tratan el cuerpo como un proyecto de bienestar. Zebra esta creada para una tarea mas dificil: registrar POTS, disautonomia, EDS, fibromialgia, niebla mental, brotes, constantes ortostaticas, sodio, hidratacion y sintomas solapados cuando ya estas cansada.',
    answer:
      'Zebra es un tracker de sintomas para iPhone pensado para enfermedad invisible. Mantiene sintomas, brotes, constantes ortostaticas, frecuencia cardiaca, medicacion, sodio, agua, desencadenantes, notas y preparacion de citas en un mismo historial para crear prueba para la consulta. El objetivo no es diagnosticar. El objetivo es menos trabajo de memoria y un informe mas claro.',
    differencesTitle: 'Por que usar Zebra en vez de Notas, hojas de calculo o un tracker generico?',
    differences: [
      { label: 'Estructura', generic: 'Notas y hojas empiezan en blanco, asi que tienes que inventar el sistema cuando ya estas cansada.', zebra: 'Zebra da estructura desde el inicio: brotes, sintomas, desencadenantes, medicacion, sal, agua, constantes ortostaticas y notas.' },
      { label: 'Tracking ortostatico', generic: 'Los trackers genericos suelen separar constantes y sintomas, lo que dificulta revisar POTS y disautonomia despues.', zebra: 'Zebra mantiene mediciones tumbada, sentada y de pie junto a la linea temporal de sintomas y el contexto diario.' },
      { label: 'Preparacion de citas', generic: 'Un mes de notas puede terminar en una explicacion apresurada cuando el medico pregunta que cambio.', zebra: 'Zebra convierte historial introducido por ti en un informe de sintomas para especialistas y cardiologia.' },
      { label: 'Privacidad', generic: 'Muchas herramientas de salud requieren cuenta, sincronizan por un servicio o son mas amplias que el problema que necesitas resolver.', zebra: 'Zebra es privada por diseno y se centra en tu propio historial para conversaciones medicas.' },
      { label: 'Dias de brote', generic: 'Las apps de bienestar y habitos pueden hacer que registrar parezca otra tarea fallida.', zebra: 'Zebra esta pensada para dias con mareo, agotamiento, niebla mental o dolor, donde un check-in rapido basta.' },
    ],
    conditionsTitle: 'Creada primero para POTS, EDS y disautonomia, con apoyo para condiciones solapadas.',
    conditionsIntro: 'Zebra es mas util cuando los sintomas se solapan, cambian con la postura o actividad y son dificiles de resumir antes de una cita.',
    conditions: [
      { name: 'Tracker de sintomas POTS', body: 'Registra sintomas al estar de pie, frecuencia cardiaca, hidratacion, sodio, brotes, niebla mental y notas de test ortostatico antes de cardiologia o especialista.' },
      { name: 'Tracker de sintomas de disautonomia', body: 'Mantiene sintomas autonomicos, cambios de postura, desencadenantes, medicacion, constantes y notas en una linea temporal.' },
      { name: 'Seguimiento de EDS y hEDS', body: 'Registra dolor, fatiga, sintomas solapados y notas para explicar mejor la variabilidad despues.' },
      { name: 'Tracker de fibromialgia', body: 'Registra dolor, fatiga, niebla mental, brotes, medicacion e impacto diario dificil de reconstruir.' },
      { name: 'Tracker de Long COVID', body: 'Captura fatiga, mareo, niebla mental, sintomas ortostaticos, cambios de actividad y patrones entre citas.' },
      { name: 'Diario de sintomas ME/CFS', body: 'Usa check-ins de baja energia para preservar historial de fatiga, empeoramiento post-esfuerzo y recuperacion.' },
    ],
    trustTitle: 'Zebra ayuda a organizar historial de salud. No diagnostica ni reemplaza la atencion medica.',
    trustBody: 'Para claridad de busqueda y seguridad medica, Zebra debe entenderse como una herramienta de preparacion de citas e historial introducido por la persona. Resume lo que introduces para revisarlo y hablarlo con un clinico.',
    trustItems: [
      'No es para diagnostico, tratamiento, prevencion ni sintomas de emergencia',
      'No reemplaza a un medico, especialista ni consejo medico',
      'Mejor para preparar un historial mas claro y un informe para citas',
    ],
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
