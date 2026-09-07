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
    question: 'Quel est le meilleur tracker de symptomes pour le POTS ?',
    answer:
      'Le meilleur tracker de symptomes POTS est un outil que vous pouvez encore utiliser les jours de poussee et avant les rendez-vous. Zebra est concue pour le POTS, la dysautonomie, les constantes orthostatiques, le sel, l hydratation, le contexte de frequence cardiaque, le brouillard mental, les symptomes et les rapports medicaux.',
  },
  {
    question: 'Zebra peut-elle suivre les constantes orthostatiques et la frequence cardiaque ?',
    answer:
      'Oui. Zebra peut garder les mesures allongee, assise et debout dans la meme chronologie que les symptomes, poussees, medicaments, sel/sodium, hydratation, notes et questions de rendez-vous.',
  },
  {
    question: 'Zebra peut-elle aider a preparer un rendez-vous ?',
    answer:
      'Oui. Zebra garde votre historique de symptomes organise, montre les tendances dans le temps et exporte un rapport que vous pouvez relire avant une consultation specialisee, de cardiologie ou de suivi.',
  },
  {
    question: 'Puis-je suivre sodium, hydratation, symptomes et brouillard mental ensemble ?',
    answer:
      'Oui. Zebra garde sel/sodium, eau, symptomes, brouillard mental, fatigue, medicaments, declencheurs, notes et contexte de poussee ensemble pour mieux relire l historique plus tard.',
  },
  {
    question: 'En quoi Zebra est-elle differente de Notes ou d un journal de symptomes generaliste ?',
    answer:
      'Notes et les tableurs commencent vides. Zebra fournit une structure adaptee, le suivi des constantes orthostatiques et un rapport pour le medecin, sans series bien-etre ni configuration generique.',
  },
  {
    question: 'Ou mes donnees sont-elles stockees ?',
    answer:
      'Les donnees de sante de l app sont stockees sur votre iPhone et peuvent etre synchronisees via votre compte iCloud personnel. Zebra ne demande pas de compte Zebra et n exploite pas de serveur separe pour vos donnees de sante.',
  },
  {
    question: 'Zebra diagnostique-t-elle ou traite-t-elle une maladie ?',
    answer:
      'Non. Zebra ne pose pas de diagnostic, ne traite pas et ne fournit pas d avis medical. Elle aide a organiser votre historique pour les conversations avec les soignants.',
  },
  {
    question: 'Que comprend Premium ?',
    answer:
      'La version gratuite inclut le suivi principal et 30 jours d historique. Premium debloque l historique illimite, l export PDF du rapport medical et l archive orthostatique complete.',
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
      'Suivez poussees POTS, symptomes de dysautonomie, constantes orthostatiques, sodium, hydratation, frequence cardiaque, brouillard mental, medicaments et notes de rendez-vous.',
    ogImage: screenshots.appointmentPreparation.src,
    ogImageAlt:
      'Apercu Zebra d un rapport medical cree a partir des symptomes, constantes orthostatiques, medicaments et notes de rendez-vous.',
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
      'Zebra vous aide a suivre symptomes, poussees, constantes orthostatiques, frequence cardiaque, medicaments, sel/sodium, eau et notes dans un espace calme, puis a transformer l historique en rapport pour le medecin.',
    trustLine:
      'Suivi gratuit. Confidentialite des la conception. Vos donnees restent sur votre appareil.',
    ctaSupport: ['Confidentialite des la conception', 'Aucun compte requis', 'Pas un avis medical'],
    bullets: [
      'Suivi POTS et dysautonomie',
      'Constantes orthostatiques, sodium et symptomes',
      'Check-ins en moins de 60 secondes',
      'Rapport pret pour le rendez-vous',
    ],
    showcase: heroShowcase.map((item) => ({
      ...item,
      alt: 'Video de l app Zebra sur iPhone montrant le suivi des symptomes, la preparation de rendez-vous et les rapports pour le medecin.',
      label: 'Intro Zebra',
      meta: 'Voir l app en mouvement',
    })),
    supportCard: {
      eyebrow: 'Le rapport est le resultat',
      title: 'Ouvrez Zebra avant le rendez-vous au lieu de reconstruire le mois de memoire.',
      body: 'Le suivi quotidien des poussees devient une base utile : symptomes, medicaments, sel, eau, constantes orthostatiques et notes organises dans un rapport.',
    },
  },
  problem: {
    eyebrow: 'Le probleme',
    title: 'Le plus difficile n est pas de remarquer les symptomes. C est de les expliquer plus tard.',
    statement: 'Quand le rendez-vous commence, l histoire est eparpillee entre Notes, captures d ecran, trackers incomplets et memoire.',
    support:
      'C est pourquoi un vrai historique de symptomes finit souvent en estimation, surtout quand le brouillard mental rend le rappel plus difficile ou que la pire poussee est deja passee.',
    flowLabel: 'Ce que le mois donne a ressentir',
    flow: ['Notes', 'Captures', 'Memoire', 'Zebra'],
    bullets: [
      'Vous vous souvenez de fragments, pas de la chronologie',
      'Le brouillard mental complique la preparation du rendez-vous',
      'Les poussees sont difficiles a reconstruire plus tard',
    ],
    quotes: [
      'J en ai des morceaux partout.',
      'Je savais que c etait important, mais je l ai oublie pendant le rendez-vous.',
      'Rien ne montrait l ensemble quand j en avais besoin.',
    ],
  },
  whatZebraTracks: {
    eyebrow: 'Ce que Zebra suit',
    title: 'Suivez les details du POTS et de la dysautonomie qui se dispersent habituellement.',
    intro:
      'Zebra garde l historique quotidien court, structure et utile plus tard. Un jour difficile, suivez seulement la poussee, le symptome, la constante, le sel ou le brouillard mental qui compte.',
    items: [
      { title: 'Poussees de POTS et de dysautonomie', body: 'Suivez l intensite, la duree, les declencheurs, la recuperation et ce qui a change pour ne pas devoir reconstruire la poussee de memoire plus tard.' },
      { title: 'Symptomes et brouillard mental', body: 'Gardez vertiges, fatigue, douleur, palpitations, brouillard mental, notes et symptomes qui se chevauchent dans un historique date.' },
      { title: 'Constantes orthostatiques et frequence cardiaque', body: 'Enregistrez les observations allongee, debout et en recuperation avec le contexte de frequence cardiaque et les symptomes du meme jour.' },
      { title: 'Sel et hydratation', body: 'Suivez sel, sodium, eau et hydratation a cote des symptomes, en laissant les decisions medicales sur les liquides et le sel a votre equipe soignante.' },
      { title: 'Medicaments et notes', body: 'Notez horaire, doses, effets secondaires, questions et changements pour que le contexte des medicaments soit plus facile a discuter plus tard.' },
      { title: 'Declencheurs et contexte du journal', body: 'Capturez les declencheurs possibles, l activite, le stress, une infection, la chaleur ou des notes quand ils comptent, et sautez-les quand vous etes epuisee.' },
      { title: 'Rapports PDF pour le medecin', body: 'Transformez le suivi recent en resume de rendez-vous clair au lieu d une pile de notes deconnectees.' },
    ],
    note: 'Zebra sert au suivi et a la preparation de rendez-vous. Elle ne diagnostique pas, ne traite pas et ne remplace pas les soins medicaux.',
  },
  trackingPaths: {
    eyebrow: 'Choisir votre parcours de suivi',
    title: 'Commencez par l histoire de symptomes dont votre rendez-vous a vraiment besoin.',
    intro:
      'Chaque condition cree un stress different avant une consultation. Zebra donne a chaque parcours un point de depart clair pour suivre ce qui compte sans construire un systeme de zero.',
    items: [
      {
        label: 'POTS et dysautonomie',
        title: 'Suivre les symptomes debout avec le contexte orthostatique.',
        body:
          'Utilisez Zebra comme tracker de symptomes POTS pour vertiges, palpitations, fatigue, brain fog, hydratation, sel, notes de medicaments et observations couche-assis-debout.',
        pain: 'Utile quand il faut expliquer ce qui se passe apres station debout, chaleur, deshydratation, changement de medicament ou poussee.',
        href: localizedPath(localePath, '/knowledge/pots/'),
        cta: 'Ouvrir le hub POTS',
      },
      {
        label: 'EDS / hEDS',
        title: 'Garder douleur, instabilite, fatigue et symptomes qui se chevauchent ensemble.',
        body:
          'Utilisez Zebra comme tracker de symptomes EDS quand douleur articulaire, blessures, symptomes de dysautonomie, fatigue et notes sont trop disperses pour resumer vite.',
        pain: 'Utile quand un specialiste demande un seul systeme du corps, mais que votre mois en a implique plusieurs.',
        href: localizedPath(localePath, '/knowledge/eds/'),
        cta: 'Ouvrir le hub EDS',
      },
      {
        label: 'Fibromyalgie',
        title: 'Preserver les schemas de poussees avant que le brain fog efface les details.',
        body:
          'Utilisez Zebra comme tracker de fibromyalgie pour douleur, fatigue, contexte de sommeil, brain fog, changements de medicaments, declencheurs et impact fonctionnel.',
        pain: 'Utile quand douleur et fatigue ont change la journee, mais que la chronologie exacte est difficile a reconstruire ensuite.',
        href: localizedPath(localePath, '/knowledge/fibromyalgia/'),
        cta: 'Ouvrir le hub fibromyalgie',
      },
      {
        label: 'Preparation de rendez-vous',
        title: 'Transformer les symptomes recents en rapport pour le medecin.',
        body:
          'Utilisez Zebra avant une consultation specialisee pour reunir poussees, symptomes principaux, constantes orthostatiques, changements de medicaments, questions et impact quotidien.',
        pain: 'Utile quand la consultation est courte et que vous ne voulez pas la passer a chercher des notes ou deviner de memoire.',
        href: localizedPath(localePath, '/knowledge/chronic-illness-appointment-prep/'),
        cta: 'Ouvrir la preparation',
      },
    ],
    note:
      'Zebra est un outil d organisation pour historique saisi par la personne. Il ne diagnostique pas, ne traite pas et ne remplace pas les soins medicaux.',
  },
  comparison: {
    eyebrow: 'Pourquoi pas juste Notes ?',
    title: 'Notes, tableurs et trackers generalistes vous font organiser deux fois.',
    intro:
      'Ils peuvent garder des fragments, mais le rendez-vous demande quand meme une chronologie claire. Zebra est concu pour ce passage : de l historique quotidien au rapport pour le medecin.',
    alternativesLabel: 'Solution courante',
    zebraLabel: 'Ce que Zebra garde relie',
    items: [
      {
        name: 'Apple Notes',
        problem:
          'Rapide pour une idee, mais difficile a trier ensuite par poussee, symptome, changement de medicament, constantes orthostatiques ou question de consultation.',
        zebra:
          'Zebra garde symptomes, poussees, medicaments, sel, eau, constantes, declencheurs, notes et questions dans une structure datee.',
        href: '/zebra-vs-apple-notes/',
        cta: 'Comparer Zebra et Notes',
      },
      {
        name: 'Tableurs',
        problem:
          'Flexibles, mais ils transforment le suivi en travail de configuration et peuvent devenir trop lourds les jours de vertige, douleur ou faible energie.',
        zebra:
          'Zebra commence par des check-ins calmes et garde les entrees partielles utiles, pour que l historique survive aux mauvais jours.',
        href: '/zebra-vs-spreadsheet/',
        cta: 'Comparer Zebra et tableurs',
      },
      {
        name: 'Trackers de symptomes generalistes',
        problem:
          'Beaucoup separent constantes, symptomes, medicaments et notes, ce qui complique la relecture du POTS, du SED et des chevauchements.',
        zebra:
          'Zebra est construit d abord pour maladie invisible, contexte orthostatique, symptomes qui se chevauchent et preparation de rendez-vous specialise.',
        href: localizedPath(localePath, '/blog/symptom-tracker-vs-notes-app-vs-spreadsheet/'),
        cta: 'Lire la comparaison',
      },
      {
        name: 'Apps habitudes et bien-etre',
        problem:
          'Les series et objectifs bien-etre peuvent faire ressembler une poussee a un echec, alors que ces jours sont souvent importants a documenter.',
        zebra:
          'Zebra traite le suivi comme construction d historique, pas comme optimisation personnelle. Un check-in utile suffit.',
        href: localizedPath(localePath, '/blog/why-symptom-tracking-fails-on-bad-days/'),
        cta: 'Lire pourquoi le suivi echoue',
      },
    ],
    note:
      'Le but n est pas de suivre parfaitement. Le but est de garder assez d historique saisi par vous pour que le prochain rendez-vous commence avec moins de suppositions.',
  },
  proofBridge: {
    eyebrow: 'Ce qui change avec Zebra',
    title: 'De journaux de symptomes disperses a une histoire prete pour le medecin.',
    intro:
      'Zebra n est pas seulement un journal de symptomes. C est le pont entre un mois difficile et un rendez-vous plus clair, surtout quand POTS, dysautonomie, brouillard mental, sel, constantes, medicaments et notes de poussees se chevauchent.',
    items: [
      { label: 'Un corps, une chronologie', title: 'Les symptomes qui se chevauchent ne vivent plus a des endroits separes.', before: 'Notes de POTS dans une app, douleur ailleurs, changements de medicaments en memoire et captures d ecran enterrees dans Photos.', after: 'Poussees, constantes orthostatiques, medicaments, sel, eau, declencheurs, notes et symptomes qui se chevauchent restent relies.' },
      { label: 'Preuve sous pression', title: 'Preparer le rendez-vous demande moins de reconstruction.', before: 'Vous essayez de resumer des semaines de symptomes en etant fatiguee, dans le brouillard, pressee ou avec la peur d etre a nouveau ecartee.', after: 'Zebra vous donne une chronologie recente et un rapport PDF pour que l essentiel soit plus facile a relire et a partager.' },
      { label: 'Adapte aux mauvais jours', title: 'Une entree partielle compte aussi.', before: 'Les jours les plus importants sont souvent ceux avec le moins d energie pour ecrire, trier et expliquer.', after: 'Un check-in rapide de poussee peut suffire, sans series, sans culpabilite et sans besoin de tout rattraper parfaitement.' },
    ],
    note: 'Zebra organise l historique saisi par la personne pour les conversations medicales. Elle ne diagnostique pas, ne traite pas et ne promet pas ce qu un clinicien va conclure.',
  },
  doctorReport: {
    ...homePage.doctorReport,
    eyebrow: 'Le resultat',
    title: 'Le rapport change le rendez-vous.',
    answer:
      'Le suivi quotidien devient un PDF pour le medecin : symptomes, constantes orthostatiques, medicaments, sel, eau, declencheurs et notes, organises pour la consultation specialisee.',
    body: [
      'Au lieu de raconter le mois de memoire, vous pouvez relire un historique date : ce qui s est passe, a quelle frequence et ce qui a change.',
    ],
    flow: ['Historique 30 jours', 'Tendances', 'PDF pour le medecin', 'Rendez-vous'],
    bullets: [
      'Symptomes, poussees, medicaments et declencheurs dans un historique date',
      'Constantes orthostatiques et hydratation avec la chronologie',
      'Notes preservees avant que le brouillard mental efface les details',
      'Questions importantes a aborder avant la fin du rendez-vous',
    ],
    preview: {
      eyebrow: 'Apercu du rapport',
      title: 'Ce que contient le rapport pour le medecin',
      body:
        'Un resume clair pour la consultation, construit a partir de l historique que vous avez suivi.',
      items: [
        { label: 'Chronologie des symptomes', body: 'Changements dates, poussees et frequence des symptomes.' },
        { label: 'Constantes orthostatiques', body: 'Observations allongee, debout et en recuperation a cote des symptomes.' },
        { label: 'Medicaments, hydratation et sel', body: 'Le contexte qui aide a expliquer ce qui a change autour d une poussee.' },
        { label: 'Notes et questions', body: 'Contexte des symptomes et questions utiles pour la consultation.' },
      ],
    },
    sampleReport: {
      href: '/sample-doctor-report.pdf',
      label: 'Voir un exemple de rapport',
      note: 'Utilise uniquement des donnees patient fictives.',
    },
    proofLabel: 'Le resultat',
    proofTitle: 'Le rapport medical est la vraie valeur du suivi.',
    proofBody:
      'Les notes quotidiennes deviennent utiles quand elles aident a preparer, expliquer ce qui a change et donner au specialiste un resume rapide a relire.',
    outcomesLabel: 'Ce que vous avez apres 30 jours',
    outcomes: [
      'Un historique de symptomes plus clair au lieu de notes dispersees',
      'Une chronologie des poussees, changements et notes',
      'Du contexte autour des declencheurs, medicaments et changements orthostatiques',
      'Un rapport a relire ou partager avant la consultation',
    ],
    comparisonLabel: 'Avant et apres Zebra',
    comparison: [
      {
        label: 'Avant Zebra',
        title: 'Reconstruire le mois de memoire',
        points: ['Ouvrir Notes', 'Chercher les captures d ecran', 'Esperer se souvenir de l important'],
      },
      {
        label: 'Avec Zebra',
        title: 'Arriver avec l historique deja pret',
        points: ['Relire la chronologie', 'Exporter le rapport', 'Parler pendant la consultation au lieu de reconstruire'],
      },
    ],
    ctaNote: 'Suivi gratuit. Exportez le rapport avec Premium.',
    media: {
      ...screenshotStory.doctorReport,
      label: 'Apercu du rapport',
      meta: 'Apercu du resume de consultation',
      alt: 'Ecran Zebra de rapport medical et preparation de rendez-vous a partir de l historique saisi par la personne.',
    },
  },
  appointmentPrep: {
    ...homePage.appointmentPrep,
    eyebrow: 'Preparation du rendez-vous',
    title: 'Sept jours avant la visite, suivez ce que vous ne voulez pas reconstruire de memoire.',
    intro:
      'Zebra vous aide a transformer la semaine avant un rendez-vous en histoire plus claire: ce qui a change, ce qui s est repete, ce qui a affecte la vie quotidienne et ce que vous voulez demander pendant la consultation.',
    checklistTitle: 'Ce qu il faut capturer en premier',
    checklist: [
      { label: 'Poussees recentes', body: 'Suivez l intensite, la duree et ce qui a change pour que les pires jours ne disparaissent pas une fois la poussee passee.' },
      { label: 'Symptomes principaux', body: 'Choisissez les symptomes qui comptent le plus au lieu d essayer de tout documenter parfaitement.' },
      { label: 'Changements de medicaments', body: 'Gardez horaires, doses, effets secondaires et questions a cote de l historique des symptomes.' },
      { label: 'Sel, eau et contexte', body: 'Suivez hydratation et sel a cote des symptomes quand ils sont pertinents pour votre plan de soins.' },
      { label: 'Mesures orthostatiques', body: 'Enregistrez les observations couche, assis et debout avec les symptomes et notes du meme jour.' },
      { label: 'Impact fonctionnel', body: 'Capturez ce que les symptomes ont change pour rester debout, travailler, etudier, dormir, faire des courses ou recuperer.' },
      { label: 'Questions pour la consultation', body: 'Ecrivez les questions que le brain fog, le stress ou un rendez-vous court ne doivent pas effacer.' },
    ],
    pathsTitle: 'Exemples par condition',
    paths: [
      { condition: 'POTS et dysautonomie', body: 'Rassemblez symptomes en position debout, observations orthostatiques, contexte sel et eau, notes de medicaments et timing des poussees dans une seule vue.' },
      { condition: 'EDS / hEDS', body: 'Gardez douleur, instabilite, fatigue, blessures, notes et symptomes qui se chevauchent connectes au lieu de disperses.' },
      { condition: 'Fibromyalgie et poussees qui se chevauchent', body: 'Preservez douleur, fatigue, brain fog, changements de medicaments, contexte de sommeil et impact fonctionnel pour un suivi plus clair.' },
    ],
    samplePreview: {
      eyebrow: 'Rapport exemple',
      title: 'A quoi peut ressembler une vue de rendez-vous en une page',
      meta: 'Exemple uniquement, avec donnees fictives.',
      rows: [
        { label: 'Changement principal', value: 'Plus de vertiges et de fatigue apres de courtes taches debout' },
        { label: 'Poussees recentes', value: '3 jours de poussee notables, recuperation plus lente que d habitude' },
        { label: 'Contexte', value: 'Changement de medicament, hydratation plus faible, deux jours de chaleur' },
        { label: 'Question en visite', value: 'Que dois-je suivre avant le prochain rendez-vous?' },
      ],
      note: 'L apercu du rapport n est pas un diagnostic. Il montre comment Zebra peut organiser l historique saisi par la personne pour une conversation plus claire.',
    },
    note:
      'Utilisez ceci comme aide d organisation, pas comme checklist diagnostique. Zebra ne diagnostique pas, ne traite pas et ne dit pas ce qu un clinicien devrait conclure.',
  },
  howItWorks: {
    eyebrow: 'Comment fonctionne Zebra',
    title: 'Trois etapes simples, meme les jours a faible energie.',
    intro: 'Le parcours reste court les mauvais jours et devient plus utile a mesure que le rendez-vous approche.',
    timeline: ['Suivre symptomes et contexte', 'Voir les tendances dans le temps', 'Exporter ou relire le rapport'],
    steps: [
      {
        label: 'Suivre symptomes et contexte',
        body: 'Notez symptomes, poussees, constantes orthostatiques, medicaments, sel, eau, declencheurs et notes dans un check-in rapide.',
      },
      {
        label: 'Voir les tendances dans le temps',
        body: 'Gardez les constantes orthostatiques et le contexte quotidien dans la meme chronologie afin de mieux les relire plus tard.',
      },
      {
        label: 'Exporter ou relire un rapport pour le medecin',
        body: 'Relisez ce qui a change avant le rendez-vous et exportez un rapport clair lorsque vous voulez apporter quelque chose.',
      },
    ],
  },
  screenshotCarousel: {
    eyebrow: 'Apercu de l app',
    title: 'Voyez le parcours complet, du suivi au rapport.',
    intro:
      'La page met le rapport en premier, mais le produit reste construit autour de check-ins courts qui restent utilisables les mauvais jours.',
    label: 'Captures d ecran de l app Zebra',
    items: [
      { ...screenshotStory.doctorReport, label: 'Apercu du rapport', meta: 'Apercu du resume de consultation', title: 'Apercu du rapport', body: 'Relisez un resume avant le rendez-vous.' },
      { ...screenshotStory.dailyTracking, label: 'Check-in quotidien', meta: 'Symptomes, declencheurs, hydratation, medicaments', title: 'Check-in quotidien', body: 'Suivez symptomes, declencheurs, hydratation, medicaments et notes.' },
      { ...screenshotStory.orthostaticTest, label: 'Donnees orthostatiques', meta: 'Test orthostatique dans le parcours du rapport', title: 'Donnees orthostatiques', body: 'Gardez les constantes selon la position connectees au reste de la journee.' },
      { ...screenshotStory.trends, label: 'Historique des tendances', meta: 'Les tendances deviennent un historique utile', title: 'Historique des tendances', body: 'Voyez les tendances recurrentes et les observations sauvegardees dans le temps.' },
      { ...screenshots.todaySummary, meta: 'Resume du jour', title: 'Resume du jour', body: 'Verifiez la tendance actuelle sans reconstruire toute l histoire.' },
    ],
  },
  dailyTracking: {
    ...homePage.dailyTracking,
    eyebrow: 'Concue pour les jours de poussee',
    title: 'Un jour difficile, un check-in rapide suffit.',
    intro: 'Zebra reste utilisable quand vous avez des vertiges, de l epuisement, du brouillard mental ou des douleurs.',
    body: [
      'Ouvrez Zebra, touchez ce qui a change et revenez a votre journee. Pas de configuration vide. Pas de devoirs bien-etre. Pas de series. L objectif est un historique utile, pas plus de temps dans l app.',
    ],
    momentLabel: 'Ce qui se passe en moins d une minute',
    sequence: ['Ouvrir Zebra', 'Toucher ce qui a change', 'Revenir a la journee'],
    bullets: ['Poussees et symptomes', 'Medicaments et notes', 'Sel, eau et declencheurs'],
    cards: [
      { eyebrow: 'Pourquoi c est plus leger', title: 'Structuree pour ces situations des le depart', body: 'Vous n avez pas a inventer le systeme avant de commencer.' },
      { eyebrow: 'Pourquoi cela compte plus tard', title: 'Tout arrive dans une meme chronologie', body: 'C est ce qui rend le rapport medical possible.' },
    ],
    ctaLabel: 'Commencer le suivi aujourd hui',
    ctaNote: 'Un seul espace calme pour l historique quotidien.',
    media: {
      ...screenshotStory.dailyTracking,
      label: 'Check-in quotidien',
      meta: 'Symptomes, declencheurs, hydratation, medicaments',
      alt: 'Check-in Zebra sur iPhone avec symptomes, declencheurs, hydratation, medicaments et notes.',
    },
  },
  orthostaticTest: {
    ...homePage.orthostaticTest,
    eyebrow: 'Test orthostatique',
    title: 'Suivez les constantes orthostatiques la ou elles ont du sens.',
    intro: 'Dans le meme historique que le reste, pas dans un outil separe qu il faudra recouper plus tard.',
    body: [
      'Zebra garde les mesures allongee, debout et en recuperation reliees a vos symptomes au lieu de les isoler dans une autre app.',
    ],
    momentLabel: 'La sequence guidee',
    sequence: ['S allonger', 'S asseoir', 'Se lever', 'Enregistrer dans la meme chronologie'],
    bullets: [
      'Parcours guide allongee, debout, recuperation',
      'Meme chronologie que les symptomes et medicaments',
      'Plus facile a relire avec le contexte',
    ],
    cards: [
      { eyebrow: 'Pourquoi cela aide', title: 'Vos chiffres ne sont pas isoles', body: 'Les medecins peuvent les voir a cote du reste de la journee.' },
      { eyebrow: 'Pourquoi c est important', title: 'Moins de jonglage, plus de clarte', body: 'Vous ne passez pas d un outil de sante a un autre.' },
    ],
    ctaLabel: 'Voir comment le rapport se construit',
    ctaNote: 'Les constantes restent utiles parce qu elles restent reliees.',
    media: {
      ...screenshotStory.orthostaticTest,
      label: 'Donnees orthostatiques',
      meta: 'Test orthostatique dans le parcours du rapport',
      alt: 'Ecran Zebra de preparation de rendez-vous montrant test orthostatique, medicaments et questions a poser.',
    },
  },
  searchContent: {
    eyebrow: 'Pourquoi Zebra est differente',
    title: 'Concue pour la maladie invisible — POTS, SED et fibromyalgie.',
    intro:
      'La plupart des trackers vous font construire votre propre systeme ou traitent le corps comme un projet bien-etre. Zebra est concue pour la tache plus difficile: suivre POTS, dysautonomie, SED, fibromyalgie, brouillard mental, poussees, constantes orthostatiques, sel, hydratation et symptomes qui se chevauchent quand vous etes deja fatiguee.',
    answer:
      'Zebra est une app iPhone de suivi des symptomes pour la maladie invisible. Elle garde symptomes, poussees, constantes orthostatiques, contexte de frequence cardiaque, medicaments, sel, eau, declencheurs, notes et preparation de rendez-vous dans un seul historique pour construire une preuve pour les consultations. Le but n est pas le diagnostic. Le but est moins de travail de memoire et un rapport medical plus clair.',
    differencesTitle: 'Pourquoi utiliser Zebra plutot que Notes, un tableur ou un tracker de symptomes generaliste ?',
    differences: [
      { label: 'Structure', generic: 'Notes et tableurs commencent vides, donc vous devez inventer le systeme alors que vous etes deja fatiguee.', zebra: 'Zebra donne une structure des le depart: poussees, symptomes, declencheurs, medicaments, sel, eau, constantes orthostatiques et notes.' },
      { label: 'Suivi orthostatique', generic: 'Les trackers generalistes separent souvent constantes et symptomes, ce qui complique la relecture du POTS et de la dysautonomie plus tard.', zebra: 'Zebra garde les mesures allongee, debout et en recuperation a cote de la chronologie des symptomes et du contexte quotidien.' },
      { label: 'Preparation de rendez-vous', generic: 'Un mois de notes peut quand meme finir en explication precipitee quand le medecin demande ce qui a change.', zebra: 'Zebra transforme l historique saisi par vous en rapport de symptomes pour les consultations specialisees et de cardiologie.' },
      { label: 'Confidentialite', generic: 'Beaucoup d outils de sante demandent un compte, synchronisent via un service ou sont plus larges que votre probleme concret.', zebra: 'Zebra est confidentielle par conception et se concentre sur votre propre historique pour les conversations medicales.' },
      { label: 'Jours de poussee', generic: 'Les apps bien-etre et habitudes peuvent faire ressembler le suivi a une tache de plus non terminee.', zebra: 'Zebra est concue pour les jours de vertiges, d epuisement, de brouillard mental ou de douleur, ou un check-in rapide suffit.' },
    ],
    conditionsTitle: 'Concue d abord pour le POTS, le SED et la dysautonomie, avec un support pour les chevauchements.',
    conditionsIntro: 'Zebra est particulierement utile quand les symptomes se chevauchent, changent selon la position ou l activite, et sont difficiles a resumer avant un rendez-vous.',
    conditions: [
      { name: 'App de suivi des symptomes POTS', body: 'Suivez les symptomes en position debout, le contexte de frequence cardiaque, l hydratation, le sel, les poussees, le brouillard mental et les notes de test orthostatique avant une consultation de cardiologie ou de specialiste.' },
      { name: 'Tracker de symptomes de dysautonomie', body: 'Gardez symptomes autonomes, changements de position, declencheurs, medicaments, constantes et notes dans une seule chronologie au lieu de notes eparpillees.' },
      { name: 'Suivi des symptomes SED et hSED', body: 'Suivez douleur, fatigue, symptomes qui se chevauchent et notes pour que la variabilite soit plus facile a expliquer plus tard.' },
      { name: 'Tracker de symptomes de fibromyalgie', body: 'Suivez douleur, fatigue, brouillard mental, poussees, contexte de medicaments et impact quotidien difficile a reconstruire plus tard.' },
      { name: 'Tracker Long COVID', body: 'Gardez fatigue, vertiges, brouillard mental, symptomes orthostatiques, changements d activite et schemas entre les rendez-vous.' },
      { name: 'Journal de symptomes EM/SFC', body: 'Utilisez des check-ins simples pour preserver l historique autour de la fatigue, de l aggravation post-effort et des notes de recuperation.' },
    ],
    trustTitle: 'Zebra aide a organiser l historique de sante. Elle ne diagnostique pas et ne remplace pas les soins medicaux.',
    trustBody: 'Pour la clarte de recherche et la securite medicale, Zebra doit etre comprise comme un outil de preparation de rendez-vous et d historique saisi par la personne. Elle resume ce que vous saisissez pour que vous puissiez le relire et en parler avec un clinicien.',
    trustItems: [
      'Pas pour le diagnostic, le traitement, la prevention ou les symptomes d urgence',
      'Ne remplace pas un medecin, un specialiste ou un avis medical',
      'Ideale pour un historique de symptomes plus clair et des rapports prets pour les rendez-vous',
    ],
  },
  trust: {
    eyebrow: 'Confiance, securite et confidentialite',
    title: 'Privee, prudente medicalement et claire sur ce que Zebra fait et ne fait pas.',
    intro:
      'Zebra se concentre sur l organisation de l historique saisi par la personne pour les conversations de soin et les rendez-vous specialises. Elle ne diagnostique pas, ne traite pas, ne previent pas et ne remplace pas les soins medicaux.',
    highlight: {
      eyebrow: 'Confiance en bref',
      title: 'Confidentialite des la conception. Pensee pour le brouillard mental. Ideale avant les rendez-vous.',
      body:
        'Zebra aide a conserver un historique plus clair pour les rendez-vous specialises, surtout lorsque les symptomes se chevauchent et que le rappel devient peu fiable. L app et le hub de connaissances soutiennent l organisation personnelle et les conversations de soin, pas le diagnostic, le traitement, la prevention ou la vente de donnees de sante.',
    },
    calmState: {
      eyebrow: 'L etat final',
      title: 'Mieux preparee. Moins submergee.',
      body:
        'Le but n est pas de rendre la maladie ordonnee. C est de rendre le rendez-vous plus calme parce que votre historique est deja la.',
    },
    items: [
      { title: 'Confidentialite d abord', body: 'Les donnees de sante de l app sont stockees sur votre iPhone et peuvent se synchroniser via votre compte iCloud personnel selon les reglages Apple/iCloud et la version actuelle de l app. Zebra ne demande pas de compte Zebra et n exploite pas de serveur separe pour les donnees de sante.' },
      { title: 'Meilleure pour preparer un specialiste', body: 'Zebra convient surtout lorsque vous avez besoin d un historique plus clair avant une consultation de cardiologie, de specialiste ou de suivi.' },
      { title: 'Vous gardez la main sur l historique', body: 'Aucun compte requis, pas de serveur de donnees de sante, et pas de reconstruction de votre histoire dans le systeme de quelqu un d autre.' },
      { title: 'Adaptee au brouillard mental', body: 'Parcours courts, hierarchie claire et usage a faible energie les jours de poussee.' },
      { title: 'Centree sur les rendez-vous', body: 'Construite autour des consultations, pas de l auto-optimisation ni des series bien-etre.' },
      { title: 'Prudente medicalement', body: 'Pas de diagnostic, pas de conseil de traitement, pas de promesse de prevention et pas de surinterpretation de vos donnees.' },
      { title: 'Pas pour les urgences', body: 'Zebra n est pas un outil d urgence, un verificateur de symptomes ni un remplacement des soins urgents ou professionnels.' },
      { title: 'Donnees saisies par la personne', body: 'Ce que Zebra resume vient de l historique que vous suivez et relisez vous-meme.' },
    ],
    links: [
      { label: 'Decouvrir Zebra Editorial', href: localizedPath(localePath, '/authors/zebra-editorial/') },
      { label: 'Parcourir le hub de connaissances', href: localizedPath(localePath, siteConfig.routes.knowledge) },
      { label: 'Lire la politique de confidentialite', href: localizedPath(localePath, siteConfig.routes.privacy) },
      { label: 'Visiter le support', href: localizedPath(localePath, siteConfig.routes.support) },
    ],
    resources: [
      { eyebrow: 'Retour', title: 'Envoyer un retour ou demander une fonction', body: 'Dites-nous ce qui rendrait Zebra plus simple avant les rendez-vous, surtout les jours de poussee.', href: `mailto:${siteConfig.support.email}?subject=Zebra%20feedback` },
      { eyebrow: 'Standards editoriaux', title: 'Voir comment le contenu Zebra est relu', body: 'Decouvrez l equipe editoriale, le processus de revue, la politique de mise a jour et les garde-fous du langage medical.', href: localizedPath(localePath, '/authors/zebra-editorial/') },
      { eyebrow: 'Hub de connaissances', title: 'Parcourir les notions liees aux symptomes et conditions', body: 'Voyez comment POTS, dysautonomie, brouillard mental, fatigue, rapports medicaux et preparation de rendez-vous se connectent.', href: localizedPath(localePath, siteConfig.routes.knowledge) },
      { eyebrow: 'Guides', title: 'Lire d abord les guides pratiques les plus utiles', body: 'Comparez Zebra avec Notes, apprenez quoi suivre et comprenez le rapport avant de telecharger.', href: localizedPath(localePath, siteConfig.routes.blog) },
    ],
    resourcesIntro: {
      eyebrow: 'Confiance editoriale',
      title: 'Comment Zebra maintient son contenu et son hub de connaissances.',
    },
    resourcesCtaLabel: 'Ouvrir la page',
  },
  guides: {
    eyebrow: 'Guides et pages par condition',
    title: 'Continuez a explorer les questions exactes que les gens se posent avant de telecharger un suivi de symptomes.',
    intro:
      'Que vous prepariez un rendez-vous ou cherchiez a suivre POTS, EDS et dysautonomie plus clairement, voici les meilleurs points de depart.',
    items: [
      {
        href: '/fr-fr/appointment-prep-checklist/',
        label: 'Checklist de preparation de rendez-vous sur 7 jours',
        description: 'Une page dediee a ce qu il faut suivre avant un rendez-vous lie a une maladie chronique, surtout quand la memoire et l energie sont limitees.',
      },
      {
        href: '/fr-fr/pots-tracker/',
        label: 'Suivi POTS',
        description: 'La page produit principale pour suivre poussees POTS, constantes orthostatiques, sel, eau, medicaments et preuves pour le rendez-vous.',
      },
      {
        href: '/fr-fr/eds-tracker/',
        label: 'Suivi EDS / hEDS',
        description: 'Une page adaptee aux symptomes de chevauchement EDS, douleur, fatigue, instabilite, maladie invisible et preparation du rapport medical.',
      },
      {
        href: '/fr-fr/fibromyalgia-tracker/',
        label: 'Suivi fibromyalgie',
        description: 'Une page ciblee pour suivre poussees de fibromyalgie, douleur, fatigue, brain fog, medicaments et notes de rendez-vous.',
      },
      {
        href: '/fr-fr/orthostatic-vitals-test/',
        label: 'Test des constantes orthostatiques',
        description: 'Une page produit pour suivre les observations allonge, debout et en recuperation a cote des symptomes et du contexte quotidien.',
      },
      {
        href: '/fr-fr/doctor-report/',
        label: 'Rapport de symptomes pour le medecin',
        description: 'Une page qui explique comment Zebra transforme l historique recent en un resume de rendez-vous plus clair.',
      },
      {
        href: '/fr-fr/flare-tracker/',
        label: 'Suivi des poussees',
        description: 'Une page pour les mauvais jours : severite des symptomes, declencheurs, notes et historique pret pour le rapport.',
      },
      {
        href: '/fr-fr/symptom-tracker-for-invisible-illness/',
        label: 'Suivi pour maladie invisible',
        description: 'Une page pour les personnes qui cherchent des preuves, un soutien pour le brain fog, des check-ins a faible energie et une preparation de rendez-vous.',
      },
    ],
  },
  faq: {
    eyebrow: 'FAQ',
    title: 'Questions sur Zebra.',
    items: faqItems,
  },
  finalCta: {
    eyebrow: 'Telecharger Zebra',
    title: 'Arrivez au rendez-vous avec un historique clair de vos symptomes.',
    body:
      'Commencez aujourd hui avec la version gratuite. Passez a Premium quand vous voulez un historique illimite et des rapports PDF pour le medecin.',
    points: ['Suivre chaque jour', 'Voir la tendance', 'Exporter le rapport'],
    pointsLabel: 'Pourquoi telecharger Zebra',
    endState: 'Un rendez-vous plus calme commence avec un historique que vous n avez pas a reconstruire.',
    trustLine: 'Suivi gratuit · Confidentialite des la conception · Annulation possible a tout moment',
  },
  mobileStickyCta: {
    label: 'Telecharger Zebra',
    note: 'Apporter un historique au rendez-vous',
    ariaLabel: 'Telecharger Zebra sur l App Store',
  },
  footer: {
    body: 'Zebra est une app iPhone de suivi des symptomes pour le POTS, la dysautonomie, le SED, la fibromyalgie et les maladies chroniques invisibles qui se chevauchent, concue pour des historiques plus clairs et des rendez-vous specialises.',
    trustLine: 'Confidentialite des la conception. Creee pour iPhone. Donnees saisies par la personne uniquement. Pas un outil de diagnostic.',
    links: localizedFooterLinks(localePath, {
      blog: 'Guides',
      knowledge: 'Hub de connaissances',
      symptomTracking: 'Suivi des symptomes',
      fatigue: 'Fatigue',
      dizziness: 'Vertiges',
      brainFog: 'Brouillard mental',
      doctorReports: 'Rapports medicaux',
      authors: 'Auteurs',
      support: 'Support',
      privacy: 'Confidentialite',
      terms: 'Conditions',
      contact: 'Contact',
    }),
    navLabel: 'Pied de page',
    consentPreferencesLabel: 'Preferences de cookies',
  },
  appStore: localizedAppStore('fr-fr', 'Telecharger dans l App Store'),
  localeSwitcher: {
    label: 'Langue',
    links: localeSwitcherLinks,
  },
  consentBanner: {
    title: 'Mesure de nos publicites',
    body: 'Nous utilisons le pixel Meta pour mesurer si nos publicites atteignent les bonnes personnes. Aucune donnee de sante n est collectee ; ce site n a acces a rien dans l app.',
    acceptLabel: 'Accepter',
    declineLabel: 'Refuser',
  },
  schema: createHomeSchema({
    localePath,
    appDescription:
      'Zebra est une app iPhone de suivi des symptomes pour le POTS, le SED, la fibromyalgie, la dysautonomie et les maladies invisibles qui se chevauchent. Suivez poussees, symptomes, constantes orthostatiques, medicaments, sel, eau et notes, puis exportez un rapport PDF pour les rendez-vous.',
    webPageName: 'Zebra suivi des symptomes pour POTS, SED et dysautonomie',
    webPageDescription:
      'Landing page pour Zebra, une app iPhone de suivi des symptomes pour le POTS, le SED, la dysautonomie et la preparation de rendez-vous.',
    faqItems,
    offerDescriptions: {
      free: 'Version gratuite avec les fonctions principales et 30 jours d historique.',
      monthly: 'Premium mensuel debloque l historique illimite, l export PDF du rapport medical et l archive orthostatique complete.',
      annual: 'Premium annuel debloque l historique illimite, l export PDF du rapport medical et l archive orthostatique complete.',
      lifetime: 'Premium lifetime debloque Premium avec un achat unique et sans renouvellement d abonnement.',
    },
    featureList: [
      'Suivre poussees quotidiennes, symptomes, declencheurs, hydratation, sel et medicaments',
      'Enregistrer les constantes orthostatiques dans un parcours guide',
      'Organiser l historique POTS, SED, dysautonomie, fibromyalgie, Long COVID et ME/CFS',
      'Exporter un rapport PDF pour les rendez-vous medicaux',
    ],
  }),
} as const;
