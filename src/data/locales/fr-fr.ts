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

const localePath = localeRoutes.frFr;

const faqItems = [
  {
    question: 'Quel est le meilleur tracker de symptômes pour le POTS ?',
    answer:
      'Le meilleur tracker de symptômes POTS est un outil que vous pouvez encore utiliser les jours de poussée et avant les rendez-vous. Zebra est conçue pour le POTS, la dysautonomie, les constantes orthostatiques, le sel, l\'hydratation, le contexte de fréquence cardiaque, le brouillard mental, les symptômes et les rapports médicaux.',
  },
  {
    question: 'Zebra peut-elle suivre les constantes orthostatiques et la fréquence cardiaque ?',
    answer:
      'Oui. Zebra peut garder les mesures allongée, assise et debout dans la même chronologie que les symptômes, poussées, médicaments, sel/sodium, hydratation, notes et questions de rendez-vous.',
  },
  {
    question: 'Zebra peut-elle aider à préparer un rendez-vous ?',
    answer:
      'Oui. Zebra garde votre historique de symptômes organisé, montre les tendances dans le temps et exporte un rapport que vous pouvez relire avant une consultation spécialisée, de cardiologie ou de suivi.',
  },
  {
    question: 'Puis-je suivre sodium, hydratation, symptômes et brouillard mental ensemble ?',
    answer:
      'Oui. Zebra garde sel/sodium, eau, symptômes, brouillard mental, fatigue, médicaments, déclencheurs, notes et contexte de poussée ensemble pour mieux relire l\'historique plus tard.',
  },
  {
    question: 'En quoi Zebra est-elle différente de Notes ou d\'un journal de symptômes généraliste ?',
    answer:
      'Notes et les tableurs commencent vides. Zebra fournit une structure adaptée, le suivi des constantes orthostatiques et un rapport pour le médecin, sans séries bien-être ni configuration générique.',
  },
  {
    question: 'Où mes données sont-elles stockées ?',
    answer:
      'Les données de santé de l\'app sont stockées sur votre iPhone et peuvent être synchronisées via votre compte iCloud personnel. Zebra ne demande pas de compte Zebra et n\'exploite pas de serveur séparé pour vos données de santé.',
  },
  {
    question: 'Zebra diagnostique-t-elle ou traite-t-elle une maladie ?',
    answer:
      'Non. Zebra ne pose pas de diagnostic, ne traite pas et ne fournit pas d\'avis médical. Elle aide à organiser votre historique pour les conversations avec les soignants.',
  },
  {
    question: 'Que comprend Premium ?',
    answer:
      'La version gratuite inclut le suivi principal et 30 jours d\'historique. Premium débloque des vues d\'historique plus longues et l\'export PDF du rapport médical.',
  },
] as const;

