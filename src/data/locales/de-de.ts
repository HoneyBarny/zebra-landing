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

const localePath = localeRoutes.deDe;

const faqItems = [
  {
    question: 'Was ist Zebra?',
    answer:
      'Zebra ist ein iPhone-Symptomtracker für POTS, EDS und Fibromyalgie. Die App hilft Ihnen, selbst eingegebene Verlaufsdaten zu erfassen und daraus einen arztbereiten Bericht für Facharzttermine zu erstellen.',
  },
  {
    question: 'Was ist ein guter Symptomtracker für POTS?',
    answer:
      'Ein guter POTS-Symptomtracker bleibt auch an Schubtagen und vor Terminen nutzbar. Zebra ist für POTS, Dysautonomie, orthostatische Vitalwerte, Salz/Natrium, Hydration, Herzfrequenz-Kontext, Brain Fog, Symptome und arztbereite Berichte gebaut.',
  },
  {
    question: 'Kann Zebra orthostatische Vitalwerte und Herzfrequenz erfassen?',
    answer:
      'Ja. Zebra kann Werte im Liegen, Stehen und in der Erholung in derselben Timeline halten wie Symptome, Schübe, Medikamente, Salz/Natrium, Hydration, Notizen und Terminfragen.',
  },
  {
    question: 'Hilft Zebra bei der Vorbereitung auf Arzttermine?',
    answer:
      'Ja. Zebra hält Ihre Symptomgeschichte geordnet, zeigt Veränderungen über die Zeit und exportiert einen arztbereiten Bericht, den Sie vor Facharzt-, Kardiologie- oder Kontrollterminen durchgehen können.',
  },
  {
    question: 'Kann ich Salz, Hydration, Symptome und Brain Fog zusammen erfassen?',
    answer:
      'Ja. Zebra hält Salz/Natrium, Wasser, Symptome, Brain Fog, Fatigue, Medikamente, Auslöser, Notizen und Schubkontext zusammen, damit der Verlauf später leichter prüfbar ist.',
  },
  {
    question: 'Wie unterscheidet sich Zebra von Notizen oder einem allgemeinen Symptomlog?',
    answer:
      'Notizen und Tabellen starten leer. Zebra bietet von Anfang an eine krankheitsbezogene Struktur, orthostatische Messungen und einen arztbereiten Bericht, ohne Wellness-Streaks oder allgemeines Setup.',
  },
  {
    question: 'Wo werden meine Daten gespeichert?',
    answer:
      'App-Gesundheitsdaten werden auf Ihrem iPhone gespeichert und können über Ihr persönliches iCloud-Konto synchronisiert werden. Zebra benötigt kein Zebra-Konto und betreibt keinen separaten Gesundheitsdaten-Server.',
  },
  {
    question: 'Diagnostiziert oder behandelt Zebra Krankheiten?',
    answer:
      'Nein. Zebra stellt keine Diagnosen, behandelt nicht und ersetzt keine medizinische Beratung. Die App hilft, Ihre eigene Vorgeschichte für Arztgespräche zu ordnen.',
  },
  {
    question: 'Was enthält Premium?',
    answer:
      'Die kostenlose Version enthält die wichtigsten Tracking-Funktionen und 30 Tage Verlauf. Premium schaltet längere Verlaufsansichten und den PDF-Export für Arztberichte frei.',
  },
] as const;

