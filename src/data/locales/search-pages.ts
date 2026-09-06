import type { SearchPage } from '../search-pages';
import { searchPages } from '../search-pages';
import { localeRoutes } from './shared';

export type SearchLocale = 'de-de' | 'es-es' | 'fr-fr';

const sourceBySlug = Object.fromEntries(searchPages.map((page) => [page.slug, page])) as Record<string, SearchPage>;

export const localizedSearchPageSlugs = [
  'pots-tracker',
  'doctor-report',
  'orthostatic-vitals-test',
  'appointment-prep-checklist',
  'symptom-tracker-for-invisible-illness',
] as const;

type LocalizedSearchPageSlug = (typeof localizedSearchPageSlugs)[number];

const commonTracks = {
  'de-de': [
    'Taegliche Schuebe, Symptome, Ausloeser und Notizen',
    'Medikamente, Salz, Wasser und Fragen fuer den Termin',
    'Orthostatische Werte mit Liegen, Stehen und Erholung',
    'PDF-Bericht fuer Arzttermine mit Premium',
  ],
  'es-es': [
    'Brotes diarios, sintomas, desencadenantes y notas',
    'Medicacion, sal, agua y preguntas para la cita',
    'Constantes ortostaticas tumbada, de pie y recuperacion',
    'Informe PDF para citas con Premium',
  ],
  'fr-fr': [
    'Poussees quotidiennes, symptomes, declencheurs et notes',
    'Medicaments, sel, eau et questions pour le rendez-vous',
    'Constantes orthostatiques allongee, debout et recuperation',
    'Rapport PDF pour rendez-vous avec Premium',
  ],
} satisfies Record<SearchLocale, string[]>;

const commonNotFor = {
  'de-de': [
    'Diagnose, Behandlung, Notfallhilfe oder Medikamentenempfehlungen.',
    'Fitnessziele, Streaks oder ein allgemeines Wellness-Dashboard.',
    'Android-Unterstuetzung heute.',
  ],
  'es-es': [
    'Diagnostico, tratamiento, urgencias o recomendaciones de medicacion.',
    'Objetivos fitness, rachas o un panel de bienestar generico.',
    'Soporte para Android hoy.',
  ],
  'fr-fr': [
    'Diagnostic, traitement, urgence ou recommandations de medicaments.',
    'Objectifs fitness, series ou tableau de bord bien-etre generaliste.',
    'Support Android aujourd hui.',
  ],
} satisfies Record<SearchLocale, string[]>;

const commonReferences = {
  'de-de': 'Zebra ordnet selbst eingegebene Verlaufdaten fuer Arztgespraeche. Die App diagnostiziert, behandelt und interpretiert Symptome nicht.',
  'es-es': 'Zebra organiza historial introducido por la persona para conversaciones medicas. La app no diagnostica, trata ni interpreta sintomas.',
  'fr-fr': 'Zebra organise l historique saisi par la personne pour les rendez-vous medicaux. L app ne diagnostique pas, ne traite pas et n interprete pas les symptomes.',
} satisfies Record<SearchLocale, string>;

function localizedPageUrl(locale: SearchLocale, slug: string) {
  return `${localeRoutes[locale === 'de-de' ? 'deDe' : locale === 'es-es' ? 'esEs' : 'frFr']}${slug}/`;
}

function withSource(slug: LocalizedSearchPageSlug, locale: SearchLocale, page: Omit<SearchPage, 'slug' | 'kind' | 'lastReviewed' | 'related'> & { related?: SearchPage['related'] }): SearchPage {
  const source = sourceBySlug[slug];

  return {
    ...source,
    ...page,
    slug,
    related: page.related ?? [
      { label: page.eyebrow, href: localizedPageUrl(locale, slug) },
      { label: 'POTS', href: `${localeRoutes[locale === 'de-de' ? 'deDe' : locale === 'es-es' ? 'esEs' : 'frFr']}knowledge/pots/` },
      { label: 'Doctor report', href: localizedPageUrl(locale, 'doctor-report') },
      { label: 'Orthostatic vitals', href: localizedPageUrl(locale, 'orthostatic-vitals-test') },
    ],
  };
}

