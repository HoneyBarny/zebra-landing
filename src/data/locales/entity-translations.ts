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
      'Diese Seiten werden aus Zebras Begriffsgraf generiert, damit Symptome, Workflows, Testkontext und Berichte verbunden bleiben.',
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
      symptoms: 'Symptome',
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
    quickDefinition: 'Definición rápida',
    whatThisMeans: 'Qué significa esta página en Zebra',
    whereItConnects: 'Dónde conecta',
    parentClusters: 'Clusters principales',
    whyItMatters: 'Por qué importa',
    answerFirstTitle: 'Creado para respuestas directas',
    answerFirstBody:
      'Este hub conecta definiciones, guías relacionadas y conceptos cercanos para que el tema sea útil para personas, Google y sistemas de búsqueda con IA.',
    conditionMap: 'Mapa de condición',
    clusterHubSuffix: 'hub de cluster',
    conditionMapBody:
      'Estas páginas se generan desde el grafo de conceptos de Zebra para mantener conectados síntomas, flujos, contexto de pruebas e informes.',
    practicalUse: 'Uso práctico',
    useWithoutOverbuilding: (name: string) => `Cómo usar ${name.toLowerCase()} sin complicarlo de más`,
    startHere: 'Empieza aquí',
    appointmentPrep: 'Preparación de citas',
    relatedEntities: 'Conceptos relacionados',
    belongsNear: (name: string) => `Que pertenece cerca de ${name}`,
    nearbyConcepts: 'Conceptos cercanos',
    graphConnects: 'Otras páginas que conecta el grafo',
    openEntity: 'Abrir concepto',
    relatedGuides: 'Guías relacionadas',
    conceptInArticles: 'Dónde aparece este concepto en artículos publicados',
    breadcrumbs: { home: 'Inicio', knowledge: 'Hub de conocimiento' },
    entityTypes: {
      condition: 'Condición',
      symptom: 'Síntoma',
      measurement: 'Medición',
      workflow: 'Flujo',
      support: 'Apoyo',
      comparison: 'Comparación',
    },
    hubSections: {
      symptoms: 'Síntomas',
      testing: 'Pruebas ortostáticas y constantes',
      'doctor-visits': 'Citas médicas y preparación',
      'medication-tracking': 'Registro de medicación',
      reports: 'Informes y resúmenes',
      'daily-management': 'Contexto diario',
      overlap: 'Condiciones solapadas',
      definitions: 'Definiciones',
    },
    clusters: {
      'symptom-tracking': 'Registro de síntomas',
      'appointment-preparation': 'Preparación de citas',
      'doctor-reports': 'Informes médicos',
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
    quickDefinition: 'Définition rapide',
    whatThisMeans: 'Ce que cette page signifie dans Zebra',
    whereItConnects: 'Où cela se connecte',
    parentClusters: 'Clusters parents',
    whyItMatters: 'Pourquoi c’est important',
    answerFirstTitle: 'Conçu pour des réponses directes',
    answerFirstBody:
      'Ce hub relie définitions, guides associés et notions proches afin que le sujet reste utile pour les personnes, Google et la recherche IA.',
    conditionMap: 'Carte de condition',
    clusterHubSuffix: 'hub de cluster',
    conditionMapBody:
      'Ces pages sont générées depuis le graphe de notions Zebra pour garder connectés symptômes, workflows, contexte de tests et rapports.',
    practicalUse: 'Utilisation pratique',
    useWithoutOverbuilding: (name: string) => `Comment utiliser ${name.toLowerCase()} sans trop complexifier`,
    startHere: 'Commencer ici',
    appointmentPrep: 'Préparation de rendez-vous',
    relatedEntities: 'Notions liées',
    belongsNear: (name: string) => `Ce qui se trouve près de ${name}`,
    nearbyConcepts: 'Notions proches',
    graphConnects: 'Autres pages reliées par le graphe',
    openEntity: 'Ouvrir la notion',
    relatedGuides: 'Guides liés',
    conceptInArticles: 'Où cette notion apparaît dans les articles publiés',
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
      reports: 'Rapports et résumés',
      'daily-management': 'Contexte quotidien',
      overlap: 'Conditions qui se chevauchent',
      definitions: 'Définitions',
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
    pots: { name: 'POTS', summary: 'Beim Aufstehen steigt die Herzfrequenz deutlich, oft zusammen mit Schwindel oder Herzklopfen. Zebra hilft, dieses Muster festzuhalten.', definition: 'POTS (posturales orthostatisches Tachykardie-Syndrom) beschreibt, dass die Herzfrequenz beim Aufstehen deutlich steigt und Symptome wie Schwindel, Herzklopfen oder Müdigkeit auftreten. Laut Konsens der Heart Rhythm Society gilt dafür ein Anstieg um mindestens 30 Schläge pro Minute beim Übergang vom Liegen zum Stehen, bei 12- bis 19-Jährigen um 40, zusammen mit Symptomen. Die Diagnose stellt eine Ärztin oder ein Arzt. Zebra hält Ihre Beobachtungen über die Zeit fest.' },
    dysautonomia: { name: 'Dysautonomie', summary: 'Eine Störung des autonomen Nervensystems, das unbewusste Körperabläufe wie Herzfrequenz und Blutdruck steuert.', definition: 'Dysautonomie ist laut Cleveland Clinic eine Störung des Nervensystems, die autonome Körperabläufe stört. Das sind Abläufe, die der Körper ohne bewusste Steuerung regelt, etwa Herzfrequenz und Blutdruck. POTS ist eine Form davon. Die Diagnose stellt eine Ärztin oder ein Arzt. Zebra hilft, Symptome, Positionswechsel und Terminnotizen in einem Verlauf festzuhalten.' },
    eds: { name: 'EDS', summary: 'Die Ehlers-Danlos-Syndrome sind 13 erbliche Bindegewebserkrankungen. Überbewegliche Gelenke sind bei allen Typen häufig. Zebra hilft, Überschneidungssymptome in einem Verlauf festzuhalten.', definition: 'Die Ehlers-Danlos-Syndrome (EDS) sind laut Ehlers-Danlos Society und der internationalen Klassifikation von 2017 eine Gruppe von 13 erblichen Bindegewebserkrankungen. Typenübergreifend kommen überbewegliche Gelenke, eine stärker dehnbare Haut und empfindliches Gewebe vor. Die Diagnose stellt eine Ärztin oder ein Arzt. Zebra stellt keine Diagnose. Die App hilft, Symptome, Schübe und Terminnotizen in einem Verlauf festzuhalten.' },
    heds: { name: 'hEDS', summary: 'Hypermobiles EDS verursacht überbewegliche, instabile Gelenke und chronische Schmerzen. Einen Labortest gibt es bisher nicht.', definition: 'Das hypermobile Ehlers-Danlos-Syndrom (hEDS) ist laut Ehlers-Danlos Society eine erbliche Bindegewebserkrankung mit allgemein überbeweglichen Gelenken, Gelenkinstabilität und chronischen Schmerzen. Die Ursache ist nicht bekannt, und es gibt keinen Labortest dafür. Eine Ärztin oder ein Arzt stellt die Diagnose anhand klinischer Kriterien. Zebra hilft, Schmerzen, Gelenkbeschwerden, Schübe und Terminnotizen zusammen festzuhalten.' },
    fibromyalgia: { name: 'Fibromyalgie', summary: 'Eine langanhaltende Erkrankung mit Schmerzen am ganzen Körper, Erschöpfung und weiteren Beschwerden.', definition: 'Fibromyalgie ist laut MedlinePlus eine chronische Erkrankung, die Schmerzen am ganzen Körper, Erschöpfung und weitere Beschwerden verursacht. Die Diagnose stellt eine Ärztin oder ein Arzt. Zebra hilft, Schmerzen, Schübe und Alltagsfunktion für Termine in einem Verlauf festzuhalten.' },
    'long-covid': { name: 'Long COVID', summary: 'Eine chronische Erkrankung nach einer COVID-19-Infektion, die mindestens 3 Monate anhält.', definition: 'Long COVID ist laut CDC eine chronische Erkrankung, die nach einer SARS-CoV-2-Infektion auftritt und mindestens 3 Monate besteht. Die Diagnose stellt eine Ärztin oder ein Arzt. Zebra hilft, Symptome, Belastungsgrenzen und Veränderungen über die Zeit festzuhalten.' },
    'me-cfs': { name: 'ME/CFS', summary: 'Eine schwere, oft langanhaltende Erkrankung, die Betroffene von ihren gewohnten Aktivitäten abhält.', definition: 'ME/CFS (Myalgische Enzephalomyelitis/Chronisches Fatigue-Syndrom) ist laut CDC eine schwere und oft langanhaltende Erkrankung, die Betroffene von ihren gewohnten Aktivitäten abhält. Als ein Hauptsymptom nennt die CDC die Verschlechterung nach schon geringer Anstrengung, die Post-Exertional Malaise (PEM). Die Diagnose stellt eine Ärztin oder ein Arzt. Zebra hilft, Symptome, Aktivität und Erholung festzuhalten.' },
    mcas: { name: 'MCAS', summary: 'Eine Overlap-Seite für schwankende Symptomverläufe, Auslöser und Kontext, der später oft schwer zu rekonstruieren ist.', definition: 'MCAS ist in Zebras Begriffsgraf als Overlap-Erkrankung enthalten, bei der Timing, Auslöser, Schübe und Symptomkontext oft genauso wichtig sind wie die Symptomliste.' },
    'brain-fog': { name: 'Brain Fog', summary: 'Beschwerden, die Denken, Erinnern und Konzentration beeinträchtigen.', definition: 'Brain Fog (Gehirnnebel) ist laut Cleveland Clinic eine häufige Gruppe von Beschwerden, die Denken, Erinnern und Konzentration beeinträchtigen. Er kann Tage, Wochen oder länger anhalten. Er ist keine eigene Diagnose. Zebra hält Check-ins kurz, damit Sie auch an Tagen mit schwerem Denken etwas festhalten können.' },
    fatigue: { name: 'Fatigue', summary: 'Ein Gefühl von Erschöpfung, Müdigkeit oder fehlender Energie.', definition: 'Fatigue ist laut MedlinePlus ein Gefühl von Erschöpfung, Müdigkeit oder fehlender Energie. Bei chronischer Erkrankung kann sie einschränken, was an einem Tag möglich ist. Zebra hilft, die Erschöpfung neben der Alltagsfunktion festzuhalten, damit sichtbar wird, was sie gekostet hat.' },
    dizziness: { name: 'Schwindel', summary: 'Ein Wort für zwei Beschwerden: Benommenheit oder Drehschwindel.', definition: 'Schwindel beschreibt laut MedlinePlus meist eine von zwei Beschwerden: Benommenheit, das Gefühl, gleich ohnmächtig zu werden, oder Drehschwindel, das Gefühl, dass Sie oder der Raum sich drehen. Welche davon und in welcher Position sie beginnt, hilft der Ärztin oder dem Arzt. Zebra hilft, sie mit Position und Zeitpunkt festzuhalten.' },
    lightheadedness: { name: 'Benommenheit', summary: 'Das Gefühl, gleich ohnmächtig zu werden.', definition: 'Benommenheit ist laut MedlinePlus das Gefühl, gleich ohnmächtig zu werden. Sie ist etwas anderes als Drehschwindel. Bei orthostatischen Beschwerden beginnt sie oft beim Aufstehen. Zebra hilft festzuhalten, wann sie auftritt und in welcher Position Sie waren.' },
    syncope: { name: 'Synkope', summary: 'Der medizinische Begriff für Ohnmacht.', definition: 'Synkope ist der medizinische Begriff für Ohnmacht: laut MedlinePlus ein kurzer Bewusstseinsverlust durch eine verminderte Durchblutung des Gehirns. Eine Ohnmacht sollte ärztlich abgeklärt werden. Zebra hilft festzuhalten, was davor und danach passiert ist.' },
    tachycardia: { name: 'Tachykardie', summary: 'Eine schnelle Herzfrequenz von mehr als 100 Schlägen pro Minute in Ruhe.', definition: 'Tachykardie bedeutet laut Cleveland Clinic eine schnelle Herzfrequenz von mehr als 100 Schlägen pro Minute in Ruhe. Üblich sind in Ruhe 60 bis 100. Was eine schnelle Herzfrequenz für Sie bedeutet, beurteilt eine Ärztin oder ein Arzt. Zebra hilft festzuhalten, wann sie auftritt und was gerade passiert ist.' },
    palpitations: { name: 'Palpitationen', summary: 'Herzschläge, die sich pochend, stolpernd oder unregelmäßig anfühlen.', definition: 'Herzklopfen kann sich laut Cleveland Clinic pochend, stolpernd oder wie eine falsche Zahl von Herzschlägen anfühlen. Es dauert meist einige Sekunden oder Minuten. Zebra hilft festzuhalten, wann es auftritt, in welcher Position und bei welcher Tätigkeit.' },
    'exercise-intolerance': { name: 'Belastungsintoleranz', summary: 'Eine eingeschränkte Fähigkeit zu körperlicher Aktivität.', definition: 'Belastungsintoleranz bedeutet laut Cleveland Clinic eine eingeschränkte Fähigkeit, körperlich aktiv zu sein, verglichen mit dem, was in Ihrem Alter üblich ist. Zebra setzt keine Aktivitätsziele. Die App hilft, Aktivität, Symptome und Erholung festzuhalten, damit das Muster sichtbar wird.' },
    pem: { name: 'PEM', summary: 'Eine Verschlechterung nach Anstrengung, oft 12 bis 48 Stunden später.', definition: 'Post-Exertional Malaise (PEM) ist laut CDC eine Verschlechterung der Symptome nach schon geringer körperlicher oder geistiger Anstrengung, die früher vertragen wurde. Die Symptome verschlechtern sich meist 12 bis 48 Stunden nach der Aktivität und können Tage oder Wochen anhalten. Zebra betrachtet deshalb auch den nächsten Tag und 2 bis 3 Tage später, nicht nur denselben Tag.' },
    'orthostatic-intolerance': { name: 'Orthostatische Intoleranz', summary: 'Beschwerden, die im Sitzen oder Stehen auftreten und im Liegen oft nachlassen. Positionsbezogenes Tracking hilft dabei besonders.', definition: 'Orthostatische Intoleranz beschreibt Beschwerden, die beim Aufstehen oder längeren Stehen auftreten und im Liegen oft nachlassen, etwa Schwindel, Herzklopfen oder Schwäche. Sie ist nicht dasselbe wie POTS oder ein Blutdruckabfall, auch wenn beides zusammen vorkommen kann. Im deutschen Fachtext wird dafür teils auch der Begriff orthostatische Dysregulation verwendet. Die Abklärung macht eine Ärztin oder ein Arzt. Zebra hilft, die Beschwerden mit Position, Zeitpunkt und Kontext festzuhalten.' },
    'orthostatic-test': { name: 'Orthostatischer Test', summary: 'Ein geführter Weg, Beobachtungen im Liegen, Stehen und in der Erholung zu erfassen, damit positionsbezogene Veränderungen mit dem Tag verbunden bleiben.', definition: 'Ein orthostatischer Test misst Herzfrequenz und Blutdruck im Liegen und nach dem Aufstehen, meist zu festgelegten Zeitpunkten. Ärztlich durchgeführt werden dafür etwa der Kipptischtest oder der aktive Stehtest. Zebra führt keinen medizinischen Test durch. Die App hilft, Ihre eigenen Beobachtungen im Liegen, Stehen und in der Erholung zu notieren, damit sie für den Termin nachvollziehbar bleiben.' },
    'orthostatic-hypotension': { name: 'Orthostatische Hypotonie', summary: 'Ein Blutdruckabfall beim Aufstehen, der Schwindel auslösen kann. Zebra hilft, Werte mit Symptomen und Kontext festzuhalten.', definition: 'Orthostatische Hypotonie bedeutet einen anhaltenden Blutdruckabfall beim Aufstehen: der systolische Wert sinkt um mindestens 20 mm Hg oder der diastolische um mindestens 10 mm Hg innerhalb von 3 Minuten. Das nennt das Positionspapier der American Society of Hypertension. Die Einordnung macht eine Ärztin oder ein Arzt. Zebra ordnet Ihre Messwerte mit Symptomen und Alltagskontext.' },
    'orthostatic-tachycardia': { name: 'Orthostatische Tachykardie', summary: 'Ein Anstieg der Herzfrequenz beim Wechsel vom Liegen zum Stehen.', definition: 'Orthostatische Tachykardie bedeutet einen Anstieg der Herzfrequenz beim Aufstehen. Ein anhaltender, deutlicher Anstieg mit Symptomen gehört zu den POTS-Kriterien: Der Konsens der Heart Rhythm Society nennt mindestens 30 Schläge pro Minute bei Erwachsenen und 40 bei 12- bis 19-Jährigen. Ein Anstieg allein ist keine Diagnose. Zebra hilft, die Herzfrequenz nach Position mit Symptomen und Kontext festzuhalten.' },
    hydration: { name: 'Hydration', summary: 'Die Flüssigkeit, die Sie über den Tag trinken.', definition: 'Hydration meint die Flüssigkeit, die Sie über den Tag trinken. Die Cleveland Clinic nennt Flüssigkeit in ihren allgemeinen Hinweisen zu POTS. Das passende Ziel ist individuell und wird mit Ärztin oder Arzt festgelegt. Zebra erfasst Wasser gegen Ihr eigenes Ziel.' },
    'salt-loading': { name: 'Salzaufnahme', summary: 'Mehr Salz im Rahmen eines Behandlungsplans, nicht für alle geeignet.', definition: 'Salzaufnahme meint hier mehr Salz im Rahmen eines Behandlungsplans. Laut Cleveland Clinic kann eine Ärztin oder ein Arzt bei der hypovolämischen Form von POTS mehr Flüssigkeit und Salz empfehlen. Manche Menschen müssen Salz wegen anderer Erkrankungen begrenzen. Zebra erfasst Salz gegen Ihr eigenes Ziel.' },
    'compression-garments': { name: 'Kompressionskleidung', summary: 'Eng anliegende Strümpfe, Leggings oder Bauchbinden.', definition: 'Kompressionskleidung umfasst eng anliegende Strümpfe, Strumpfhosen, Leggings oder Bauchbinden. Laut Cleveland Clinic kann Kompression helfen, Blut aus den Beinen nach oben zu drücken und POTS-Symptome zu verringern. Art und Stärke klären Sie mit Ärztin oder Arzt. Zebra hilft festzuhalten, wann Sie Kompression getragen haben und wie der Tag verlief.' },
    'medication-tracking': { name: 'Medikamenten-Tracking', summary: 'Was Sie einnehmen, wann, in welcher Dosis und was sich geändert hat.', definition: 'Medikamenten-Tracking bedeutet festzuhalten, was Sie einnehmen, in welcher Dosis und wann, dazu Änderungen und Nebenwirkungen. So sieht eine Ärztin oder ein Arzt, ob eine Änderung zeitlich zu Ihrem Befinden passt. Zebra hält Einnahmen und Änderungen im selben Verlauf wie Ihre Symptome fest.' },
    flare: { name: 'Schub', summary: 'Eine Phase, in der Symptome stärker als üblich sind und dann nachlassen.', definition: 'Ein Schub ist eine Phase, in der Symptome stärker als üblich werden und dann wieder nachlassen. Dauer und Auswirkung sind unterschiedlich. Zebra hilft festzuhalten, wann er begann, was sonst passierte und wie er Ihren Tag beeinflusst hat.' },
    'baseline-symptoms': { name: 'Baseline-Symptome', summary: 'Ihre üblichen Symptome an einem typischen Tag.', definition: 'Baseline-Symptome sind Ihre üblichen Symptome an einem typischen Tag. Ihre Baseline kann sich mit der Zeit ändern. Wer sie kennt, sieht leichter, was neu oder schlimmer ist. Zebra vergleicht Ihre letzten Wochen mit den Wochen davor.', practicalUse: { title: 'Was Sie zuerst notieren sollten', body: 'Eine Baseline ist am nützlichsten, wenn sie einfach und konkret ist. Sie muss nicht erklären, warum Symptome passieren. Sie soll festhalten, wie eine normale Woche aussieht, bevor sich etwas verändert.', items: ['Symptome, die auch an normalen Tagen meist da sind', 'Was für Schmerz, Schwindel, Fatigue, Brain Fog oder Herzsymptome schlimmer als normal bedeutet', 'Was Sie normalerweise tun können, etwa stehen, gehen, kochen, arbeiten oder das Haus verlassen', 'Medikamente, Salz, Wasser, Schlaf, Hitze oder Aktivität als Teil des üblichen Musters'] }, appointmentUse: { title: 'Wie es vor einem Arzttermin hilft', body: 'Der Nutzen im Termin ist der Vergleich. Statt den ganzen Monat aus dem Gedächtnis zu erklären, können Sie zeigen, was typisch war, was sich verändert hat und wann es begann.', items: ['Vor einem neuen Medikament oder einer Dosisveränderung nutzen', 'Nach einem Schub nutzen, damit die schlimmere Phase einen Vergleich hat', 'Vor einem Termin nutzen, wenn Symptome sich über mehrere Wochen verschoben haben'] } },
    trigger: { name: 'Auslöser', summary: 'Etwas, das Verschlechterungen oft vorausgeht, etwa Hitze, Stehen oder eine Mahlzeit.', definition: 'Ein Auslöser ist etwas, das einer Verschlechterung der Symptome vorauszugehen scheint, etwa Hitze, Stehen, eine Mahlzeit, schlechter Schlaf oder Stress. Vorausgehen heißt nicht verursachen. Zebra zeigt Muster in Ihren eigenen Einträgen und sagt, wenn es noch kein klares Muster gibt.' },
    'symptom-severity': { name: 'Symptomschwere', summary: 'Wie stark ein Symptom ist und was es Sie gekostet hat.', definition: 'Symptomschwere beschreibt, wie stark ein Symptom ist. Zebra nutzt für Schübe eine Skala von 1 bis 10 und lässt Sie ergänzen, was das Symptom verhindert hat, weil eine Zahl allein die Auswirkung verdecken kann.' },
    'quality-of-life': { name: 'Lebensqualität', summary: 'Wie Sie Ihre Lage im Leben einschätzen, gemessen an Ihren Zielen und Werten.', definition: 'Lebensqualität ist laut WHO die Wahrnehmung einer Person von ihrer Stellung im Leben, im Kontext ihrer Kultur und Werte und in Bezug auf ihre Ziele, Erwartungen, Maßstäbe und Anliegen. Bei chronischer Erkrankung können Symptome sie von Tag zu Tag verändern. Zebra hilft festzuhalten, wie sich Symptome praktisch auf Ihren Tag auswirken.' },
    'activities-of-daily-living': { name: 'Aktivitäten des täglichen Lebens', summary: 'Alltägliche Aufgaben wie Essen, Waschen, Anziehen und Fortbewegen.', definition: 'Aktivitäten des täglichen Lebens sind laut Cleveland Clinic Aufgaben, die wir zum Leben und Wohlbefinden erledigen, etwa Essen, Waschen, Anziehen und Fortbewegen. Dazu kommen Aufgaben wie Kochen, Einkaufen und Geldangelegenheiten. Wer festhält, was Symptome verhindert haben, zeigt der Ärztin oder dem Arzt, was sie kosten. Zebra hilft festzuhalten, was Sie tun konnten und was nicht.' },
    'doctor-ready-report': { name: 'Arztbereiter Bericht', summary: 'Eine strukturierte Zusammenfassung selbst eingegebener Symptomgeschichte, die Facharzttermine leichter prüfbar und besprechbar macht.', definition: 'Der arztbereite Bericht ist Zebras zentraler Nutzen: eine strukturierte Zusammenfassung aus Symptomen, Schüben, orthostatischen Beobachtungen, Medikamenten, Hydration, Notizen und Funktionskontext.' },
    'chronic-illness-appointment-prep': { name: 'Terminvorbereitung bei chronischer Krankheit', summary: 'Die Vorbereitung, die verstreute Symptome, Fragen und Medikamentenverlauf in eine terminbereite Zusammenfassung verwandelt.', definition: 'Terminvorbereitung bei chronischer Krankheit ist der Workflow, Symptomveränderungen, Fragen, Funktionsauswirkungen und Medikamentenkontext vor einem Facharzttermin zu ordnen.' },
    'functional-impact': { name: 'Funktionelle Auswirkung', summary: 'Was Symptome im Alltag tatsächlich verändert haben, etwa Arbeit, Bewegung, Fahren, Konzentration oder Routinen.', definition: 'Funktionelle Auswirkung ist der Teil des Verlaufs, der erklärt, was Symptome im echten Leben verändert haben, nicht nur welche Symptome existierten.' },
    'health-history': { name: 'Gesundheitsverlauf', summary: 'Der geordnete Verlauf von Symptomen, Routinen, Medikamentenänderungen und Timeline-Kontext, der Termine mit klarerer Ausgangslage beginnen lässt.', definition: 'Gesundheitsverlauf ist die langfristige Aufzeichnung dessen, was passiert ist, was sich verändert hat und welcher Kontext zu diesen Veränderungen gehörte.' },
    'invisible-illness': { name: 'Unsichtbare Krankheit', summary: 'Eine ernste Erkrankung, deren Symptome andere nicht sehen.', definition: 'Eine unsichtbare Krankheit ist eine ernste Erkrankung, deren Symptome für andere nicht offensichtlich sind, etwa Schmerzen, Erschöpfung oder Schwindel. Weil andere sie nicht sehen, ist sie oft schwer zu erklären. Zebra hilft, einen datierten Verlauf zu führen, den Sie zeigen können.' },
  },
  'es-es': {
    pots: { name: 'POTS', summary: '¿Qué es el POTS? Al ponerse de pie el pulso sube de forma marcada, a menudo con mareo o palpitaciones. Zebra ayuda a registrar ese patrón.', definition: 'El POTS (síndrome de taquicardia postural ortostática) describe que el pulso sube de forma marcada al ponerse de pie, con síntomas como mareo, palpitaciones o cansancio. Según el consenso de la Heart Rhythm Society, el criterio habitual es un aumento de al menos 30 latidos por minuto al pasar de tumbado a de pie (40 en personas de 12 a 19 años), junto con síntomas. El diagnóstico lo hace un médico. Zebra registra sus observaciones a lo largo del tiempo.' },
    dysautonomia: { name: 'Disautonomía', summary: 'Un trastorno del sistema nervioso autónomo, que regula procesos automáticos como el pulso y la presión arterial.', definition: 'Según Cleveland Clinic, la disautonomía es un trastorno del sistema nervioso que altera los procesos autónomos del cuerpo. Son procesos que el cuerpo regula sin control consciente, como el pulso y la presión arterial. El POTS es una de sus formas. El diagnóstico lo hace un médico. Zebra ayuda a reunir síntomas, cambios de posición y notas de citas en un mismo historial.' },
    eds: { name: 'EDS', summary: 'Los síndromes de Ehlers-Danlos son 13 trastornos hereditarios del tejido conectivo. La hipermovilidad articular es común en todos los tipos. Zebra ayuda a reunir los síntomas solapados en un historial.', definition: 'Según la Ehlers-Danlos Society y la clasificación internacional de 2017, los síndromes de Ehlers-Danlos (SED) son un grupo de 13 trastornos hereditarios del tejido conectivo. Entre los rasgos comunes a los distintos tipos están la hipermovilidad articular, una piel que se estira más de lo habitual y la fragilidad de los tejidos. El diagnóstico lo hace un médico. Zebra no diagnostica el SED: ayuda a reunir síntomas, brotes y notas de citas en un mismo historial.' },
    heds: { name: 'hEDS', summary: 'El SED hipermóvil causa hipermovilidad e inestabilidad articular y dolor crónico. Todavía no existe una prueba de laboratorio.', definition: 'Según la Ehlers-Danlos Society, el síndrome de Ehlers-Danlos hipermóvil (SEDh) es un trastorno hereditario del tejido conectivo que causa hipermovilidad articular generalizada, inestabilidad articular y dolor crónico. Su causa no se ha identificado y no existe una prueba de laboratorio para diagnosticarlo. Un médico lo diagnostica con criterios clínicos. Zebra ayuda a reunir dolor, síntomas articulares, brotes y notas de citas.' },
    fibromyalgia: { name: 'Fibromialgia', summary: 'Una enfermedad de larga duración con dolor en todo el cuerpo, cansancio y otros síntomas.', definition: 'Según MedlinePlus, la fibromialgia es una enfermedad crónica que causa dolor en todo el cuerpo, cansancio y otros síntomas. El diagnóstico lo hace un médico. Zebra ayuda a reunir dolor, brotes y función diaria en un mismo historial para las citas.' },
    'long-covid': { name: 'Long COVID', summary: 'Una enfermedad crónica tras una infección por COVID-19 que dura al menos 3 meses.', definition: 'Según los CDC, el COVID persistente es una enfermedad crónica que aparece después de una infección por SARS-CoV-2 y dura al menos 3 meses. El diagnóstico lo hace un médico. Zebra ayuda a registrar síntomas, límites de energía y cambios a lo largo del tiempo.' },
    'me-cfs': { name: 'ME/CFS', summary: 'Una enfermedad grave y a menudo duradera que impide hacer las actividades habituales.', definition: 'Según los CDC, la EM/SFC (encefalomielitis miálgica/síndrome de fatiga crónica) es una enfermedad grave y a menudo duradera que impide hacer las actividades habituales. Los CDC señalan como síntoma principal el empeoramiento tras un esfuerzo incluso leve, llamado malestar post-esfuerzo (PEM). El diagnóstico lo hace un médico. Zebra ayuda a registrar síntomas, actividad y recuperación.' },
    mcas: { name: 'MCAS', summary: 'Página de condición solapada para patrones fluctuantes, desencadenantes y contexto que suele ser dificil reconstruir después.', definition: 'MCAS aparece en el grafo de Zebra como condición solapada donde el momento, los desencadenantes, los brotes y el contexto pueden importar tanto como la lista de síntomas.' },
    'brain-fog': { name: 'Niebla mental', summary: 'Síntomas que afectan a cómo se piensa, se recuerda y se concentra.', definition: 'Según Cleveland Clinic, la niebla mental es un grupo frecuente de síntomas que afectan a cómo se piensa, se recuerda y se concentra. Puede durar días, semanas o más. No es un diagnóstico por sí sola. Zebra mantiene los registros cortos para que también se pueda anotar un día en que pensar cuesta.' },
    fatigue: { name: 'Fatiga', summary: 'Sensación de agotamiento, cansancio o falta de energía.', definition: 'Según MedlinePlus, la fatiga es una sensación de agotamiento, cansancio o falta de energía. En una enfermedad crónica puede limitar lo que se puede hacer en un día. Zebra ayuda a registrar la fatiga junto a la función diaria, para que se vea lo que ha costado.' },
    dizziness: { name: 'Mareo', summary: 'Una palabra para dos síntomas: aturdimiento o vértigo.', definition: 'Según MedlinePlus, el mareo suele describir uno de dos síntomas: el aturdimiento, la sensación de que uno se va a desmayar, o el vértigo, la sensación de que uno mismo o la habitación da vueltas. Anotar cuál es y en qué posición empieza ayuda al médico. Zebra ayuda a registrarlo con la posición y el momento.' },
    lightheadedness: { name: 'Aturdimiento', summary: 'La sensación de que uno se va a desmayar.', definition: 'Según MedlinePlus, el aturdimiento es la sensación de que uno se va a desmayar. Es distinto del vértigo, la sensación de dar vueltas. En los problemas ortostáticos suele empezar al ponerse de pie. Zebra ayuda a registrar cuándo ocurre y en qué posición.' },
    syncope: { name: 'Sincope', summary: 'El nombre médico del desmayo.', definition: 'Síncope es el nombre médico del desmayo: según MedlinePlus, una pérdida breve del conocimiento por una disminución del flujo de sangre al cerebro. Un desmayo debe valorarlo un médico. Zebra ayuda a registrar qué pasó antes y después.' },
    tachycardia: { name: 'Taquicardia', summary: 'Un pulso rápido de más de 100 latidos por minuto en reposo.', definition: 'Según Cleveland Clinic, la taquicardia es un pulso rápido de más de 100 latidos por minuto en reposo. Lo habitual en reposo es de 60 a 100. Un médico valora qué significa un pulso rápido en cada caso. Zebra ayuda a registrar cuándo ocurre y qué estaba pasando.' },
    palpitations: { name: 'Palpitaciones', summary: 'Latidos que se sienten fuertes, como un vuelco o irregulares.', definition: 'Según Cleveland Clinic, las palpitaciones pueden sentirse como golpes, vuelcos o un número incorrecto de latidos. Suelen durar unos segundos o minutos. Zebra ayuda a registrar cuándo ocurren, en qué posición y durante qué actividad.' },
    'exercise-intolerance': { name: 'Intolerancia al ejercicio', summary: 'Una capacidad limitada para la actividad física.', definition: 'Según Cleveland Clinic, la intolerancia al ejercicio es una capacidad limitada para hacer actividad física en comparación con lo habitual para la edad. Zebra no fija objetivos de actividad. Ayuda a registrar actividad, síntomas y recuperación para que se vea el patrón.' },
    pem: { name: 'PEM', summary: 'Un empeoramiento tras el esfuerzo, a menudo de 12 a 48 horas después.', definition: 'Según los CDC, el malestar post-esfuerzo (PEM) es un empeoramiento de los síntomas tras un esfuerzo físico o mental incluso leve que antes se toleraba. Los síntomas suelen empeorar entre 12 y 48 horas después de la actividad y pueden durar días o semanas. Por eso Zebra mira también el día siguiente y 2 o 3 días después, no solo el mismo día.' },
    'orthostatic-intolerance': { name: 'Intolerancia ortostática', summary: 'Síntomas que aparecen al estar sentada o de pie y mejoran al tumbarse. El registro por posición ayuda mucho.', definition: 'La intolerancia ortostática describe síntomas que aparecen al estar sentada o de pie y mejoran al tumbarse. No es lo mismo que el POTS ni que una caída de la presión arterial, aunque pueden aparecer juntos. La evaluación la hace un médico. Zebra ayuda a registrar los síntomas con posición, momento y contexto.' },
    'orthostatic-test': { name: 'Test ortostático', summary: 'Forma guiada de registrar observaciones tumbada, de pie y de recuperación para mantener los cambios por posición conectados al día.', definition: 'Una prueba ortostática, también llamada prueba de ortostatismo, mide la frecuencia cardíaca y la presión arterial en posición horizontal y después de ponerse de pie, normalmente en momentos fijos. Un clínico la realiza con pruebas como la prueba en mesa de inclinación o la prueba de bipedestación activa. Zebra no realiza ninguna prueba médica. La app ayuda a anotar las observaciones en posición horizontal, de pie y durante la recuperación, para que sigan siendo claras en la cita.' },
    'orthostatic-hypotension': { name: 'Hipotensión ortostática', summary: 'Una caída de la presión arterial al cambiar de postura, que puede causar mareo. Zebra ayuda a anotar las cifras con su contexto.', definition: 'La hipotensión ortostática es una caída sostenida de la presión arterial al ponerse de pie: la sistólica baja al menos 20 mm Hg o la diastólica al menos 10 mm Hg en 3 minutos. Así lo describe el documento de posición de la American Society of Hypertension. La valoración la hace un médico. Zebra ordena sus cifras junto con los síntomas y el contexto.' },
    'orthostatic-tachycardia': { name: 'Taquicardia ortostática', summary: 'Un aumento del pulso al pasar de la posición horizontal a estar de pie.', definition: 'La taquicardia ortostática es un aumento del pulso al ponerse de pie. Un aumento marcado y sostenido con síntomas forma parte de los criterios del POTS: el consenso de la Heart Rhythm Society usa al menos 30 latidos por minuto en adultos y 40 entre los 12 y los 19 años. Un aumento por sí solo no es un diagnóstico. Zebra ayuda a registrar el pulso por posición con síntomas y contexto.' },
    hydration: { name: 'Hidratación', summary: 'Los líquidos que bebes a lo largo del día.', definition: 'La hidratación son los líquidos que bebes a lo largo del día. Cleveland Clinic incluye los líquidos en sus pautas generales para el POTS. El objetivo adecuado es individual y se fija con un médico. Zebra registra el agua frente a tu propio objetivo.' },
    'salt-loading': { name: 'Aporte de sal', summary: 'Más sal dentro de un plan de tratamiento, no apto para todos.', definition: 'El aporte de sal es, aquí, tomar más sal dentro de un plan de tratamiento. Según Cleveland Clinic, en la forma hipovolémica del POTS un médico puede sugerir más líquidos y sal. Algunas personas deben limitar la sal por otras enfermedades. Zebra registra la sal frente a tu propio objetivo.' },
    'compression-garments': { name: 'Prendas de compresión', summary: 'Medias, mallas o fajas abdominales ajustadas.', definition: 'Las prendas de compresión son medias, mallas, leggings o fajas abdominales ajustadas. Según Cleveland Clinic, la compresión puede ayudar a empujar la sangre desde las piernas hacia arriba y reducir los síntomas del POTS. El tipo y la presión se eligen con un médico. Zebra te ayuda a anotar cuándo la usaste y cómo fue el día.' },
    'medication-tracking': { name: 'Registro de medicación', summary: 'Qué tomas, cuándo, en qué dosis y qué ha cambiado.', definition: 'El registro de medicación es anotar qué tomas, en qué dosis y cuándo, además de los cambios y los efectos secundarios. Así un médico puede ver si un cambio coincidió con cómo te sentías. Zebra guarda las tomas y los cambios en el mismo historial que tus síntomas.' },
    flare: { name: 'Brote', summary: 'Un periodo en que los síntomas empeoran más de lo habitual y luego ceden.', definition: 'Un brote es un periodo en que los síntomas empeoran más de lo habitual y luego ceden. Su duración y su impacto varían. Zebra te ayuda a anotar cuándo empezó, qué más pasaba y cómo afectó a tu día.' },
    'baseline-symptoms': { name: 'Síntomas de referencia', summary: 'Tus síntomas habituales en un día típico.', definition: 'Los síntomas de referencia son tus síntomas habituales en un día típico. Tu referencia puede cambiar con el tiempo. Conocerla ayuda a ver qué es nuevo o peor. Zebra compara tus últimas semanas con las anteriores.', practicalUse: { title: 'Que escribir primero', body: 'Una referencia es más útil cuando es clara y concreta. No necesita explicar por que ocurren los síntomas; solo capturar como suele ser una semana normal antes de que algo cambie.', items: ['Síntomas que suelen estar presentes incluso en un día normal', 'Que cuenta como peor de lo normal para dolor, mareo, fatiga, niebla mental o síntomas cardiacos', 'Que puedes hacer normalmente, como estar de pie, caminar, cocinar, trabajar o salir de casa', 'Contexto habitual de medicación, sal, agua, sueño, calor o actividad'] }, appointmentUse: { title: 'Como ayuda antes de una cita', body: 'El valor en la cita es el contraste. En vez de explicar todo el mes de memoria, puedes senalar qué era típico, qué cambió y cuándo empezó.', items: ['Usarlo antes de una nueva medicación o cambio de dosis', 'Usarlo después de un brote para comparar la fase peor', 'Usarlo antes de una cita si los síntomas llevan semanas cambiando'] } },
    trigger: { name: 'Desencadenante', summary: 'Algo que suele ir antes de un empeoramiento, como el calor, estar de pie o una comida.', definition: 'Un desencadenante es algo que parece ir antes de un empeoramiento de los síntomas, como el calor, estar de pie, una comida, dormir mal o el estrés. Ir antes no es lo mismo que causar. Zebra muestra patrones en tus propios registros y te dice cuando todavía no ve uno claro.' },
    'symptom-severity': { name: 'Gravedad del síntoma', summary: 'Lo fuerte que es un síntoma y lo que te ha costado.', definition: 'La gravedad del síntoma es lo fuerte que es. Zebra usa una escala del 1 al 10 para los brotes y te deja añadir lo que el síntoma te impidió hacer, porque un número solo puede ocultar el impacto.' },
    'quality-of-life': { name: 'Calidad de vida', summary: 'Cómo valoras tu posición en la vida según tus metas y valores.', definition: 'Según la OMS, la calidad de vida es la percepción que una persona tiene de su posición en la vida, en el contexto de su cultura y sus valores, y en relación con sus metas, expectativas, normas e inquietudes. En una enfermedad crónica, los síntomas pueden cambiarla de un día a otro. Zebra te ayuda a registrar el efecto práctico de los síntomas en tu día.' },
    'activities-of-daily-living': { name: 'Actividades de la vida diaria', summary: 'Tareas diarias como comer, asearse, vestirse y desplazarse.', definition: 'Según Cleveland Clinic, las actividades de la vida diaria son las tareas que hacemos para vivir y estar bien, como comer, asearse, vestirse y desplazarse. También hay tareas como cocinar, hacer la compra y llevar el dinero. Anotar lo que los síntomas te impidieron hacer muestra al médico lo que cuestan. Zebra te ayuda a registrar lo que pudiste hacer y lo que no.' },
    'doctor-ready-report': { name: 'Informe para el médico', summary: 'Resumen estructurado del historial de síntomas introducido por la persona para facilitar revisar y hablar en citas.', definition: 'El informe para el médico es el resultado central de Zebra: un resumen estructurado creado desde síntomas, brotes, observaciones ortostáticas, medicación, hidratación, notas y función.' },
    'chronic-illness-appointment-prep': { name: 'Preparación de citas con enfermedad crónica', summary: 'Trabajo de planificación que convierte síntomas, preguntas e historial de medicación dispersos en un resumen listo para la visita.', definition: 'La preparación de citas con enfermedad crónica es el flujo de organizar cambios de síntomas, preguntas, impacto funcional y medicación antes de una cita con especialista.' },
    'functional-impact': { name: 'Impacto funcional', summary: 'Lo que los síntomas cambiaron realmente en la vida diaria, como trabajo, movimiento, conducir, concentración o rutinas.', definition: 'Impacto funcional es la parte del historial que explica qué cambiaron los síntomas en la vida real, no solo qué síntomas existían.' },
    'health-history': { name: 'Historial de salud', summary: 'Registro organizado de síntomas, rutinas, cambios de medicación y contexto temporal que ayuda a empezar las citas con una base más clara.', definition: 'Historial de salud es el registro a largo plazo de qué pasó, qué cambió y qué contexto pertenecía a esos cambios durante semanas o meses.' },
    'invisible-illness': { name: 'Enfermedad invisible', summary: 'Una enfermedad seria cuyos síntomas no ven los demás.', definition: 'Una enfermedad invisible es una enfermedad seria cuyos síntomas no son evidentes para los demás, como el dolor, el cansancio o el mareo. Como no se ve, suele ser difícil de explicar. Zebra te ayuda a llevar un historial con fechas que puedes mostrar.' },
  },
  'fr-fr': {
    pots: { name: 'POTS', summary: 'En position debout, le pouls monte nettement, souvent avec vertiges ou palpitations. Zebra aide à noter ce schéma.', definition: 'Le syndrome de POTS, ou syndrome de tachycardie posturale orthostatique, décrit une hausse nette du pouls en position debout, avec des symptômes comme vertiges, palpitations ou fatigue. Selon le consensus de la Heart Rhythm Society, le critère habituel est une hausse d’au moins 30 battements par minute en passant de l’allongement à la station debout (40 chez les 12 à 19 ans), avec des symptômes. Le diagnostic relève d’un médecin. Zebra note vos observations dans la durée.' },
    dysautonomia: { name: 'Dysautonomie', summary: 'Un trouble du système nerveux autonome, qui règle des fonctions automatiques comme le pouls et la tension.', definition: 'Selon la Cleveland Clinic, la dysautonomie est un trouble du système nerveux qui perturbe les fonctions autonomes du corps. Ce sont des fonctions réglées sans contrôle conscient, comme le pouls et la tension artérielle. Le POTS en est une forme. Le diagnostic relève d’un médecin. Zebra aide à réunir symptômes, changements de position et notes de rendez-vous dans un même historique.' },
    eds: { name: 'SED', summary: 'Les syndromes d’Ehlers-Danlos regroupent 13 maladies héréditaires du tissu conjonctif. L’hypermobilité articulaire est fréquente dans tous les types. Zebra aide à réunir les symptômes qui se chevauchent dans un même historique.', definition: 'Selon l’Ehlers-Danlos Society et la classification internationale de 2017, les syndromes d’Ehlers-Danlos (SED) sont un groupe de 13 maladies héréditaires du tissu conjonctif. Parmi les signes communs aux différents types : une hypermobilité articulaire, une peau plus extensible que la normale et une fragilité des tissus. Le diagnostic relève d’un médecin. Zebra ne pose pas de diagnostic : l’application aide à réunir symptômes, poussées et notes de rendez-vous dans un même historique.' },
    heds: { name: 'hEDS', summary: 'Le SED hypermobile entraîne une hypermobilité et une instabilité articulaires et des douleurs chroniques. Il n’existe pas encore de test de laboratoire.', definition: 'Selon l’Ehlers-Danlos Society, le syndrome d’Ehlers-Danlos hypermobile (SEDh) est une maladie héréditaire du tissu conjonctif qui entraîne une hypermobilité articulaire généralisée, une instabilité articulaire et des douleurs chroniques. Sa cause n’a pas été identifiée et aucun test de laboratoire ne permet de le diagnostiquer. Un médecin pose le diagnostic à partir de critères cliniques. Zebra aide à réunir douleurs, symptômes articulaires, poussées et notes de rendez-vous.' },
    fibromyalgia: { name: 'Fibromyalgie', summary: 'Une maladie de longue durée avec des douleurs dans tout le corps, de la fatigue et d’autres symptômes.', definition: 'Selon MedlinePlus, la fibromyalgie est une maladie chronique qui provoque des douleurs dans tout le corps, de la fatigue et d’autres symptômes. Le diagnostic relève d’un médecin. Zebra aide à réunir douleurs, poussées et fonctionnement quotidien dans un même historique pour les rendez-vous.' },
    'long-covid': { name: 'Long COVID', summary: 'Une maladie chronique après une infection au COVID-19, présente depuis au moins 3 mois.', definition: 'Selon les CDC, le COVID long est une maladie chronique qui survient après une infection au SARS-CoV-2 et persiste au moins 3 mois. Le diagnostic relève d’un médecin. Zebra aide à noter symptômes, limites d’énergie et changements au fil du temps.' },
    'me-cfs': { name: 'ME/CFS', summary: 'Une maladie grave et souvent durable qui empêche de mener ses activités habituelles.', definition: 'Selon les CDC, l’EM/SFC (encéphalomyélite myalgique/syndrome de fatigue chronique) est une maladie grave et souvent durable qui empêche de mener ses activités habituelles. Les CDC citent parmi les symptômes principaux l’aggravation après un effort même léger, appelée malaise post-effort (PEM). Le diagnostic relève d’un médecin. Zebra aide à noter symptômes, activité et récupération.' },
    mcas: { name: 'MCAS', summary: 'Page de condition qui se chevauche pour schemas fluctuants, declencheurs et contexte souvent difficile a reconstruire.', definition: 'MCAS figure dans le graphe Zebra comme condition de chevauchement ou timing, declencheurs, poussees et contexte comptent souvent autant que la liste de symptômes.' },
    'brain-fog': { name: 'Brouillard mental', summary: 'Des symptômes qui touchent la réflexion, la mémoire et la concentration.', definition: 'Selon la Cleveland Clinic, le brouillard cérébral est un ensemble fréquent de symptômes qui touchent la réflexion, la mémoire et la concentration. Il peut durer des jours, des semaines ou plus. Ce n’est pas un diagnostic en soi. Zebra garde les saisies courtes pour qu’on puisse noter même un jour où réfléchir est difficile.' },
    fatigue: { name: 'Fatigue', summary: 'Une sensation d’épuisement, de lassitude ou de manque d’énergie.', definition: 'Selon MedlinePlus, la fatigue est une sensation d’épuisement, de lassitude ou de manque d’énergie. Dans une maladie chronique, elle peut limiter ce qu’on peut faire dans une journée. Zebra aide à noter la fatigue à côté du fonctionnement quotidien, pour montrer ce qu’elle a coûté.' },
    dizziness: { name: 'Vertiges', summary: 'Un mot pour deux symptômes : étourdissement ou vertige rotatoire.', definition: 'Selon MedlinePlus, le mot « vertige » désigne souvent l’un de deux symptômes : l’étourdissement, la sensation qu’on va s’évanouir, ou le vertige rotatoire, la sensation que l’on tourne ou que la pièce tourne. Noter lequel, et dans quelle position il commence, aide le médecin. Zebra aide à le noter avec la position et le moment.' },
    lightheadedness: { name: 'Etourdissement', summary: 'La sensation qu’on va s’évanouir.', definition: 'Selon MedlinePlus, l’étourdissement est la sensation qu’on va s’évanouir. Il se distingue du vertige rotatoire, la sensation de tourner. Dans les troubles orthostatiques, il commence souvent au passage debout. Zebra aide à noter quand il survient et dans quelle position.' },
    syncope: { name: 'Syncope', summary: 'Le terme médical pour l’évanouissement.', definition: 'La syncope est le terme médical pour l’évanouissement : selon MedlinePlus, une brève perte de connaissance due à une baisse du flux sanguin vers le cerveau. Un évanouissement doit être évalué par un médecin. Zebra aide à noter ce qui s’est passé avant et après.' },
    tachycardia: { name: 'Tachycardie', summary: 'Un pouls rapide de plus de 100 battements par minute au repos.', definition: 'Selon la Cleveland Clinic, la tachycardie est un pouls rapide de plus de 100 battements par minute au repos. Au repos, la fréquence habituelle est de 60 à 100. C’est au médecin d’évaluer ce qu’un pouls rapide signifie dans chaque cas. Zebra aide à noter quand cela arrive et ce qui se passait.' },
    palpitations: { name: 'Palpitations', summary: 'Des battements de cœur ressentis comme forts, irréguliers ou en désordre.', definition: 'Selon la Cleveland Clinic, les palpitations peuvent se ressentir comme des coups, des ratés ou un nombre anormal de battements. Elles durent en général quelques secondes ou minutes. Zebra aide à noter quand elles surviennent, dans quelle position et pendant quelle activité.' },
    'exercise-intolerance': { name: 'Intolérance a l effort', summary: 'Une capacité limitée à faire une activité physique.', definition: 'Selon la Cleveland Clinic, l’intolérance à l’effort est une capacité limitée à faire une activité physique par rapport à ce qui est habituel à son âge. Zebra ne fixe pas d’objectifs d’activité. L’application aide à noter activité, symptômes et récupération, pour que le schéma apparaisse.' },
    pem: { name: 'PEM', summary: 'Une aggravation après un effort, souvent 12 à 48 heures plus tard.', definition: 'Selon les CDC, le malaise post-effort (PEM) est une aggravation des symptômes après un effort physique ou mental même léger, qui était toléré auparavant. Les symptômes s’aggravent en général 12 à 48 heures après l’activité et peuvent durer des jours ou des semaines. C’est pourquoi Zebra regarde aussi le lendemain et 2 à 3 jours plus tard, pas seulement le jour même.' },
    'orthostatic-intolerance': { name: 'Intolérance orthostatique', summary: 'Symptômes qui apparaissent assis ou debout et s’atténuent souvent allongé. Le suivi par position est particulièrement utile.', definition: 'L’intolérance orthostatique désigne des symptômes qui apparaissent assis ou debout et s’atténuent allongé. Elle ne se confond ni avec le POTS ni avec une chute de tension, même si elles peuvent coexister. L’évaluation relève d’un médecin. Zebra aide à noter ces symptômes avec la position, le moment et le contexte.' },
    'orthostatic-test': { name: 'Test orthostatique', summary: 'Méthode guidée pour noter les observations allongée, debout et en récupération, afin que les changements selon la position restent liés à la journée.', definition: 'Un test orthostatique mesure la fréquence cardiaque et la tension artérielle en position allongée puis après le passage debout, généralement à des moments fixés. Le médecin le réalise avec des examens comme le test de bascule ou le test debout actif. Zebra ne réalise aucun examen médical. L’application aide à noter les observations en position allongée, debout et en récupération, pour qu’elles restent claires lors de la consultation.' },
    'orthostatic-hypotension': { name: 'Hypotension orthostatique', summary: 'Une chute de tension au changement de position, qui peut donner des vertiges. Zebra aide à noter les chiffres avec leur contexte.', definition: 'L’hypotension orthostatique est une chute soutenue de la tension artérielle au passage debout : la systolique baisse d’au moins 20 mm Hg ou la diastolique d’au moins 10 mm Hg dans les 3 minutes. Ainsi la décrit le document de position de l’American Society of Hypertension. L’évaluation relève d’un médecin. Zebra ordonne vos chiffres avec les symptômes et le contexte.' },
    'orthostatic-tachycardia': { name: 'Tachycardie orthostatique', summary: 'Une hausse du pouls au passage de la position allongée à la position debout.', definition: 'La tachycardie orthostatique est une hausse du pouls au passage debout. Une hausse nette et durable avec des symptômes fait partie des critères du POTS : le consensus de la Heart Rhythm Society retient au moins 30 battements par minute chez l’adulte et 40 entre 12 et 19 ans. Une hausse seule n’est pas un diagnostic. Zebra aide à noter le pouls selon la position, avec les symptômes et le contexte.' },
    hydration: { name: 'Hydratation', summary: 'Les liquides que vous buvez au fil de la journée.', definition: 'L’hydratation désigne les liquides que vous buvez au fil de la journée. La Cleveland Clinic inclut les liquides dans ses conseils généraux pour le POTS. L’objectif adapté est individuel et se fixe avec un médecin. Zebra suit l’eau par rapport à votre propre objectif.' },
    'salt-loading': { name: 'Apport en sel', summary: 'Plus de sel dans le cadre d’un traitement, pas adapté à tout le monde.', definition: 'L’apport en sel désigne ici le fait de prendre plus de sel dans le cadre d’un traitement. Selon la Cleveland Clinic, dans la forme hypovolémique du POTS, un médecin peut proposer plus de liquides et de sel. Certaines personnes doivent limiter le sel à cause d’autres maladies. Zebra suit le sel par rapport à votre propre objectif.' },
    'compression-garments': { name: 'Vêtements de compression', summary: 'Bas, collants, leggings ou ceintures abdominales ajustés.', definition: 'Les vêtements de compression sont des bas, collants, leggings ou ceintures abdominales ajustés. Selon la Cleveland Clinic, la compression peut aider à faire remonter le sang des jambes et à réduire les symptômes du POTS. Le type et la pression se choisissent avec un médecin. Zebra vous aide à noter quand vous l’avez portée et comment s’est passée la journée.' },
    'medication-tracking': { name: 'Suivi des médicaments', summary: 'Ce que vous prenez, quand, à quelle dose, et ce qui a changé.', definition: 'Le suivi des médicaments consiste à noter ce que vous prenez, à quelle dose et quand, ainsi que les changements et les effets indésirables. Un médecin peut ainsi voir si un changement coïncide avec votre état. Zebra garde les prises et les changements dans le même historique que vos symptômes.' },
    flare: { name: 'Poussée', summary: 'Une période où les symptômes s’aggravent plus que d’habitude, puis s’atténuent.', definition: 'Une poussée est une période où les symptômes s’aggravent plus que d’habitude, puis s’atténuent. Sa durée et son impact varient. Zebra vous aide à noter quand elle a commencé, ce qui se passait autour et comment elle a touché votre journée.' },
    'baseline-symptoms': { name: 'Symptômes de référence', summary: 'Vos symptômes habituels un jour ordinaire.', definition: 'Les symptômes de référence sont vos symptômes habituels un jour ordinaire. Votre référence peut changer avec le temps. La connaître aide à voir ce qui est nouveau ou pire. Zebra compare vos dernières semaines aux semaines précédentes.', practicalUse: { title: 'Quoi noter en premier', body: 'Une reference est plus utile quand elle est simple et précise. Elle n a pas besoin d expliquer pourquoi les symptômes arrivent; elle doit seulement capturer a quoi ressemble une semaine normale avant un changement.', items: ['Symptômes habituellement presents meme un jour ordinaire', 'Ce qui compte comme pire que d habitude pour douleur, vertiges, fatigue, brouillard mental ou symptômes cardiaques', 'Ce que vous pouvez faire d habitude, comme rester debout, marcher, cuisiner, travailler ou sortir', 'Contexte habituel de médicaments, sel, eau, sommeil, chaleur ou activité'] }, appointmentUse: { title: 'Comment cela aide avant un rendez-vous', body: 'La valeur en consultation est le contraste. Au lieu d expliquer tout le mois de mémoire, vous pouvez montrer ce qui etait typique, ce qui a change et quand cela a commence.', items: ['L utiliser avant un nouveau médicament ou changement de dose', 'L utiliser après une poussee pour comparer la phase plus difficile', 'L utiliser avant un rendez-vous si les symptômes bougent depuis plusieurs semaines'] } },
    trigger: { name: 'Déclencheur', summary: 'Quelque chose qui précède souvent une aggravation, comme la chaleur, la station debout ou un repas.', definition: 'Un déclencheur est quelque chose qui semble précéder une aggravation des symptômes, comme la chaleur, la station debout, un repas, un mauvais sommeil ou le stress. Précéder n’est pas causer. Zebra montre les schémas de vos propres saisies et vous dit quand il n’en voit pas encore de clair.' },
    'symptom-severity': { name: 'Sévérité du symptôme', summary: 'L’intensité d’un symptôme et ce qu’il vous a coûté.', definition: 'La sévérité d’un symptôme est son intensité. Zebra utilise une échelle de 1 à 10 pour les poussées et vous laisse ajouter ce que le symptôme vous a empêché de faire, car un chiffre seul peut masquer l’impact.' },
    'quality-of-life': { name: 'Qualité de vie', summary: 'La façon dont vous percevez votre place dans la vie, selon vos objectifs et vos valeurs.', definition: 'Selon l’OMS, la qualité de vie est la perception qu’a une personne de sa place dans la vie, dans le contexte de sa culture et de ses valeurs, et par rapport à ses objectifs, attentes, normes et préoccupations. Dans une maladie chronique, les symptômes peuvent la modifier d’un jour à l’autre. Zebra vous aide à noter l’effet concret des symptômes sur votre journée.' },
    'activities-of-daily-living': { name: 'Activités de la vie quotidienne', summary: 'Les tâches quotidiennes comme manger, se laver, s’habiller et se déplacer.', definition: 'Selon la Cleveland Clinic, les activités de la vie quotidienne sont les tâches que nous faisons pour vivre et rester en forme, comme manger, se laver, s’habiller et se déplacer. S’y ajoutent des tâches comme cuisiner, faire les courses et gérer l’argent. Noter ce que les symptômes vous ont empêché de faire montre au médecin ce qu’ils coûtent. Zebra vous aide à noter ce que vous avez pu faire ou non.' },
    'doctor-ready-report': { name: 'Rapport pour le médecin', summary: 'Résumé structuré de l’historique des symptômes saisi par la personne, pour faciliter la relecture et la discussion en consultation.', definition: 'Le rapport pour le médecin est le résultat central de Zebra : un résumé structuré construit à partir des symptômes, poussées, observations orthostatiques, médicaments, hydratation, notes et fonction.' },
    'chronic-illness-appointment-prep': { name: 'Préparation de rendez-vous avec maladie chronique', summary: 'Travail de préparation qui transforme symptômes, questions et historique de médicaments éparpillés en résumé prêt pour la visite.', definition: 'La préparation de rendez-vous avec maladie chronique consiste à organiser les changements de symptômes, les questions, l’impact fonctionnel et le contexte médicamenteux avant une consultation spécialisée.' },
    'functional-impact': { name: 'Impact fonctionnel', summary: 'Ce que les symptômes ont vraiment changé dans la vie quotidienne : travail, mouvement, conduite, concentration ou routines.', definition: 'Impact fonctionnel est la partie du dossier qui explique ce que les symptômes ont changé dans la vraie vie, pas seulement quels symptômes existaient.' },
    'health-history': { name: 'Historique de santé', summary: 'Dossier organisé des symptômes, routines, changements de médicaments et contexte temporel pour commencer les rendez-vous avec une base plus claire.', definition: 'L’historique de santé est le dossier à long terme de ce qui s’est passé, de ce qui a changé et du contexte rattaché à ces changements.' },
    'invisible-illness': { name: 'Maladie invisible', summary: 'Une maladie sérieuse dont les symptômes ne se voient pas.', definition: 'Une maladie invisible est une maladie sérieuse dont les symptômes ne sont pas évidents pour les autres, comme la douleur, la fatigue ou les vertiges. Comme elle ne se voit pas, elle est souvent difficile à expliquer. Zebra vous aide à tenir un historique daté que vous pouvez montrer.' },
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
