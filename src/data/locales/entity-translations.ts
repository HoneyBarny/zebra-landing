import type { KnowledgeEntity } from '../../lib/content';
import { entityMeta } from '../content-taxonomy';
import { localeRoutes } from './shared';

export type EntityLocale = 'de-de' | 'es-es' | 'fr-fr';

type EntityCopy = {
  name: string;
  summary: string;
  definition: string;
  practicalUse?: {
    title: string;
    body: string;
    items: string[];
  };
  appointmentUse?: {
    title: string;
    body: string;
    items: string[];
  };
};

export const entityPageCopy = {
  'de-de': {
    titleSuffix: 'Zebra Wissensbereich',
    conditionHub: 'Erkrankungs-Hub',
    entity: 'Begriff',
    quickDefinition: 'Kurzdefinition',
    whatThisMeans: 'Was diese Seite in Zebra bedeutet',
    whereItConnects: 'Wo es verbunden ist',
    parentClusters: 'Übergeordnete Cluster',
    whyItMatters: 'Warum es wichtig ist',
    answerFirstTitle: 'Für schnelle Antworten gebaut',
    answerFirstBody:
      'Dieser Hub verbindet Definitionen, verwandte Ratgeber und nahe Begriffe, damit das Thema für Menschen, Google und KI-Suche nützlich bleibt.',
    conditionMap: 'Erkrankungs-Karte',
    clusterHubSuffix: 'Cluster-Hub',
    conditionMapBody:
      'Diese Seiten werden aus Zebras Begriffsgraf generiert, damit Symptôme, Workflows, Testkontext und Berichte verbunden bleiben.',
    practicalUse: 'Praktische Nutzung',
    useWithoutOverbuilding: (name: string) => `${name} nutzen, ohne es zu überkomplizieren`,
    startHere: 'Hier starten',
    appointmentPrep: 'Terminvorbereitung',
    relatedEntities: 'Verwandte Begriffe',
    belongsNear: (name: string) => `Was in die Nähe von ${name} gehört`,
    nearbyConcepts: 'Nahe Konzepte',
    graphConnects: 'Weitere Seiten, die der Graph verbindet',
    openEntity: 'Begriff öffnen',
    relatedGuides: 'Verwandte Ratgeber',
    conceptInArticles: 'Wo dieser Begriff in veröffentlichten Artikeln vorkommt',
    breadcrumbs: { home: 'Startseite', knowledge: 'Wissensbereich' },
    entityTypes: {
      condition: 'Erkrankung',
      symptom: 'Symptom',
      measurement: 'Messung',
      workflow: 'Workflow',
      support: 'Unterstützung',
      comparison: 'Vergleich',
    },
    hubSections: {
      symptoms: 'Symptôme',
      testing: 'Orthostatische Tests und Vitalwerte',
      'doctor-visits': 'Arzttermine und Terminvorbereitung',
      'medication-tracking': 'Medikamenten-Tracking',
      reports: 'Berichte und Zusammenfassungen',
      'daily-management': 'Alltagskontext',
      overlap: 'Überschneidende Erkrankungen',
      definitions: 'Definitionen',
    },
    clusters: {
      'symptom-tracking': 'Symptomtracking',
      'appointment-preparation': 'Terminvorbereitung',
      'doctor-reports': 'Arztberichte',
      pots: 'POTS',
      dysautonomia: 'Dysautonomie',
      eds: 'EDS / hEDS',
      fibromyalgia: 'Fibromyalgie',
      'long-covid': 'Long COVID',
      'me-cfs': 'ME/CFS',
      comparisons: 'Vergleiche',
    },
  },
  'es-es': {
    titleSuffix: 'Hub de conocimiento de Zebra',
    conditionHub: 'Hub de condición',
    entity: 'Concepto',
    quickDefinition: 'Definicion rapida',
    whatThisMeans: 'Que significa esta página en Zebra',
    whereItConnects: 'Dónde conecta',
    parentClusters: 'Clusters principales',
    whyItMatters: 'Por que importa',
    answerFirstTitle: 'Creado para respuestas directas',
    answerFirstBody:
      'Este hub conecta definiciones, guías relacionadas y conceptos cercanos para que el tema sea útil para personas, Google y sistemas de busqueda con IA.',
    conditionMap: 'Mapa de condición',
    clusterHubSuffix: 'hub de cluster',
    conditionMapBody:
      'Estas paginas se generan desde el grafo de conceptos de Zebra para mantener conectados síntomas, flujos, contexto de pruebas e informes.',
    practicalUse: 'Uso practico',
    useWithoutOverbuilding: (name: string) => `Cómo usar ${name.toLowerCase()} sin complicarlo de más`,
    startHere: 'Empieza aquí',
    appointmentPrep: 'Preparación de citas',
    relatedEntities: 'Conceptos relacionados',
    belongsNear: (name: string) => `Que pertenece cerca de ${name}`,
    nearbyConcepts: 'Conceptos cercanos',
    graphConnects: 'Otras paginas que conecta el grafo',
    openEntity: 'Abrir concepto',
    relatedGuides: 'Guías relacionadas',
    conceptInArticles: 'Dónde aparece este concepto en articulos publicados',
    breadcrumbs: { home: 'Inicio', knowledge: 'Hub de conocimiento' },
    entityTypes: {
      condition: 'Condición',
      symptom: 'Síntoma',
      measurement: 'Medicion',
      workflow: 'Flujo',
      support: 'Apoyo',
      comparison: 'Comparación',
    },
    hubSections: {
      symptoms: 'Síntomas',
      testing: 'Pruebas ortostáticas y constantes',
      'doctor-visits': 'Citas médicas y preparación',
      'medication-tracking': 'Registro de medicación',
      reports: 'Informes y resumenes',
      'daily-management': 'Contexto diario',
      overlap: 'Condiciones solapadas',
      definitions: 'Definiciones',
    },
    clusters: {
      'symptom-tracking': 'Registro de síntomas',
      'appointment-preparation': 'Preparación de citas',
      'doctor-reports': 'Informes medicos',
      pots: 'POTS',
      dysautonomia: 'Disautonomía',
      eds: 'EDS / hEDS',
      fibromyalgia: 'Fibromialgia',
      'long-covid': 'Long COVID',
      'me-cfs': 'ME/CFS',
      comparisons: 'Comparaciones',
    },
  },
  'fr-fr': {
    titleSuffix: 'Hub de connaissances Zebra',
    conditionHub: 'Hub de condition',
    entity: 'Notion',
    quickDefinition: 'Definition rapide',
    whatThisMeans: 'Ce que cette page signifie dans Zebra',
    whereItConnects: 'Ou cela se connecte',
    parentClusters: 'Clusters parents',
    whyItMatters: 'Pourquoi c est important',
    answerFirstTitle: 'Concu pour des réponses directes',
    answerFirstBody:
      'Ce hub relie definitions, guides associes et notions proches afin que le sujet reste utile pour les personnes, Google et la recherche IA.',
    conditionMap: 'Carte de condition',
    clusterHubSuffix: 'hub de cluster',
    conditionMapBody:
      'Ces pages sont generees depuis le graphe de notions Zebra pour garder connectes symptômes, workflows, contexte de tests et rapports.',
    practicalUse: 'Utilisation pratique',
    useWithoutOverbuilding: (name: string) => `Comment utiliser ${name.toLowerCase()} sans trop complexifier`,
    startHere: 'Commencer ici',
    appointmentPrep: 'Préparation de rendez-vous',
    relatedEntities: 'Notions liees',
    belongsNear: (name: string) => `Ce qui se trouve près de ${name}`,
    nearbyConcepts: 'Notions proches',
    graphConnects: 'Autres pages reliees par le graphe',
    openEntity: 'Ouvrir la notion',
    relatedGuides: 'Guides lies',
    conceptInArticles: 'Ou cette notion apparaît dans les articles publies',
    breadcrumbs: { home: 'Accueil', knowledge: 'Hub de connaissances' },
    entityTypes: {
      condition: 'Condition',
      symptom: 'Symptôme',
      measurement: 'Mesure',
      workflow: 'Workflow',
      support: 'Support',
      comparison: 'Comparaison',
    },
    hubSections: {
      symptoms: 'Symptômes',
      testing: 'Tests orthostatiques et constantes',
      'doctor-visits': 'Rendez-vous médicaux et préparation',
      'medication-tracking': 'Suivi des médicaments',
      reports: 'Rapports et resumes',
      'daily-management': 'Contexte quotidien',
      overlap: 'Conditions qui se chevauchent',
      definitions: 'Definitions',
    },
    clusters: {
      'symptom-tracking': 'Suivi des symptômes',
      'appointment-preparation': 'Préparation de rendez-vous',
      'doctor-reports': 'Rapports médicaux',
      pots: 'POTS',
      dysautonomia: 'Dysautonomie',
      eds: 'SED / hEDS',
      fibromyalgia: 'Fibromyalgie',
      'long-covid': 'Long COVID',
      'me-cfs': 'ME/CFS',
      comparisons: 'Comparaisons',
    },
  },
} as const;

