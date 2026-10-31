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
    question: '¿Qué es Zebra?',
    answer:
      'Zebra es una app de iPhone para registrar síntomas de POTS, EDS y fibromialgia. Te ayuda a guardar tu historial introducido por ti y convertirlo en un informe listo para revisar antes de una cita médica.',
  },
  {
    question: '¿Cuál es un buen tracker de síntomas para POTS?',
    answer:
      'Un buen tracker de POTS debe seguir siendo usable en días de brote y antes de citas. Zebra está creado para POTS, disautonomía, constantes ortostáticas, sodio/sal, hidratación, frecuencia cardíaca, niebla mental, síntomas e informes para el médico.',
  },
  {
    question: '¿Puede Zebra registrar constantes ortostáticas y frecuencia cardíaca?',
    answer:
      'Sí. Zebra puede mantener mediciones tumbada, de pie y de recuperación en la misma línea temporal que síntomas, brotes, medicación, sodio/sal, hidratación, notas y preguntas para la cita.',
  },
  {
    question: '¿Puede Zebra ayudarme a preparar una cita?',
    answer:
      'Sí. Zebra mantiene tu historial de síntomas organizado, muestra patrones con el tiempo y exporta un informe para revisar antes de una cita con especialista, cardiología o seguimiento.',
  },
  {
    question: '¿Puedo registrar sodio, hidratación, síntomas y niebla mental juntos?',
    answer:
      'Sí. Zebra mantiene sodio/sal, agua, síntomas, niebla mental, fatiga, medicación, desencadenantes, notas y contexto de brote juntos para revisar mejor el historial después.',
  },
  {
    question: '¿En qué se diferencia Zebra de Notas o de un registro genérico?',
    answer:
      'Notas y las hojas de cálculo empiezan en blanco. Zebra ya trae estructura para estas condiciones, registro de constantes ortostáticas y un informe para el médico, sin rachas de bienestar ni configuración genérica.',
  },
  {
    question: '¿Dónde se guardan mis datos?',
    answer:
      'Los datos de salud de la app se guardan en tu iPhone y pueden sincronizarse mediante tu cuenta personal de iCloud. Zebra no requiere una cuenta de Zebra ni utiliza un servidor propio para tus datos de salud.',
  },
  {
    question: '¿Zebra diagnostica o trata alguna enfermedad?',
    answer:
      'No. Zebra no diagnostica, no trata y no ofrece consejo médico. Te ayuda a organizar tu propio historial para conversaciones con profesionales sanitarios.',
  },
  {
    question: '¿Puedo hacerme una prueba de POTS en casa?',
    answer:
      'No como diagnóstico. Puede registrar la frecuencia cardíaca y la presión arterial tumbado y de pie, con síntomas y contexto, para llevarlos a su médico. El POTS lo diagnostica un médico. Zebra registra sus valores, pero no los interpreta.',
  },
  {
    question: '¿Qué debo llevar a la cita?',
    answer:
      'Un resumen breve y con fechas: sus síntomas principales y con qué frecuencia aparecen, los cambios de medicación, las preguntas que quiere hacer y ejemplos de lo que le ha impedido hacer. Zebra prepara este resumen a partir de sus registros. Zebra no puede hacer que el médico le escuche, pero le ayuda a llevar algo claro.',
  },
  {
    question: '¿Qué tracker cubre POTS, EDS y fibromialgia?',
    answer:
      'Zebra está pensado para POTS, EDS y fibromialgia a la vez, así que una sola línea temporal recoge síntomas, brotes, cambios de medicación, sal y agua, y constantes ortostáticas. Compare los trackers según lo que incluye cada uno antes de elegir.',
  },
  {
    question: '¿Cómo describo mi dolor al médico?',
    answer:
      'Diga dónde está el dolor, cómo se siente con sus propias palabras, qué intensidad tiene en una escala de 0 a 10, cuándo aparece y qué le impide hacer. Zebra le permite registrarlo en una entrada corta, para tener las palabras preparadas en la cita.',
  },
  {
    question: '¿Qué incluye Premium?',
    answer:
      'La versión gratuita incluye el registro principal y 30 días de historial. Premium desbloquea vistas de historial más largas y la exportación del informe PDF.',
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
    title: 'Tracker de POTS para brotes y citas médicas | Zebra',
    description:
      'Registra brotes de POTS, síntomas de disautonomía, constantes ortostáticas, sal, hidratación, frecuencia cardíaca, niebla mental y medicación para tu cita.',
    ogImage: screenshots.appointmentPreparation.src,
    ogImageAlt:
      'Vista previa de un informe de Zebra creado a partir de síntomas, constantes ortostáticas, medicación y notas para una cita.',
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
      { href: localizedPath(localePath, siteConfig.routes.blog), label: 'Guías' },
    ],
  },
  hero: {
    ...homePage.hero,
    eyebrow: 'Para POTS, EDS y fibromialgia',
    title: 'Llega a la cita con una historia clara de tus síntomas.',
    body:
      'Zebra te ayuda a registrar síntomas de POTS, EDS y fibromialgia, brotes, constantes ortostáticas, frecuencia cardíaca, medicación, sodio/sal, agua y notas en un lugar tranquilo, y convertir el historial en un informe para el médico.',
    trustLine:
      'Gratis para registrar. Privado por diseño. Tus datos de salud se quedan en tu dispositivo y en tu propio iCloud.',
    ctaSupport: ['Privado por diseño', 'Sin cuenta obligatoria', 'No es consejo médico'],
    bullets: [
      'Tracking para POTS, EDS y fibromialgia',
      'Constantes ortostáticas, sodio y síntomas',
      'Check-ins de menos de 60 segundos',
      'Informe listo para la cita',
    ],
    showcase: heroShowcase.map((item) => ({
      ...item,
      alt: 'Vídeo de la app Zebra para iPhone mostrando registro de síntomas, preparación de citas e informes para el médico.',
      label: 'Intro de Zebra',
      meta: 'Mira la app en movimiento',
    })),
    supportCard: {
      eyebrow: 'El informe es el resultado',
      title: 'Abre Zebra antes de la cita en vez de reconstruir el mes de memoria.',
      body: 'El registro diario de brotes se convierte en información útil: síntomas, medicación, sal, agua, constantes ortostáticas y notas organizadas en un informe.',
    },
  },
  problem: {
    eyebrow: 'El problema',
    title: 'Lo difícil no es notar los síntomas. Es explicarlos después.',
    statement: 'Cuando empieza la cita, la historia está repartida entre Notas, capturas, trackers a medias y memoria.',
    support:
      'Por eso un historial real termina pareciendo una suposición, sobre todo cuando la niebla mental dificulta recordar o el peor brote ya pasó.',
    flowLabel: 'Cómo se siente el mes',
    flow: ['Notas', 'Capturas', 'Memoria', 'Zebra'],
    bullets: [
      'Recuerdas fragmentos, no la línea temporal',
      'La niebla mental hace más difícil preparar la cita',
      'Los brotes son difíciles de reconstruir después',
    ],
    // Plain statements, not quotes: see the note on problem.painPoints in site-content.ts.
    painPoints: [
      'Tu historial acaba repartido entre Notas, capturas y memoria.',
      'Te preparaste y, aun así, el detalle importante se te escapó en la cita.',
      'Nada muestra la imagen completa cuando te lo preguntan en la consulta.',
    ],
  },
  whatZebraTracks: {
    eyebrow: 'Qué registra Zebra',
    title: 'Registra los detalles de POTS y disautonomía que normalmente quedan dispersos.',
    intro:
      'Zebra mantiene el historial diario corto, estructurado y útil después. En un día difícil, registra solo el brote, síntoma, constante, sodio o niebla mental que importa.',
    items: [
      { title: 'Brotes de POTS y disautonomía', body: 'Registra intensidad, duración, desencadenantes, recuperación y qué cambió para no reconstruir el brote de memoria después.' },
      { title: 'Síntomas y niebla mental', body: 'Mantiene mareo, fatiga, dolor, palpitaciones, niebla mental, notas y síntomas solapados en un historial con fechas.' },
      { title: 'Constantes ortostáticas y frecuencia cardíaca', body: 'Guarda observaciones tumbada, de pie y de recuperación con frecuencia cardíaca y síntomas del mismo día.' },
      { title: 'Sodio e hidratación', body: 'Registra sodio, sal, agua e hidratación junto a síntomas, dejando las decisiones médicas sobre líquidos y sodio a tu equipo clínico.' },
      { title: 'Medicación y notas', body: 'Anota horario, dosis, efectos, preguntas y cambios para que el contexto de medicación sea más fácil de revisar.' },
      { title: 'Desencadenantes y contexto del registro', body: 'Captura actividad, estrés, infección, calor o notas cuando importan, y sáltatelos cuando estás agotada.' },
      { title: 'Informes PDF para el médico', body: 'Convierte el seguimiento reciente en un resumen de cita claro en vez de una pila de notas desconectadas.' },
    ],
    note: 'Zebra es para seguimiento y preparación de citas. No diagnostica, no trata y no reemplaza la atención médica.',
  },
  trackingPaths: {
    eyebrow: 'Elige tu camino de registro',
    title: 'Empieza por la historia de síntomas que tu cita realmente necesita.',
    intro:
      'Cada condición crea un tipo distinto de estrés antes de una cita. Zebra da a cada camino un punto de partida claro para registrar lo importante sin construir un sistema desde cero.',
    items: [
      {
        label: 'POTS y disautonomía',
        title: 'Registra síntomas al estar de pie con contexto ortostático.',
        body:
          'Usa Zebra como tracker de síntomas de POTS para mareo, palpitaciones, fatiga, brain fog, hidratación, sal, notas de medicación y observaciones acostada-sentada-de pie.',
        pain: 'Mejor cuando necesitas explicar qué pasa después de estar de pie, calor, deshidratación, cambios de medicación o un brote.',
        href: localizedPath(localePath, '/knowledge/pots/'),
        cta: 'Abrir el hub de POTS',
      },
      {
        label: 'EDS / hEDS',
        title: 'Mantiene dolor, inestabilidad, fatiga y síntomas solapados juntos.',
        body:
          'Usa Zebra como tracker de síntomas de EDS cuando dolor articular, lesiones, síntomas de disautonomía, fatiga y notas están demasiado dispersos para resumir rápido.',
        pain: 'Mejor cuando un especialista pregunta por un sistema del cuerpo, pero tu mes afectó a varios.',
        href: localizedPath(localePath, '/knowledge/eds/'),
        cta: 'Abrir el hub de EDS',
      },
      {
        label: 'Fibromialgia',
        title: 'Guarda patrones de brotes antes de que el brain fog borre detalles.',
        body:
          'Usa Zebra como tracker de fibromialgia para dolor, fatiga, contexto de sueño, brain fog, cambios de medicación, desencadenantes e impacto funcional.',
        pain: 'Mejor cuando dolor y fatiga cambiaron tu día, pero la línea temporal exacta es difícil de reconstruir después.',
        href: localizedPath(localePath, '/knowledge/fibromyalgia/'),
        cta: 'Abrir el hub de fibromialgia',
      },
      {
        label: 'Preparación de cita',
        title: 'Convierte síntomas recientes en un informe para el médico.',
        body:
          'Usa Zebra antes de una visita con especialista para reunir brotes, síntomas principales, constantes ortostáticas, cambios de medicación, preguntas e impacto diario.',
        pain: 'Mejor cuando la cita es corta y no quieres pasarla buscando notas o adivinando de memoria.',
        href: localizedPath(localePath, '/knowledge/chronic-illness-appointment-prep/'),
        cta: 'Abrir preparación de cita',
      },
    ],
    note:
      'Zebra es una herramienta de organización para historial introducido por la persona. No diagnostica, no trata y no reemplaza la atención médica.',
  },
  comparison: {
    eyebrow: '¿Por qué no usar solo Notas?',
    title: 'Notas, hojas de cálculo y trackers genéricos te hacen organizar dos veces.',
    intro:
      'Pueden guardar fragmentos, pero la cita sigue necesitando una línea temporal clara. Zebra está pensado para ese salto: del historial diario de síntomas a un informe para el médico.',
    alternativesLabel: 'Solución habitual',
    zebraLabel: 'Lo que Zebra mantiene conectado',
    items: [
      {
        name: 'Apple Notas',
        problem:
          'Rápido para una idea, pero difícil de ordenar después por brote, síntoma, cambio de medicación, constantes ortostáticas o pregunta para la cita.',
        zebra:
          'Zebra mantiene síntomas, brotes, medicación, sal, agua, constantes, desencadenantes, notas y preguntas en una estructura con fechas.',
        href: '/zebra-vs-apple-notes/',
        cta: 'Comparar Zebra y Notas',
      },
      {
        name: 'Hojas de cálculo',
        problem:
          'Flexibles, pero convierten el registro en trabajo de configuración y pueden ser demasiado en días de mareo, dolor o poca energía.',
        zebra:
          'Zebra empieza con check-ins tranquilos y mantiene útiles las entradas parciales, para que el historial sobreviva a los días malos.',
        href: '/zebra-vs-spreadsheet/',
        cta: 'Comparar Zebra y hojas',
      },
      {
        name: 'Trackers genéricos',
        problem:
          'Muchos separan constantes, síntomas, medicación y notas, lo que dificulta revisar POTS, EDS e historial con síntomas solapados.',
        zebra:
          'Zebra está creado primero para enfermedad invisible, contexto ortostático, síntomas solapados y preparación de citas con especialistas.',
        href: localizedPath(localePath, '/blog/symptom-tracker-vs-notes-app-vs-spreadsheet/'),
        cta: 'Leer la comparación',
      },
      {
        name: 'Apps de habitos y bienestar',
        problem:
          'Las rachas y metas de bienestar pueden hacer que un día de brote parezca un fallo, aunque sea un día importante para documentar.',
        zebra:
          'Zebra trata el registro como construcción de evidencia, no como autooptimización. Un check-in útil es suficiente.',
        href: localizedPath(localePath, '/blog/why-symptom-tracking-fails-on-bad-days/'),
        cta: 'Leer por que falla el registro',
      },
    ],
    note:
      'El objetivo no es registrar perfectamente. El objetivo es conservar suficiente historial introducido por ti para que la próxima cita empiece con menos suposiciones.',
  },
  proofBridge: {
    eyebrow: 'Qué cambia con Zebra',
    title: 'De registros de síntomas dispersos a una historia lista para el médico.',
    intro:
      'Zebra no es solo un registro de síntomas. Es el puente entre un mes difícil y una cita más clara, especialmente cuando POTS, disautonomía, niebla mental, sodio, constantes, medicación y notas de brotes se solapan.',
    items: [
      { label: 'Un cuerpo, una línea temporal', title: 'Los síntomas solapados dejan de vivir en lugares separados.', before: 'Notas de POTS en una app, dolor en otra parte, cambios de medicación en la memoria y capturas enterradas en Fotos.', after: 'Brotes, constantes ortostáticas, medicación, sal, agua, desencadenantes, notas y síntomas solapados quedan conectados.' },
      { label: 'Prueba bajo presión', title: 'Preparar la cita requiere menos reconstrucción.', before: 'Intentas resumir semanas de síntomas estando cansada, con niebla mental, prisa o miedo a que te descarten otra vez.', after: 'Zebra te da una línea temporal reciente y un informe PDF para que sea más fácil revisar y compartir lo importante.' },
      { label: 'Amigable en días malos', title: 'Una entrada parcial también cuenta.', before: 'Los días que más importan suelen ser los días con menos energía para escribir, ordenar y explicar.', after: 'Un check-in rápido de brote puede servir por sí solo, sin rachas, culpa ni necesidad de ponerse al día perfectamente.' },
    ],
    note: 'Zebra organiza historial introducido por la persona para conversaciones médicas. No diagnostica, no trata ni promete que concluira un clínico.',
  },
  doctorReport: {
    ...homePage.doctorReport,
    eyebrow: 'El resultado',
    title: 'El informe cambia la cita.',
    answer:
      'El registro diario se convierte en un PDF para tu médico: síntomas, constantes ortostáticas, medicación, sal, agua, desencadenantes y notas, organizado para la cita con el especialista.',
    body: [
      'En vez de contar el mes de memoria, puedes revisar un historial con fechas: qué pasó, con qué frecuencia y qué cambió.',
    ],
    flow: ['Historial de 30 días', 'Patrones', 'PDF para el médico', 'Cita'],
    bullets: [
      'Síntomas, brotes, medicación y desencadenantes en un historial con fechas',
      'Constantes ortostáticas e hidratación junto a la línea temporal',
      'Notas guardadas antes de que la niebla mental borre detalles',
      'Preguntas que merece la pena hablar antes de que acabe la cita',
    ],
    preview: {
      eyebrow: 'Vista previa',
      title: 'Qué incluye el informe para el médico',
      body:
        'Un resumen claro para la cita creado a partir del historial que has registrado.',
      items: [
        { label: 'Línea temporal de síntomas', body: 'Cambios con fecha, brotes y frecuencia de síntomas.' },
        { label: 'Constantes ortostáticas', body: 'Observaciones tumbada, de pie y de recuperación junto a los síntomas.' },
        { label: 'Medicación, hidratación y sal', body: 'Contexto que ayuda a explicar qué cambió alrededor de un brote.' },
        { label: 'Notas y preguntas', body: 'Contexto de síntomas y preguntas importantes para la cita.' },
      ],
    },
    sampleReport: {
      href: '/sample-doctor-report.pdf',
      label: 'Ver un informe de ejemplo',
      note: 'Usa datos ficticios de paciente solo para la vista previa.',
    },
    proofLabel: 'El resultado',
    proofTitle: 'El informe médico es lo que da valor al registro.',
    proofBody:
      'Los registros diarios sirven cuando te ayudan a prepararte, explicar qué cambió y entregar un resumen que un especialista pueda revisar rápido.',
    outcomesLabel: 'Qué tienes después de 30 días',
    outcomes: [
      'Un historial de síntomas más claro en vez de notas dispersas',
      'Una línea temporal de brotes, cambios y notas',
      'Contexto sobre desencadenantes, medicación y cambios ortostáticos',
      'Un informe para revisar o compartir antes de la cita',
    ],
    comparisonLabel: 'Antes y después de Zebra',
    comparison: [
      {
        label: 'Antes de Zebra',
        title: 'Reconstruir el mes de memoria',
        points: ['Abrir Notas', 'Buscar capturas', 'Esperar recordar lo importante'],
      },
      {
        label: 'Con Zebra',
        title: 'Llegar con el historial ya hecho',
        points: ['Revisar la línea temporal', 'Exportar el informe', 'Usar la cita para hablar, no para reconstruir'],
      },
    ],
    ctaNote: 'Registra gratis. Exporta tu informe con Premium.',
    media: {
      ...screenshotStory.doctorReport,
      label: 'Vista previa del informe',
      meta: 'Resumen para consulta',
      alt: 'Pantalla de Zebra con informe para el médico y preparación de cita a partir del historial introducido por la persona.',
    },
  },
  appointmentPrep: {
    ...homePage.appointmentPrep,
    eyebrow: 'Preparación de cita',
    title: 'Siete días antes de la visita, registra las partes que no quieres reconstruir de memoria.',
    intro:
      'Zebra te ayuda a convertir la semana antes de una cita en una historia más clara: qué cambió, qué se repitió, qué afectó la vida diaria y qué quieres preguntar mientras estás en la consulta.',
    checklistTitle: 'Qué capturar primero',
    checklist: [
      { label: 'Brotes recientes', body: 'Registra gravedad, duración y qué cambió para que los peores días no desaparezcan cuando el brote pasa.' },
      { label: 'Síntomas principales', body: 'Elige los síntomas que más importan en vez de intentar documentar cada sensación perfectamente.' },
      { label: 'Cambios de medicamentos', body: 'Mantiene horarios, notas de dosis, efectos secundarios y preguntas junto al historial de síntomas.' },
      { label: 'Sal, agua y contexto', body: 'Registra hidratación y sal junto a síntomas cuando sean relevantes para tu plan de cuidado.' },
      { label: 'Signos ortostáticos', body: 'Guarda observaciones acostada, sentada y de pie con los síntomas y notas del mismo día.' },
      { label: 'Impacto funcional', body: 'Captura qué cambiaron los síntomas sobre estar de pie, trabajar, estudiar, dormir, hacer recados o recuperarte.' },
      { label: 'Preguntas para la consulta', body: 'Escribe las preguntas que no quieres que borren el brain fog, el estrés o una cita corta.' },
    ],
    pathsTitle: 'Ejemplos por condición',
    paths: [
      { condition: 'POTS y disautonomía', body: 'Lleva síntomas al estar erguida, observaciones ortostáticas, contexto de sal y agua, notas de medicamentos y timing de brotes a una sola vista.' },
      { condition: 'EDS / hEDS', body: 'Mantiene dolor, inestabilidad, fatiga, lesiones, notas y síntomas solapados conectados en vez de dispersos.' },
      { condition: 'Fibromialgia y brotes solapados', body: 'Conserva dolor, fatiga, brain fog, cambios de medicamentos, contexto de sueño e impacto funcional para una conversación de seguimiento más clara.' },
    ],
    samplePreview: {
      eyebrow: 'Informe de ejemplo',
      title: 'Cómo puede verse una vista de cita de una página',
      meta: 'Solo ejemplo, con datos ficticios.',
      rows: [
        { label: 'Cambio principal', value: 'Más mareo y fatiga después de tareas cortas de pie' },
        { label: 'Brotes recientes', value: '3 días de brote notables, recuperación más lenta que lo habitual' },
        { label: 'Contexto', value: 'Cambio de medicamento, menor hidratación, dos días de calor' },
        { label: 'Pregunta en cita', value: '¿Qué debería registrar antes del próximo seguimiento?' },
      ],
      note: 'La vista previa del informe no es un diagnóstico. Muestra cómo Zebra puede ordenar historial introducido por la persona para una conversación más clara.',
    },
    note:
      'Usa esto como ayuda de organización, no como lista diagnóstica. Zebra no diagnostica, no trata y no dice que debería concluir un clínico.',
  },
  howItWorks: {
    eyebrow: 'Cómo funciona Zebra',
    title: 'Tres pasos sencillos, incluso en días de poca energía.',
    intro: 'El flujo se mantiene corto en días malos y se vuelve más útil a medida que se acerca la cita.',
    timeline: ['Registra síntomas y contexto', 'Ve patrones con el tiempo', 'Exporta o revisa el informe'],
    steps: [
      {
        label: 'Registra síntomas y contexto',
        body: 'Guarda síntomas, brotes, constantes ortostáticas, medicación, sal, agua, desencadenantes y notas en un check-in rápido.',
      },
      {
        label: 'Ve patrones con el tiempo',
        body: 'Mantiene las constantes ortostáticas y el contexto diario en la misma línea temporal para revisarlo mejor después.',
      },
      {
        label: 'Exporta o revisa un informe para el médico',
        body: 'Revisa qué cambió antes de la cita y exporta un informe claro cuando quieras llevar algo preparado.',
      },
    ],
  },
  screenshotCarousel: {
    eyebrow: 'Vista de la app',
    title: 'Mira todo el flujo: del registro al informe.',
    intro:
      'La página empieza por el informe, pero el producto sigue construido alrededor de check-ins cortos que funcionan también en días malos.',
    label: 'Capturas de la app Zebra',
    items: [
      { ...screenshotStory.doctorReport, label: 'Vista previa del informe', meta: 'Resumen para consulta', title: 'Vista previa del informe', body: 'Revisa un resumen antes de la cita.' },
      { ...screenshotStory.dailyTracking, label: 'Check-in diario', meta: 'Síntomas, desencadenantes, hidratación, medicación', title: 'Check-in diario', body: 'Registra síntomas, desencadenantes, hidratación, medicación y notas.' },
      { ...screenshotStory.orthostaticTest, label: 'Evidencia ortostática', meta: 'Test ortostático dentro del flujo de informe', title: 'Evidencia ortostática', body: 'Mantiene las constantes por posición conectadas con el resto del día.' },
      { ...screenshotStory.trends, label: 'Historial de patrones', meta: 'Los patrones se convierten en historial útil', title: 'Historial de patrones', body: 'Observa patrones repetidos y conclusiones guardadas con el tiempo.' },
      { ...screenshots.todaySummary, meta: 'Resumen de hoy', title: 'Resumen de hoy', body: 'Comprueba el patrón actual sin reconstruir toda la historia.' },
    ],
  },
  dailyTracking: {
    ...homePage.dailyTracking,
    eyebrow: 'Creada para días de brote',
    title: 'En un día difícil, un check-in rápido basta.',
    intro: 'Zebra está pensada para seguir siendo usable con mareo, agotamiento, niebla mental o dolor.',
    body: [
      'Abre Zebra, toca lo que cambió y vuelve a tu día. Sin configuración en blanco. Sin deberes de bienestar. Sin rachas. El objetivo es tener un historial útil, no pasar más tiempo en la app.',
    ],
    momentLabel: 'Qué pasa en menos de un minuto',
    sequence: ['Abre Zebra', 'Toca lo que cambió', 'Vuelve a tu día'],
    bullets: ['Brotes y síntomas', 'Medicación y notas', 'Sal, agua y desencadenantes'],
    cards: [
      { eyebrow: 'Por qué pesa menos', title: 'Con estructura desde el principio', body: 'No tienes que inventar el sistema antes de empezar.' },
      { eyebrow: 'Por qué importa después', title: 'Todo queda en una línea temporal', body: 'Eso es lo que hace posible el informe para el médico.' },
    ],
    ctaLabel: 'Empieza a registrar hoy',
    ctaNote: 'Un solo lugar tranquilo para el historial diario.',
    media: {
      ...screenshotStory.dailyTracking,
      label: 'Check-in diario',
      meta: 'Síntomas, desencadenantes, hidratación, medicación',
      alt: 'Check-in de Zebra para iPhone con síntomas, desencadenantes, hidratación, medicación y notas.',
    },
  },
  orthostaticTest: {
    ...homePage.orthostaticTest,
    eyebrow: 'Test ortostático',
    title: 'Registra constantes ortostáticas donde realmente pertenecen.',
    intro: 'En el mismo historial que todo lo demas, no en otra herramienta que tengas que reconciliar después.',
    body: [
      'Zebra mantiene las mediciones tumbada, de pie y de recuperación conectadas con tus síntomas en lugar de separarlas en otra app.',
    ],
    momentLabel: 'La secuencia guiada',
    sequence: ['Tumbarse', 'Ponerse de pie', 'Volver a tumbarse', 'Guardar en la misma línea temporal'],
    bullets: [
      'Flujo guiado tumbada, de pie y recuperación',
      'La misma línea temporal que síntomas y medicación',
      'Más fácil de revisar después con contexto',
    ],
    cards: [
      { eyebrow: 'Por qué ayuda', title: 'Tus números no quedan aislados', body: 'El médico puede verlos junto al resto del día.' },
      { eyebrow: 'Por qué importa', title: 'Menos saltos, más claridad', body: 'No tienes que moverte entre varias herramientas de salud.' },
    ],
    ctaLabel: 'Ver cómo se forma el informe',
    ctaNote: 'Las constantes son útiles porque se mantienen conectadas.',
    media: {
      ...screenshotStory.orthostaticTest,
      label: 'Evidencia ortostática',
      meta: 'Test ortostático dentro del flujo de informe',
      alt: 'Pantalla de Zebra con evidencia de test ortostático, medicación y preguntas para una cita.',
    },
  },
  searchContent: {
    eyebrow: 'Por qué Zebra es diferente',
    title: 'Creada para enfermedad invisible — POTS, EDS y fibromialgia.',
    intro:
      'La mayoria de trackers te hacen crear tu propio sistema o tratan el cuerpo como un proyecto de bienestar. Zebra está creada para una tarea más difícil: registrar POTS, disautonomía, EDS, fibromialgia, niebla mental, brotes, constantes ortostáticas, sodio, hidratación y síntomas solapados cuando ya estás cansada.',
    answer:
      'Zebra es un tracker de síntomas para iPhone pensado para enfermedad invisible. Mantiene síntomas, brotes, constantes ortostáticas, frecuencia cardíaca, medicación, sodio, agua, desencadenantes, notas y preparación de citas en un mismo historial para crear prueba para la consulta. El objetivo no es diagnosticar. El objetivo es menos trabajo de memoria y un informe más claro.',
    differencesTitle: '¿Por qué usar Zebra en vez de Notas, hojas de cálculo o un tracker genérico?',
    differences: [
      { label: 'Estructura', generic: 'Notas y hojas empiezan en blanco, así que tienes que inventar el sistema cuando ya estás cansada.', zebra: 'Zebra da estructura desde el inicio: brotes, síntomas, desencadenantes, medicación, sal, agua, constantes ortostáticas y notas.' },
      { label: 'Tracking ortostático', generic: 'Los trackers genéricos suelen separar constantes y síntomas, lo que dificulta revisar POTS y disautonomía después.', zebra: 'Zebra mantiene mediciones tumbada, de pie y de recuperación junto a la línea temporal de síntomas y el contexto diario.' },
      { label: 'Preparación de citas', generic: 'Un mes de notas puede terminar en una explicación apresurada cuando el médico pregunta qué cambió.', zebra: 'Zebra convierte historial introducido por ti en un informe de síntomas para especialistas y cardiología.' },
      { label: 'Privacidad', generic: 'Muchas herramientas de salud requieren cuenta, sincronizan por un servicio o son más amplias que el problema que necesitas resolver.', zebra: 'Zebra es privada por diseño y se centra en tu propio historial para conversaciones médicas.' },
      { label: 'Días de brote', generic: 'Las apps de bienestar y habitos pueden hacer que registrar parezca otra tarea fallida.', zebra: 'Zebra está pensada para días con mareo, agotamiento, niebla mental o dolor, donde un check-in rápido basta.' },
    ],
    conditionsTitle: 'Creada primero para POTS, EDS y disautonomía, con apoyo para condiciones solapadas.',
    conditionsIntro: 'Zebra es más útil cuando los síntomas se solapan, cambian con la postura o actividad y son difíciles de resumir antes de una cita.',
    conditions: [
      { name: 'Tracker de síntomas POTS', body: 'Registra síntomas al estar de pie, frecuencia cardíaca, hidratación, sodio, brotes, niebla mental y notas de test ortostático antes de cardiología o especialista.' },
      { name: 'Tracker de síntomas de disautonomía', body: 'Mantiene síntomas autonómicos, cambios de postura, desencadenantes, medicación, constantes y notas en una línea temporal.' },
      { name: 'Seguimiento de EDS y hEDS', body: 'Registra dolor, fatiga, síntomas solapados y notas para explicar mejor la variabilidad después.' },
      { name: 'Tracker de fibromialgia', body: 'Registra dolor, fatiga, niebla mental, brotes, medicación e impacto diario difícil de reconstruir.' },
      { name: 'Tracker de Long COVID', body: 'Captura fatiga, mareo, niebla mental, síntomas ortostáticos, cambios de actividad y patrones entre citas.' },
      { name: 'Diario de síntomas ME/CFS', body: 'Usa check-ins de baja energía para preservar historial de fatiga, empeoramiento post-esfuerzo y recuperación.' },
    ],
    trustTitle: 'Zebra ayuda a organizar historial de salud. No diagnostica ni reemplaza la atención médica.',
    trustBody: 'Para claridad de búsqueda y seguridad médica, Zebra debe entenderse como una herramienta de preparación de citas e historial introducido por la persona. Resume lo que introduces para revisarlo y hablarlo con un clínico.',
    trustItems: [
      'No es para diagnóstico, tratamiento, prevención ni síntomas de emergencia',
      'No reemplaza a un médico, especialista ni consejo médico',
      'Mejor para preparar un historial más claro y un informe para citas',
    ],
  },
  trust: {
    eyebrow: 'Confianza, seguridad y privacidad',
    title: 'Privada, prudente en lo médico y clara sobre para que sirve Zebra.',
    intro:
      'Zebra se centra en organizar historial introducido por la persona para conversaciones sanitarias y citas con especialistas. No diagnostica, trata, previene ni sustituye la atención médica.',
    highlight: {
      eyebrow: 'Confianza de un vistazo',
      title: 'Privada por diseño. Creada para la niebla mental. Ideal para preparar citas.',
      body:
        'Zebra ayuda a mantener un historial más claro para citas con especialistas, especialmente cuando los síntomas se solapan y la memoria no es fiable. La app y el hub de conocimiento apoyan la organización personal y las conversaciones con profesionales, no el diagnóstico, el tratamiento, la prevención ni la venta de datos de salud.',
    },
    calmState: {
      eyebrow: 'El estado final',
      title: 'Más preparada. Menos abrumada.',
      body:
        'El objetivo no es hacer que la enfermedad parezca ordenada. Es que la cita sea más tranquila porque el historial ya está ahí.',
    },
    items: [
      { title: 'Privacidad primero', body: 'Los datos de salud de la app se guardan en tu iPhone y pueden sincronizarse con tu cuenta personal de iCloud, según los ajustes de Apple/iCloud y la versión actual de la app. Zebra no requiere una cuenta de Zebra ni utiliza un servidor propio de datos de salud.' },
      { title: 'Mejor para preparar especialistas', body: 'Zebra encaja mejor cuando necesitas un historial más claro antes de cardiología, especialistas o citas de seguimiento.' },
      { title: 'Tú controlas el historial', body: 'Sin cuenta obligatoria, sin servidor de datos de salud y sin reconstruir tu historia dentro del sistema de otra empresa.' },
      { title: 'Amigable con la niebla mental', body: 'Flujos cortos, jerarquía clara y uso de baja energía para días de brote.' },
      { title: 'Centrada en especialistas', body: 'Construida alrededor de citas, no de autooptimización ni rachas de bienestar.' },
      { title: 'Prudente en lo médico', body: 'Sin diagnóstico, sin consejos de tratamiento, sin promesas de prevención y sin exagerar lo que significan tus datos.' },
      { title: 'No es para emergencias', body: 'Zebra no es una herramienta de emergencia, un comprobador de síntomas ni un reemplazo de atención médica urgente o profesional.' },
      { title: 'Datos introducidos por la persona', body: 'Lo que Zebra resume procede del historial que tu registras y revisas.' },
    ],
    links: [
      { label: 'Explora el hub de conocimiento', href: localizedPath(localePath, siteConfig.routes.knowledge) },
      { label: 'Lee la política de privacidad', href: localizedPath(localePath, siteConfig.routes.privacy) },
      { label: 'Visita soporte', href: localizedPath(localePath, siteConfig.routes.support) },
    ],
    resources: [
      { eyebrow: 'Feedback', title: 'Enviar feedback o pedir una función', body: 'Cuéntanos que haría Zebra más fácil antes de una cita, especialmente en días de brote.', href: `mailto:${siteConfig.support.email}?subject=Zebra%20feedback` },
      { eyebrow: 'Hub de conocimiento', title: 'Explora conceptos conectados de síntomas y condiciones', body: 'Ve cómo POTS, disautonomía, niebla mental, fatiga, informes y preparación de citas se conectan en el sitio.', href: localizedPath(localePath, siteConfig.routes.knowledge) },
      { eyebrow: 'Guías', title: 'Lee primero las guías prácticas más útiles', body: 'Compara Zebra con Notas, aprende que registrar y entiende cómo funciona el informe antes de descargar.', href: localizedPath(localePath, siteConfig.routes.blog) },
    ],
    resourcesIntro: {
      eyebrow: 'Confianza editorial',
      title: 'Cómo Zebra mantiene su contenido y el hub de conocimiento.',
    },
    resourcesCtaLabel: 'Abrir página',
  },
  guides: {
    eyebrow: 'Guías y páginas por condición',
    title: 'Sigue explorando las preguntas exactas que la gente se hace antes de descargar un rastreador de síntomas.',
    intro:
      'Ya sea que estés preparando una cita o busques seguir POTS, EDS y disautonomía con más claridad, estos son los mejores puntos de partida.',
    items: [
      {
        href: '/es-es/appointment-prep-checklist/',
        label: 'Lista de preparación de citas de 7 días',
        description: 'Una página dedicada a que registrar antes de una cita relacionada con una enfermedad crónica, sobre todo cuando la memoria y la energía son limitadas.',
      },
      {
        href: '/es-es/pots-tracker/',
        label: 'Registro de POTS',
        description: 'La página principal para registrar brotes de POTS, constantes ortostáticas, sal, agua, medicamentos y evidencia para la cita.',
      },
      {
        href: '/eds-tracker/',
        label: 'Registro de EDS / hEDS',
        description: 'Una página pensada para síntomas de solapamiento de EDS, dolor, fatiga, inestabilidad, enfermedad invisible y preparación del informe médico.',
      },
      {
        href: '/fibromyalgia-tracker/',
        label: 'Registro de fibromialgia',
        description: 'Una página enfocada en registrar brotes de fibromialgia, dolor, fatiga, niebla mental, medicamentos y notas de citas.',
      },
      {
        href: '/es-es/orthostatic-vitals-test/',
        label: 'Prueba de constantes ortostáticas',
        description: 'Una página de producto para registrar observaciones acostado, de pie y en recuperación junto a los síntomas y el contexto diario.',
      },
      {
        href: '/es-es/doctor-report/',
        label: 'Informe de síntomas para el médico',
        description: 'Una página que explica cómo Zebra convierte el historial reciente en un resumen de cita más claro.',
      },
      {
        href: '/flare-tracker/',
        label: 'Registro de brotes',
        description: 'Una página para los días difíciles: severidad de síntomas, desencadenantes, notas e historial listo para el informe.',
      },
      {
        href: '/es-es/symptom-tracker-for-invisible-illness/',
        label: 'Tracker para enfermedad invisible',
        description: 'Una página para quienes buscan evidencia, apoyo para la niebla mental, check-ins de baja energía y preparación de citas.',
      },
    ],
  },
  faq: {
    eyebrow: 'FAQ',
    title: 'Preguntas sobre Zebra.',
    items: faqItems,
  },
  finalCta: {
    eyebrow: 'Descarga Zebra',
    title: 'Llega a la cita con una historia clara de tus síntomas.',
    body:
      'Empieza hoy con la versión gratuita. Actualiza a Premium cuando quieras vistas de historial más largas e informes PDF para el médico.',
    points: ['Registra a diario', 'Ve el patrón', 'Exporta el informe'],
    pointsLabel: 'Por qué descargar Zebra',
    endState: 'Una cita más tranquila empieza con un historial que no tienes que reconstruir.',
    trustLine: 'Registra gratis · Privada por diseño · Cancela cuando quieras',
  },
  mobileStickyCta: {
    label: 'Descargar Zebra',
    note: 'Lleva historial a tu cita',
    ariaLabel: 'Descargar Zebra en el App Store',
  },
  footer: {
    body: 'Zebra es una app de iPhone para registrar síntomas de POTS, disautonomía, EDS, fibromialgia y enfermedades crónicas invisibles solapadas, creada para historiales más claros y citas con especialistas.',
    trustLine: 'Privada por diseño. Creada para iPhone. Solo datos introducidos por la persona. No es una herramienta diagnóstica.',
    links: localizedFooterLinks(localePath, {
      blog: 'Guías',
      knowledge: 'Hub de conocimiento',
      symptomTracking: 'Registro de síntomas',
      fatigue: 'Fatiga',
      dizziness: 'Mareo',
      brainFog: 'Niebla mental',
      doctorReports: 'Informes médicos',
      authors: 'Autores',
      support: 'Soporte',
      privacy: 'Privacidad',
      terms: 'Terminos',
      contact: 'Contacto',
    }),
    navLabel: 'Pie de página',
    consentPreferencesLabel: 'Preferencias de cookies',
  },
  appStore: localizedAppStore('es-es', 'Descargar en el App Store'),
  localeSwitcher: {
    label: 'Idioma',
    links: localeSwitcherLinks,
  },
  consentBanner: {
    title: 'Medición de nuestros anuncios',
    body: 'Usamos el pixel de Meta para medir si nuestros anuncios llegan a las personas adecuadas. No se recopila nada sobre tu salud; este sitio no tiene acceso a nada dentro de la app.',
    acceptLabel: 'Aceptar',
    declineLabel: 'Rechazar',
  },
  schema: createHomeSchema({
    localePath,
    appDescription:
      'Zebra es una app de iPhone para registrar síntomas de POTS, EDS, fibromialgia, disautonomía y enfermedades invisibles solapadas. Registra brotes, síntomas, constantes ortostáticas, medicación, sal, agua y notas, y exporta un informe PDF para citas médicas.',
    webPageName: 'Zebra tracker de síntomas para POTS, EDS y disautonomía',
    webPageDescription:
      'Landing page de Zebra, una app de iPhone para registrar síntomas de POTS, EDS, disautonomía y preparar citas médicas.',
    faqItems,
    offerDescriptions: {
      free: 'Versión gratuita con funciones principales y 30 días de historial.',
      monthly: 'Premium mensual desbloquea vistas de historial más largas y exportación de informe PDF.',
      annual: 'Premium anual desbloquea vistas de historial más largas y exportación de informe PDF.',
      lifetime: 'Premium lifetime desbloquea Premium con una compra única y sin renovación de suscripción.',
    },
    featureList: [
      'Registrar brotes diarios, síntomas, desencadenantes, hidratación, sal y medicación',
      'Guardar constantes ortostáticas en un flujo guiado',
      'Organizar historial de POTS, EDS, disautonomía, fibromialgia, Long COVID y ME/CFS',
      'Exportar un informe PDF para citas médicas',
    ],
  }),
} as const;