export const homePageDeDe = {
  ...homePage,
  locale: {
    key: 'de-de',
    htmlLang: 'de-DE',
    path: localePath,
  },
  seo: {
    title: 'POTS-Symptomtracker für Schübe, Vitalwerte und Arzttermine | Zebra',
    description:
      'Erfassen Sie POTS-Schübe, Dysautonomie-Symptome, orthostatische Vitalwerte, Salz/Natrium, Hydration, Herzfrequenz, Brain Fog, Medikamente und Terminnotizen.',
    ogImage: screenshots.appointmentPreparation.src,
    ogImageAlt:
      'Zebra-Vorschau eines arztbereiten Berichts aus Symptomen, orthostatischen Vitalwerten, Medikamenten und Terminnotizen.',
    alternates: localeAlternates,
  },
  header: {
    brand: {
      name: siteConfig.brand.name,
      subtitle: 'Für unsichtbare chronische Erkrankungen',
      href: localePath,
      logo: siteConfig.brand.logo,
    },
    links: [
      { href: `${localePath}#doctor-report`, label: 'Bericht' },
      { href: `${localePath}#daily-tracking`, label: 'Tracking' },
      { href: localizedPath(localePath, siteConfig.routes.privacy), label: 'Datenschutz' },
      { href: localizedPath(localePath, siteConfig.routes.blog), label: 'Ratgeber' },
    ],
  },
  hero: {
    ...homePage.hero,
    eyebrow: 'Für POTS, EDS und Fibromyalgie',
    title: 'Gut vorbereitet zum Arzttermin.',
    body:
      'Zebra hilft Ihnen, POTS-, EDS- und Fibromyalgie-Symptome, Schübe, orthostatische Vitalwerte, Herzfrequenz-Kontext, Medikamente, Salz/Natrium, Wasser und Notizen an einem ruhigen Ort zu erfassen und daraus einen arztbereiten Bericht zu erstellen.',
    trustLine:
      'Kostenlos tracken. Datenschutzorientiert. Ihre Gesundheitsdaten bleiben auf Ihrem Gerät und in Ihrer eigenen iCloud.',
    ctaSupport: ['Datenschutzorientiert', 'Kein Konto erforderlich', 'Keine medizinische Beratung'],
    bullets: [
      'POTS-, EDS- und Fibromyalgie-Tracking',
      'Orthostatische Werte, Salz und Symptome',
      'Check-ins in unter 60 Sekunden',
      'Arztbereiter Terminbericht',
    ],
    showcase: heroShowcase.map((item) => ({
      ...item,
      alt: 'Zebra-iPhone-App in Bewegung mit Symptomtracking, Terminvorbereitung und arztbereiten Berichtansichten.',
      label: 'Zebra Intro',
      meta: 'Die App in Bewegung sehen',
    })),
    supportCard: {
      eyebrow: 'Der Bericht ist der Nutzen',
      title: 'Öffnen Sie Zebra vor dem Termin, statt den Monat aus dem Gedächtnis neu aufzubauen.',
      body: 'Aus täglichem Schub-Tracking werden verwertbare Informationen: Symptome, Medikamente, Salz, Wasser, orthostatische Vitalwerte und Notizen in einem Bericht.',
    },
  },
  problem: {
    eyebrow: 'Das Problem',
    title: 'Schwer ist nicht, Symptome zu bemerken. Schwer ist, sie später zu erklären.',
    statement: 'Wenn der Termin beginnt, liegt die Geschichte in Notizen, Screenshots, halbfertigen Trackern und im Gedächtnis verstreut.',
    support:
      'Deshalb wird echte Symptomgeschichte schnell zu Schätzung, besonders wenn Brain Fog die Erinnerung erschwert oder der schlimmste Schub schon vorbei ist.',
    flowLabel: 'Wie sich der Monat anfühlt',
    flow: ['Notizen', 'Screenshots', 'Gedächtnis', 'Zebra'],
    bullets: [
      'Sie erinnern Fragmente, nicht den Verlauf',
      'Brain Fog macht Terminvorbereitung schwerer',
      'Schübe lassen sich später schwer rekonstruieren',
    ],
    // Plain statements, not quotes: see the note on problem.painPoints in site-content.ts.
    painPoints: [
      'Ihre Geschichte liegt in Teilen verstreut: Notizen, Screenshots und Gedächtnis.',
      'Sie haben sich vorbereitet, und das Wichtige ist im Termin trotzdem weg.',
      'Nichts zeigt das ganze Bild, wenn im Termin danach gefragt wird.',
    ],
  },
  whatZebraTracks: {
    eyebrow: 'Was Zebra erfasst',
    title: 'Tracken Sie die POTS- und Dysautonomie-Details, die sonst verstreut bleiben.',
    intro:
      'Zebra hält den täglichen Verlauf kurz, strukturiert und später nutzbar. An schweren Tagen erfassen Sie nur den Schub, das Symptom, den Vitalwert, Salz/Natrium oder Brain Fog, der wichtig ist.',
    items: [
      { title: 'POTS- und Dysautonomie-Schübe', body: 'Erfassen Sie Stärke, Dauer, Auslöser, Erholung und Veränderungen, damit ein Schub später nicht aus dem Gedächtnis rekonstruiert werden muss.' },
      { title: 'Symptome und Brain Fog', body: 'Halten Sie Schwindel, Fatigue, Schmerz, Herzklopfen, Brain Fog, Notizen und überschneidende Symptome in einem datierten Verlauf.' },
      { title: 'Orthostatische Vitalwerte und Herzfrequenz', body: 'Speichern Sie Beobachtungen im Liegen, Stehen und in der Erholung mit Herzfrequenz-Kontext und Symptomen desselben Tages.' },
      { title: 'Salz/Natrium und Hydration', body: 'Erfassen Sie Salz, Natrium, Wasser und Hydration neben Symptomen, während medizinische Entscheidungen bei Ihrem Behandlungsteam bleiben.' },
      { title: 'Medikamente und Notizen', body: 'Notieren Sie Zeitpunkt, Dosisnotizen, Nebenwirkungen, Fragen und Änderungen, damit Medikamentenkontext leichter besprechbar wird.' },
      { title: 'Auslöser und Symptomlog-Kontext', body: 'Halten Sie mögliche Auslöser, Aktivität, Stress, Infektion, Hitze oder Notizen fest, wenn sie wichtig sind, und lassen Sie sie aus, wenn Sie erschöpft sind.' },
      { title: 'Arztbereite PDF-Berichte', body: 'Machen Sie aus aktuellem Tracking eine klarere Terminzusammenfassung statt einer Sammlung unverbundener Notizen.' },
    ],
    note: 'Zebra ist für Tracking und Terminvorbereitung. Es diagnostiziert und behandelt nicht und ersetzt keine medizinische Versorgung.',
  },
  trackingPaths: {
    eyebrow: 'Wählen Sie Ihren Tracking-Pfad',
    title: 'Beginnen Sie mit der Symptomgeschichte, die Ihr Termin wirklich braucht.',
    intro:
      'Verschiedene Erkrankungen erzeugen verschiedene Arten von Terminstress. Zebra gibt jedem Pfad einen klareren Startpunkt, damit Sie das Wichtige erfassen können, ohne ein eigenes System zu bauen.',
    items: [
      {
        label: 'POTS und Dysautonomie',
        title: 'Symptome im Aufrechten mit orthostatischem Kontext erfassen.',
        body:
          'Nutzen Sie Zebra als POTS-Symptomtracker für Schwindel, Herzklopfen, Fatigue, Brain Fog, Hydration, Salz, Medikamentennotizen und Liegen-Sitzen-Stehen-Beobachtungen.',
        pain: 'Besonders hilfreich, wenn Sie erklären müssen, was nach Stehen, Hitze, Dehydrierung, Medikamentenänderungen oder einem Schub passiert.',
        href: localizedPath(localePath, '/knowledge/pots/'),
        cta: 'POTS-Hub öffnen',
      },
      {
        label: 'EDS / hEDS',
        title: 'Schmerz, Instabilität, Fatigue und überschneidende Symptome zusammenhalten.',
        body:
          'Nutzen Sie Zebra als EDS-Symptomtracker, wenn Gelenkschmerz, Verletzungen, Dysautonomie-Symptome, Fatigue und Notizen zu verstreut sind, um sie schnell zusammenzufassen.',
        pain: 'Besonders hilfreich, wenn ein Facharzt nach einem Körpersystem fragt, Ihr Monat aber mehrere betroffen hat.',
        href: localizedPath(localePath, '/knowledge/eds/'),
        cta: 'EDS-Hub öffnen',
      },
      {
        label: 'Fibromyalgie',
        title: 'Schubmuster sichern, bevor Brain Fog Details löscht.',
        body:
          'Nutzen Sie Zebra als Fibromyalgie-Symptomtracker für Schmerz, Fatigue, Schlafkontext, Brain Fog, Medikamentenänderungen, Auslöser und Alltagsauswirkung.',
        pain: 'Besonders hilfreich, wenn Schmerz und Fatigue den Tag verändert haben, der genaue Verlauf später aber schwer rekonstruierbar ist.',
        href: localizedPath(localePath, '/knowledge/fibromyalgia/'),
        cta: 'Fibromyalgie-Hub öffnen',
      },
      {
        label: 'Terminvorbereitung',
        title: 'Aus aktuellen Symptomen einen arztbereiten Bericht machen.',
        body:
          'Nutzen Sie Zebra vor einem Facharzttermin, um Schübe, wichtigste Symptome, orthostatische Werte, Medikamentenänderungen, Fragen und Alltagsauswirkung an einem Ort zu sammeln.',
        pain: 'Besonders hilfreich, wenn der Termin kurz ist und Sie ihn nicht mit Notizensuche oder Erinnerungslücken verbringen wollen.',
        href: localizedPath(localePath, '/knowledge/chronic-illness-appointment-prep/'),
        cta: 'Terminvorbereitung öffnen',
      },
    ],
    note:
      'Zebra ist ein Organisationstool für selbst eingegebenen Verlauf. Es diagnostiziert und behandelt nicht und ersetzt keine medizinische Versorgung.',
  },
  comparison: {
    eyebrow: 'Warum nicht einfach Notizen?',
    title: 'Notizen, Tabellen und allgemeine Tracker lassen Sie die Ordnung zweimal machen.',
    intro:
      'Sie können Fragmente festhalten, aber der Termin braucht trotzdem einen klaren Verlauf. Zebra ist für genau diesen Sprung gebaut: vom täglichen Symptomverlauf zum arztbereiten Bericht.',
    alternativesLabel: 'Üblicher Umweg',
    zebraLabel: 'Was Zebra verbunden hält',
    items: [
      {
        name: 'Apple Notizen',
        problem:
          'Schnell für einen Gedanken, aber später schwer nach Schub, Symptom, Medikamentenänderung, orthostatischen Werten oder Terminfrage zu sortieren.',
        zebra:
          'Zebra hält Symptome, Schübe, Medikamente, Salz, Wasser, Vitalwerte, Auslöser, Notizen und Fragen in einer datierten Struktur.',
        href: '/zebra-vs-apple-notes/',
        cta: 'Zebra und Notizen vergleichen',
      },
      {
        name: 'Tabellen',
        problem:
          'Flexibel, aber Tracking wird zu Setup-Arbeit und kann an Schwindel-, Schmerz- oder Erschöpfungstagen zu viel werden.',
        zebra:
          'Zebra beginnt mit ruhigen Check-ins und macht auch unvollständige Einträge nützlich, damit der Verlauf schlechte Tage übersteht.',
        href: '/zebra-vs-spreadsheet/',
        cta: 'Zebra und Tabellen vergleichen',
      },
      {
        name: 'Allgemeine Symptomtracker',
        problem:
          'Viele Tracker trennen Vitalwerte, Symptome, Medikamente und Notizen, wodurch POTS-, EDS- und Überlappungsverlauf schwerer zu prüfen ist.',
        zebra:
          'Zebra ist zuerst für unsichtbare Erkrankungen, orthostatischen Kontext, überschneidende Symptome und Facharzttermine gebaut.',
        href: localizedPath(localePath, '/blog/symptom-tracker-vs-notes-app-vs-spreadsheet/'),
        cta: 'Tracker-Vergleich lesen',
      },
      {
        name: 'Habit- und Wellness-Apps',
        problem:
          'Streaks und Wellness-Ziele können Schubtage wie Scheitern wirken lassen, obwohl genau diese Tage oft wichtig zu dokumentieren sind.',
        zebra:
          'Zebra behandelt Tracking als Aufbau von Verlauf, nicht als Selbstoptimierung. Ein nützlicher Check-in reicht.',
        href: localizedPath(localePath, '/blog/why-symptom-tracking-fails-on-bad-days/'),
        cta: 'Lesen, warum Tracking scheitert',
      },
    ],
    note:
      'Das Ziel ist nicht perfektes Tracking. Das Ziel ist genug selbst eingegebener Verlauf, damit der nächste Termin mit weniger Raten beginnt.',
  },
  proofBridge: {
    eyebrow: 'Was sich mit Zebra ändert',
    title: 'Aus verstreuten Symptomlogs wird eine arztbereite Geschichte.',
    intro:
      'Zebra ist nicht nur ein Symptomlog. Es verbindet einen schweren Monat mit einem klareren Termin, besonders wenn POTS, Dysautonomie, Brain Fog, Salz, Vitalwerte, Medikamente und Schubnotizen sich überschneiden.',
    items: [
      { label: 'Ein Körper, eine Timeline', title: 'Überschneidende Symptome leben nicht mehr an getrennten Orten.', before: 'POTS-Notizen in einer App, Schmerz woanders, Medikamentenänderungen im Kopf und Screenshots in Fotos.', after: 'Schübe, orthostatische Werte, Medikamente, Salz, Wasser, Auslöser, Notizen und überschneidende Symptome bleiben verbunden.' },
      { label: 'Nachweis unter Druck', title: 'Terminvorbereitung braucht weniger Neuaufbau.', before: 'Sie versuchen Wochen von Symptomen zusammenzufassen, während Sie müde, foggy, gehetzt oder wieder besorgt sind, nicht ernst genommen zu werden.', after: 'Zebra gibt Ihnen eine aktuelle Timeline und einen arztbereiten PDF-Bericht, damit die wichtigen Teile leichter zu prüfen sind.' },
      { label: 'Für schlechte Tage', title: 'Auch ein unvollständiger Eintrag zählt.', before: 'Die wichtigsten Tage sind oft die Tage mit der wenigsten Energie zum Tippen, Sortieren und Erklären.', after: 'Ein kurzer Schub-Check-in kann für sich stehen, ohne Streaks, Schuldgefühl oder perfektes Nachtragen.' },
    ],
    note: 'Zebra ordnet selbst eingegebene Verlaufsdaten für Arztgespräche. Es diagnostiziert und behandelt nicht und verspricht nicht, was ein Arzt daraus schliesst.',
  },
  doctorReport: {
    ...homePage.doctorReport,
    eyebrow: 'Der Nutzen',
    title: 'Der Bericht verändert den Arzttermin.',
    answer:
      'Aus täglichem Tracking wird ein arztbereiter PDF-Bericht: Symptome, orthostatische Vitalwerte, Medikamente, Salz, Wasser, Auslöser und Notizen, geordnet für Ihren Facharzttermin.',
    body: [
      'Statt den Monat aus dem Gedächtnis nachzuerzählen, können Sie einen datierten Verlauf durchgehen: was passiert ist, wie oft es vorkam und was sich verändert hat.',
    ],
    flow: ['30-Tage-Verlauf', 'Muster', 'Arztbereites PDF', 'Termin'],
    bullets: [
      'Symptome, Schübe, Medikamente und Auslöser in einem datierten Verlauf',
      'Orthostatische Vitalwerte und Hydration neben der Timeline',
      'Notizen bleiben erhalten, bevor Brain Fog Details verdrängt',
      'Fragen, die Sie vor Terminende besprechen möchten',
    ],
    preview: {
      eyebrow: 'Berichtsvorschau',
      title: 'Was der arztbereite Bericht enthält',
      body:
        'Eine leicht verständliche Termin-Zusammenfassung aus Ihrem erfassten Verlauf.',
      items: [
        { label: 'Symptomverlauf', body: 'Datierte Veränderungen, Schübe und Symptomhäufigkeit.' },
        { label: 'Orthostatische Vitalwerte', body: 'Liegen, Stehen und Erholung neben Symptomen.' },
        { label: 'Medikamente, Hydration und Salz', body: 'Kontext, der Veränderungen rund um einen Schub erklären kann.' },
        { label: 'Notizen und Fragen', body: 'Symptomkontext und Fragen für den Termin.' },
      ],
    },
    sampleReport: {
      href: '/sample-doctor-report.pdf',
      label: 'Beispielbericht ansehen',
      note: 'Verwendet nur fiktive Patientendaten.',
    },
    proofLabel: 'Das Ergebnis',
    proofTitle: 'Der Arztbericht ist der eigentliche Nutzen.',
    proofBody:
      'Tägliche Einträge werden nützlich, wenn sie helfen, sich vorzubereiten, Veränderungen zu erklären und einem Facharzt eine schnelle Übersicht zu geben.',
    outcomesLabel: 'Was Sie nach 30 Tagen haben',
    outcomes: [
      'Eine klarere Symptomgeschichte statt verstreuter Notizen',
      'Eine Timeline von Schüben, Veränderungen und Notizen',
      'Kontext zu Auslösern, Medikamenten und orthostatischen Veränderungen',
      'Einen arztbereiten Bericht zum Durchgehen oder Teilen vor dem Termin',
    ],
    comparisonLabel: 'Vor und nach Zebra',
    comparison: [
      {
        label: 'Vor Zebra',
        title: 'Den Monat aus dem Gedächtnis rekonstruieren',
        points: ['Notizen öffnen', 'Screenshots suchen', 'Hoffen, dass das Wichtige wieder einfällt'],
      },
      {
        label: 'Mit Zebra',
        title: 'Mit fertigem Verlauf in den Termin gehen',
        points: ['Timeline durchgehen', 'Arztbericht exportieren', 'Im Termin sprechen statt rekonstruieren'],
      },
    ],
    ctaNote: 'Kostenlos tracken. Bericht mit Premium exportieren.',
    media: {
      ...screenshotStory.doctorReport,
      label: 'Arztbericht-Vorschau',
      meta: 'Terminbrief-Vorschau',
      alt: 'Zebra-Arztbericht und Terminvorbereitung mit veränderten Symptomen, Terminbrief-Vorschau und selbst eingegebenem Verlauf.',
    },
  },
  appointmentPrep: {
    ...homePage.appointmentPrep,
    eyebrow: 'Terminvorbereitung',
    title: 'Sieben Tage vor dem Termin: erfassen, was Sie nicht aus dem Gedächtnis rekonstruieren wollen.',
    intro:
      'Zebra hilft, die Woche vor einem Termin in eine klarere Geschichte zu verwandeln: was sich verändert hat, was wiederkam, was den Alltag beeinflusst hat und was Sie im Termin fragen möchten.',
    checklistTitle: 'Was zuerst erfasst werden sollte',
    checklist: [
      { label: 'Aktuelle Schübe', body: 'Erfassen Sie Schwere, Dauer und Veränderungen, damit die schlechten Tage nicht verschwinden, sobald der Schub vorbei ist.' },
      { label: 'Wichtigste Symptome', body: 'Wählen Sie die Symptome, die am meisten zählen, statt jede Empfindung perfekt dokumentieren zu wollen.' },
      { label: 'Medikamentenänderungen', body: 'Halten Sie Timing, Dosisnotizen, Nebenwirkungen und Fragen neben dem Symptomverlauf fest.' },
      { label: 'Salz, Wasser und Kontext', body: 'Erfassen Sie Hydration und Salz neben Symptomen, wenn sie für Ihren Behandlungsplan relevant sind.' },
      { label: 'Orthostatische Vitalwerte', body: 'Speichern Sie Liegen-, Sitzen- und Stehen-Beobachtungen mit Symptomen und Notizen desselben Tages.' },
      { label: 'Alltagsauswirkung', body: 'Halten Sie fest, was Symptome an Stehen, Arbeit, Schule, Schlaf, Erledigungen oder Erholung verändert haben.' },
      { label: 'Fragen für den Raum', body: 'Schreiben Sie die Fragen auf, die Brain Fog, Stress oder ein kurzer Termin nicht löschen sollen.' },
    ],
    pathsTitle: 'Nach Erkrankung orientierte Beispiele',
    paths: [
      { condition: 'POTS und Dysautonomie', body: 'Bringen Sie Symptome im Aufrechten, orthostatische Beobachtungen, Salz- und Wasserkontext, Medikamentennotizen und Schubtiming in eine Ansicht.' },
      { condition: 'EDS / hEDS', body: 'Halten Sie Schmerz, Instabilität, Fatigue, Verletzungen, Notizen und überlappende Symptome verbunden statt verstreut.' },
      { condition: 'Fibromyalgie und überlappende Schübe', body: 'Bewahren Sie Schmerz, Fatigue, Brain Fog, Medikamentenänderungen, Schlafkontext und Alltagsauswirkung für ein klareres Folgegespräch.' },
    ],
    samplePreview: {
      eyebrow: 'Beispielbericht',
      title: 'So kann eine einseitige Terminansicht aussehen',
      meta: 'Nur Beispiel, mit fiktiven Patientendaten.',
      rows: [
        { label: 'Hauptveränderung', value: 'Mehr Schwindel und Fatigue nach kurzen Aufgaben im Stehen' },
        { label: 'Aktuelle Schübe', value: '3 deutliche Schubtage, Erholung langsamer als sonst' },
        { label: 'Kontext', value: 'Medikamentenänderung, weniger Hydration, zwei Hitzetage' },
        { label: 'Frage im Termin', value: 'Was sollte ich bis zum nächsten Termin erfassen?' },
      ],
      note: 'Die Berichtsvorschau ist keine Diagnose. Sie zeigt, wie Zebra selbst eingegebenen Verlauf für ein klareres Gespräch ordnen kann.',
    },
    note:
      'Nutzen Sie dies als Organisationshilfe, nicht als diagnostische Checkliste. Zebra diagnostiziert und behandelt nicht und sagt nicht, was ein Arzt schlussfolgern sollte.',
  },
  howItWorks: {
    eyebrow: 'So funktioniert Zebra',
    title: 'Drei einfache Schritte, auch an Tagen mit wenig Energie.',
    intro: 'Der Ablauf bleibt an schlechten Tagen kurz und wird nützlicher, je näher der Termin kommt.',
    timeline: ['Symptome und Kontext erfassen', 'Muster über Zeit sehen', 'Bericht exportieren oder prüfen'],
    steps: [
      {
        label: 'Symptome und Kontext erfassen',
        body: 'Protokollieren Sie Symptome, Schübe, orthostatische Vitalwerte, Medikamente, Salz, Wasser, Auslöser und Notizen in einem kurzen Check-in.',
      },
      {
        label: 'Muster über Zeit sehen',
        body: 'Orthostatische Werte und Tageskontext bleiben in derselben Timeline, damit Muster später leichter erkennbar sind.',
      },
      {
        label: 'Arztbereiten Bericht exportieren oder prüfen',
        body: 'Sehen Sie vor dem Termin, was sich verändert hat, und exportieren Sie einen klaren Bericht, wenn Sie etwas mitnehmen möchten.',
      },
    ],
  },
  screenshotCarousel: {
    eyebrow: 'App-Vorschau',
    title: 'Sehen Sie den Ablauf vom Tracking bis zum Bericht.',
    intro:
      'Die Seite führt mit dem Bericht, aber das Produkt bleibt auf kurze Check-ins ausgelegt, die auch an schlechten Tagen funktionieren.',
    label: 'Zebra-App-Screenshots',
    items: [
      {
        ...screenshotStory.doctorReport,
        label: 'Arztbericht-Vorschau',
        meta: 'Terminbrief-Vorschau',
        title: 'Arztbericht-Vorschau',
        body: 'Prüfen Sie vor dem Termin eine kurze Übersicht.',
      },
      {
        ...screenshotStory.dailyTracking,
        label: 'Täglicher Check-in',
        meta: 'Symptome, Auslöser, Hydration, Medikamente',
        title: 'Täglicher Check-in',
        body: 'Erfassen Sie Symptome, Auslöser, Hydration, Medikamente und Notizen.',
      },
      {
        ...screenshotStory.orthostaticTest,
        label: 'Orthostatische Daten',
        meta: 'Orthostatischer Test im Berichtsablauf',
        title: 'Orthostatische Daten',
        body: 'Halten Sie positionsbezogene Werte mit dem restlichen Tag verbunden.',
      },
      {
        ...screenshotStory.trends,
        label: 'Musterverlauf',
        meta: 'Muster werden zu nutzbarem Verlauf',
        title: 'Musterverlauf',
        body: 'Sehen Sie wiederkehrende Muster und gespeicherte Einsichten über die Zeit.',
      },
      {
        ...screenshots.todaySummary,
        meta: 'Tagesübersicht',
        title: 'Tagesübersicht',
        body: 'Prüfen Sie das aktuelle Muster, ohne die Geschichte neu aufzubauen.',
      },
    ],
  },
  dailyTracking: {
    ...homePage.dailyTracking,
    eyebrow: 'Für Schubtage gebaut',
    title: 'An einem schweren Tag reicht ein kurzer Check-in.',
    intro: 'Zebra bleibt nutzbar, wenn Ihnen schwindlig ist, Sie erschöpft sind, Brain Fog haben oder Schmerzen.',
    body: [
      'Öffnen Sie Zebra, tippen Sie an, was sich verändert hat, und gehen Sie wieder zurück in Ihren Tag. Kein leeres Setup. Keine Wellness-Hausaufgaben. Keine Streaks.',
    ],
    momentLabel: 'Was in unter einer Minute passiert',
    sequence: ['Zebra öffnen', 'Veränderungen antippen', 'Zurück in den Tag'],
    bullets: ['Schübe und Symptome', 'Medikamente und Notizen', 'Salz, Wasser und Auslöser'],
    cards: [
      { eyebrow: 'Warum es leichter wirkt', title: 'Von Anfang an krankheitsbezogen', body: 'Sie müssen die Struktur nicht zuerst erfinden.' },
      { eyebrow: 'Warum es später zählt', title: 'Alles landet in einer Timeline', body: 'Dadurch wird der Arztbericht möglich.' },
    ],
    ctaLabel: 'Heute mit Tracking starten',
    ctaNote: 'Ein ruhiger Ort für den täglichen Verlauf.',
    media: {
      ...screenshotStory.dailyTracking,
      label: 'Täglicher Check-in',
      meta: 'Symptome, Auslöser, Hydration, Medikamente',
      alt: 'Zebra-iPhone-Symptomtracker-Check-in für POTS, Dysautonomie, EDS und Fibromyalgie mit Symptomen, Auslösern, Hydration, Medikamenten und Notizen.',
    },
  },
  orthostaticTest: {
    ...homePage.orthostaticTest,
    eyebrow: 'Orthostatischer Test',
    title: 'Erfassen Sie orthostatische Vitalwerte dort, wo sie hingehören.',
    intro: 'Im selben Verlauf wie alles andere, nicht in einem separaten Tool, das Sie später abgleichen müssen.',
    body: [
      'Zebra verbindet Werte im Liegen, Stehen und in der Erholung mit Ihren Symptomen, statt sie in ein weiteres Tool auszulagern.',
    ],
    momentLabel: 'Die geführte Sequenz',
    sequence: ['Hinlegen', 'Stehen', 'Wieder hinlegen', 'In derselben Timeline speichern'],
    bullets: [
      'Geführter Ablauf für Liegen, Stehen und Erholung',
      'Dieselbe Timeline wie Symptome und Medikamente',
      'Später leichter im Kontext zu prüfen',
    ],
    cards: [
      { eyebrow: 'Warum das hilft', title: 'Ihre Werte stehen nicht isoliert da', body: 'Ärzte sehen sie neben dem restlichen Tag.' },
      { eyebrow: 'Warum es wichtig ist', title: 'Weniger Jonglieren, mehr Klarheit', body: 'Sie springen nicht zwischen mehreren Gesundheitstools.' },
    ],
    ctaLabel: 'Sehen, wie der Bericht entsteht',
    ctaNote: 'Vitalwerte bleiben nützlich, weil sie verbunden bleiben.',
    media: {
      ...screenshotStory.orthostaticTest,
      label: 'Orthostatische Daten',
      meta: 'Orthostatischer Test im Berichtsablauf',
      alt: 'Zebra-Terminvorbereitung mit orthostatischen Testdaten, Medikamentenverlauf und Fragen für den Termin.',
    },
  },
  searchContent: {
    eyebrow: 'Warum Zebra anders ist',
    title: 'Gebaut für unsichtbare Erkrankungen — POTS, EDS und Fibromyalgie.',
    intro:
      'Die meisten Tracker lassen Sie Ihr eigenes System bauen oder rahmen den Körper wie ein Wellness-Projekt. Zebra ist für die schwierigere Aufgabe gebaut: POTS, Dysautonomie, EDS, Fibromyalgie, Brain Fog, Schübe, orthostatische Vitalwerte, Salz/Natrium, Hydration und überschneidende Symptome zu erfassen, wenn Sie bereits müde sind.',
    answer:
      'Zebra ist ein iPhone-Symptomtracker für unsichtbare Erkrankungen. Die App hält Symptome, Schübe, orthostatische Vitalwerte, Herzfrequenz-Kontext, Medikamente, Salz/Natrium, Wasser, Auslöser, Notizen und Terminvorbereitung in einem Verlauf, damit Sie Nachweis für Termine aufbauen können. Ziel ist nicht Diagnose. Ziel ist weniger Erinnerungsarbeit und ein klarerer Arztbericht.',
    differencesTitle: 'Warum Zebra statt Notizen, Tabellen oder allgemeinem Symptomtracker nutzen?',
    differences: [
      { label: 'Struktur', generic: 'Notizen und Tabellen starten leer, also müssen Sie das System erfinden, während Sie schon müde sind.', zebra: 'Zebra gibt Struktur von Anfang an: Schübe, Symptome, Auslöser, Medikamente, Salz, Wasser, orthostatische Werte und Notizen.' },
      { label: 'Orthostatisches Tracking', generic: 'Allgemeine Tracker trennen Vitalwerte oft von Symptomen, wodurch POTS- und Dysautonomie-Verlauf später schwerer zu prüfen ist.', zebra: 'Zebra hält Werte im Liegen, Stehen und in der Erholung neben Symptomtimeline und Tageskontext.' },
      { label: 'Terminvorbereitung', generic: 'Ein Monat Notizen kann trotzdem zu einer gehetzten Erklärung werden, wenn der Arzt fragt, was sich verändert hat.', zebra: 'Zebra macht aus selbst eingegebenem Verlauf einen arztbereiten Symptombericht für Facharzt- und Kardiologietermine.' },
      { label: 'Datenschutz', generic: 'Viele Gesundheitstools brauchen ein Konto, synchronisieren über einen Dienst oder sind breiter als Ihr konkretes Problem.', zebra: 'Zebra ist datenschutzorientiert und fokussiert auf Ihren eigenen Verlauf für Arztgespräche.' },
      { label: 'Schubtage', generic: 'Wellness- und Habit-Apps können Tracking wie eine weitere unerledigte Aufgabe wirken lassen.', zebra: 'Zebra ist für schwindlige, erschöpfte, foggy oder schmerzhafte Tage gebaut, an denen ein kurzer Check-in reicht.' },
    ],
    conditionsTitle: 'Zuerst für POTS, EDS und Dysautonomie gebaut, mit Unterstützung für Überschneidungen.',
    conditionsIntro: 'Zebra ist besonders nützlich, wenn Symptome sich überschneiden, je nach Position oder Aktivität wechseln und vor Terminen schwer zusammenzufassen sind.',
    conditions: [
      { name: 'POTS-Symptomtracker-App', body: 'Erfassen Sie Symptome im Aufrechten, Herzfrequenz-Kontext, Hydration, Salz/Natrium, Schübe, Brain Fog und orthostatische Testnotizen vor Kardiologie- oder Facharztterminen.' },
      { name: 'Dysautonomie-Symptomtracker', body: 'Halten Sie autonome Symptome, Positionswechsel, Auslöser, Medikamente, Vitalwerte und Notizen in einer Timeline statt in verstreuten Notizen.' },
      { name: 'EDS- und hEDS-Symptomtracking', body: 'Erfassen Sie Schmerz, Fatigue, Überschneidungssymptome und Notizen, damit Veränderlichkeit später leichter erklärbar ist.' },
      { name: 'Fibromyalgie-Symptomtracker', body: 'Tracken Sie Schmerz, Fatigue, Brain Fog, Schübe, Medikamentenkontext und Alltagsauswirkung, die später schwer rekonstruierbar sein kann.' },
      { name: 'Long-COVID-Tracker', body: 'Halten Sie Fatigue, Schwindel, Brain Fog, orthostatische Symptome, Aktivitätsänderungen und Muster zwischen Terminen fest.' },
      { name: 'ME/CFS-Symptomjournal', body: 'Nutzen Sie einfache Check-ins, um Verlauf rund um Fatigue, post-exertional worsening und Erholungsnotizen zu sichern.' },
    ],
    trustTitle: 'Zebra hilft, Gesundheitsverlauf zu ordnen. Es diagnostiziert nicht und ersetzt keine medizinische Versorgung.',
    trustBody: 'Aus Gründen der Suchklarheit und medizinischen Sicherheit sollte Zebra als Terminvorbereitungs- und Verlaufswerkzeug verstanden werden. Es fasst zusammen, was Sie eingeben, damit Sie es prüfen und mit einem Arzt besprechen können.',
    trustItems: [
      'Nicht für Diagnose, Behandlung, Prävion oder Notfallsymptome',
      'Kein Ersatz für Arzt, Facharzt oder medizinische Beratung',
      'Am besten für klarere Symptomgeschichte und arztbereite Berichte vor Terminen',
    ],
  },
  trust: {
    eyebrow: 'Vertrauen, Sicherheit und Datenschutz',
    title: 'Privat, medizinisch vorsichtig und klar darin, wofür Zebra gedacht ist.',
    intro:
      'Zebra konzentriert sich darauf, selbst eingegebene Verlaufsdaten für Arztgespräche und Facharzttermine zu ordnen. Zebra diagnostiziert, behandelt oder verhindert keine Krankheiten und ersetzt keine medizinische Versorgung.',
    highlight: {
      eyebrow: 'Vertrauen auf einen Blick',
      title: 'Datenschutzorientiert. Für Brain Fog gebaut. Am stärksten vor Terminen.',
      body:
        'Zebra hilft Ihnen, einen klareren Verlauf für Facharzttermine zu behalten, besonders wenn Symptome sich überschneiden und Erinnerung unzuverlässig wird. App und Wissensbereich unterstützen Selbstorganisation und Arztgespräche, nicht Diagnose, Behandlung, Prävion oder Verkauf von Gesundheitsdaten.',
    },
    calmState: {
      eyebrow: 'Der Endzustand',
      title: 'Besser vorbereitet. Weniger überfordert.',
      body:
        'Das Ziel ist nicht, Krankheit ordentlich wirken zu lassen. Der Termin soll ruhiger werden, weil Ihr Verlauf schon bereitliegt.',
    },
    items: [
      { title: 'Datenschutz zuerst', body: 'App-Gesundheitsdaten werden auf Ihrem iPhone gespeichert und können je nach Apple-/iCloud-Einstellungen und App-Version über Ihr persönliches iCloud-Konto synchronisiert werden. Zebra benötigt kein Zebra-Konto und betreibt keinen separaten Gesundheitsdaten-Server.' },
      { title: 'Am besten für Facharzttermine', body: 'Zebra passt besonders, wenn Sie vor Kardiologie-, Facharzt- oder Kontrollterminen eine klarere Symptomgeschichte brauchen.' },
      { title: 'Sie besitzen den Verlauf', body: 'Kein Konto erforderlich, kein Gesundheitsdaten-Server und kein Neuaufbau Ihrer Geschichte in einem fremden System.' },
      { title: 'Brain-Fog-freundlich', body: 'Kurze Abläufe, klare Hierarchie und Nutzung mit wenig Energie an Schubtagen.' },
      { title: 'Auf Facharzttermine fokussiert', body: 'Gebaut rund um Termine, nicht Selbstoptimierung oder Wellness-Streaks.' },
      { title: 'Medizinisch vorsichtig', body: 'Keine Diagnose, keine Behandlungsempfehlungen, keine Prävionsversprechen und keine überzogenen Aussagen darüber, was Ihre Daten bedeuten.' },
      { title: 'Nicht für Notfälle', body: 'Zebra ist kein Notfalltool, kein Symptomchecker und kein Ersatz für dringende oder professionelle medizinische Versorgung.' },
      { title: 'Selbst eingegebene Daten', body: 'Was Zebra zusammenfasst, stammt aus dem Verlauf, den Sie selbst erfassen und prüfen.' },
    ],
    links: [
      { label: 'Zebra Editorial ansehen', href: localizedPath(localePath, '/authors/zebra-editorial/') },
      { label: 'Wissensbereich durchsuchen', href: localizedPath(localePath, siteConfig.routes.knowledge) },
      { label: 'Datenschutzerklärung lesen', href: localizedPath(localePath, siteConfig.routes.privacy) },
      { label: 'Support besuchen', href: localizedPath(localePath, siteConfig.routes.support) },
    ],
    resources: [
      { eyebrow: 'Feedback', title: 'Feedback senden oder Funktion wünschen', body: 'Sagen Sie uns, was Zebra vor Terminen oder an Schubtagen leichter machen würde.', href: `mailto:${siteConfig.support.email}?subject=Zebra%20feedback` },
      { eyebrow: 'Redaktionelle Standards', title: 'Sehen, wie Zebra-Inhalte geprüft werden', body: 'Lernen Sie Redaktion, Prüfprozess, Aktualisierungsrichtlinie und medizinische Sprachgrenzen kennen.', href: localizedPath(localePath, '/authors/zebra-editorial/') },
      { eyebrow: 'Wissensbereich', title: 'Verbundene Begriffe zu Symptomen und Erkrankungen durchsuchen', body: 'Sehen Sie, wie POTS, Dysautonomie, Brain Fog, Fatigue, Arztberichte und Terminvorbereitung zusammenhängen.', href: localizedPath(localePath, siteConfig.routes.knowledge) },
      { eyebrow: 'Ratgeber', title: 'Die wichtigsten praktischen Guides zuerst lesen', body: 'Vergleichen Sie Zebra mit Notizen, lernen Sie, was Sie erfassen sollten, und verstehen Sie den Bericht vor dem Download.', href: localizedPath(localePath, siteConfig.routes.blog) },
    ],
    resourcesIntro: {
      eyebrow: 'Redaktionelles Vertrauen',
      title: 'So pflegt Zebra Inhalte und den Wissensbereich.',
    },
    resourcesCtaLabel: 'Seite öffnen',
  },
  guides: {
    eyebrow: 'Leitfaden und Themenseiten',
    title: 'Entdecken Sie weiter die genauen Fragen, die Menschen vor dem Download eines Symptomtrackers stellen.',
    intro:
      'Ob Sie einen Termin vorbereiten oder POTS, EDS und Dysautonomie klarer verfolgen wollen, das sind die besten Ausgangspunkte.',
    items: [
      {
        href: '/de-de/appointment-prep-checklist/',
        label: '7-Tage-Checkliste zur Terminvorbereitung',
        description: 'Eine eigene Seite dazu, was vor einem Termin bei chronischer Erkrankung zu verfolgen ist, besonders wenn Gedächtnis und Energie begrenzt sind.',
      },
      {
        href: '/de-de/pots-tracker/',
        label: 'POTS-Tagebuch',
        description: 'Die zentrale Produktseite für POTS-Schübe, orthostatische Werte, Salz, Wasser, Medikamente und Nachweise für den Termin.',
      },
      {
        href: '/eds-tracker/',
        label: 'EDS / hEDS-Tracker',
        description: 'Eine Seite für EDS-Überschneidungssymptome, Schmerz, Erschöpfung, Instabilität, unsichtbare Krankheit und Vorbereitung des Arztberichts.',
      },
      {
        href: '/fibromyalgia-tracker/',
        label: 'Fibromyalgie-Tracker',
        description: 'Eine fokussierte Seite für Fibromyalgie-Schübe, Schmerz, Erschöpfung, Brain Fog, Medikamente und Terminnotizen.',
      },
      {
        href: '/de-de/orthostatic-vitals-test/',
        label: 'Schellong-Test und orthostatische Werte',
        description: 'Eine Produktseite für Beobachtungen im Liegen, Stehen und in der Erholung neben Symptomen und Tageskontext.',
      },
      {
        href: '/de-de/doctor-report/',
        label: 'Symptombericht für den Arzt',
        description: 'Eine Seite, die erklärt, wie Zebra den aktuellen Verlauf in eine klarere Terminzusammenfassung verwandelt.',
      },
      {
        href: '/flare-tracker/',
        label: 'Schub-Tracker',
        description: 'Eine Seite für schwere Tage: Symptomschwere, Auslöser, Notizen und berichtsfertiger Verlauf.',
      },
      {
        href: '/de-de/symptom-tracker-for-invisible-illness/',
        label: 'Tracker für unsichtbare Krankheit',
        description: 'Eine Seite für alle, die Nachweise, Unterstützung bei Brain Fog, Check-ins mit wenig Energie und Terminvorbereitung suchen.',
      },
    ],
  },
  faq: {
    eyebrow: 'FAQ',
    title: 'Fragen zu Zebra.',
    items: faqItems,
  },
  finalCta: {
    eyebrow: 'Zebra herunterladen',
    title: 'Gut vorbereitet zum Arzttermin.',
    body:
      'Starten Sie heute mit der kostenlosen Version. Wechseln Sie zu Premium, wenn Sie längere Verlaufsansichten und arztbereite PDF-Berichte möchten.',
    points: ['Täglich erfassen', 'Muster sehen', 'Bericht exportieren'],
    pointsLabel: 'Warum Zebra herunterladen',
    endState: 'Ein ruhigerer Termin beginnt mit einem Verlauf, den Sie nicht neu aufbauen müssen.',
    trustLine: 'Kostenlos tracken · Datenschutzorientiert · Jederzeit kündbar',
  },
  mobileStickyCta: {
    label: 'Zebra laden',
    note: 'Bringen Sie Verlauf zum Arzttermin mit',
    ariaLabel: 'Zebra im App Store herunterladen',
  },
  footer: {
    body: 'Zebra ist ein iPhone-Symptomtracker für POTS, Dysautonomie, EDS, Fibromyalgie und überschneidende chronische Erkrankungen, gebaut für klarere Verläufe und Facharzttermine.',
    trustLine: 'Datenschutzorientiert. Für iPhone gebaut. Nur selbst eingegebene Daten. Kein Diagnosetool.',
    links: localizedFooterLinks(localePath, {
      blog: 'Ratgeber',
      knowledge: 'Wissensbereich',
      symptomTracking: 'Symptomtracking',
      fatigue: 'Fatigue',
      dizziness: 'Schwindel',
      brainFog: 'Brain Fog',
      doctorReports: 'Arztberichte',
      authors: 'Autoren',
      support: 'Support',
      privacy: 'Datenschutz',
      terms: 'Nutzungsbedingungen',
      contact: 'Kontakt',
    }),
    navLabel: 'Footer',
    consentPreferencesLabel: 'Cookie-Einstellungen',
  },
  appStore: localizedAppStore('de-de', 'Laden im App Store'),
  localeSwitcher: {
    label: 'Sprache',
    links: localeSwitcherLinks,
  },
  consentBanner: {
    title: 'Messung unserer Anzeigen',
    body: 'Wir verwenden das Meta-Pixel, um zu messen, ob unsere Anzeigen die richtigen Personen erreichen. Gesundheitsdaten werden nicht erfasst; diese Website hat keinen Zugriff auf Inhalte in der App.',
    acceptLabel: 'Akzeptieren',
    declineLabel: 'Ablehnen',
  },
  schema: createHomeSchema({
    localePath,
    appDescription:
      'Zebra ist ein iPhone-Symptomtracker für POTS, EDS, Fibromyalgie, Dysautonomie und überschneidende unsichtbare Erkrankungen. Erfassen Sie Schübe, Symptome, orthostatische Vitalwerte, Medikamente, Salz, Wasser und Notizen und exportieren Sie einen arztbereiten PDF-Bericht.',
    webPageName: 'Zebra Symptomtracker für POTS, EDS und Dysautonomie',
    webPageDescription:
      'Landingpage für Zebra, einen iPhone-Symptomtracker für POTS, EDS, Dysautonomie und Terminvorbereitung.',
    faqItems,
    offerDescriptions: {
      free: 'Kostenlose Tracking-Version mit Kernfunktionen und 30 Tagen Verlauf.',
      monthly: 'Monatliches Premium schaltet längere Verlaufsansichten und PDF-Export für Arztberichte frei.',
      annual: 'Jährliches Premium schaltet längere Verlaufsansichten und PDF-Export für Arztberichte frei.',
      lifetime: 'Lifetime Premium schaltet Premium mit einem einmaligen Kauf ohne Abo-Verlängerung frei.',
    },
    featureList: [
      'Tägliche Schübe, Symptome, Auslöser, Hydration, Salz und Medikamente erfassen',
      'Orthostatische Vitalwerte in einem geführten Ablauf speichern',
      'POTS-, EDS-, Dysautonomie-, Fibromyalgie-, Long-COVID- und ME/CFS-Verlauf ordnen',
      'Einen arztbereiten PDF-Bericht für Termine exportieren',
    ],
  }),
} as const;