const translations: Record<EntityLocale, Record<string, EntityCopy>> = {
  'de-de': {
    pots: { name: 'POTS', summary: 'Ein zentraler Zebra-Hub für Symptôme im Stehen, orthostatische Veränderungen, tägliches Tracking und Facharzttermine.', definition: 'POTS ist einer der Kern-Hubs in Zebra. In Zebra verbindet es meist Symptomtracking, orthostatischen Kontext, Hydration und Salz, Alltagsfunktion und den Bedarf an einem klaren Terminverlauf.' },
    dysautonomia: { name: 'Dysautonomie', summary: 'Ein breiter Hub für das autonome Nervensystem, orthostatische Symptôme, Upright-Intoleranz und alltagstaugliche Tracking-Workflows.', definition: 'Dysautonomie ist ein breiter Oberbegriff für Störungen des autonomen Nervensystems. In Zebra bündelt der Hub orthostatische Symptôme, Herzfrequenzveränderungen, Schübe und Terminvorbereitung.' },
    eds: { name: 'EDS', summary: 'Ein Erkrankungs-Hub für EDS-Überschneidungen, variable Symptôme, Alltagsgrenzen und Vorbereitung auf Arzttermine.', definition: 'EDS ist eine Zebra-Wissensseite für Menschen, die komplexe Überschneidungssymptome, schwankende Funktion und chronische Krankheitsverläufe vor Terminen erfassen.' },
    heds: { name: 'hEDS', summary: 'Ein Hub für hypermobiles EDS, der Überschneidungen, Schmerz- und Funktionskontext sowie klarere Verläufe vor Arztterminen unterstützt.', definition: 'hEDS ist die Seite für hypermobiles EDS im Zebra-Begriffsgraf. Sie unterstützt overlap-orientiertes Tracking und besseren Kontext für Facharzttermine.' },
    fibromyalgia: { name: 'Fibromyalgie', summary: 'Ein Hub für Schmerzen, Fatigue, Schubmuster und die Herausforderung, Veränderungen über Zeit klar zusammenzufassen.', definition: 'Fibromyalgie ist einer der Overlap-Hubs in Zebra. Die Seite verbindet Fatigue, Schübe, Alltagsfunktion und den Bedarf an einem brauchbaren langfristigen Symptomverlauf.' },
    'long-covid': { name: 'Long COVID', summary: 'Ein Hub für Fatigue, Schwindel, Verschlechterung nach Belastung, orthostatische Symptôme und Vorbereitung auf Arztgespräche.', definition: 'Long COVID ist eine Zebra-Wissensseite für anhaltende Symptôme, Energiegrenzen, orthostatische Veränderungen und den Kontext, der für Folgetermine hilfreich ist.' },
    'me-cfs': { name: 'ME/CFS', summary: 'Ein Hub für post-exertionelle Malaise, Fatigue, Funktionsgrenzen und Symptomverlauf mit wenig Aufwand.', definition: 'ME/CFS ist ein Zebra-Hub für Verschlechterung nach Belastung, Fatigue, kognitive Symptôme und den Bedarf, auch an Tagen mit wenig Energie einen nutzbaren Verlauf zu bewahren.' },
    mcas: { name: 'MCAS', summary: 'Eine Overlap-Seite für schwankende Symptomverläufe, Auslöser und Kontext, der später oft schwer zu rekonstruieren ist.', definition: 'MCAS ist in Zebras Begriffsgraf als Overlap-Erkrankung enthalten, bei der Timing, Auslöser, Schübe und Symptomkontext oft genauso wichtig sind wie die Symptomliste.' },
    'brain-fog': { name: 'Brain Fog', summary: 'Kognitive Symptôme wie verlangsamtes Denken, Erinnerungslücken und schlechtere Abrufbarkeit, die Tracking und Termine erschweren können.', definition: 'Brain Fog ist ein Symptom-Hub für verlangsamtes Denken, Erinnerungsprobleme und die Schwierigkeit, einen Monat beim Termin klar zu rekonstruieren.' },
    fatigue: { name: 'Fatigue', summary: 'Ein zentraler Symptom-Hub für niedrige Energie, Belastungsgrenzen und die praktische Frage, genug zu erfassen, ohne mehr Arbeit zu schaffen.', definition: 'Fatigue ist eine der wichtigsten Symptomseiten in Zebra. Sie behandelt Tracking mit begrenzter Energie, Funktionsveränderungen und warum Konsistenz an schlechten Tagen realistisch bleiben muss.' },
    dizziness: { name: 'Schwindel', summary: 'Ein Symptom-Hub für Schwindelmuster, Verschlechterung im Stehen und Kontext, der Episoden später verständlicher macht.', definition: 'Schwindel ist eine Zebra-Symptomseite für das Erfassen von Zeitpunkt, Position, Auslöserkontext und Einfluss auf Funktion oder Arzttermine.' },
    lightheadedness: { name: 'Benommenheit', summary: 'Ein Symptom-Hub für schwebende, beinahe ohnmächtige oder instabile Gefühle im Stehen, die positionsbezogenen Kontext brauchen.', definition: 'Benommenheit ist eine Wissensseite für Symptôme im Stehen, bei denen Positionswechsel, Timing und Kontext wichtiger sind als nur das einzelne Wort.' },
    syncope: { name: 'Synkope', summary: 'Ein Symptom-Hub für Ohnmachts- und Beinahe-Ohnmachtsereignisse, deren Kontext klar und vorsichtig bewahrt werden sollte.', definition: 'Synkope ist eine Wissensseite für das Dokumentieren von Ohnmacht oder Beinahe-Ohnmacht mit Timing, Aktivität, aufrechter Position und Fragen für Arzttermine.' },
    tachycardia: { name: 'Tachykardie', summary: 'Ein Symptom- und Mess-Hub für schnelle Herzfrequenz, Timing und den Kontext drumherum.', definition: 'Tachykardie ist eine Zebra-Seite für schnelle Herzfrequenzepisoden im Kontext, nicht als isolierte Zahlen.' },
    palpitations: { name: 'Palpitationen', summary: 'Ein Symptom-Hub für stolpernde, pochende oder flatternde Herzempfindungen, bei denen Timing und Kontext mehr helfen als Erinnerung allein.', definition: 'Palpitationen ist eine Zebra-Symptomseite für das Erfassen, wie Herzempfindungen auftreten, was drumherum passiert ist und wie sie Funktion oder Arztfragen beeinflussen.' },
    'exercise-intolerance': { name: 'Belastungsintoleranz', summary: 'Ein Symptom-Hub für aktivitätsbezogene Verschlechterung, Belastungsgrenzen und das, was nach Anstrengung passiert.', definition: 'Belastungsintoleranz ist eine Wissensseite zum Erfassen, wie Aktivität Symptôme, Ausdauer, Erholung und spätere Funktion beeinflusst.' },
    pem: { name: 'PEM', summary: 'Ein Symptom-Hub für Verschlechterung nach Belastung, verzögerte Einbrüche und die Notwendigkeit, Erholungskontext über Zeit zu erfassen.', definition: 'PEM, post-exertionelle Malaise, ist eine Zebra-Wissensseite für verzögerte Verschlechterung nach Aktivität, inklusive Auslöser, Verzögerung, Schwere und Erholungsfenster.' },
    'orthostatic-intolerance': { name: 'Orthostatische Intoleranz', summary: 'Symptôme, die sich im Sitzen oder Stehen verschlechtern und im Liegen oft bessern, weshalb positionsbezogenes Tracking besonders nützlich ist.', definition: 'Orthostatische Intoleranz ist eine Zebra-Seite für Symptôme, die sich mit der Position verändern, besonders wenn Kontext im Stehen wichtiger ist als ein einzelner Messwert.' },
    'orthostatic-test': { name: 'Orthostatischer Test', summary: 'Ein geführter Weg, Beobachtungen im Liegen, Stehen und in der Erholung zu erfassen, damit positionsbezogene Veränderungen mit dem Tag verbunden bleiben.', definition: 'Die Seite zum orthostatischen Test erklärt Zebras geführten Ablauf für Liegen, Stehen und Erholung und warum positionsbezogene Beobachtungen nützlicher sind, wenn sie mit Symptomen und Notizen gespeichert werden.' },
    'orthostatic-hypotension': { name: 'Orthostatische Hypotonie', summary: 'Eine Wissensseite für Blutdruckabfälle bei Positionswechsel und den Wert, sie im Kontext zu dokumentieren.', definition: 'Orthostatische Hypotonie ist eine Zebra-Seite für positionsbezogene Blutdruckabfälle und den Symptomkontext, der diese Beobachtungen später leichter prüfbar macht.' },
    'orthostatic-tachycardia': { name: 'Orthostatische Tachykardie', summary: 'Eine Wissensseite für Herzfrequenzanstiege bei Positionswechsel und den Kontext, der zur späteren Einordnung gebraucht wird.', definition: 'Orthostatische Tachykardie ist eine Zebra-Seite für positionsbezogene Herzfrequenzveränderungen und ihren Zusammenhang mit Symptomen, Aktivität und Terminvorbereitung.' },
    hydration: { name: 'Hydration', summary: 'Ein Alltagsmanagement-Hub für Wasseraufnahme, Flüssigkeitsroutine und warum diese Veränderungen in dieselbe Symptom-Timeline gehören.', definition: 'Hydration ist eine Zebra-Wissensseite für das Erfassen von Flüssigkeit als Teil derselben Symptomgeschichte, nicht als separate Gewohnheits-App.' },
    'salt-loading': { name: 'Salzaufnahme', summary: 'Ein Alltagsmanagement-Hub für Salzveränderungen neben Symptomen, Schüben und Kontext im Stehen.', definition: 'Salzaufnahme ist eine Zebra-Wissensseite darüber, Salz als Kontext zu erfassen, der für Symptôme, Schübe und Arztgespräche relevant sein kann.' },
    'compression-garments': { name: 'Kompressionskleidung', summary: 'Ein Support-Hub für die Dokumentation, wann Kompression genutzt wird und ob sie Symptôme oder Funktion verändert.', definition: 'Kompressionskleidung ist eine Zebra-Wissensseite für das Dokumentieren von Unterstützungsstrategien in derselben Timeline wie Symptomveränderungen und Alltagsfunktion.' },
    'medication-tracking': { name: 'Medikamenten-Tracking', summary: 'Ein Workflow-Hub, der Medikamente, Dosisveränderungen und Timing mit Symptomen und Funktion verbindet.', definition: 'Medikamenten-Tracking ist eine Zebra-Workflowseite für das Erfassen, was sich wann geändert hat und welche Symptôme oder Funktionsveränderungen um dieses Zeitfenster herum auftraten.' },
    flare: { name: 'Schub', summary: 'Eine Verschlechterungsphase oder Symptomspitze, die als Muster hilfreicher zu erfassen ist als später aus Erinnerung.', definition: 'Die Schub-Seite in Zebra fokussiert darauf, was sich geändert hat, wie lange es dauerte, was sonst passierte und wie es Alltagsfunktion oder Arztfragen beeinflusste.' },
    'baseline-symptoms': { name: 'Baseline-Symptome', summary: 'Eine Workflow-Seite, um festzuhalten, was für Sie normal ist, bevor ein Schub, eine Medikamentenänderung oder ein Arzttermin Details schwerer erinnerbar macht.', definition: 'Baseline-Symptome helfen in Zebra, das übliche Muster von neu veränderten, verschlechterten oder häufigeren Symptomen vor einem Termin zu trennen.', practicalUse: { title: 'Was Sie zuerst notieren sollten', body: 'Eine Baseline ist am nützlichsten, wenn sie einfach und konkret ist. Sie muss nicht erklären, warum Symptôme passieren. Sie soll festhalten, wie eine normale Woche aussieht, bevor sich etwas verändert.', items: ['Symptôme, die auch an normalen Tagen meist da sind', 'Was für Schmerz, Schwindel, Fatigue, Brain Fog oder Herzsymptome schlimmer als normal bedeutet', 'Was Sie normalerweise tun können, etwa stehen, gehen, kochen, arbeiten oder das Haus verlassen', 'Medikamente, Salz, Wasser, Schlaf, Hitze oder Aktivität als Teil des üblichen Musters'] }, appointmentUse: { title: 'Wie es vor einem Arzttermin hilft', body: 'Der Nutzen im Termin ist der Vergleich. Statt den ganzen Monat aus dem Gedächtnis zu erklären, können Sie zeigen, was typisch war, was sich verändert hat und wann es begann.', items: ['Vor einem neuen Medikament oder einer Dosisveränderung nutzen', 'Nach einem Schub nutzen, damit die schlimmere Phase einen Vergleich hat', 'Vor einem Termin nutzen, wenn Symptôme sich über mehrere Wochen verschoben haben'] } },
    trigger: { name: 'Auslöser', summary: 'Eine Workflow-Seite für Hitze, Aktivität, Stress, Mahlzeiten, schlechten Schlaf oder anderen Kontext rund um Symptôme.', definition: 'Auslöser ist eine Zebra-Workflowseite, die Kontext an Symptôme bindet, ohne Kausalität zu überbehaupten.' },
    'symptom-severity': { name: 'Symptomschwere', summary: 'Eine Workflow-Seite, um festzuhalten, wie stark oder störend etwas war, ohne Tracking zur Hausaufgabe zu machen.', definition: 'Symptomschwere ist eine Zebra-Workflowseite für mild, moderat, stark, neu oder so störend, dass es später wichtig sein könnte.' },
    'quality-of-life': { name: 'Lebensqualität', summary: 'Eine funktionsbezogene Seite darüber, wie Symptôme Arbeit, Besorgungen, Schlaf, Konzentration, Sozialleben oder Routinen verändern.', definition: 'Lebensqualität ist eine Zebra-Seite für den praktischen Einfluss von Symptomen auf den Alltag, nicht nur für die Symptomnamen selbst.' },
    'activities-of-daily-living': { name: 'Aktivitäten des täglichen Lebens', summary: 'Eine Funktionsseite für Veränderungen in Routinen, Bewegung, Konzentration und täglicher Selbstständigkeit.', definition: 'Aktivitäten des täglichen Lebens ist eine Zebra-Wissensseite für praktische Routinetasks, die Symptôme stören können und deren Einfluss später leicht vergessen wird.' },
    'doctor-ready-report': { name: 'Arztbereiter Bericht', summary: 'Eine strukturierte Zusammenfassung selbst eingegebener Symptomgeschichte, die Facharzttermine leichter prüfbar und besprechbar macht.', definition: 'Der arztbereite Bericht ist Zebras zentraler Nutzen: eine strukturierte Zusammenfassung aus Symptomen, Schüben, orthostatischen Beobachtungen, Medikamenten, Hydration, Notizen und Funktionskontext.' },
    'chronic-illness-appointment-prep': { name: 'Terminvorbereitung bei chronischer Krankheit', summary: 'Die Vorbereitung, die verstreute Symptôme, Fragen und Medikamentenverlauf in eine terminbereite Zusammenfassung verwandelt.', definition: 'Terminvorbereitung bei chronischer Krankheit ist der Workflow, Symptomveränderungen, Fragen, Funktionsauswirkungen und Medikamentenkontext vor einem Facharzttermin zu ordnen.' },
    'functional-impact': { name: 'Funktionelle Auswirkung', summary: 'Was Symptôme im Alltag tatsächlich verändert haben, etwa Arbeit, Bewegung, Fahren, Konzentration oder Routinen.', definition: 'Funktionelle Auswirkung ist der Teil des Verlaufs, der erklärt, was Symptôme im echten Leben verändert haben, nicht nur welche Symptôme existierten.' },
    'health-history': { name: 'Gesundheitsverlauf', summary: 'Der geordnete Verlauf von Symptomen, Routinen, Medikamentenänderungen und Timeline-Kontext, der Termine mit klarerer Ausgangslage beginnen lässt.', definition: 'Gesundheitsverlauf ist die langfristige Aufzeichnung dessen, was passiert ist, was sich verändert hat und welcher Kontext zu diesen Veränderungen gehörte.' },
    'invisible-illness': { name: 'Unsichtbare Krankheit', summary: 'Erkrankungen und Symptôme, die real, aber für andere nicht immer sichtbar sind, wodurch Dokumentation und Erklärung wichtiger werden.', definition: 'Unsichtbare Krankheit ist eine Zebra-Kontextseite darüber, warum erlebte Symptôme schwer zu kommunizieren, zu validieren und in Versorgungssituationen klar zusammenzufassen sein können.' },
  },
  'es-es': {
    pots: { name: 'POTS', summary: 'Hub central de Zebra para síntomas al estar de pie, cambios ortostáticos, registro diario y preparación de citas con especialistas.', definition: 'POTS es uno de los hubs principales de Zebra. En Zebra suele conectar registro de síntomas, contexto ortostático, hidratación y sal, función diaria y la necesidad de un historial claro para la cita.' },
    dysautonomia: { name: 'Disautonomía', summary: 'Hub amplio del sistema nervioso autónomo para síntomas ortostáticos, intolerancia al estar de pie y flujos de registro diario.', definition: 'Disautonomía es un termino amplio para la disfuncion del sistema nervioso autónomo. En Zebra funciona como hub para síntomas ortostáticos, cambios de frecuencia cardíaca, brotes y preparación de citas.' },
    eds: { name: 'EDS', summary: 'Hub de condición para solapamientos relacionados con EDS, variabilidad de síntomas, límites funcionales y preparación de visitas.', definition: 'EDS es una página del hub de conocimiento de Zebra para personas que registran síntomas complejos solapados, función fluctuante e historial de enfermedad crónica antes de citas.' },
    heds: { name: 'hEDS', summary: 'Hub de EDS hipermovil para registrar solapamientos, dolor, función y un historial más claro antes de consultas.', definition: 'hEDS es la página de EDS hipermovil dentro del grafo de conceptos de Zebra. Apoya el registro de síntomas solapados y mejor contexto para citas con especialistas.' },
    fibromyalgia: { name: 'Fibromialgia', summary: 'Hub de condición para dolor, fatiga, patrones de brote y la dificultad de resumir cambios con claridad.', definition: 'Fibromialgia es uno de los hubs de condiciones solapadas de Zebra. Conecta fatiga, brotes, cambios funcionales y la necesidad de un historial de síntomas útil a largo plazo.' },
    'long-covid': { name: 'Long COVID', summary: 'Hub para fatiga, mareo, empeoramiento tras esfürzo, síntomas ortostáticos y preparación de conversaciones médicas.', definition: 'Long COVID es una página de Zebra para registrar síntomas persistentes, límites de energía, cambios ortostáticos y el contexto necesario para seguimiento médico.' },
    'me-cfs': { name: 'ME/CFS', summary: 'Hub para malestar postesfürzo, fatiga, límites funcionales e historial de síntomas de baja fricción.', definition: 'ME/CFS es un hub de Zebra para empeoramiento tras esfürzo, fatiga, síntomas cognitivos y la necesidad de conservar un historial útil incluso en días de poca energía.' },
    mcas: { name: 'MCAS', summary: 'Página de condición solapada para patrones fluctuantes, desencadenantes y contexto que suele ser dificil reconstruir después.', definition: 'MCAS aparece en el grafo de Zebra como condición solapada donde el momento, los desencadenantes, los brotes y el contexto pueden importar tanto como la lista de síntomas.' },
    'brain-fog': { name: 'Niebla mental', summary: 'Síntomas cognitivos como pensamiento lento, lagunas de memoria y menor capacidad de recordar, que complican el registro y las citas.', definition: 'Niebla mental es un hub de síntomas para pensamiento lento, problemas de recuerdo y la dificultad de reconstruir un mes con claridad durante una cita.' },
    fatigue: { name: 'Fatiga', summary: 'Hub central de síntomas para baja energía, límites de resistencia y el reto de registrar lo suficiente sin crear más trabajo.', definition: 'Fatiga es una de las paginas clave de Zebra. Cubre registro con energía limitada, cambios funcionales y por que la constancia debe seguir siendo realista en días malos.' },
    dizziness: { name: 'Mareo', summary: 'Hub de síntomas para patrones de mareo, empeoramiento al estar de pie y contexto que ayuda a entender episodios después.', definition: 'Mareo es una página de Zebra para registrar cuándo ocurre, qué posición o desencadenante importa y como afecta a la función o a las citas.' },
    lightheadedness: { name: 'Aturdimiento', summary: 'Hub de síntomas para sensaciones de flotacion, casi desmayo o inestabilidad al estar de pie que necesitan contexto por posición.', definition: 'Aturdimiento es una página de síntomas al estar de pie para registrar cambios de posición, momento y contexto, no solo escribir la palabra.' },
    syncope: { name: 'Sincope', summary: 'Hub de síntomas para desmayos y casi desmayos, con contexto importante que conviene conservar de forma clara y prudente.', definition: 'Sincope es una página para documentar desmayos o casi desmayos con momento, actividad, contexto al estar de pie y preguntas para consultas.' },
    tachycardia: { name: 'Taquicardia', summary: 'Hub de síntoma y medicion para episodios de frecuencia cardíaca rapida, momento y que pasaba alrededor.', definition: 'Taquicardia es una página de Zebra para documentar episodios de frecuencia cardíaca rapida en contexto, no como numeros aislados.' },
    palpitations: { name: 'Palpitaciones', summary: 'Hub de síntomas para latidos saltados, fürtes o irregulares que se entienden mejor con momento y contexto que con memoria sola.', definition: 'Palpitaciones es una página de Zebra para registrar como aparecen las sensaciones cardiacas, que ocurria alrededor y como afectan a la función diaria o a preguntas médicas.' },
    'exercise-intolerance': { name: 'Intolerancia al ejercicio', summary: 'Hub de síntomas para empeoramiento ligado a actividad, límites de resistencia y lo que ocurre después del esfürzo.', definition: 'Intolerancia al ejercicio es una página para registrar como la actividad afecta síntomas, resistencia, recuperación y función posterior.' },
    pem: { name: 'PEM', summary: 'Hub de síntomas para empeoramiento tras esfürzo, caidas diferidas y la necesidad de registrar recuperación con el tiempo.', definition: 'PEM, o malestar postesfürzo, es una página de Zebra para empeoramiento diferido tras actividad, incluyendo desencadenante, retraso, gravedad y ventana de recuperación.' },
    'orthostatic-intolerance': { name: 'Intolerancia ortostática', summary: 'Síntomas que empeoran al estar sentada o de pie y a menudo mejoran al tumbarse, lo que hace útil registrar por posición.', definition: 'Intolerancia ortostática es una página de Zebra para síntomas que cambian con la posición, especialmente cuando el contexto al estar de pie importa más que una lectura aislada.' },
    'orthostatic-test': { name: 'Test ortostático', summary: 'Forma guiada de registrar observaciones tumbada, de pie y de recuperación para mantener los cambios por posición conectados al día.', definition: 'La página de test ortostático explica el flujo guiado de Zebra para tumbarse, ponerse de pie y recuperarse, y por que las observaciones por posición son más útiles junto a síntomas y notas.' },
    'orthostatic-hypotension': { name: 'Hipotension ortostática', summary: 'Página sobre bajadas de presión arterial con cambios de posición y el valor de documentarlas en contexto.', definition: 'Hipotension ortostática es una página de Zebra para bajadas de presión arterial ligadas a la posición y el contexto de síntomas que facilita revisarlas después.' },
    'orthostatic-tachycardia': { name: 'Taquicardia ortostática', summary: 'Página sobre aumentos de frecuencia cardíaca ligados a cambios de posición y el contexto necesario para interpretarlos después.', definition: 'Taquicardia ortostática es una página de Zebra para cambios de frecuencia cardíaca ligados a posición y como encajan con síntomas, actividad y preparación de citas.' },
    hydration: { name: 'Hidratación', summary: 'Hub de gestion diaria para ingesta de agua, regularidad de liquidos y por que conviene mantener esos cambios junto a síntomas.', definition: 'Hidratación es una página de Zebra para registrar liquidos como parte de la misma historia de síntomas, no como una app de habitos separada.' },
    'salt-loading': { name: 'Aporte de sal', summary: 'Hub de gestion diaria para registrar cambios de sal junto a síntomas, brotes y contexto al estar de pie.', definition: 'Aporte de sal es una página de Zebra sobre registrar la sal como contexto que puede importar en síntomas, brotes y conversaciones médicas.' },
    'compression-garments': { name: 'Prendas de compresion', summary: 'Hub de apoyo para documentar cuando se usa compresion y si cambia síntomas o función.', definition: 'Prendas de compresion es una página de Zebra para documentar estrategias de apoyo en la misma linea temporal que síntomas y función diaria.' },
    'medication-tracking': { name: 'Registro de medicación', summary: 'Hub de flujo para mantener medicamentos, cambios de dosis y horarios conectados al historial de síntomas y función.', definition: 'Registro de medicación es una página de Zebra para anotar qué cambió, cuándo cambió y qué síntomas o cambios funcionales ocurrieron alrededor.' },
    flare: { name: 'Brote', summary: 'Periodo de empeoramiento o pico de síntomas que conviene registrar como patron en vez de depender de la memoria después.', definition: 'La página de brote en Zebra se centra en qué cambió, cuánto duró, qué más pasaba y cómo afectó a la función diaria o a preguntas de seguimiento.' },
    'baseline-symptoms': { name: 'Síntomas de referencia', summary: 'Página de flujo para escribir qué es normal para ti antes de que un brote, cambio de medicación o cita haga más dificil recordar detalles.', definition: 'Síntomas de referencia separa en Zebra tu patron habitual de lo que cambió, empeoró o empezó a pasar con más frecuencia antes de una cita.', practicalUse: { title: 'Que escribir primero', body: 'Una referencia es más útil cuando es clara y concreta. No necesita explicar por que ocurren los síntomas; solo capturar como suele ser una semana normal antes de que algo cambie.', items: ['Síntomas que suelen estar presentes incluso en un día normal', 'Que cuenta como peor de lo normal para dolor, mareo, fatiga, niebla mental o síntomas cardiacos', 'Que puedes hacer normalmente, como estar de pie, caminar, cocinar, trabajar o salir de casa', 'Contexto habitual de medicación, sal, agua, sueño, calor o actividad'] }, appointmentUse: { title: 'Como ayuda antes de una cita', body: 'El valor en la cita es el contraste. En vez de explicar todo el mes de memoria, puedes senalar qué era típico, qué cambió y cuándo empezó.', items: ['Usarlo antes de una nueva medicación o cambio de dosis', 'Usarlo después de un brote para comparar la fase peor', 'Usarlo antes de una cita si los síntomas llevan semanas cambiando'] } },
    trigger: { name: 'Desencadenante', summary: 'Página de flujo para anotar calor, actividad, estres, comidas, mal sueño u otro contexto que aparece alrededor de síntomas.', definition: 'Desencadenante es una página de Zebra para mantener contexto unido a síntomas sin afirmar causalidad de más.' },
    'symptom-severity': { name: 'Gravedad del síntoma', summary: 'Página de flujo para registrar lo fürte o disruptivo que fue algo sin convertir el registro en deberes.', definition: 'Gravedad del síntoma es una página de Zebra para documentar si algo fue leve, moderado, severo, nuevo o lo bastante disruptivo para importar después.' },
    'quality-of-life': { name: 'Calidad de vida', summary: 'Página centrada en función sobre como los síntomas cambian trabajo, recados, sueño, concentracion, vida social o rutinas.', definition: 'Calidad de vida es una página de Zebra sobre el impacto practico de los síntomas en la vida diaria, no solo los nombres de síntomas.' },
    'activities-of-daily-living': { name: 'Actividades de la vida diaria', summary: 'Página de función para registrar que cambiaron los síntomas en rutinas basicas, movimiento, concentracion e independencia diaria.', definition: 'Actividades de la vida diaria es una página de Zebra sobre tareas rutinarias que los síntomas pueden interrumpir y cuyo impacto se olvida con facilidad.' },
    'doctor-ready-report': { name: 'Informe para el médico', summary: 'Resumen estructurado del historial de síntomas introducido por la persona para facilitar revisar y hablar en citas.', definition: 'El informe para el médico es el resultado central de Zebra: un resumen estructurado creado desde síntomas, brotes, observaciones ortostáticas, medicación, hidratación, notas y función.' },
    'chronic-illness-appointment-prep': { name: 'Preparación de citas con enfermedad crónica', summary: 'Trabajo de planificacion que convierte síntomas, preguntas e historial de medicación dispersos en un resumen listo para la visita.', definition: 'La preparación de citas con enfermedad crónica es el flujo de organizar cambios de síntomas, preguntas, impacto funcional y medicación antes de una cita con especialista.' },
    'functional-impact': { name: 'Impacto funcional', summary: 'Lo que los síntomas cambiaron realmente en la vida diaria, como trabajo, movimiento, conducir, concentracion o rutinas.', definition: 'Impacto funcional es la parte del historial que explica que cambiaron los síntomas en la vida real, no solo que síntomas existian.' },
    'health-history': { name: 'Historial de salud', summary: 'Registro organizado de síntomas, rutinas, cambios de medicación y contexto temporal que ayuda a empezar las citas con una base más clara.', definition: 'Historial de salud es el registro a largo plazo de qué pasó, qué cambió y qué contexto pertenecía a esos cambios durante semanas o meses.' },
    'invisible-illness': { name: 'Enfermedad invisible', summary: 'Condiciones y síntomas reales que no siempre son evidentes para otras personas, por lo que documentar y explicar puede importar más.', definition: 'Enfermedad invisible es una página de contexto de Zebra sobre por que los síntomas vividos pueden ser dificiles de comunicar, validar y resumir en entornos sanitarios.' },
  },
  'fr-fr': {
    pots: { name: 'POTS', summary: 'Hub central Zebra pour les symptômes en position debout, les changements orthostatiques, le suivi quotidien et la préparation de rendez-vous.', definition: 'Le POTS est l un des hubs centraux de Zebra. Dans Zebra, il relie souvent suivi des symptômes, contexte orthostatique, hydratation et sel, fonction quotidienne et besoin d un historique clair pour la consultation.' },
    dysautonomia: { name: 'Dysautonomie', summary: 'Hub large du système nerveux autonome pour symptômes orthostatiques, intolérance debout et workflows de suivi quotidien.', definition: 'La dysautonomie est un terme large pour un dysfonctionnement du système nerveux autonome. Dans Zebra, elle regroupe symptômes orthostatiques, changements de fréquence cardiaque, poussees et préparation de rendez-vous.' },
    eds: { name: 'SED', summary: 'Hub de condition pour chevauchements lies au SED, variabilite des symptômes, límites fonctionnelles et préparation de visites.', definition: 'Le SED est une page du hub de connaissances Zebra pour les personnes qui suivent des symptômes complexes qui se chevauchent, une fonction fluctuante et un historique de maladie chronique avant les consultations.' },
    heds: { name: 'hEDS', summary: 'Hub du SED hypermobile pour soutenir le suivi des chevauchements, douleur, fonction et historique plus clair avant les soins.', definition: 'hEDS est la page du SED hypermobile dans le graphe de notions Zebra. Elle soutient un suivi oriente chevauchements et un meilleur contexte pour les consultations specialisees.' },
    fibromyalgia: { name: 'Fibromyalgie', summary: 'Hub de condition pour douleur, fatigue, schemas de poussees et difficulte a resumer clairement les changements dans le temps.', definition: 'La fibromyalgie est l un des hubs de conditions qui se chevauchent dans Zebra. La page relie fatigue, poussees, changements de fonction quotidienne et besoin d un historique de symptômes utile a long terme.' },
    'long-covid': { name: 'Long COVID', summary: 'Hub pour fatigue, vertiges, aggravation après effort, symptômes orthostatiques et préparation des conversations de soin.', definition: 'Long COVID est une page Zebra pour suivre symptômes persistants, límites d energie, changements orthostatiques et contexte nécessaire aux suivis de soin.' },
    'me-cfs': { name: 'ME/CFS', summary: 'Hub pour malaise post-effort, fatigue, límites fonctionnelles et historique de symptômes a faible friction.', definition: 'ME/CFS est un hub Zebra pour aggravation après effort, fatigue, symptômes cognitifs et besoin de conserver un historique utilisable meme les jours a faible energie.' },
    mcas: { name: 'MCAS', summary: 'Page de condition qui se chevauche pour schemas fluctuants, declencheurs et contexte souvent difficile a reconstruire.', definition: 'MCAS figure dans le graphe Zebra comme condition de chevauchement ou timing, declencheurs, poussees et contexte comptent souvent autant que la liste de symptômes.' },
    'brain-fog': { name: 'Brouillard mental', summary: 'Symptômes cognitifs comme pensee ralentie, trous de mémoire et rappel reduit qui compliquent le suivi et les rendez-vous.', definition: 'Le brouillard mental est un hub de symptômes pour pensee ralentie, problèmes de rappel et difficulte a reconstruire clairement un mois lors d une consultation.' },
    fatigue: { name: 'Fatigue', summary: 'Hub central de symptômes pour faible energie, límites d endurance et defi pratique de suivre assez sans créer plus de travail.', definition: 'La fatigue est l une des pages de symptômes principales de Zebra. Elle couvre le suivi avec energie limitee, les changements fonctionnels et pourquoi la regularite doit rester réaliste les mauvais jours.' },
    dizziness: { name: 'Vertiges', summary: 'Hub de symptômes pour schemas de vertiges, aggravation debout et contexte qui aide a comprendre les episodes plus tard.', definition: 'Vertiges est une page Zebra pour noter quand cela arrive, quelle position ou quel declencheur compte, et comment cela affecte la fonction ou les rendez-vous.' },
    lightheadedness: { name: 'Etourdissement', summary: 'Hub de symptômes pour sensations flottantes, presque malaise ou instabilite debout qui demandent un contexte positionnel.', definition: 'Etourdissement est une page de symptômes debout pour suivre changements de position, timing et contexte plutot que seulement le mot lui-meme.' },
    syncope: { name: 'Syncope', summary: 'Hub de symptômes pour malaises et quasi-malaises dont le contexte doit être conserve clairement et prudemment.', definition: 'Syncope est une page pour documenter malaise ou quasi-malaise avec timing, activité, contexte debout et questions pour les consultations.' },
    tachycardia: { name: 'Tachycardie', summary: 'Hub de symptôme et mesure pour episodes de fréquence cardiaque rapide, timing et contexte autour.', definition: 'Tachycardie est une page Zebra pour documenter des episodes de fréquence cardiaque rapide dans leur contexte plutot que comme chiffres isoles.' },
    palpitations: { name: 'Palpitations', summary: 'Hub de symptômes pour sensations de battements manques, forts ou irreguliers qui beneficient du timing et du contexte.', definition: 'Palpitations est une page Zebra pour suivre comment les sensations cardiaques apparaissent, ce qui se passait autour et comment elles influencent fonction ou questions de soin.' },
    'exercise-intolerance': { name: 'Intolérance a l effort', summary: 'Hub de symptômes pour aggravation liee a l activité, límites d endurance et ce qui arrive après l effort.', definition: 'Intolérance a l effort est une page pour noter comment l activité affecte symptômes, endurance, recuperation et fonction ulterieure.' },
    pem: { name: 'PEM', summary: 'Hub de symptômes pour aggravation après effort, crashes differes et besoin de suivre le contexte de recuperation.', definition: 'PEM, ou malaise post-effort, est une page Zebra pour aggravation differee après activité, avec declencheur, delai, sévérité et fenetre de recuperation.' },
    'orthostatic-intolerance': { name: 'Intolérance orthostatique', summary: 'Symptômes qui s aggravent assis ou debout et s ameliorent souvent allongé, rendant le suivi par position particulierement utile.', definition: 'Intolérance orthostatique est une page Zebra pour symptômes qui changent avec la position, surtout quand le contexte debout compte plus qu une mesure isolee.' },
    'orthostatic-test': { name: 'Test orthostatique', summary: 'Methode guidee pour noter observations allongée, debout et en recuperation afin que les changements par position restent relies au jour.', definition: 'La page du test orthostatique explique le workflow guide Zebra allongée, debout et recuperation, et pourquoi ces observations sont plus útiles avec symptômes et notes.' },
    'orthostatic-hypotension': { name: 'Hypotension orthostatique', summary: 'Page sur les baisses de tension lors des changements de position et l interet de les documenter en contexte.', definition: 'Hypotension orthostatique est une page Zebra pour baisses de tension liees a la position et contexte symptomatique qui les rend plus faciles a relire.' },
    'orthostatic-tachycardia': { name: 'Tachycardie orthostatique', summary: 'Page sur les augmentations de fréquence cardiaque liees a la position et le contexte nécessaire pour les interpréter.', definition: 'Tachycardie orthostatique est une page Zebra pour changements de fréquence cardiaque lies a la position et leur lien avec symptômes, activité et préparation de rendez-vous.' },
    hydration: { name: 'Hydratation', summary: 'Hub de gestion quotidienne pour eau, regularite des liquides et raison de garder ces changements dans la meme chronologie que les symptômes.', definition: 'Hydratation est une page Zebra pour suivre les liquides comme partie de la meme histoire de symptômes plutot qu une app d habitudes separee.' },
    'salt-loading': { name: 'Apport en sel', summary: 'Hub de gestion quotidienne pour enregistrer les changements de sel avec symptômes, poussees et contexte debout.', definition: 'Apport en sel est une page Zebra sur le suivi du sel comme contexte pouvant compter pour symptômes, poussees et conversations de soin.' },
    'compression-garments': { name: 'Vetements de compression', summary: 'Hub de support pour documenter quand la compression est utilisee et si elle change symptômes ou fonction.', definition: 'Vetements de compression est une page Zebra pour documenter des strategies de soutien dans la meme chronologie que symptômes et fonction quotidienne.' },
    'medication-tracking': { name: 'Suivi des médicaments', summary: 'Hub de workflow pour garder médicaments, changements de dose et timing connectes a l historique des symptômes et de la fonction.', definition: 'Suivi des médicaments est une page Zebra pour noter ce qui a change, quand, et quels symptômes ou changements fonctionnels etaient proches de cette fenetre.' },
    flare: { name: 'Poussee', summary: 'Periode d aggravation ou pic de symptômes utile a suivre comme schema plutot que de compter sur la mémoire.', definition: 'La page Poussee de Zebra se concentre sur ce qui a change, combien de temps cela a dure, ce qui se passait autour et l impact sur la fonction ou les questions de suivi.' },
    'baseline-symptoms': { name: 'Symptômes de reference', summary: 'Page de workflow pour noter ce qui est normal pour vous avant qu une poussee, un changement de médicament ou un rendez-vous rende les details plus difficiles a rappeler.', definition: 'Symptômes de reference separe dans Zebra votre schema habituel de ce qui a change, empire ou commence a arriver plus souvent avant un rendez-vous.', practicalUse: { title: 'Quoi noter en premier', body: 'Une reference est plus utile quand elle est simple et précise. Elle n a pas besoin d expliquer pourquoi les symptômes arrivent; elle doit seulement capturer a quoi ressemble une semaine normale avant un changement.', items: ['Symptômes habituellement presents meme un jour ordinaire', 'Ce qui compte comme pire que d habitude pour douleur, vertiges, fatigue, brouillard mental ou symptômes cardiaques', 'Ce que vous pouvez faire d habitude, comme rester debout, marcher, cuisiner, travailler ou sortir', 'Contexte habituel de médicaments, sel, eau, sommeil, chaleur ou activité'] }, appointmentUse: { title: 'Comment cela aide avant un rendez-vous', body: 'La valeur en consultation est le contraste. Au lieu d expliquer tout le mois de mémoire, vous pouvez montrer ce qui etait typique, ce qui a change et quand cela a commence.', items: ['L utiliser avant un nouveau médicament ou changement de dose', 'L utiliser après une poussee pour comparer la phase plus difficile', 'L utiliser avant un rendez-vous si les symptômes bougent depuis plusieurs semaines'] } },
    trigger: { name: 'Declencheur', summary: 'Page de workflow pour noter chaleur, activité, stress, repas, mauvais sommeil ou autre contexte autour des symptômes.', definition: 'Declencheur est une page Zebra pour garder le contexte attache aux symptômes sans suraffirmer une causalite.' },
    'symptom-severity': { name: 'Sévérité du symptôme', summary: 'Page de workflow pour noter l intensite ou le caractere perturbant sans transformer le suivi en devoir.', definition: 'Sévérité du symptôme est une page Zebra pour documenter si quelque chose etait leger, modere, severe, nouveau ou assez perturbant pour compter plus tard.' },
    'quality-of-life': { name: 'Qualite de vie', summary: 'Page centree sur la fonction : comment les symptômes changent travail, courses, sommeil, concentration, vie sociale ou routines.', definition: 'Qualite de vie est une page Zebra sur l impact pratique des symptômes dans la vie quotidienne, pas seulement leurs noms.' },
    'activities-of-daily-living': { name: 'Activités de la vie quotidienne', summary: 'Page de fonction pour suivre ce que les symptômes changent dans les routines, mouvements, concentration et autonomie quotidienne.', definition: 'Activités de la vie quotidienne est une page Zebra sur les taches de routine que les symptômes peuvent perturber, surtout quand cet impact s oublie facilement.' },
    'doctor-ready-report': { name: 'Rapport pour le médecin', summary: 'Resume structure de l historique de symptômes saisi par la personne pour faciliter revue et discussion en consultation.', definition: 'Le rapport pour le médecin est le resultat central de Zebra : un resume structure construit depuis symptômes, poussees, observations orthostatiques, médicaments, hydratation, notes et fonction.' },
    'chronic-illness-appointment-prep': { name: 'Préparation de rendez-vous avec maladie chronique', summary: 'Travail de préparation qui transforme symptômes, questions et historique de médicaments eparpilles en resume pret pour la visite.', definition: 'La préparation de rendez-vous avec maladie chronique est le workflow d organisation des changements de symptômes, questions, impact fonctionnel et contexte medicamenteux avant une consultation specialisee.' },
    'functional-impact': { name: 'Impact fonctionnel', summary: 'Ce que les symptômes ont vraiment change dans la vie quotidienne : travail, mouvement, conduite, concentration ou routines.', definition: 'Impact fonctionnel est la partie du dossier qui explique ce que les symptômes ont change dans la vraie vie, pas seulement quels symptômes existaient.' },
    'health-history': { name: 'Historique de sante', summary: 'Dossier organise des symptômes, routines, changements de médicaments et contexte temporel pour commencer les rendez-vous avec une base plus claire.', definition: 'Historique de sante est le dossier long terme de ce qui s est passe, de ce qui a change et du contexte rattache a ces changements.' },
    'invisible-illness': { name: 'Maladie invisible', summary: 'Conditions et symptômes reels mais pas toujours visibles pour les autres, ce qui rend documentation et explication plus importantes.', definition: 'Maladie invisible est une page de contexte Zebra sur pourquoi les symptômes vecus peuvent être difficiles a communiquer, valider et resumer clairement dans les soins.' },
  },
};

