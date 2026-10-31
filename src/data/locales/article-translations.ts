import { homePageDeDe } from './de-de';
import { homePageEsEs } from './es-es';
import { homePageFrFr } from './fr-fr';
import { localeRoutes, localizedPath } from './shared';

export type ArticleLocale = 'de-de' | 'es-es' | 'fr-fr';

const homeByLocale = {
  'de-de': homePageDeDe,
  'es-es': homePageEsEs,
  'fr-fr': homePageFrFr,
} as const;

export const articleLocaleCopy = {
  'de-de': {
    home: homePageDeDe,
    labels: {
      home: 'Startseite',
      blog: 'Ratgeber',
      updated: 'Aktualisiert',
      minRead: 'Min. Lesezeit',
      putIntoPractice: 'Direkt anwenden',
      downloadZebra: 'Zebra laden',
      knowledgeHub: 'Wissensbereich',
      tableOfContents: 'Auf dieser Seite',
      whyThisPageExists: 'Warum diese Seite existiert',
      editorialReview: 'Redaktionelle Prüfung',
      lastReviewed: 'Zuletzt aktualisiert',
      directRoute: 'Direkter Link',
      relatedReading: 'Verwandte Ratgeber',
      keepExploring: 'Weiterlesen',
      sources: 'Quellen',
      sourcesNote: 'Allgemeine Informationen, keine medizinische Beratung.',
      sourcesInGuide: 'Quellen in diesem Ratgeber',
      generalSources: 'Allgemeine Quellen der Zebra-Recherche',
    },
  },
  'es-es': {
    home: homePageEsEs,
    labels: {
      home: 'Inicio',
      blog: 'Guías',
      updated: 'Actualizado',
      minRead: 'min de lectura',
      putIntoPractice: 'Ponlo en práctica',
      downloadZebra: 'Descargar Zebra',
      knowledgeHub: 'Hub de conocimiento',
      tableOfContents: 'En esta página',
      whyThisPageExists: 'Por que existe esta página',
      lastReviewed: 'Última actualización',
      directRoute: 'Ruta directa',
      relatedReading: 'Guías relacionadas',
      keepExploring: 'Sigue explorando',
      sources: 'Fuentes',
      sourcesNote: 'Información general, no es consejo médico.',
      sourcesInGuide: 'Fuentes de esta guía',
      generalSources: 'Fuentes generales de la investigación de Zebra',
    },
  },
  'fr-fr': {
    home: homePageFrFr,
    labels: {
      home: 'Accueil',
      blog: 'Guides',
      updated: 'Mis a jour',
      minRead: 'min de lecture',
      putIntoPractice: 'A mettre en pratique',
      downloadZebra: 'Telecharger Zebra',
      knowledgeHub: 'Hub de connaissances',
      tableOfContents: 'Sur cette page',
      whyThisPageExists: 'Pourquoi cette page existe',
      editorialReview: 'Relecture editoriale',
      lastReviewed: 'Dernière mise à jour',
      directRoute: 'Lien direct',
      relatedReading: 'Guides associes',
      keepExploring: 'Continuer',
      sources: 'Sources',
      sourcesNote: 'Informations générales, pas un avis médical.',
      sourcesInGuide: 'Sources de ce guide',
      generalSources: 'Sources générales de la recherche Zebra',
    },
  },
} as const;

export function getArticleLocaleCopy(locale: string) {
  return articleLocaleCopy[locale as ArticleLocale];
}

export function localizedArticleUrl(locale: ArticleLocale, slug: string) {
  return `${homeByLocale[locale].locale.path}blog/${slug}/`;
}

// Category names are stored in English in the French articles' frontmatter.
export const frenchCategoryNames: Record<string, string> = {
  'Symptom Tracking': 'Suivi des symptômes',
  'Symptom Tracking and Proof': 'Suivi des symptômes et preuves',
  Comparison: 'Comparaison',
  Comparisons: 'Comparaisons',
  'Appointment Preparation': 'Préparation de rendez-vous',
  'Appointment Préparation': 'Préparation de rendez-vous',
  'Doctor Reports': 'Rapports pour le médecin',
  'POTS and Dysautonomia Tracking': 'Suivi POTS et dysautonomie',
  'Reference / Glossary': 'Référence et glossaire',
  Dysautonomia: 'Dysautonomie',
  'Brain Fog': 'Brouillard mental',
  'Brain Fog and Difficult Days': 'Brouillard mental et jours difficiles',
  'Condition Overlap': 'Chevauchement des maladies',
  Fatigue: 'Fatigue',
  POTS: 'POTS',
  Fibromyalgia: 'Fibromyalgie',
};

// Category names are stored in English in the German and Spanish articles' frontmatter.
export const germanCategoryNames: Record<string, string> = {
  'Symptom Tracking': 'Symptom-Tracking',
  'Symptom Tracking and Proof': 'Symptom-Tracking und Nachweis',
  Comparison: 'Vergleich',
  Comparisons: 'Vergleiche',
  'Appointment Preparation': 'Vorbereitung auf den Arzttermin',
  'Doctor Reports': 'Arztberichte',
  'POTS and Dysautonomia Tracking': 'POTS- und Dysautonomie-Tracking',
  'Reference / Glossary': 'Referenz und Glossar',
  Dysautonomia: 'Dysautonomie',
  'Brain Fog': 'Brain Fog',
  'Brain Fog and Difficult Days': 'Brain Fog an schwierigen Tagen',
  'Condition Overlap': 'Überschneidung von Erkrankungen',
  Fatigue: 'Müdigkeit',
  POTS: 'POTS',
  Fibromyalgia: 'Fibromyalgie',
};

// Category names are stored in English in the Spanish articles' frontmatter.
export const spanishCategoryNames: Record<string, string> = {
  'Symptom Tracking': 'Seguimiento de síntomas',
  'Symptom Tracking and Proof': 'Seguimiento de síntomas y pruebas',
  Comparison: 'Comparativa',
  Comparisons: 'Comparativas',
  'Appointment Preparation': 'Preparación de la cita',
  'Doctor Reports': 'Informes para el médico',
  'POTS and Dysautonomia Tracking': 'Seguimiento de POTS y disautonomía',
  'Reference / Glossary': 'Referencia y glosario',
  Dysautonomia: 'Disautonomía',
  'Brain Fog': 'Niebla mental',
  'Brain Fog and Difficult Days': 'Niebla mental y días difíciles',
  'Condition Overlap': 'Solapamiento de afecciones',
  Fatigue: 'Fatiga',
  POTS: 'POTS',
  Fibromyalgia: 'Fibromialgia',
};

export function localizedCategoryName(name: string, localePath = '/') {
  const names =
    localePath === localeRoutes.frFr
      ? frenchCategoryNames
      : localePath === localeRoutes.deDe
        ? germanCategoryNames
        : localePath === localeRoutes.esEs
          ? spanishCategoryNames
          : undefined;
  return names?.[name] ?? name;
}