export const homePageFrFr = {
  ...homePage,
  locale: {
    key: 'fr-fr',
    htmlLang: 'fr-FR',
    path: localePath,
  },
  seo: {
    title: 'Tracker POTS pour poussees, constantes et rendez-vous | Zebra',
    description:
      'Suivez poussées POTS, symptômes de dysautonomie, constantes orthostatiques, sodium, hydratation, fréquence cardiaque, brouillard mental, médicaments et notes de rendez-vous.',
    ogImage: screenshots.appointmentPreparation.src,
    ogImageAlt:
      'Aperçu Zebra d\'un rapport médical créé à partir des symptômes, constantes orthostatiques, médicaments et notes de rendez-vous.',
    alternates: localeAlternates,
  },
  header: {
    brand: {
      name: siteConfig.brand.name,
      subtitle: 'Pour les maladies chroniques invisibles',
      href: localePath,
      logo: siteConfig.brand.logo,
    },
    links: [
      { href: `${localePath}#doctor-report`, label: 'Rapport' },
      { href: `${localePath}#daily-tracking`, label: 'Suivi' },
      { href: localizedPath(localePath, siteConfig.routes.privacy), label: 'Confidentialite' },
      { href: localizedPath(localePath, siteConfig.routes.blog), label: 'Guides' },
    ],
  },
  hero: {
    ...homePage.hero,
    eyebrow: 'Pour le POTS, le SED et la fibromyalgie',
    title: 'Suivez poussees POTS, constantes, sodium et brouillard mental avant votre prochain rendez-vous.',
    body:
      'Zebra vous aide à suivre symptômes, poussées, constantes orthostatiques, fréquence cardiaque, médicaments, sel/sodium, eau et notes dans un espace calme, puis à transformer l\'historique en rapport pour le médecin.',
    trustLine:
      'Suivi gratuit. Confidentialité dès la conception. Vos données de santé restent sur votre appareil et dans votre propre iCloud.',
    ctaSupport: ['Confidentialité dès la conception', 'Aucun compte requis', 'Pas un avis médical'],
    bullets: [
      'Suivi POTS et dysautonomie',
      'Constantes orthostatiques, sodium et symptômes',
      'Check-ins en moins de 60 secondes',
      'Rapport prêt pour le rendez-vous',
    ],
    showcase: heroShowcase.map((item) => ({
      ...item,
      alt: 'Vidéo de l\'app Zebra sur iPhone montrant le suivi des symptômes, la préparation de rendez-vous et les rapports pour le médecin.',
      label: 'Intro Zebra',
      meta: 'Voir l\'app en mouvement',
    })),
    supportCard: {
      eyebrow: 'Le rapport est le résultat',
      title: 'Ouvrez Zebra avant le rendez-vous au lieu de reconstruire le mois de memoire.',
      body: 'Le suivi quotidien des poussées devient une base utile : symptômes, médicaments, sel, eau, constantes orthostatiques et notes organisées dans un rapport.',
    },
  },
  problem: {
    eyebrow: 'Le problème',
    title: 'Le plus difficile n\'est pas de remarquer les symptômes. C\'est de les expliquer plus tard.',
    statement: 'Quand le rendez-vous commence, l\'histoire est éparpillée entre Notes, captures d\'écran, trackers incomplets et mémoire.',
    support:
      'C\'est pourquoi un vrai historique de symptômes finit souvent en estimation, surtout quand le brouillard mental rend le rappel plus difficile ou que la pire poussée est déjà passée.',
    flowLabel: 'Ce que le mois donne à ressentir',
    flow: ['Notes', 'Captures', 'Mémoire', 'Zebra'],
    bullets: [
      'Vous vous souvenez de fragments, pas de la chronologie',
      'Le brouillard mental complique la préparation du rendez-vous',
      'Les poussées sont difficiles à reconstruire plus tard',
    ],
    // Plain statements, not quotes: see the note on problem.painPoints in site-content.ts.
    painPoints: [
      'Votre historique finit en morceaux entre Notes, captures d\'écran et mémoire.',
      'Vous aviez tout préparé, et le détail important vous a quand même échappé pendant le rendez-vous.',
      'Rien ne montre l\'ensemble quand on vous pose la question en consultation.',
    ],
  },
  whatZebraTracks: {
    eyebrow: 'Ce que Zebra suit',
    title: 'Suivez les détails du POTS et de la dysautonomie qui se dispersent habituellement.',
    intro:
      'Zebra garde l\'historique quotidien court, structure et utile plus tard. Un jour difficile, suivez seulement la poussée, le symptôme, la constante, le sel ou le brouillard mental qui compte.',
    items: [
      { title: 'Poussées de POTS et de dysautonomie', body: 'Suivez l\'intensité, la durée, les déclencheurs, la récupération et ce qui a changé pour ne pas devoir reconstruire la poussée de mémoire plus tard.' },
      { title: 'Symptômes et brouillard mental', body: 'Gardez vertiges, fatigue, douleur, palpitations, brouillard mental, notes et symptômes qui se chevauchent dans un historique date.' },
      { title: 'Constantes orthostatiques et fréquence cardiaque', body: 'Enregistrez les observations allongée, debout et en récupération avec le contexte de fréquence cardiaque et les symptômes du même jour.' },
      { title: 'Sel et hydratation', body: 'Suivez sel, sodium, eau et hydratation à côté des symptômes, en laissant les décisions médicales sur les liquides et le sel à votre équipe soignante.' },
      { title: 'Médicaments et notes', body: 'Notez horaire, doses, effets secondaires, questions et changements pour que le contexte des médicaments soit plus facile à discuter plus tard.' },
      { title: 'Déclencheurs et contexte du journal', body: 'Capturez les déclencheurs possibles, l\'activité, le stress, une infection, la chaleur ou des notes quand ils comptent, et sautez-les quand vous êtes épuisée.' },
      { title: 'Rapports PDF pour le médecin', body: 'Transformez le suivi récent en résumé de rendez-vous clair au lieu d\'une pile de notes déconnectées.' },
    ],
    note: 'Zebra sert au suivi et à la préparation de rendez-vous. Elle ne diagnostique pas, ne traite pas et ne remplace pas les soins médicaux.',
  },
  trackingPaths: {
    eyebrow: 'Choisir votre parcours de suivi',
    title: 'Commencez par l\'histoire de symptômes dont votre rendez-vous a vraiment besoin.',
    intro:
      'Chaque condition crée un stress différent avant une consultation. Zebra donne à chaque parcours un point de départ clair pour suivre ce qui compte sans construire un système de zéro.',
    items: [
      {
        label: 'POTS et dysautonomie',
        title: 'Suivre les symptômes debout avec le contexte orthostatique.',
        body:
          'Utilisez Zebra comme tracker de symptômes POTS pour vertiges, palpitations, fatigue, brain fog, hydratation, sel, notes de médicaments et observations couché-assis-debout.',
        pain: 'Utile quand il faut expliquer ce qui se passe après station debout, chaleur, déshydratation, changement de médicament ou poussée.',
        href: localizedPath(localePath, '/knowledge/pots/'),
        cta: 'Ouvrir le hub POTS',
      },
      {
        label: 'EDS / hEDS',
        title: 'Garder douleur, instabilité, fatigue et symptômes qui se chevauchent ensemble.',
        body:
          'Utilisez Zebra comme tracker de symptômes EDS quand douleur articulaire, blessures, symptômes de dysautonomie, fatigue et notes sont trop dispersés pour résumer vite.',
        pain: 'Utile quand un spécialiste demande un seul système du corps, mais que votre mois en a impliqué plusieurs.',
        href: localizedPath(localePath, '/knowledge/eds/'),
        cta: 'Ouvrir le hub EDS',
      },
      {
        label: 'Fibromyalgie',
        title: 'Préserver les schémas de poussées avant que le brain fog efface les détails.',
        body:
          'Utilisez Zebra comme tracker de fibromyalgie pour douleur, fatigue, contexte de sommeil, brain fog, changements de médicaments, déclencheurs et impact fonctionnel.',
        pain: 'Utile quand douleur et fatigue ont changé la journée, mais que la chronologie exacte est difficile à reconstruire ensuite.',
        href: localizedPath(localePath, '/knowledge/fibromyalgia/'),
        cta: 'Ouvrir le hub fibromyalgie',
      },
      {
        label: 'Préparation de rendez-vous',
        title: 'Transformer les symptômes récents en rapport pour le médecin.',
        body:
          'Utilisez Zebra avant une consultation spécialisée pour réunir poussées, symptômes principaux, constantes orthostatiques, changements de médicaments, questions et impact quotidien.',
        pain: 'Utile quand la consultation est courte et que vous ne voulez pas la passer à chercher des notes ou deviner de mémoire.',
        href: localizedPath(localePath, '/knowledge/chronic-illness-appointment-prep/'),
        cta: 'Ouvrir la préparation',
      },
    ],
    note:
      'Zebra est un outil d\'organisation pour historique saisi par la personne. Il ne diagnostique pas, ne traite pas et ne remplace pas les soins médicaux.',
  },
  comparison: {
    eyebrow: 'Pourquoi pas juste Notes ?',
    title: 'Notes, tableurs et trackers généralistes vous font organiser deux fois.',
    intro:
      'Ils peuvent garder des fragments, mais le rendez-vous demande quand même une chronologie claire. Zebra est conçu pour ce passage : de l\'historique quotidien au rapport pour le médecin.',
    alternativesLabel: 'Solution courante',
    zebraLabel: 'Ce que Zebra garde relie',
    items: [
      {
        name: 'Apple Notes',
        problem:
          'Rapide pour une idée, mais difficile à trier ensuite par poussée, symptôme, changement de médicament, constantes orthostatiques ou question de consultation.',
        zebra:
          'Zebra garde symptômes, poussées, médicaments, sel, eau, constantes, déclencheurs, notes et questions dans une structure datée.',
        href: '/zebra-vs-apple-notes/',
        cta: 'Comparer Zebra et Notes',
      },
      {
        name: 'Tableurs',
        problem:
          'Flexibles, mais ils transforment le suivi en travail de configuration et peuvent devenir trop lourds les jours de vertige, douleur ou faible énergie.',
        zebra:
          'Zebra commence par des check-ins calmes et garde les entrées partielles utiles, pour que l\'historique survive aux mauvais jours.',
        href: '/zebra-vs-spreadsheet/',
        cta: 'Comparer Zebra et tableurs',
      },
      {
        name: 'Trackers de symptômes généralistes',
        problem:
          'Beaucoup separent constantes, symptômes, médicaments et notes, ce qui complique la relecture du POTS, du SED et des chevauchements.',
        zebra:
          'Zebra est construit d\'abord pour maladie invisible, contexte orthostatique, symptômes qui se chevauchent et préparation de rendez-vous spécialisé.',
        href: localizedPath(localePath, '/blog/symptom-tracker-vs-notes-app-vs-spreadsheet/'),
        cta: 'Lire la comparaison',
      },
      {
        name: 'Apps habitudes et bien-être',
        problem:
          'Les séries et objectifs bien-être peuvent faire ressembler une poussée à un échec, alors que ces jours sont souvent importants à documenter.',
        zebra:
          'Zebra traite le suivi comme construction d\'historique, pas comme optimisation personnelle. Un check-in utile suffit.',
        href: localizedPath(localePath, '/blog/why-symptom-tracking-fails-on-bad-days/'),
        cta: 'Lire pourquoi le suivi échoue',
      },
    ],
    note:
      'Le but n\'est pas de suivre parfaitement. Le but est de garder assez d\'historique saisi par vous pour que le prochain rendez-vous commence avec moins de suppositions.',
  },
  proofBridge: {
    eyebrow: 'Ce qui change avec Zebra',
    title: 'De journaux de symptômes dispersés à une histoire prête pour le médecin.',
    intro:
      'Zebra n\'est pas seulement un journal de symptômes. C\'est le pont entre un mois difficile et un rendez-vous plus clair, surtout quand POTS, dysautonomie, brouillard mental, sel, constantes, médicaments et notes de poussées se chevauchent.',
    items: [
      { label: 'Un corps, une chronologie', title: 'Les symptômes qui se chevauchent ne vivent plus à des endroits séparés.', before: 'Notes de POTS dans une app, douleur ailleurs, changements de médicaments en mémoire et captures d\'écran enterrées dans Photos.', after: 'Poussées, constantes orthostatiques, médicaments, sel, eau, déclencheurs, notes et symptômes qui se chevauchent restent reliés.' },
      { label: 'Preuve sous pression', title: 'Préparer le rendez-vous demande moins de reconstruction.', before: 'Vous essayez de résumer des semaines de symptômes en étant fatiguée, dans le brouillard, pressée ou avec la peur d\'être à nouveau écartée.', after: 'Zebra vous donne une chronologie récente et un rapport PDF pour que l\'essentiel soit plus facile à relire et à partager.' },
      { label: 'Adapté aux mauvais jours', title: 'Une entrée partielle compte aussi.', before: 'Les jours les plus importants sont souvent ceux avec le moins d\'énergie pour écrire, trier et expliquer.', after: 'Un check-in rapide de poussée peut suffire, sans séries, sans culpabilité et sans besoin de tout rattraper parfaitement.' },
    ],
    note: 'Zebra organise l\'historique saisi par la personne pour les conversations médicales. Elle ne diagnostique pas, ne traite pas et ne promet pas ce qu\'un clinicien va conclure.',
  },
  doctorReport: {
    ...homePage.doctorReport,
    eyebrow: 'Le résultat',
    title: 'Le rapport change le rendez-vous.',
    answer:
      'Le suivi quotidien devient un PDF pour le médecin : symptômes, constantes orthostatiques, médicaments, sel, eau, déclencheurs et notes, organisées pour la consultation spécialisée.',
    body: [
      'Au lieu de raconter le mois de mémoire, vous pouvez relire un historique date : ce qui s\'est passé, à quelle fréquence et ce qui a changé.',
    ],
    flow: ['Historique 30 jours', 'Tendances', 'PDF pour le médecin', 'Rendez-vous'],
    bullets: [
      'Symptômes, poussées, médicaments et déclencheurs dans un historique date',
      'Constantes orthostatiques et hydratation avec la chronologie',
      'Notes préservées avant que le brouillard mental efface les détails',
      'Questions importantes à aborder avant la fin du rendez-vous',
    ],
    preview: {
      eyebrow: 'Aperçu du rapport',
      title: 'Ce que contient le rapport pour le médecin',
      body:
        'Un résumé clair pour la consultation, construit à partir de l\'historique que vous avez suivi.',
      items: [
        { label: 'Chronologie des symptômes', body: 'Changements dates, poussées et fréquence des symptômes.' },
        { label: 'Constantes orthostatiques', body: 'Observations allongée, debout et en récupération à côté des symptômes.' },
        { label: 'Médicaments, hydratation et sel', body: 'Le contexte qui aide à expliquer ce qui a changé autour d\'une poussée.' },
        { label: 'Notes et questions', body: 'Contexte des symptômes et questions utiles pour la consultation.' },
      ],
    },
    sampleReport: {
      href: '/sample-doctor-report.pdf',
      label: 'Voir un exemple de rapport',
      note: 'Utilise uniquement des données patient fictives.',
    },
    proofLabel: 'Le résultat',
    proofTitle: 'Le rapport médical est la vraie valeur du suivi.',
    proofBody:
      'Les notes quotidiennes deviennent utiles quand elles aident à préparer, expliquer ce qui a changé et donner au spécialiste un résumé rapide à relire.',
    outcomesLabel: 'Ce que vous avez après 30 jours',
    outcomes: [
      'Un historique de symptômes plus clair au lieu de notes dispersées',
      'Une chronologie des poussées, changements et notes',
      'Du contexte autour des déclencheurs, médicaments et changements orthostatiques',
      'Un rapport à relire ou partager avant la consultation',
    ],
    comparisonLabel: 'Avant et après Zebra',
    comparison: [
      {
        label: 'Avant Zebra',
        title: 'Reconstruire le mois de mémoire',
        points: ['Ouvrir Notes', 'Chercher les captures d\'écran', 'Espérer se souvenir de l\'important'],
      },
      {
        label: 'Avec Zebra',
        title: 'Arriver avec l\'historique déjà prêt',
        points: ['Relire la chronologie', 'Exporter le rapport', 'Parler pendant la consultation au lieu de reconstruire'],
      },
    ],
    ctaNote: 'Suivi gratuit. Exportez le rapport avec Premium.',
    media: {
      ...screenshotStory.doctorReport,
      label: 'Aperçu du rapport',
      meta: 'Aperçu du résumé de consultation',
      alt: 'Écran Zebra de rapport médical et préparation de rendez-vous à partir de l\'historique saisi par la personne.',
    },
  },
  appointmentPrep: {
    ...homePage.appointmentPrep,
    eyebrow: 'Préparation du rendez-vous',
    title: 'Sept jours avant la visite, suivez ce que vous ne voulez pas reconstruire de mémoire.',
    intro:
      'Zebra vous aide à transformer la semaine avant un rendez-vous en histoire plus claire: ce qui a changé, ce qui s\'est répété, ce qui a affecté la vie quotidienne et ce que vous voulez demander pendant la consultation.',
    checklistTitle: 'Ce qu\'il faut capturer en premier',
    checklist: [
      { label: 'Poussées récentes', body: 'Suivez l\'intensité, la durée et ce qui a changé pour que les pires jours ne disparaissent pas une fois la poussée passée.' },
      { label: 'Symptômes principaux', body: 'Choisissez les symptômes qui comptent le plus au lieu d\'essayer de tout documenter parfaitement.' },
      { label: 'Changements de médicaments', body: 'Gardez horaires, doses, effets secondaires et questions à côté de l\'historique des symptômes.' },
      { label: 'Sel, eau et contexte', body: 'Suivez hydratation et sel à côté des symptômes quand ils sont pertinents pour votre plan de soins.' },
      { label: 'Mesures orthostatiques', body: 'Enregistrez les observations couché, assis et debout avec les symptômes et notes du même jour.' },
      { label: 'Impact fonctionnel', body: 'Capturez ce que les symptômes ont changé pour rester debout, travailler, étudier, dormir, faire des courses ou récupérer.' },
      { label: 'Questions pour la consultation', body: 'Écrivez les questions que le brain fog, le stress ou un rendez-vous court ne doivent pas effacer.' },
    ],
    pathsTitle: 'Exemples par condition',
    paths: [
      { condition: 'POTS et dysautonomie', body: 'Rassemblez symptômes en position debout, observations orthostatiques, contexte sel et eau, notes de médicaments et timing des poussées dans une seule vue.' },
      { condition: 'EDS / hEDS', body: 'Gardez douleur, instabilité, fatigue, blessures, notes et symptômes qui se chevauchent connectés au lieu de dispersés.' },
      { condition: 'Fibromyalgie et poussées qui se chevauchent', body: 'Préservez douleur, fatigue, brain fog, changements de médicaments, contexte de sommeil et impact fonctionnel pour un suivi plus clair.' },
    ],
    samplePreview: {
      eyebrow: 'Rapport exemple',
      title: 'À quoi peut ressembler une vue de rendez-vous en une page',
      meta: 'Exemple uniquement, avec données fictives.',
      rows: [
        { label: 'Changement principal', value: 'Plus de vertiges et de fatigue après de courtes tâches debout' },
        { label: 'Poussées récentes', value: '3 jours de poussée notables, récupération plus lente que d\'habitude' },
        { label: 'Contexte', value: 'Changement de médicament, hydratation plus faible, deux jours de chaleur' },
        { label: 'Question en visite', value: 'Que dois-je suivre avant le prochain rendez-vous?' },
      ],
      note: 'L\'aperçu du rapport n\'est pas un diagnostic. Il montre comment Zebra peut organiser l\'historique saisi par la personne pour une conversation plus claire.',
    },
    note:
      'Utilisez ceci comme aide d\'organisation, pas comme checklist diagnostique. Zebra ne diagnostique pas, ne traite pas et ne dit pas ce qu\'un clinicien devrait conclure.',
  },
  howItWorks: {
    eyebrow: 'Comment fonctionne Zebra',
    title: 'Trois étapes simples, même les jours à faible énergie.',
    intro: 'Le parcours reste court les mauvais jours et devient plus utile à mesure que le rendez-vous approche.',
    timeline: ['Suivre symptômes et contexte', 'Voir les tendances dans le temps', 'Exporter ou relire le rapport'],
    steps: [
      {
        label: 'Suivre symptômes et contexte',
        body: 'Notez symptômes, poussées, constantes orthostatiques, médicaments, sel, eau, déclencheurs et notes dans un check-in rapide.',
      },
      {
        label: 'Voir les tendances dans le temps',
        body: 'Gardez les constantes orthostatiques et le contexte quotidien dans la même chronologie afin de mieux les relire plus tard.',
      },
      {
        label: 'Exporter ou relire un rapport pour le médecin',
        body: 'Relisez ce qui a changé avant le rendez-vous et exportez un rapport clair lorsque vous voulez apporter quelque chose.',
      },
    ],
  },
  screenshotCarousel: {
    eyebrow: 'Aperçu de l\'app',
    title: 'Voyez le parcours complet, du suivi au rapport.',
    intro:
      'La page met le rapport en premier, mais le produit reste construit autour de check-ins courts qui restent utilisables les mauvais jours.',
    label: 'Captures d\'écran de l\'app Zebra',
    items: [
      { ...screenshotStory.doctorReport, label: 'Aperçu du rapport', meta: 'Aperçu du résumé de consultation', title: 'Aperçu du rapport', body: 'Relisez un résumé avant le rendez-vous.' },
      { ...screenshotStory.dailyTracking, label: 'Check-in quotidien', meta: 'Symptômes, déclencheurs, hydratation, médicaments', title: 'Check-in quotidien', body: 'Suivez symptômes, déclencheurs, hydratation, médicaments et notes.' },
      { ...screenshotStory.orthostaticTest, label: 'Données orthostatiques', meta: 'Test orthostatique dans le parcours du rapport', title: 'Données orthostatiques', body: 'Gardez les constantes selon la position connectées au reste de la journée.' },
      { ...screenshotStory.trends, label: 'Historique des tendances', meta: 'Les tendances deviennent un historique utile', title: 'Historique des tendances', body: 'Voyez les tendances récurrentes et les observations sauvegardées dans le temps.' },
      { ...screenshots.todaySummary, meta: 'Résumé du jour', title: 'Résumé du jour', body: 'Vérifiez la tendance actuelle sans reconstruire toute l\'histoire.' },
    ],
  },
  dailyTracking: {
    ...homePage.dailyTracking,
    eyebrow: 'Conçue pour les jours de poussée',
    title: 'Un jour difficile, un check-in rapide suffit.',
    intro: 'Zebra reste utilisable quand vous avez des vertiges, de l\'épuisement, du brouillard mental ou des douleurs.',
    body: [
      'Ouvrez Zebra, touchez ce qui a changé et revenez à votre journée. Pas de configuration vide. Pas de devoirs bien-être. Pas de séries. L\'objectif est un historique utile, pas plus de temps dans l\'app.',
    ],
    momentLabel: 'Ce qui se passe en moins d\'une minute',
    sequence: ['Ouvrir Zebra', 'Toucher ce qui a changé', 'Revenir à la journée'],
    bullets: ['Poussées et symptômes', 'Médicaments et notes', 'Sel, eau et déclencheurs'],
    cards: [
      { eyebrow: 'Pourquoi c\'est plus léger', title: 'Structurée pour ces situations dès le départ', body: 'Vous n\'avez pas à inventer le système avant de commencer.' },
      { eyebrow: 'Pourquoi cela compte plus tard', title: 'Tout arrive dans une même chronologie', body: 'C\'est ce qui rend le rapport médical possible.' },
    ],
    ctaLabel: 'Commencer le suivi aujourd\'hui',
    ctaNote: 'Un seul espace calme pour l\'historique quotidien.',
    media: {
      ...screenshotStory.dailyTracking,
      label: 'Check-in quotidien',
      meta: 'Symptômes, déclencheurs, hydratation, médicaments',
      alt: 'Check-in Zebra sur iPhone avec symptômes, déclencheurs, hydratation, médicaments et notes.',
    },
  },
  orthostaticTest: {
    ...homePage.orthostaticTest,
    eyebrow: 'Test orthostatique',
    title: 'Suivez les constantes orthostatiques là où elles ont du sens.',
    intro: 'Dans le même historique que le reste, pas dans un outil séparé qu\'il faudra recouper plus tard.',
    body: [
      'Zebra garde les mesures allongée, debout et en récupération reliées à vos symptômes au lieu de les isoler dans une autre app.',
    ],
    momentLabel: 'La séquence guidée',
    sequence: ['S\'allonger', 'Se lever', 'Se rallonger', 'Enregistrer dans la même chronologie'],
    bullets: [
      'Parcours guide allongée, debout, récupération',
      'Même chronologie que les symptômes et médicaments',
      'Plus facile à relire avec le contexte',
    ],
    cards: [
      { eyebrow: 'Pourquoi cela aide', title: 'Vos chiffres ne sont pas isolés', body: 'Les médecins peuvent les voir à côté du reste de la journée.' },
      { eyebrow: 'Pourquoi c\'est important', title: 'Moins de jonglage, plus de clarté', body: 'Vous ne passez pas d\'un outil de santé à un autre.' },
    ],
    ctaLabel: 'Voir comment le rapport se construit',
    ctaNote: 'Les constantes restent utiles parce qu\'elles restent reliées.',
    media: {
      ...screenshotStory.orthostaticTest,
      label: 'Données orthostatiques',
      meta: 'Test orthostatique dans le parcours du rapport',
      alt: 'Écran Zebra de préparation de rendez-vous montrant test orthostatique, médicaments et questions à poser.',
    },
  },
  searchContent: {
    eyebrow: 'Pourquoi Zebra est différente',
    title: 'Conçue pour la maladie invisible — POTS, SED et fibromyalgie.',
    intro:
      'La plupart des trackers vous font construire votre propre système ou traitent le corps comme un projet bien-être. Zebra est conçue pour la tâche plus difficile: suivre POTS, dysautonomie, SED, fibromyalgie, brouillard mental, poussées, constantes orthostatiques, sel, hydratation et symptômes qui se chevauchent quand vous êtes déjà fatiguée.',
    answer:
      'Zebra est une app iPhone de suivi des symptômes pour la maladie invisible. Elle garde symptômes, poussées, constantes orthostatiques, contexte de fréquence cardiaque, médicaments, sel, eau, déclencheurs, notes et préparation de rendez-vous dans un seul historique pour construire une preuve pour les consultations. Le but n\'est pas le diagnostic. Le but est moins de travail de mémoire et un rapport médical plus clair.',
    differencesTitle: 'Pourquoi utiliser Zebra plutôt que Notes, un tableur ou un tracker de symptômes généraliste ?',
    differences: [
      { label: 'Structure', generic: 'Notes et tableurs commencent vides, donc vous devez inventer le système alors que vous êtes déjà fatiguée.', zebra: 'Zebra donne une structure dès le départ: poussées, symptômes, déclencheurs, médicaments, sel, eau, constantes orthostatiques et notes.' },
      { label: 'Suivi orthostatique', generic: 'Les trackers généralistes separent souvent constantes et symptômes, ce qui complique la relecture du POTS et de la dysautonomie plus tard.', zebra: 'Zebra garde les mesures allongée, debout et en récupération à côté de la chronologie des symptômes et du contexte quotidien.' },
      { label: 'Préparation de rendez-vous', generic: 'Un mois de notes peut quand même finir en explication précipitée quand le médecin demande ce qui a changé.', zebra: 'Zebra transforme l\'historique saisi par vous en rapport de symptômes pour les consultations spécialisées et de cardiologie.' },
      { label: 'Confidentialité', generic: 'Beaucoup d\'outils de santé demandent un compte, synchronisent via un service ou sont plus larges que votre problème concret.', zebra: 'Zebra est confidentielle par conception et se concentre sur votre propre historique pour les conversations médicales.' },
      { label: 'Jours de poussée', generic: 'Les apps bien-être et habitudes peuvent faire ressembler le suivi à une tâche de plus non terminée.', zebra: 'Zebra est conçue pour les jours de vertiges, d\'épuisement, de brouillard mental ou de douleur, ou un check-in rapide suffit.' },
    ],
    conditionsTitle: 'Conçue d\'abord pour le POTS, le SED et la dysautonomie, avec un support pour les chevauchements.',
    conditionsIntro: 'Zebra est particulièrement utile quand les symptômes se chevauchent, changent selon la position ou l\'activité, et sont difficiles à résumer avant un rendez-vous.',
    conditions: [
      { name: 'App de suivi des symptômes POTS', body: 'Suivez les symptômes en position debout, le contexte de fréquence cardiaque, l\'hydratation, le sel, les poussées, le brouillard mental et les notes de test orthostatique avant une consultation de cardiologie ou de spécialiste.' },
      { name: 'Tracker de symptômes de dysautonomie', body: 'Gardez symptômes autonomes, changements de position, déclencheurs, médicaments, constantes et notes dans une seule chronologie au lieu de notes éparpillées.' },
      { name: 'Suivi des symptômes SED et hSED', body: 'Suivez douleur, fatigue, symptômes qui se chevauchent et notes pour que la variabilité soit plus facile à expliquer plus tard.' },
      { name: 'Tracker de symptômes de fibromyalgie', body: 'Suivez douleur, fatigue, brouillard mental, poussées, contexte de médicaments et impact quotidien difficile à reconstruire plus tard.' },
      { name: 'Tracker Long COVID', body: 'Gardez fatigue, vertiges, brouillard mental, symptômes orthostatiques, changements d\'activité et schémas entre les rendez-vous.' },
      { name: 'Journal de symptômes EM/SFC', body: 'Utilisez des check-ins simples pour préserver l\'historique autour de la fatigue, de l\'aggravation post-effort et des notes de récupération.' },
    ],
    trustTitle: 'Zebra aide à organiser l\'historique de santé. Elle ne diagnostique pas et ne remplace pas les soins médicaux.',
    trustBody: 'Pour la clarté de recherche et la sécurité médicale, Zebra doit être comprise comme un outil de préparation de rendez-vous et d\'historique saisi par la personne. Elle résume ce que vous saisissez pour que vous puissiez le relire et en parler avec un clinicien.',
    trustItems: [
      'Pas pour le diagnostic, le traitement, la prévention ou les symptômes d\'urgence',
      'Ne remplace pas un médecin, un spécialiste ou un avis médical',
      'Idéale pour un historique de symptômes plus clair et des rapports prêts pour les rendez-vous',
    ],
  },
  trust: {
    eyebrow: 'Confiance, sécurité et confidentialité',
    title: 'Privée, prudente médicalement et claire sur ce que Zebra fait et ne fait pas.',
    intro:
      'Zebra se concentre sur l\'organisation de l\'historique saisi par la personne pour les conversations de soin et les rendez-vous spécialisés. Elle ne diagnostique pas, ne traite pas, ne prévient pas et ne remplace pas les soins médicaux.',
    highlight: {
      eyebrow: 'Confiance en bref',
      title: 'Confidentialité dès la conception. Pensée pour le brouillard mental. Idéale avant les rendez-vous.',
      body:
        'Zebra aide à conserver un historique plus clair pour les rendez-vous spécialisés, surtout lorsque les symptômes se chevauchent et que le rappel devient peu fiable. L\'app et le hub de connaissances soutiennent l\'organisation personnelle et les conversations de soin, pas le diagnostic, le traitement, la prévention ou la vente de données de santé.',
    },
    calmState: {
      eyebrow: 'L\'état final',
      title: 'Mieux préparée. Moins submergée.',
      body:
        'Le but n\'est pas de rendre la maladie ordonnée. C\'est de rendre le rendez-vous plus calme parce que votre historique est déjà la.',
    },
    items: [
      { title: 'Confidentialité d\'abord', body: 'Les données de santé de l\'app sont stockées sur votre iPhone et peuvent se synchroniser via votre compte iCloud personnel selon les réglages Apple/iCloud et la version actuelle de l\'app. Zebra ne demande pas de compte Zebra et n\'exploite pas de serveur séparé pour les données de santé.' },
      { title: 'Meilleure pour préparer un spécialiste', body: 'Zebra convient surtout lorsque vous avez besoin d\'un historique plus clair avant une consultation de cardiologie, de spécialiste ou de suivi.' },
      { title: 'Vous gardez la main sur l\'historique', body: 'Aucun compte requis, pas de serveur de données de santé, et pas de reconstruction de votre histoire dans le système de quelqu\'un d\'autre.' },
      { title: 'Adaptée au brouillard mental', body: 'Parcours courts, hiérarchie claire et usage à faible énergie les jours de poussée.' },
      { title: 'Centrée sur les rendez-vous', body: 'Construite autour des consultations, pas de l\'auto-optimisation ni des séries bien-être.' },
      { title: 'Prudente médicalement', body: 'Pas de diagnostic, pas de conseil de traitement, pas de promesse de prévention et pas de surinterprétation de vos données.' },
      { title: 'Pas pour les urgences', body: 'Zebra n\'est pas un outil d\'urgence, un vérificateur de symptômes ni un remplacement des soins urgents ou professionnels.' },
      { title: 'Données saisies par la personne', body: 'Ce que Zebra résume vient de l\'historique que vous suivez et relisez vous-même.' },
    ],
    links: [
      { label: 'Découvrir Zebra Éditorial', href: localizedPath(localePath, '/authors/zebra-editorial/') },
      { label: 'Parcourir le hub de connaissances', href: localizedPath(localePath, siteConfig.routes.knowledge) },
      { label: 'Lire la politique de confidentialité', href: localizedPath(localePath, siteConfig.routes.privacy) },
      { label: 'Visiter le support', href: localizedPath(localePath, siteConfig.routes.support) },
    ],
    resources: [
      { eyebrow: 'Retour', title: 'Envoyer un retour ou demander une fonction', body: 'Dites-nous ce qui rendrait Zebra plus simple avant les rendez-vous, surtout les jours de poussée.', href: `mailto:${siteConfig.support.email}?subject=Zebra%20feedback` },
      { eyebrow: 'Standards éditoriaux', title: 'Voir comment le contenu Zebra est relu', body: 'Découvrez l\'équipe éditoriale, le processus de revue, la politique de mise à jour et les garde-fous du langage médical.', href: localizedPath(localePath, '/authors/zebra-editorial/') },
      { eyebrow: 'Hub de connaissances', title: 'Parcourir les notions liées aux symptômes et conditions', body: 'Voyez comment POTS, dysautonomie, brouillard mental, fatigue, rapports médicaux et préparation de rendez-vous se connectent.', href: localizedPath(localePath, siteConfig.routes.knowledge) },
      { eyebrow: 'Guides', title: 'Lire d\'abord les guides pratiques les plus utiles', body: 'Comparez Zebra avec Notes, apprenez quoi suivre et comprenez le rapport avant de télécharger.', href: localizedPath(localePath, siteConfig.routes.blog) },
    ],
    resourcesIntro: {
      eyebrow: 'Confiance éditoriale',
      title: 'Comment Zebra maintient son contenu et son hub de connaissances.',
    },
    resourcesCtaLabel: 'Ouvrir la page',
  },
  guides: {
    eyebrow: 'Guides et pages par condition',
    title: 'Continuez à explorer les questions exactes que les gens se posent avant de télécharger un suivi de symptômes.',
    intro:
      'Que vous prépariez un rendez-vous ou cherchiez à suivre POTS, EDS et dysautonomie plus clairement, voici les meilleurs points de départ.',
    items: [
      {
        href: '/fr-fr/appointment-prep-checklist/',
        label: 'Checklist de préparation de rendez-vous sur 7 jours',
        description: 'Une page dédiée à ce qu\'il faut suivre avant un rendez-vous lie à une maladie chronique, surtout quand la mémoire et l\'énergie sont limitées.',
      },
      {
        href: '/fr-fr/pots-tracker/',
        label: 'Suivi POTS',
        description: 'La page produit principale pour suivre poussées POTS, constantes orthostatiques, sel, eau, médicaments et preuves pour le rendez-vous.',
      },
      {
        href: '/eds-tracker/',
        label: 'Suivi EDS / hEDS',
        description: 'Une page adaptée aux symptômes de chevauchement EDS, douleur, fatigue, instabilité, maladie invisible et préparation du rapport médical.',
      },
      {
        href: '/fibromyalgia-tracker/',
        label: 'Suivi fibromyalgie',
        description: 'Une page ciblée pour suivre poussées de fibromyalgie, douleur, fatigue, brain fog, médicaments et notes de rendez-vous.',
      },
      {
        href: '/fr-fr/orthostatic-vitals-test/',
        label: 'Test des constantes orthostatiques',
        description: 'Une page produit pour suivre les observations allongé, debout et en récupération à côté des symptômes et du contexte quotidien.',
      },
      {
        href: '/fr-fr/doctor-report/',
        label: 'Rapport de symptômes pour le médecin',
        description: 'Une page qui explique comment Zebra transforme l\'historique récent en un résumé de rendez-vous plus clair.',
      },
      {
        href: '/flare-tracker/',
        label: 'Suivi des poussées',
        description: 'Une page pour les mauvais jours : sévérité des symptômes, déclencheurs, notes et historique prêt pour le rapport.',
      },
      {
        href: '/fr-fr/symptom-tracker-for-invisible-illness/',
        label: 'Suivi pour maladie invisible',
        description: 'Une page pour les personnes qui cherchent des preuves, un soutien pour le brain fog, des check-ins à faible énergie et une préparation de rendez-vous.',
      },
    ],
  },
  faq: {
    eyebrow: 'FAQ',
    title: 'Questions sur Zebra.',
    items: faqItems,
  },
  finalCta: {
    eyebrow: 'Télécharger Zebra',
    title: 'Arrivez au rendez-vous avec un historique clair de vos symptomes.',
    body:
      'Commencez aujourd\'hui avec la version gratuite. Passez à Premium quand vous voulez des vues d\'historique plus longues et des rapports PDF pour le médecin.',
    points: ['Suivre chaque jour', 'Voir la tendance', 'Exporter le rapport'],
    pointsLabel: 'Pourquoi télécharger Zebra',
    endState: 'Un rendez-vous plus calme commence avec un historique que vous n\'avez pas à reconstruire.',
    trustLine: 'Suivi gratuit · Confidentialité dès la conception · Annulation possible à tout moment',
  },
  mobileStickyCta: {
    label: 'Télécharger Zebra',
    note: 'Apporter un historique au rendez-vous',
    ariaLabel: 'Télécharger Zebra sur l\'App Store',
  },
  footer: {
    body: 'Zebra est une app iPhone de suivi des symptômes pour le POTS, la dysautonomie, le SED, la fibromyalgie et les maladies chroniques invisibles qui se chevauchent, conçue pour des historiques plus clairs et des rendez-vous spécialisés.',
    trustLine: 'Confidentialité dès la conception. Créée pour iPhone. Données saisies par la personne uniquement. Pas un outil de diagnostic.',
    links: localizedFooterLinks(localePath, {
      blog: 'Guides',
      knowledge: 'Hub de connaissances',
      symptomTracking: 'Suivi des symptômes',
      fatigue: 'Fatigue',
      dizziness: 'Vertiges',
      brainFog: 'Brouillard mental',
      doctorReports: 'Rapports médicaux',
      authors: 'Auteurs',
      support: 'Support',
      privacy: 'Confidentialité',
      terms: 'Conditions',
      contact: 'Contact',
    }),
    navLabel: 'Pied de page',
    consentPreferencesLabel: 'Préférences de cookies',
  },
  appStore: localizedAppStore('fr-fr', 'Télécharger dans l\'App Store'),
  localeSwitcher: {
    label: 'Langue',
    links: localeSwitcherLinks,
  },
  consentBanner: {
    title: 'Mesure de nos publicités',
    body: 'Nous utilisons le pixel Meta pour mesurer si nos publicités atteignent les bonnes personnes. Aucune donnée de santé n\'est collectée ; ce site n\'a accès à rien dans l\'app.',
    acceptLabel: 'Accepter',
    declineLabel: 'Refuser',
  },
  schema: createHomeSchema({
    localePath,
    appDescription:
      'Zebra est une app iPhone de suivi des symptômes pour le POTS, le SED, la fibromyalgie, la dysautonomie et les maladies invisibles qui se chevauchent. Suivez poussées, symptômes, constantes orthostatiques, médicaments, sel, eau et notes, puis exportez un rapport PDF pour les rendez-vous.',
    webPageName: 'Zebra suivi des symptômes pour POTS, SED et dysautonomie',
    webPageDescription:
      'Landing page pour Zebra, une app iPhone de suivi des symptômes pour le POTS, le SED, la dysautonomie et la préparation de rendez-vous.',
    faqItems,
    offerDescriptions: {
      free: 'Version gratuite avec les fonctions principales et 30 jours d\'historique.',
      monthly: 'Premium mensuel débloque des vues d\'historique plus longues et l\'export PDF du rapport médical.',
      annual: 'Premium annuel débloque des vues d\'historique plus longues et l\'export PDF du rapport médical.',
      lifetime: 'Premium lifetime débloque Premium avec un achat unique et sans renouvellement d\'abonnement.',
    },
    featureList: [
      'Suivre poussées quotidiennes, symptômes, déclencheurs, hydratation, sel et médicaments',
      'Enregistrer les constantes orthostatiques dans un parcours guide',
      'Organiser l\'historique POTS, SED, dysautonomie, fibromyalgie, Long COVID et ME/CFS',
      'Exporter un rapport PDF pour les rendez-vous médicaux',
    ],
  }),
} as const;
