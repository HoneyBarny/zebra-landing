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
      'Zebra ist ein iPhone-Symptomtracker fuer POTS, EDS und Fibromyalgie. Die App hilft Ihnen, selbst eingegebene Verlaufsdaten zu erfassen und daraus einen arztbereiten Bericht fuer Facharzttermine zu erstellen.',
  },
  {
    question: 'Was kann ich mit Zebra erfassen?',
    answer:
      'Zebra erfasst taegliche Schuebe, Symptome, Medikamente, Salz, Wasser, orthostatische Vitalwerte, Ausloeser, Notizen und arztbereite PDF-Berichte.',
  },
  {
    question: 'Hilft Zebra bei der Vorbereitung auf Arzttermine?',
    answer:
      'Ja. Zebra haelt Ihre Symptomgeschichte geordnet, zeigt Veraenderungen ueber die Zeit und exportiert einen Bericht, den Sie vor einem Facharzttermin durchgehen koennen.',
  },
  {
    question: 'Wie unterscheidet sich Zebra von Notizen oder allgemeinen Trackern?',
    answer:
      'Notizen und Tabellen starten leer. Zebra bietet von Anfang an eine krankheitsbezogene Struktur, orthostatische Messungen und einen arztbereiten Bericht, ohne Wellness-Streaks oder allgemeines Setup.',
  },
  {
    question: 'Wo werden meine Daten gespeichert?',
    answer:
      'App-Gesundheitsdaten werden auf Ihrem iPhone gespeichert und koennen ueber Ihr persoenliches iCloud-Konto synchronisiert werden. Zebra benoetigt kein Zebra-Konto und betreibt keinen separaten Gesundheitsdaten-Server.',
  },
  {
    question: 'Diagnostiziert oder behandelt Zebra Krankheiten?',
    answer:
      'Nein. Zebra stellt keine Diagnosen, behandelt nicht und ersetzt keine medizinische Beratung. Die App hilft, Ihre eigene Vorgeschichte fuer Arztgespraeche zu ordnen.',
  },
  {
    question: 'Was enthaelt Premium?',
    answer:
      'Die kostenlose Version enthaelt die wichtigsten Tracking-Funktionen und 30 Tage Verlauf. Premium schaltet unbegrenzten Verlauf, den PDF-Export fuer Arztberichte und das vollstaendige orthostatische Archiv frei.',
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
    title: 'Zebra: POTS-, EDS- und Fibromyalgie-Symptomtracker fuer iPhone',
    description:
      'Erfassen Sie POTS-, EDS- und Fibromyalgie-Symptome, Schuebe, orthostatische Vitalwerte und Medikamente und erstellen Sie daraus einen arztbereiten Bericht.',
    ogImage: screenshots.appointmentPreparation.src,
    ogImageAlt:
      'Zebra-Vorschau eines arztbereiten Berichts aus Symptomen, orthostatischen Vitalwerten, Medikamenten und Terminnotizen.',
    alternates: localeAlternates,
  },
  header: {
    brand: {
      name: siteConfig.brand.name,
      subtitle: 'Fuer unsichtbare chronische Erkrankungen',
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
    eyebrow: 'Fuer POTS, EDS und Fibromyalgie',
    title: 'Gut vorbereitet zum Arzttermin.',
    body:
      'Erfassen Sie Symptome, Schuebe, orthostatische Vitalwerte, Medikamente, Salz, Wasser und Notizen an einem ruhigen Ort und erstellen Sie daraus einen arztbereiten Bericht.',
    trustLine:
      'Kostenlos tracken. Datenschutzorientiert. Ihre Daten bleiben auf Ihrem Geraet.',
    ctaSupport: ['Datenschutzorientiert', 'Kein Konto erforderlich', 'Keine medizinische Beratung'],
    bullets: [
      'Eine App fuer POTS, EDS und Fibromyalgie',
      'Check-ins in unter 60 Sekunden',
      'Arztbereiter PDF-Bericht',
    ],
    showcase: heroShowcase.map((item) => ({
      ...item,
      alt: 'Zebra-iPhone-App in Bewegung mit Symptomtracking, Terminvorbereitung und arztbereiten Berichtansichten.',
      label: 'Zebra Intro',
      meta: 'Die App in Bewegung sehen',
    })),
    supportCard: {
      eyebrow: 'Der Bericht ist der Nutzen',
      title: 'Oeffnen Sie Zebra vor dem Termin, statt den Monat aus dem Gedaechtnis neu aufzubauen.',
      body: 'Aus taeglichem Schub-Tracking werden verwertbare Informationen: Symptome, Medikamente, Salz, Wasser, orthostatische Vitalwerte und Notizen in einem Bericht.',
    },
  },
  problem: {
    eyebrow: 'Das Problem',
    title: 'Schwer ist nicht, Symptome zu bemerken. Schwer ist, sie spaeter zu erklaeren.',
    statement: 'Wenn der Termin beginnt, liegt die Geschichte in Notizen, Screenshots, halbfertigen Trackern und im Gedaechtnis verstreut.',
    support:
      'Deshalb wird echte Symptomgeschichte schnell zu Schaetzung, besonders wenn Brain Fog die Erinnerung erschwert oder der schlimmste Schub schon vorbei ist.',
    flowLabel: 'Wie sich der Monat anfuehlt',
    flow: ['Notizen', 'Screenshots', 'Gedaechtnis', 'Zebra'],
    bullets: [
      'Sie erinnern Fragmente, nicht den Verlauf',
      'Brain Fog macht Terminvorbereitung schwerer',
      'Schuebe lassen sich spaeter schwer rekonstruieren',
    ],
    quotes: [
      'Ich habe Teile davon ueberall.',
      'Ich wusste, dass es wichtig war, aber beim Termin war es weg.',
      'Nichts zeigte das ganze Bild, als ich es gebraucht haette.',
    ],
  },
  trackingPaths: {
    eyebrow: 'Waehlen Sie Ihren Tracking-Pfad',
    title: 'Beginnen Sie mit der Symptomgeschichte, die Ihr Termin wirklich braucht.',
    intro:
      'Verschiedene Erkrankungen erzeugen verschiedene Arten von Terminstress. Zebra gibt jedem Pfad einen klareren Startpunkt, damit Sie das Wichtige erfassen koennen, ohne ein eigenes System zu bauen.',
    items: [
      {
        label: 'POTS und Dysautonomie',
        title: 'Symptome im Aufrechten mit orthostatischem Kontext erfassen.',
        body:
          'Nutzen Sie Zebra als POTS-Symptomtracker fuer Schwindel, Herzklopfen, Fatigue, Brain Fog, Hydration, Salz, Medikamentennotizen und Liegen-Sitzen-Stehen-Beobachtungen.',
        pain: 'Besonders hilfreich, wenn Sie erklaeren muessen, was nach Stehen, Hitze, Dehydrierung, Medikamentenaenderungen oder einem Schub passiert.',
        href: localizedPath(localePath, '/knowledge/pots/'),
        cta: 'POTS-Hub oeffnen',
      },
      {
        label: 'EDS / hEDS',
        title: 'Schmerz, Instabilitaet, Fatigue und ueberschneidende Symptome zusammenhalten.',
        body:
          'Nutzen Sie Zebra als EDS-Symptomtracker, wenn Gelenkschmerz, Verletzungen, Dysautonomie-Symptome, Fatigue und Notizen zu verstreut sind, um sie schnell zusammenzufassen.',
        pain: 'Besonders hilfreich, wenn ein Facharzt nach einem Koerpersystem fragt, Ihr Monat aber mehrere betroffen hat.',
        href: localizedPath(localePath, '/knowledge/eds/'),
        cta: 'EDS-Hub oeffnen',
      },
      {
        label: 'Fibromyalgie',
        title: 'Schubmuster sichern, bevor Brain Fog Details loescht.',
        body:
          'Nutzen Sie Zebra als Fibromyalgie-Symptomtracker fuer Schmerz, Fatigue, Schlafkontext, Brain Fog, Medikamentenaenderungen, Ausloeser und Alltagsauswirkung.',
        pain: 'Besonders hilfreich, wenn Schmerz und Fatigue den Tag veraendert haben, der genaue Verlauf spaeter aber schwer rekonstruierbar ist.',
        href: localizedPath(localePath, '/knowledge/fibromyalgia/'),
        cta: 'Fibromyalgie-Hub oeffnen',
      },
      {
        label: 'Terminvorbereitung',
        title: 'Aus aktuellen Symptomen einen arztbereiten Bericht machen.',
        body:
          'Nutzen Sie Zebra vor einem Facharzttermin, um Schuebe, wichtigste Symptome, orthostatische Werte, Medikamentenaenderungen, Fragen und Alltagsauswirkung an einem Ort zu sammeln.',
        pain: 'Besonders hilfreich, wenn der Termin kurz ist und Sie ihn nicht mit Notizensuche oder Erinnerungsluecken verbringen wollen.',
        href: localizedPath(localePath, '/knowledge/chronic-illness-appointment-prep/'),
        cta: 'Terminvorbereitung oeffnen',
      },
    ],
    note:
      'Zebra ist ein Organisationstool fuer selbst eingegebenen Verlauf. Es diagnostiziert und behandelt nicht und ersetzt keine medizinische Versorgung.',
  },
  comparison: {
    eyebrow: 'Warum nicht einfach Notizen?',
    title: 'Notizen, Tabellen und allgemeine Tracker lassen Sie die Ordnung zweimal machen.',
    intro:
      'Sie koennen Fragmente festhalten, aber der Termin braucht trotzdem einen klaren Verlauf. Zebra ist fuer genau diesen Sprung gebaut: vom taeglichen Symptomverlauf zum arztbereiten Bericht.',
    alternativesLabel: 'Ueblicher Umweg',
    zebraLabel: 'Was Zebra verbunden haelt',
    items: [
      {
        name: 'Apple Notizen',
        problem:
          'Schnell fuer einen Gedanken, aber spaeter schwer nach Schub, Symptom, Medikamentenaenderung, orthostatischen Werten oder Terminfrage zu sortieren.',
        zebra:
          'Zebra haelt Symptome, Schuebe, Medikamente, Salz, Wasser, Vitalwerte, Ausloeser, Notizen und Fragen in einer datierten Struktur.',
        href: '/zebra-vs-apple-notes/',
        cta: 'Zebra und Notizen vergleichen',
      },
      {
        name: 'Tabellen',
        problem:
          'Flexibel, aber Tracking wird zu Setup-Arbeit und kann an Schwindel-, Schmerz- oder Erschoepfungstagen zu viel werden.',
        zebra:
          'Zebra beginnt mit ruhigen Check-ins und macht auch unvollstaendige Eintraege nuetzlich, damit der Verlauf schlechte Tage uebersteht.',
        href: '/zebra-vs-spreadsheet/',
        cta: 'Zebra und Tabellen vergleichen',
      },
      {
        name: 'Allgemeine Symptomtracker',
        problem:
          'Viele Tracker trennen Vitalwerte, Symptome, Medikamente und Notizen, wodurch POTS-, EDS- und Ueberlappungsverlauf schwerer zu pruefen ist.',
        zebra:
          'Zebra ist zuerst fuer unsichtbare Erkrankungen, orthostatischen Kontext, ueberschneidende Symptome und Facharzttermine gebaut.',
        href: localizedPath(localePath, '/blog/symptom-tracker-vs-notes-app-vs-spreadsheet/'),
        cta: 'Tracker-Vergleich lesen',
      },
      {
        name: 'Habit- und Wellness-Apps',
        problem:
          'Streaks und Wellness-Ziele koennen Schubtage wie Scheitern wirken lassen, obwohl genau diese Tage oft wichtig zu dokumentieren sind.',
        zebra:
          'Zebra behandelt Tracking als Aufbau von Verlauf, nicht als Selbstoptimierung. Ein nuetzlicher Check-in reicht.',
        href: localizedPath(localePath, '/blog/why-symptom-tracking-fails-on-bad-days/'),
        cta: 'Lesen, warum Tracking scheitert',
      },
    ],
    note:
      'Das Ziel ist nicht perfektes Tracking. Das Ziel ist genug selbst eingegebener Verlauf, damit der naechste Termin mit weniger Raten beginnt.',
  },
  doctorReport: {
    ...homePage.doctorReport,
    eyebrow: 'Der Nutzen',
    title: 'Der Bericht veraendert den Arzttermin.',
    answer:
      'Aus taeglichem Tracking wird ein arztbereiter PDF-Bericht: Symptome, orthostatische Vitalwerte, Medikamente, Salz, Wasser, Ausloeser und Notizen, geordnet fuer Ihren Facharzttermin.',
    body: [
      'Statt den Monat aus dem Gedaechtnis nachzuerzaehlen, koennen Sie einen datierten Verlauf durchgehen: was passiert ist, wie oft es vorkam und was sich veraendert hat.',
    ],
    flow: ['30-Tage-Verlauf', 'Muster', 'Arztbereites PDF', 'Termin'],
    bullets: [
      'Symptome, Schuebe, Medikamente und Ausloeser in einem datierten Verlauf',
      'Orthostatische Vitalwerte und Hydration neben der Timeline',
      'Notizen bleiben erhalten, bevor Brain Fog Details verdraengt',
      'Fragen, die Sie vor Terminende besprechen moechten',
    ],
    preview: {
      eyebrow: 'Berichtsvorschau',
      title: 'Was der arztbereite Bericht enthaelt',
      body:
        'Eine leicht verstaendliche Termin-Zusammenfassung aus Ihrem erfassten Verlauf.',
      items: [
        { label: 'Symptomverlauf', body: 'Datierte Veraenderungen, Schuebe und Symptomhaeufigkeit.' },
        { label: 'Orthostatische Vitalwerte', body: 'Liegen, Sitzen und Stehen neben Symptomen.' },
        { label: 'Medikamente, Hydration und Salz', body: 'Kontext, der Veraenderungen rund um einen Schub erklaeren kann.' },
        { label: 'Notizen und Fragen', body: 'Symptomkontext und Fragen fuer den Termin.' },
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
      'Taegliche Eintraege werden nuetzlich, wenn sie helfen, sich vorzubereiten, Veraenderungen zu erklaeren und einem Facharzt eine schnelle Uebersicht zu geben.',
    outcomesLabel: 'Was Sie nach 30 Tagen haben',
    outcomes: [
      'Eine klarere Symptomgeschichte statt verstreuter Notizen',
      'Eine Timeline von Schueben, Veraenderungen und Notizen',
      'Kontext zu Ausloesern, Medikamenten und orthostatischen Veraenderungen',
      'Einen arztbereiten Bericht zum Durchgehen oder Teilen vor dem Termin',
    ],
    comparisonLabel: 'Vor und nach Zebra',
    comparison: [
      {
        label: 'Vor Zebra',
        title: 'Den Monat aus dem Gedaechtnis rekonstruieren',
        points: ['Notizen oeffnen', 'Screenshots suchen', 'Hoffen, dass das Wichtige wieder einfaellt'],
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
      alt: 'Zebra-Arztbericht und Terminvorbereitung mit veraenderten Symptomen, Terminbrief-Vorschau und selbst eingegebenem Verlauf.',
    },
  },
  appointmentPrep: {
    ...homePage.appointmentPrep,
    eyebrow: 'Terminvorbereitung',
    title: 'Sieben Tage vor dem Termin: erfassen, was Sie nicht aus dem Gedaechtnis rekonstruieren wollen.',
    intro:
      'Zebra hilft, die Woche vor einem Termin in eine klarere Geschichte zu verwandeln: was sich veraendert hat, was wiederkam, was den Alltag beeinflusst hat und was Sie im Termin fragen moechten.',
    checklistTitle: 'Was zuerst erfasst werden sollte',
    checklist: [
      { label: 'Aktuelle Schuebe', body: 'Erfassen Sie Schwere, Dauer und Veraenderungen, damit die schlechten Tage nicht verschwinden, sobald der Schub vorbei ist.' },
      { label: 'Wichtigste Symptome', body: 'Waehlen Sie die Symptome, die am meisten zaehlen, statt jede Empfindung perfekt dokumentieren zu wollen.' },
      { label: 'Medikamentenaenderungen', body: 'Halten Sie Timing, Dosisnotizen, Nebenwirkungen und Fragen neben dem Symptomverlauf fest.' },
      { label: 'Salz, Wasser und Kontext', body: 'Erfassen Sie Hydration und Salz neben Symptomen, wenn sie fuer Ihren Behandlungsplan relevant sind.' },
      { label: 'Orthostatische Vitalwerte', body: 'Speichern Sie Liegen-, Sitzen- und Stehen-Beobachtungen mit Symptomen und Notizen desselben Tages.' },
      { label: 'Alltagsauswirkung', body: 'Halten Sie fest, was Symptome an Stehen, Arbeit, Schule, Schlaf, Erledigungen oder Erholung veraendert haben.' },
      { label: 'Fragen fuer den Raum', body: 'Schreiben Sie die Fragen auf, die Brain Fog, Stress oder ein kurzer Termin nicht loeschen sollen.' },
    ],
    pathsTitle: 'Nach Erkrankung orientierte Beispiele',
    paths: [
      { condition: 'POTS und Dysautonomie', body: 'Bringen Sie Symptome im Aufrechten, orthostatische Beobachtungen, Salz- und Wasserkontext, Medikamentennotizen und Schubtiming in eine Ansicht.' },
      { condition: 'EDS / hEDS', body: 'Halten Sie Schmerz, Instabilitaet, Fatigue, Verletzungen, Notizen und ueberlappende Symptome verbunden statt verstreut.' },
      { condition: 'Fibromyalgie und ueberlappende Schuebe', body: 'Bewahren Sie Schmerz, Fatigue, Brain Fog, Medikamentenaenderungen, Schlafkontext und Alltagsauswirkung fuer ein klareres Folgegespraech.' },
    ],
    samplePreview: {
      eyebrow: 'Beispielbericht',
      title: 'So kann eine einseitige Terminansicht aussehen',
      meta: 'Nur Beispiel, mit fiktiven Patientendaten.',
      rows: [
        { label: 'Hauptveraenderung', value: 'Mehr Schwindel und Fatigue nach kurzen Aufgaben im Stehen' },
        { label: 'Aktuelle Schuebe', value: '3 deutliche Schubtage, Erholung langsamer als sonst' },
        { label: 'Kontext', value: 'Medikamentenaenderung, weniger Hydration, zwei Hitzetage' },
        { label: 'Frage im Termin', value: 'Was sollte ich bis zum naechsten Termin erfassen?' },
      ],
      note: 'Die Berichtsvorschau ist keine Diagnose. Sie zeigt, wie Zebra selbst eingegebenen Verlauf fuer ein klareres Gespraech ordnen kann.',
    },
    note:
      'Nutzen Sie dies als Organisationshilfe, nicht als diagnostische Checkliste. Zebra diagnostiziert und behandelt nicht und sagt nicht, was ein Arzt schlussfolgern sollte.',
  },
  howItWorks: {
    eyebrow: 'So funktioniert Zebra',
    title: 'Drei einfache Schritte, auch an Tagen mit wenig Energie.',
    intro: 'Der Ablauf bleibt an schlechten Tagen kurz und wird nuetzlicher, je naeher der Termin kommt.',
    timeline: ['Symptome und Kontext erfassen', 'Muster ueber Zeit sehen', 'Bericht exportieren oder pruefen'],
    steps: [
      {
        label: 'Symptome und Kontext erfassen',
        body: 'Protokollieren Sie Symptome, Schuebe, orthostatische Vitalwerte, Medikamente, Salz, Wasser, Ausloeser und Notizen in einem kurzen Check-in.',
      },
      {
        label: 'Muster ueber Zeit sehen',
        body: 'Orthostatische Werte und Tageskontext bleiben in derselben Timeline, damit Muster spaeter leichter erkennbar sind.',
      },
      {
        label: 'Arztbereiten Bericht exportieren oder pruefen',
        body: 'Sehen Sie vor dem Termin, was sich veraendert hat, und exportieren Sie einen klaren Bericht, wenn Sie etwas mitnehmen moechten.',
      },
    ],
  },
  screenshotCarousel: {
    eyebrow: 'App-Vorschau',
    title: 'Sehen Sie den Ablauf vom Tracking bis zum Bericht.',
    intro:
      'Die Seite fuehrt mit dem Bericht, aber das Produkt bleibt auf kurze Check-ins ausgelegt, die auch an schlechten Tagen funktionieren.',
    label: 'Zebra-App-Screenshots',
    items: [
      {
        ...screenshotStory.doctorReport,
        label: 'Arztbericht-Vorschau',
        meta: 'Terminbrief-Vorschau',
        title: 'Arztbericht-Vorschau',
        body: 'Pruefen Sie vor dem Termin eine kurze Uebersicht.',
      },
      {
        ...screenshotStory.dailyTracking,
        label: 'Taeglicher Check-in',
        meta: 'Symptome, Ausloeser, Hydration, Medikamente',
        title: 'Taeglicher Check-in',
        body: 'Erfassen Sie Symptome, Ausloeser, Hydration, Medikamente und Notizen.',
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
        body: 'Sehen Sie wiederkehrende Muster und gespeicherte Einsichten ueber die Zeit.',
      },
      {
        ...screenshots.todaySummary,
        meta: 'Tagesuebersicht',
        title: 'Tagesuebersicht',
        body: 'Pruefen Sie das aktuelle Muster, ohne die Geschichte neu aufzubauen.',
      },
    ],
  },
  dailyTracking: {
    ...homePage.dailyTracking,
    eyebrow: 'Fuer Schubtage gebaut',
    title: 'An einem schweren Tag reicht ein kurzer Check-in.',
    intro: 'Zebra bleibt nutzbar, wenn Ihnen schwindlig ist, Sie erschoepft sind, Brain Fog haben oder Schmerzen.',
    body: [
      'Oeffnen Sie Zebra, tippen Sie an, was sich veraendert hat, und gehen Sie wieder zurueck in Ihren Tag. Kein leeres Setup. Keine Wellness-Hausaufgaben. Keine Streaks.',
    ],
    momentLabel: 'Was in unter einer Minute passiert',
    sequence: ['Zebra oeffnen', 'Veraenderungen antippen', 'Zurueck in den Tag'],
    bullets: ['Schuebe und Symptome', 'Medikamente und Notizen', 'Salz, Wasser und Ausloeser'],
    cards: [
      { eyebrow: 'Warum es leichter wirkt', title: 'Von Anfang an krankheitsbezogen', body: 'Sie muessen die Struktur nicht zuerst erfinden.' },
      { eyebrow: 'Warum es spaeter zaehlt', title: 'Alles landet in einer Timeline', body: 'Dadurch wird der Arztbericht moeglich.' },
    ],
    ctaLabel: 'Heute mit Tracking starten',
    ctaNote: 'Ein ruhiger Ort fuer den taeglichen Verlauf.',
    media: {
      ...screenshotStory.dailyTracking,
      label: 'Taeglicher Check-in',
      meta: 'Symptome, Ausloeser, Hydration, Medikamente',
      alt: 'Zebra-iPhone-Symptomtracker-Check-in fuer POTS, Dysautonomie, EDS und Fibromyalgie mit Symptomen, Ausloesern, Hydration, Medikamenten und Notizen.',
    },
  },
  orthostaticTest: {
    ...homePage.orthostaticTest,
    eyebrow: 'Orthostatischer Test',
    title: 'Erfassen Sie orthostatische Vitalwerte dort, wo sie hingehoeren.',
    intro: 'Im selben Verlauf wie alles andere, nicht in einem separaten Tool, das Sie spaeter abgleichen muessen.',
    body: [
      'Zebra verbindet Werte im Liegen, Sitzen und Stehen mit Ihren Symptomen, statt sie in ein weiteres Tool auszulagern.',
    ],
    momentLabel: 'Die gefuehrte Sequenz',
    sequence: ['Hinlegen', 'Aufsetzen', 'Stehen', 'In derselben Timeline speichern'],
    bullets: [
      'Gefuehrter Ablauf fuer Liegen, Sitzen und Stehen',
      'Dieselbe Timeline wie Symptome und Medikamente',
      'Spaeter leichter im Kontext zu pruefen',
    ],
    cards: [
      { eyebrow: 'Warum das hilft', title: 'Ihre Werte stehen nicht isoliert da', body: 'Aerzte sehen sie neben dem restlichen Tag.' },
      { eyebrow: 'Warum es wichtig ist', title: 'Weniger Jonglieren, mehr Klarheit', body: 'Sie springen nicht zwischen mehreren Gesundheitstools.' },
    ],
    ctaLabel: 'Sehen, wie der Bericht entsteht',
    ctaNote: 'Vitalwerte bleiben nuetzlich, weil sie verbunden bleiben.',
    media: {
      ...screenshotStory.orthostaticTest,
      label: 'Orthostatische Daten',
      meta: 'Orthostatischer Test im Berichtsablauf',
      alt: 'Zebra-Terminvorbereitung mit orthostatischen Testdaten, Medikamentenverlauf und Fragen fuer den Termin.',
    },
  },
  trust: {
    eyebrow: 'Vertrauen, Sicherheit und Datenschutz',
    title: 'Privat, medizinisch vorsichtig und klar darin, wofuer Zebra gedacht ist.',
    intro:
      'Zebra konzentriert sich darauf, selbst eingegebene Verlaufsdaten fuer Arztgespraeche und Facharzttermine zu ordnen. Zebra diagnostiziert, behandelt oder verhindert keine Krankheiten und ersetzt keine medizinische Versorgung.',
    highlight: {
      eyebrow: 'Vertrauen auf einen Blick',
      title: 'Datenschutzorientiert. Fuer Brain Fog gebaut. Am staerksten vor Terminen.',
      body:
        'Zebra hilft Ihnen, einen klareren Verlauf fuer Facharzttermine zu behalten, besonders wenn Symptome sich ueberschneiden und Erinnerung unzuverlaessig wird. App und Wissensbereich unterstuetzen Selbstorganisation und Arztgespraeche, nicht Diagnose, Behandlung, Praevention oder Verkauf von Gesundheitsdaten.',
    },
    calmState: {
      eyebrow: 'Der Endzustand',
      title: 'Besser vorbereitet. Weniger ueberfordert.',
      body:
        'Das Ziel ist nicht, Krankheit ordentlich wirken zu lassen. Der Termin soll ruhiger werden, weil Ihr Verlauf schon bereitliegt.',
    },
    items: [
      { title: 'Datenschutz zuerst', body: 'App-Gesundheitsdaten werden auf Ihrem iPhone gespeichert und koennen je nach Apple-/iCloud-Einstellungen und App-Version ueber Ihr persoenliches iCloud-Konto synchronisiert werden. Zebra benoetigt kein Zebra-Konto und betreibt keinen separaten Gesundheitsdaten-Server.' },
      { title: 'Am besten fuer Facharzttermine', body: 'Zebra passt besonders, wenn Sie vor Kardiologie-, Facharzt- oder Kontrollterminen eine klarere Symptomgeschichte brauchen.' },
      { title: 'Sie besitzen den Verlauf', body: 'Kein Konto erforderlich, kein Gesundheitsdaten-Server und kein Neuaufbau Ihrer Geschichte in einem fremden System.' },
      { title: 'Brain-Fog-freundlich', body: 'Kurze Ablaeufe, klare Hierarchie und Nutzung mit wenig Energie an Schubtagen.' },
      { title: 'Auf Facharzttermine fokussiert', body: 'Gebaut rund um Termine, nicht Selbstoptimierung oder Wellness-Streaks.' },
      { title: 'Medizinisch vorsichtig', body: 'Keine Diagnose, keine Behandlungsempfehlungen, keine Praeventionsversprechen und keine ueberzogenen Aussagen darueber, was Ihre Daten bedeuten.' },
      { title: 'Nicht fuer Notfaelle', body: 'Zebra ist kein Notfalltool, kein Symptomchecker und kein Ersatz fuer dringende oder professionelle medizinische Versorgung.' },
      { title: 'Selbst eingegebene Daten', body: 'Was Zebra zusammenfasst, stammt aus dem Verlauf, den Sie selbst erfassen und pruefen.' },
    ],
    links: [
      { label: 'Zebra Editorial ansehen', href: localizedPath(localePath, '/authors/zebra-editorial/') },
      { label: 'Wissensbereich durchsuchen', href: localizedPath(localePath, siteConfig.routes.knowledge) },
      { label: 'Datenschutzerklaerung lesen', href: localizedPath(localePath, siteConfig.routes.privacy) },
      { label: 'Support besuchen', href: localizedPath(localePath, siteConfig.routes.support) },
    ],
    resources: [
      { eyebrow: 'Feedback', title: 'Feedback senden oder Funktion wuenschen', body: 'Sagen Sie uns, was Zebra vor Terminen oder an Schubtagen leichter machen wuerde.', href: `mailto:${siteConfig.support.email}?subject=Zebra%20feedback` },
      { eyebrow: 'Redaktionelle Standards', title: 'Sehen, wie Zebra-Inhalte geprueft werden', body: 'Lernen Sie Redaktion, Pruefprozess, Aktualisierungsrichtlinie und medizinische Sprachgrenzen kennen.', href: localizedPath(localePath, '/authors/zebra-editorial/') },
      { eyebrow: 'Wissensbereich', title: 'Verbundene Begriffe zu Symptomen und Erkrankungen durchsuchen', body: 'Sehen Sie, wie POTS, Dysautonomie, Brain Fog, Fatigue, Arztberichte und Terminvorbereitung zusammenhaengen.', href: localizedPath(localePath, siteConfig.routes.knowledge) },
      { eyebrow: 'Ratgeber', title: 'Die wichtigsten praktischen Guides zuerst lesen', body: 'Vergleichen Sie Zebra mit Notizen, lernen Sie, was Sie erfassen sollten, und verstehen Sie den Bericht vor dem Download.', href: localizedPath(localePath, siteConfig.routes.blog) },
    ],
    resourcesIntro: {
      eyebrow: 'Redaktionelles Vertrauen',
      title: 'So pflegt Zebra Inhalte und den Wissensbereich.',
    },
    resourcesCtaLabel: 'Seite oeffnen',
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
      'Starten Sie heute mit der kostenlosen Version. Wechseln Sie zu Premium, wenn Sie unbegrenzten Verlauf und arztbereite PDF-Berichte moechten.',
    points: ['Taeglich erfassen', 'Muster sehen', 'Bericht exportieren'],
    pointsLabel: 'Warum Zebra herunterladen',
    endState: 'Ein ruhigerer Termin beginnt mit einem Verlauf, den Sie nicht neu aufbauen muessen.',
    trustLine: 'Kostenlos tracken · Datenschutzorientiert · Jederzeit kuendbar',
  },
  mobileStickyCta: {
    label: 'Zebra laden',
    note: 'Bringen Sie Verlauf zum Arzttermin mit',
    ariaLabel: 'Zebra im App Store herunterladen',
  },
  footer: {
    body: 'Zebra ist ein iPhone-Symptomtracker fuer POTS, Dysautonomie, EDS, Fibromyalgie und ueberschneidende chronische Erkrankungen, gebaut fuer klarere Verlaeufe und Facharzttermine.',
    trustLine: 'Datenschutzorientiert. Fuer iPhone gebaut. Nur selbst eingegebene Daten. Kein Diagnosetool.',
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
      'Zebra ist ein iPhone-Symptomtracker fuer POTS, EDS, Fibromyalgie, Dysautonomie und ueberschneidende unsichtbare Erkrankungen. Erfassen Sie Schuebe, Symptome, orthostatische Vitalwerte, Medikamente, Salz, Wasser und Notizen und exportieren Sie einen arztbereiten PDF-Bericht.',
    webPageName: 'Zebra Symptomtracker fuer POTS, EDS und Dysautonomie',
    webPageDescription:
      'Landingpage fuer Zebra, einen iPhone-Symptomtracker fuer POTS, EDS, Dysautonomie und Terminvorbereitung.',
    faqItems,
    offerDescriptions: {
      free: 'Kostenlose Tracking-Version mit Kernfunktionen und 30 Tagen Verlauf.',
      monthly: 'Monatliches Premium schaltet unbegrenzten Verlauf, PDF-Export fuer Arztberichte und das volle orthostatische Archiv frei.',
      annual: 'Jaehrliches Premium schaltet unbegrenzten Verlauf, PDF-Export fuer Arztberichte und das volle orthostatische Archiv frei.',
    },
    featureList: [
      'Taegliche Schuebe, Symptome, Ausloeser, Hydration, Salz und Medikamente erfassen',
      'Orthostatische Vitalwerte in einem gefuehrten Ablauf speichern',
      'POTS-, EDS-, Dysautonomie-, Fibromyalgie-, Long-COVID- und ME/CFS-Verlauf ordnen',
      'Einen arztbereiten PDF-Bericht fuer Termine exportieren',
    ],
  }),
} as const;