export function localizeEntity(entity: KnowledgeEntity, locale: EntityLocale): KnowledgeEntity {
  return {
    ...entity,
    ...(translations[locale][entity.slug] ?? {}),
  };
}

export function localizeEntities(entities: KnowledgeEntity[], locale: EntityLocale) {
  return entities.map((entity) => localizeEntity(entity, locale));
}

export function localizedEntityUrl(locale: EntityLocale, slug: string) {
  return `/${locale}/knowledge/${slug}/`;
}

export function getEntityPageCopy(locale: EntityLocale) {
  return entityPageCopy[locale];
}

// Topic chips named in article frontmatter that have no knowledge page of their own.
const chipNames: Partial<Record<EntityLocale, Record<string, string>>> = {
  'de-de': {
    'Symptom Tracking': 'Symptom-Tracking',
    'Flare Tracking': 'Schub-Tracking',
    'Medication Timeline': 'Medikamentenverlauf',
    'Symptom Journal': 'Symptomtagebuch',
    'Blood Pressure': 'Blutdruck',
    'Heart Rate': 'Herzfrequenz',
    Presyncope: 'Präsynkope',
    'Heat Intolerance': 'Hitzeintoleranz',
    Nausea: 'Übelkeit',
  },
  'es-es': {
    'Symptom Tracking': 'Seguimiento de síntomas',
    'Flare Tracking': 'Seguimiento de brotes',
    'Medication Timeline': 'Cronología de medicación',
    'Symptom Journal': 'Diario de síntomas',
    'Blood Pressure': 'Presión arterial',
    'Heart Rate': 'Frecuencia cardíaca',
    Presyncope: 'Presíncope',
    'Heat Intolerance': 'Intolerancia al calor',
    Nausea: 'Náuseas',
  },
};

export function localizedEntityName(name: string, localePath = '/') {
  const locale: EntityLocale | undefined =
    localePath === localeRoutes.deDe ? 'de-de' : localePath === localeRoutes.esEs ? 'es-es' : undefined;
  if (!locale) return name;

  const slug = entityMeta[name]?.slug;
  const translated = slug ? (translations[locale][slug] as { name?: string } | undefined)?.name : undefined;
  return translated ?? chipNames[locale]?.[name] ?? name;
}