export const localizedSearchPages: Record<SearchLocale, Record<LocalizedSearchPageSlug, SearchPage>> = {
  'de-de': {
    'pots-tracker': withSource('pots-tracker', 'de-de', {
      title: 'POTS-Tagebuch und POTS-Symptomtracker | Zebra',
      description: 'Dokumentieren Sie POTS-Symptome, Schübe, Salz, Wasser, Medikamente, orthostatische Werte und Terminnotizen in einer iPhone-App.',
      eyebrow: 'POTS-Tagebuch',
      h1: 'POTS-Tagebuch für Symptome, Schübe und Arzttermine.',
      directAnswer: 'Zebra ist ein iPhone-POTS-Tagebuch und Symptomtracker, der Symptome, Schübe, Salz, Wasser, Medikamente, orthostatische Werte und Notizen für Arzttermine an einem Ort hält.',
      summary: ['Ein POTS-Verlauf ist schwer zu erklären, wenn Symptome, Werte, Medikamente und Notizen über mehrere Apps oder Zettel verteilt sind.', 'Mit Zebra erfassen Sie Symptome und Kontext, prüfen den Verlauf später und bereiten daraus einen Symptombericht für den Arzttermin vor.'],
      whyTitle: 'Warum ein POTS-Tagebuch mehr braucht als eine leere Notiz',
      why: ['Aufrechte Symptome können mit Stehen, Hitze, Krankheit, Medikamenten, Salz, Wasser, Schlaf oder einem Schub zusammenhängen.', 'Eine feste Struktur reduziert Erinnerungsarbeit, wenn Brain Fog den letzten Monat schwer rekonstruierbar macht.', 'Der Verlauf wird nützlicher, wenn Symptome, orthostatische Beobachtungen und Terminfragen zusammenbleiben.'],
      tracksTitle: 'Was Zebra für POTS dokumentieren hilft',
      tracks: ['Tägliche Schübe, Symptome, Auslöser und Notizen', 'Medikamente, Salz, Wasser und Fragen für den Termin', 'Orthostatische Werte mit Liegen, Stehen und Erholung', 'Verlauf, Muster und PDF-Bericht für Arzttermine mit Premium'],
      bestFor: ['Menschen mit POTS oder Dysautonomie, die ihren Verlauf ruhiger für Termine vorbereiten wollen.', 'Menschen, denen Notizen, Tabellen und Erinnern an Schubtagen zu viel werden.'],
      notFor: commonNotFor['de-de'],
      trust: 'Zebra ordnet selbst eingegebene Verlaufsdaten für Arztgespräche. Die App diagnostiziert POTS nicht, behandelt nicht und interpretiert Symptome nicht medizinisch.',
      cta: 'Zebra für POTS herunterladen',
      related: [
        { label: 'Schellong-Test dokumentieren', href: '/de-de/orthostatic-vitals-test/' },
        { label: 'Symptombericht für den Arzt', href: '/de-de/doctor-report/' },
        { label: 'POTS-Heimtest-Notizen', href: '/de-de/blog/pots-home-test-notes-heart-rate-blood-pressure/' },
        { label: 'Blood Pooling erfassen', href: '/de-de/blog/blood-pooling-leg-discoloration-symptom-tracker/' },
        { label: 'Hitzeintoleranz bei POTS', href: '/de-de/blog/heat-intolerance-symptom-tracker-what-to-log/' },
      ],
      faqs: [
        { question: 'Kann Zebra als POTS-Tagebuch bei Arztterminen helfen?', answer: 'Ja. Zebra hält Schübe, Symptome, Medikamente, Salz, Wasser, orthostatische Werte und Terminnotizen zusammen, damit Sie den Verlauf vor einem Arzttermin leichter prüfen können.' },
        { question: 'Diagnostiziert Zebra POTS?', answer: 'Nein. Zebra hilft beim Dokumentieren und Ordnen Ihrer eigenen Geschichte. Diagnose, Einordnung und Behandlung gehören zu qualifizierter medizinischer Versorgung.' },
      ],
    }),
    'doctor-report': withSource('doctor-report', 'de-de', {
      title: 'Symptombericht für den Arzt aus eigenem Verlauf | Zebra',
      description: 'Erstellen Sie aus Ihren eigenen Schüben, Symptomen, Medikamenten, orthostatischen Werten und Notizen einen PDF-Symptombericht für den Arzt.',
      eyebrow: 'Symptombericht für den Arzt',
      h1: 'Ein Symptombericht für den Arzt aus Ihrem eigenen Verlauf.',
      directAnswer: 'Zebra erstellt aus selbst eingegebenen Schüben, Symptomen, Medikamenten, Salz, Wasser, orthostatischen Werten, Auslösern und Notizen einen PDF-Symptombericht, den Sie vor einem Arzttermin prüfen können.',
      summary: ['Der Bericht ist für den Moment gedacht, in dem Erinnerung dünn wird, der Termin kurz ist und verstreute Notizen nicht schnell genug helfen.', 'Er organisiert Ihren eigenen Verlauf. Er ist kein ärztlicher Befund, keine Diagnose und keine medizinische Interpretation.'],
      whyTitle: 'Warum ein eigener Symptombericht für den Arzt hilft',
      why: ['Ein datierter Verlauf ist leichter zu prüfen als verstreute Notizen, Screenshots und Tabellen.', 'Symptome, Medikamente, orthostatischer Kontext, Schübe und Fragen bleiben in einer Zusammenfassung verbunden.', 'Sie können vor dem Termin sehen, was sich verändert hat, statt es im Gespräch aus dem Gedächtnis rekonstruieren zu müssen.'],
      tracksTitle: 'Was Zebra in den Symptombericht aufnehmen kann',
      tracks: ['Schübe, Symptome, Stärke, Notizen und Alltagsauswirkung', 'Medikamente, Salz, Wasser, Auslöser und Terminfragen', 'Orthostatische Werte und relevante Beobachtungen, wenn Sie sie erfasst haben', 'Einen PDF-Bericht aus Ihrem eigenen Verlauf mit Premium'],
      bestFor: ['Menschen, die vor einem Facharzttermin einen 30-Tage-Überblick brauchen.', 'Menschen, denen Details unter Termindruck, Schmerzen, Schwindel oder Brain Fog entfallen.'],
      notFor: commonNotFor['de-de'],
      trust: 'Der Bericht fasst Ihre selbst eingegebenen Informationen zusammen. Zebra schreibt keinen ärztlichen Befund und ersetzt keine medizinische Dokumentation, Diagnose oder Beratung.',
      cta: 'Ersten Symptombericht vorbereiten',
      related: [
        { label: 'POTS-Tagebuch', href: '/de-de/pots-tracker/' },
        { label: 'Schellong-Test dokumentieren', href: '/de-de/orthostatic-vitals-test/' },
        { label: 'Arzttermin vorbereiten', href: '/de-de/appointment-prep-checklist/' },
        { label: 'Was ist ein arztbereiter Symptombericht?', href: '/de-de/blog/what-is-a-doctor-ready-symptom-report/' },
        { label: 'Symptom-Checkliste für den Arzttermin', href: '/de-de/blog/doctor-appointment-symptom-checklist/' },
      ],
      faqs: [
        { question: 'Kann ich einen PDF-Symptombericht exportieren?', answer: 'Ja. Der PDF-Export ist in Premium enthalten; die kostenlose Version enthält Kerntracking und 30 Tage Verlauf.' },
        { question: 'Ist der Bericht ein medizinischer Befund?', answer: 'Nein. Er ist eine geordnete Zusammenfassung Ihrer selbst eingegebenen Daten, kein Bericht eines Arztes und keine Diagnose.' },
      ],
    }),
    'orthostatic-vitals-test': withSource('orthostatic-vitals-test', 'de-de', {
      title: 'Schellong-Test und orthostatische Werte dokumentieren | Zebra',
      description: 'Dokumentieren Sie Liegen-, Stehen- und Erholungswerte mit Symptomen, Schüben, Salz, Wasser und Medikamenten. Zebra diagnostiziert nicht.',
      eyebrow: 'Schellong-Test-Notizen',
      h1: 'Schellong-Test-Notizen und orthostatische Werte sicher dokumentieren.',
      directAnswer: 'Zebra führt keinen medizinischen Schellong-Test durch. Die App hilft, selbst gemessene Liegen-, Stehen- und Erholungswerte mit Symptomen, Medikamenten, Salz, Wasser und Notizen in Ihrem Verlauf zu speichern.',
      summary: ['Wer nach Schellong-Test oder orthostatischem Test sucht, braucht oft eine klare Möglichkeit, Messzeitpunkt, Position und Symptome zusammenzuhalten.', 'Zebra organisiert diese Beobachtungen für spätere Durchsicht und Arzttermine, ohne Ergebnisse zu bewerten oder POTS zu diagnostizieren.'],
      whyTitle: 'Warum ein orthostatischer Test Kontext braucht',
      why: ['Liegen, Stehen, Herzfrequenz, Blutdruck, Hydration, Salz, Medikamente, Hitze und Krankheit können wichtiger Kontext für das Gespräch sein.', 'Ein gemeinsamer Verlauf reduziert Screenshots, getrennte Notizen und spätere Rekonstruktion.', 'Sicherheit bleibt wichtiger als vollständiges Tracking: Stoppen, Hinsetzen oder Hinlegen gehört in die Notiz, wenn ein Ablauf abgebrochen wurde.'],
      tracksTitle: 'Was der Zebra-Ablauf zusammenhält',
      tracks: ['Liegen-, Stehen- und Erholungswerte, wenn Sie diese sicher erfassen', 'Symptome im selben Moment, zum Beispiel Schwindel, Herzklopfen, Schwäche oder Brain Fog', 'Medikamente, Salz, Wasser, Hitze, Krankheit und anderer Tageskontext', 'Verlauf und PDF-Bericht für die spätere Besprechung mit Ihrem Behandlungsteam'],
      bestFor: ['Menschen, die orthostatische Beobachtungen vor Kardiologie- oder Facharztterminen ordnen wollen.', 'Menschen, die einen Schellong-Test oder Stehtest nicht bewerten, sondern ihre eigenen Messnotizen sauber sammeln möchten.'],
      notFor: commonNotFor['de-de'],
      trust: 'Zebra dokumentiert selbst eingegebene Beobachtungen. Die App bestätigt keinen positiven Schellong-Test, diagnostiziert keine orthostatische Intoleranz oder POTS und ersetzt keine medizinische Bewertung.',
      cta: 'Orthostatische Werte dokumentieren',
      related: [
        { label: 'POTS-Tagebuch', href: '/de-de/pots-tracker/' },
        { label: 'Symptombericht für den Arzt', href: '/de-de/doctor-report/' },
        { label: 'POTS-Heimtest-Notizen', href: '/de-de/blog/pots-home-test-notes-heart-rate-blood-pressure/' },
        { label: 'Was hilft ein orthostatischer Test zu erfassen?', href: '/de-de/blog/what-does-an-orthostatic-test-help-you-record/' },
        { label: 'Orthostatische Intoleranz verstehen', href: '/de-de/blog/what-is-orthostatic-intolerance/' },
      ],
      faqs: [
        { question: 'Führt Zebra einen medizinischen Schellong-Test durch?', answer: 'Nein. Zebra bietet einen geführten Dokumentationsablauf für Ihre eigenen Messwerte und Symptome. Die medizinische Bedeutung entscheidet ein qualifizierter Behandler.' },
        { question: 'Kann Zebra sagen, ob ein orthostatischer Test positiv ist?', answer: 'Nein. Zebra speichert Beobachtungen und Verlauf, interpretiert aber keine Ergebnisse und diagnostiziert keine Erkrankung.' },
      ],
    }),
    'appointment-prep-checklist': withSource('appointment-prep-checklist', 'de-de', {
      title: 'Checkliste fuer chronische Krankheit vor dem Arzttermin | Zebra',
      description: 'Was Sie 7 Tage vor einem Termin tracken koennen: Schuebe, Symptome, Medikamente, Salz, Wasser, orthostatische Werte und Fragen.',
      eyebrow: 'Termin-Checkliste',
      h1: 'Was Sie 7 Tage vor einem Termin mit chronischer Krankheit tracken koennen.',
      directAnswer: 'Tracken Sie vor einem Termin die Details, die spaeter schwer aus dem Gedaechtnis zu holen sind: Schuebe, Topsymptome, Medikamente, Salz, Wasser, orthostatische Werte, Alltagsauswirkung und Fragen.',
      summary: ['Die Woche vor einem Termin ist oft der Moment, in dem die Erinnerungsarbeit beginnt.', 'Diese Checkliste hilft praktisch, ohne eine Diagnose-Checkliste zu werden.'],
      whyTitle: 'Warum 7 Tage fokussiertes Tracking helfen koennen',
      why: ['Ein kurzer aktueller Verlauf ist realistischer als ein perfekter Monat.', 'Verbundenes Tracking macht den Bericht leichter pruefbar.'],
      tracksTitle: 'Die wichtigsten Details vor dem Termin',
      tracks: commonTracks['de-de'],
      bestFor: ['Facharzt-, Kardiologie-, Hausarzt- und Kontrolltermine.', 'Menschen mit Brain Fog, Schmerz, Schwindel oder Fatigue.'],
      notFor: commonNotFor['de-de'],
      trust: commonReferences['de-de'],
      cta: '7-Tage-Checkliste in Zebra starten',
      faqs: [
        { question: 'Kann ich die Checkliste ohne Diagnose nutzen?', answer: 'Ja. Sie ordnet, was passiert ist, ohne Ursachen zu behaupten.' },
      ],
    }),
    'symptom-tracker-for-invisible-illness': withSource('symptom-tracker-for-invisible-illness', 'de-de', {
      title: 'Symptomtracker fuer unsichtbare Krankheit | Zebra',
      description: 'Zebra ist ein iPhone-Symptomtracker fuer unsichtbare Krankheit, Brain Fog, Schuebe, orthostatische Werte und Arztberichte.',
      eyebrow: 'Unsichtbare Krankheit',
      h1: 'Ein Symptomtracker fuer unsichtbare Krankheit, der sich nicht wie Hausaufgaben anfuehlt.',
      directAnswer: 'Zebra ist ein iPhone-Symptomtracker fuer unsichtbare Krankheit, gebaut fuer niedrigere Energie, Brain Fog, Schuebe, orthostatische Werte und arztbereite Berichte.',
      summary: ['Unsichtbare Krankheit macht den Nachweis oft schwer, weil beim Termin nicht sichtbar ist, was im Monat passiert ist.', 'Zebra hilft, die eigene Geschichte ruhiger festzuhalten.'],
      whyTitle: 'Warum Tracking fuer unsichtbare Krankheit anders sein muss',
      why: ['Symptome sind beim Termin oft nicht sichtbar.', 'Brain Fog erschwert Erinnerung genau im falschen Moment.', 'Ein guter Tracker spart Taps, Entscheidungen und Energie.'],
      tracksTitle: 'Was Zebra zusammenhaelt',
      tracks: commonTracks['de-de'],
      bestFor: ['Menschen mit POTS, EDS/hEDS, Fibromyalgie, Dysautonomie, Long COVID oder ME/CFS.', 'Menschen, die weniger Erinnerungsarbeit vor Terminen wollen.'],
      notFor: commonNotFor['de-de'],
      trust: commonReferences['de-de'],
      cta: 'Zebra herunterladen',
      faqs: [
        { question: 'Ist Zebra fuer Brain Fog gebaut?', answer: 'Ja. Kurze Check-ins und Berichte reduzieren die Arbeit, alles aus dem Gedaechtnis neu aufzubauen.' },
      ],
    }),
  },
  'es-es': {
    'pots-tracker': withSource('pots-tracker', 'es-es', {
      title: 'Tracker de POTS para brotes y citas medicas | Zebra',
      description: 'Registra sintomas de POTS, brotes, constantes ortostaticas, sal, agua, medicacion y notas de cita en una app de iPhone.',
      eyebrow: 'Tracker de POTS',
      h1: 'Registro de POTS para brotes, constantes y citas medicas.',
      directAnswer: 'Zebra es una app de iPhone para registrar POTS, con sintomas, brotes, sal, agua, medicacion, constantes ortostaticas y notas para citas en un solo lugar.',
      summary: ['El historial de POTS es dificil de explicar cuando sintomas, constantes y notas estan dispersos.', 'Zebra conecta el registro diario con el informe que revisas antes de la cita.'],
      whyTitle: 'Por que POTS necesita mas que una nota vacia',
      why: ['Los sintomas al estar de pie pueden relacionarse con calor, enfermedad, medicacion, sal y agua.', 'La estructura reduce trabajo de memoria cuando hay niebla mental.'],
      tracksTitle: 'Que ayuda a registrar Zebra para POTS',
      tracks: commonTracks['es-es'],
      bestFor: ['Personas con POTS o disautonomia que necesitan un historial mas claro para citas.', 'Personas a quienes Notas u hojas de calculo se les hacen demasiado en dias de brote.'],
      notFor: commonNotFor['es-es'],
      trust: commonReferences['es-es'],
      cta: 'Descargar Zebra para POTS',
      faqs: [{ question: 'Zebra diagnostica POTS?', answer: 'No. Zebra organiza tu historial y no sustituye una evaluacion medica.' }],
    }),
    'doctor-report': withSource('doctor-report', 'es-es', {
      title: 'Informe de sintomas para el medico | Zebra',
      description: 'Crea un informe PDF para citas a partir de brotes, sintomas, medicacion, sal, agua, constantes ortostaticas y notas.',
      eyebrow: 'Informe medico',
      h1: 'Un informe de sintomas para el medico desde el historial que ya registraste.',
      directAnswer: 'Zebra convierte brotes, sintomas, medicacion, sal, agua, constantes ortostaticas, desencadenantes y notas en un informe PDF para citas medicas.',
      summary: ['El informe esta pensado para cuando la memoria falla y la cita es corta.', 'Ayuda a revisar el historial sin prometer diagnostico ni resultado.'],
      whyTitle: 'Por que ayuda un informe para el medico',
      why: ['Un resumen fechado es mas facil de revisar que notas dispersas.', 'Sintomas, medicacion y contexto ortostatico quedan juntos.'],
      tracksTitle: 'Que puede incluir Zebra en el informe',
      tracks: commonTracks['es-es'],
      bestFor: ['Personas que necesitan un resumen de 30 dias antes de una cita.', 'Personas que olvidan detalles bajo presion.'],
      notFor: commonNotFor['es-es'],
      trust: commonReferences['es-es'],
      cta: 'Preparar tu primer informe',
      faqs: [{ question: 'Puedo exportar un PDF?', answer: 'Si. El PDF esta incluido en Premium; la version gratuita incluye registro principal y 30 dias de historial.' }],
    }),
    'orthostatic-vitals-test': withSource('orthostatic-vitals-test', 'es-es', {
      title: 'Registro de constantes ortostaticas | Zebra',
      description: 'Guarda constantes tumbada, de pie y de recuperacion junto a sintomas, brotes, sal, agua y medicacion.',
      eyebrow: 'Constantes ortostaticas',
      h1: 'Registra constantes ortostaticas junto al resto del dia.',
      directAnswer: 'Zebra ayuda a registrar constantes ortostaticas en un flujo guiado tumbada, de pie y recuperacion, junto a sintomas, medicacion, sal, agua y notas.',
      summary: ['Los numeros sin contexto son faciles de perder.', 'Zebra mantiene observaciones y sintomas en el mismo historial.'],
      whyTitle: 'Por que las constantes necesitan contexto',
      why: ['Estar de pie, hidratacion, sal, medicacion, calor y enfermedad pueden ser contexto para comentar con un profesional.', 'Un solo historial reduce capturas y notas separadas.'],
      tracksTitle: 'Que conserva el flujo ortostatico',
      tracks: commonTracks['es-es'],
      bestFor: ['Personas que quieren ordenar observaciones ortostaticas antes de cardiologia o especialista.'],
      notFor: commonNotFor['es-es'],
      trust: commonReferences['es-es'],
      cta: 'Registrar constantes ortostaticas',
      faqs: [{ question: 'Zebra realiza una prueba medica?', answer: 'No. Zebra ofrece un flujo de registro; el significado lo decide un profesional sanitario.' }],
    }),
    'appointment-prep-checklist': withSource('appointment-prep-checklist', 'es-es', {
      title: 'Checklist para cita medica con enfermedad cronica | Zebra',
      description: 'Que registrar 7 dias antes de una cita: brotes, sintomas, medicacion, sal, agua, constantes ortostaticas y preguntas.',
      eyebrow: 'Checklist de cita',
      h1: 'Que registrar 7 dias antes de una cita por enfermedad cronica.',
      directAnswer: 'Antes de una cita, registra lo que es mas dificil reconstruir: brotes, sintomas principales, cambios de medicacion, sal, agua, constantes ortostaticas, impacto diario y preguntas.',
      summary: ['La semana antes de una cita suele ser cuando empieza el trabajo de memoria.', 'Esta checklist ayuda sin convertirse en una lista diagnostica.'],
      whyTitle: 'Por que 7 dias de registro enfocado pueden ayudar',
      why: ['Un historial reciente es mas realista que reconstruir un mes perfecto.', 'Registrar contexto conectado facilita revisar el informe.'],
      tracksTitle: 'Los detalles principales antes de la cita',
      tracks: commonTracks['es-es'],
      bestFor: ['Citas con especialista, cardiologia, atencion primaria y seguimiento.', 'Personas con niebla mental, dolor, mareo o fatiga.'],
      notFor: commonNotFor['es-es'],
      trust: commonReferences['es-es'],
      cta: 'Empezar la checklist en Zebra',
      faqs: [{ question: 'Puedo usarla sin diagnostico?', answer: 'Si. Organiza lo que paso sin afirmar la causa.' }],
    }),
    'symptom-tracker-for-invisible-illness': withSource('symptom-tracker-for-invisible-illness', 'es-es', {
      title: 'Tracker de sintomas para enfermedad invisible | Zebra',
      description: 'Zebra es una app de iPhone para enfermedad invisible, niebla mental, brotes, constantes ortostaticas e informes medicos.',
      eyebrow: 'Enfermedad invisible',
      h1: 'Un tracker de sintomas para enfermedad invisible que no se siente como tarea.',
      directAnswer: 'Zebra es una app de iPhone para registrar enfermedad invisible, creada para baja energia, niebla mental, brotes, constantes ortostaticas e informes para el medico.',
      summary: ['La enfermedad invisible hace dificil demostrar lo que paso entre citas.', 'Zebra ayuda a guardar tu historia con menos carga.'],
      whyTitle: 'Por que el registro debe sentirse diferente',
      why: ['Los sintomas pueden no verse durante la cita.', 'La niebla mental hace menos fiable la memoria.', 'Un buen tracker ahorra toques, decisiones y energia.'],
      tracksTitle: 'Que mantiene junto Zebra',
      tracks: commonTracks['es-es'],
      bestFor: ['Personas con POTS, EDS/hEDS, fibromialgia, disautonomia, Long COVID o ME/CFS.', 'Personas que quieren menos trabajo de memoria antes de citas.'],
      notFor: commonNotFor['es-es'],
      trust: commonReferences['es-es'],
      cta: 'Descargar Zebra',
      faqs: [{ question: 'Zebra esta creada para niebla mental?', answer: 'Si. Los check-ins cortos y los informes reducen la necesidad de reconstruir todo de memoria.' }],
    }),
  },
  'fr-fr': {
    'pots-tracker': withSource('pots-tracker', 'fr-fr', {
      title: 'Suivi POTS pour poussees et rendez-vous | Zebra',
      description: 'Suivez symptomes POTS, poussees, constantes orthostatiques, sel, eau, medicaments et notes de rendez-vous dans une app iPhone.',
      eyebrow: 'Suivi POTS',
      h1: 'Suivi POTS pour poussees, constantes et rendez-vous medicaux.',
      directAnswer: 'Zebra est une app iPhone de suivi POTS qui garde symptomes, poussees, sel, eau, medicaments, constantes orthostatiques et notes de rendez-vous au meme endroit.',
      summary: ['L historique POTS est difficile a expliquer quand symptomes, constantes et notes sont disperses.', 'Zebra relie le suivi quotidien au rapport a relire avant le rendez-vous.'],
      whyTitle: 'Pourquoi le suivi POTS demande plus qu une note vide',
      why: ['Les symptomes debout peuvent etre lies a la chaleur, maladie, medicaments, sel et eau.', 'La structure reduit le travail de memoire avec le brouillard mental.'],
      tracksTitle: 'Ce que Zebra aide a suivre pour POTS',
      tracks: commonTracks['fr-fr'],
      bestFor: ['Personnes avec POTS ou dysautonomie qui veulent un historique plus clair pour les rendez-vous.', 'Personnes pour qui notes et tableurs deviennent trop lourds pendant les poussees.'],
      notFor: commonNotFor['fr-fr'],
      trust: commonReferences['fr-fr'],
      cta: 'Telecharger Zebra pour POTS',
      faqs: [{ question: 'Zebra diagnostique-t-il le POTS?', answer: 'Non. Zebra organise votre historique et ne remplace pas une evaluation medicale.' }],
    }),
    'doctor-report': withSource('doctor-report', 'fr-fr', {
      title: 'Rapport de symptomes pour medecin | Zebra',
      description: 'Creez un rapport PDF pour rendez-vous a partir des poussees, symptomes, medicaments, sel, eau, constantes orthostatiques et notes.',
      eyebrow: 'Rapport medecin',
      h1: 'Un rapport de symptomes pour medecin depuis l historique deja suivi.',
      directAnswer: 'Zebra transforme poussees, symptomes, medicaments, sel, eau, constantes orthostatiques, declencheurs et notes en rapport PDF pour rendez-vous medicaux.',
      summary: ['Le rapport est concu pour le moment ou la memoire devient fragile et le rendez-vous est court.', 'Il aide a relire l historique sans promettre diagnostic ni resultat.'],
      whyTitle: 'Pourquoi un rapport pour medecin aide',
      why: ['Un resume date est plus facile a relire que des notes dispersees.', 'Symptomes, medicaments et contexte orthostatique restent ensemble.'],
      tracksTitle: 'Ce que Zebra peut inclure dans le rapport',
      tracks: commonTracks['fr-fr'],
      bestFor: ['Personnes qui veulent un resume de 30 jours avant un rendez-vous.', 'Personnes qui oublient les details sous pression.'],
      notFor: commonNotFor['fr-fr'],
      trust: commonReferences['fr-fr'],
      cta: 'Preparer votre premier rapport',
      faqs: [{ question: 'Puis-je exporter un PDF?', answer: 'Oui. L export PDF est inclus avec Premium; la version gratuite inclut le suivi principal et 30 jours d historique.' }],
    }),
    'orthostatic-vitals-test': withSource('orthostatic-vitals-test', 'fr-fr', {
      title: 'Suivi des constantes orthostatiques | Zebra',
      description: 'Gardez constantes allongee, debout et recuperation avec symptomes, poussees, sel, eau et medicaments.',
      eyebrow: 'Constantes orthostatiques',
      h1: 'Suivre les constantes orthostatiques avec le reste de la journee.',
      directAnswer: 'Zebra aide a suivre les constantes orthostatiques dans un parcours guide allongee, debout et recuperation, puis les garde avec symptomes, medicaments, sel, eau et notes.',
      summary: ['Les chiffres seuls perdent vite leur contexte.', 'Zebra garde observations et symptomes dans le meme historique.'],
      whyTitle: 'Pourquoi les constantes ont besoin de contexte',
      why: ['Position debout, hydratation, sel, medicaments, chaleur et maladie peuvent etre du contexte a discuter.', 'Un seul historique reduit captures et notes separees.'],
      tracksTitle: 'Ce que le parcours orthostatique conserve',
      tracks: commonTracks['fr-fr'],
      bestFor: ['Personnes qui veulent organiser des observations orthostatiques avant cardiologie ou specialiste.'],
      notFor: commonNotFor['fr-fr'],
      trust: commonReferences['fr-fr'],
      cta: 'Suivre les constantes orthostatiques',
      faqs: [{ question: 'Zebra effectue-t-il un test medical?', answer: 'Non. Zebra propose un parcours de suivi; l interpretation appartient a un professionnel de sante.' }],
    }),
    'appointment-prep-checklist': withSource('appointment-prep-checklist', 'fr-fr', {
      title: 'Checklist rendez-vous maladie chronique | Zebra',
      description: 'Quoi suivre 7 jours avant un rendez-vous: poussees, symptomes, medicaments, sel, eau, constantes orthostatiques et questions.',
      eyebrow: 'Checklist rendez-vous',
      h1: 'Quoi suivre 7 jours avant un rendez-vous avec maladie chronique.',
      directAnswer: 'Avant un rendez-vous, suivez ce qui est le plus difficile a reconstruire: poussees, symptomes principaux, changements de medicaments, sel, eau, constantes orthostatiques, impact quotidien et questions.',
      summary: ['La semaine avant le rendez-vous est souvent le moment ou le travail de memoire commence.', 'Cette checklist aide sans devenir une checklist diagnostique.'],
      whyTitle: 'Pourquoi 7 jours de suivi cible peuvent aider',
      why: ['Un historique recent est plus realiste qu un mois parfait.', 'Un suivi connecte rend le rapport plus facile a relire.'],
      tracksTitle: 'Les details principaux avant le rendez-vous',
      tracks: commonTracks['fr-fr'],
      bestFor: ['Rendez-vous specialiste, cardiologie, medecin traitant et suivi.', 'Personnes avec brouillard mental, douleur, vertiges ou fatigue.'],
      notFor: commonNotFor['fr-fr'],
      trust: commonReferences['fr-fr'],
      cta: 'Demarrer la checklist dans Zebra',
      faqs: [{ question: 'Puis-je l utiliser sans diagnostic?', answer: 'Oui. Elle organise ce qui s est passe sans affirmer la cause.' }],
    }),
    'symptom-tracker-for-invisible-illness': withSource('symptom-tracker-for-invisible-illness', 'fr-fr', {
      title: 'Suivi des symptomes pour maladie invisible | Zebra',
      description: 'Zebra est une app iPhone pour maladie invisible, brouillard mental, poussees, constantes orthostatiques et rapports medicaux.',
      eyebrow: 'Maladie invisible',
      h1: 'Un suivi des symptomes pour maladie invisible qui ne ressemble pas a des devoirs.',
      directAnswer: 'Zebra est une app iPhone de suivi pour maladie invisible, concue pour basse energie, brouillard mental, poussees, constantes orthostatiques et rapports pour medecin.',
      summary: ['La maladie invisible rend difficile de montrer ce qui s est passe entre les rendez-vous.', 'Zebra aide a garder votre histoire avec moins de charge.'],
      whyTitle: 'Pourquoi le suivi doit etre different',
      why: ['Les symptomes peuvent ne pas etre visibles pendant le rendez-vous.', 'Le brouillard mental rend la memoire moins fiable.', 'Un bon tracker economise taps, decisions et energie.'],
      tracksTitle: 'Ce que Zebra garde ensemble',
      tracks: commonTracks['fr-fr'],
      bestFor: ['Personnes avec POTS, SED/hEDS, fibromyalgie, dysautonomie, Long COVID ou ME/CFS.', 'Personnes qui veulent moins de travail de memoire avant les rendez-vous.'],
      notFor: commonNotFor['fr-fr'],
      trust: commonReferences['fr-fr'],
      cta: 'Telecharger Zebra',
      faqs: [{ question: 'Zebra est-il concu pour le brouillard mental?', answer: 'Oui. Les check-ins courts et les rapports reduisent le besoin de tout reconstruire de memoire.' }],
    }),
  },
};

export function getLocalizedSearchPage(locale: string, slug: string) {
  return localizedSearchPages[locale as SearchLocale]?.[slug as LocalizedSearchPageSlug];
}

export function localizedSearchPageUrl(locale: SearchLocale, slug: LocalizedSearchPageSlug) {
  return localizedPageUrl(locale, slug);
}

export function alternatesForSearchPage(slug: string) {
  if (!localizedSearchPageSlugs.includes(slug as LocalizedSearchPageSlug)) {
    return [];
  }

  const localizedSlug = slug as LocalizedSearchPageSlug;

  return [
    { hreflang: 'x-default', href: `/${slug}/` },
    { hreflang: 'en', href: `/${slug}/` },
    { hreflang: 'de-DE', href: localizedSearchPageUrl('de-de', localizedSlug) },
    { hreflang: 'es-ES', href: localizedSearchPageUrl('es-es', localizedSlug) },
    { hreflang: 'fr-FR', href: localizedSearchPageUrl('fr-fr', localizedSlug) },
  ];
}
