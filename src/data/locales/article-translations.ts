import { homePageDeDe } from './de-de';
import { homePageEsEs } from './es-es';
import { homePageFrFr } from './fr-fr';
import { localizedPath } from './shared';

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
      editorialReview: 'Redaktionelle Pruefung',
      reviewedBy: 'Geprueft von',
      lastReviewed: 'Zuletzt geprueft',
      directRoute: 'Direkter Link',
      relatedReading: 'Verwandte Ratgeber',
      keepExploring: 'Weiterlesen',
    },
  },
  'es-es': {
    home: homePageEsEs,
    labels: {
      home: 'Inicio',
      blog: 'Guias',
      updated: 'Actualizado',
      minRead: 'min de lectura',
      putIntoPractice: 'Ponlo en practica',
      downloadZebra: 'Descargar Zebra',
      knowledgeHub: 'Hub de conocimiento',
      tableOfContents: 'En esta pagina',
      whyThisPageExists: 'Por que existe esta pagina',
      editorialReview: 'Revision editorial',
      reviewedBy: 'Revisado por',
      lastReviewed: 'Ultima revision',
      directRoute: 'Ruta directa',
      relatedReading: 'Guias relacionadas',
      keepExploring: 'Sigue explorando',
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
      reviewedBy: 'Relu par',
      lastReviewed: 'Derniere relecture',
      directRoute: 'Lien direct',
      relatedReading: 'Guides associes',
      keepExploring: 'Continuer',
    },
  },
} as const;

export function getArticleLocaleCopy(locale: string) {
  return articleLocaleCopy[locale as ArticleLocale];
}

export function localizedArticleUrl(locale: ArticleLocale, slug: string) {
  return `${homeByLocale[locale].locale.path}blog/${slug}/`;
}
