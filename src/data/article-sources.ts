// Sources behind the research and medical context used across Zebra guides.
// Every link was checked to resolve (HTTP 200 or 202) on 2026-10-31.
// Shown at the end of every guide. A guide that relies on a specific claim
// should also name its source in the body.
// National public health sources, shown in the guide's own language.
// Checked to resolve on 2026-10-31 (German and Spanish pages returned 200;
// the French page is the authority's home page, listed as a general reference).
export const nationalSourcesByLang: Record<string, { label: string; url: string }[]> = {
  'de-DE': [
    {
      label: 'Gesundheitsinformation.de (Institut für Qualität und Wirtschaftlichkeit im Gesundheitswesen): Fibromyalgie',
      url: 'https://www.gesundheitsinformation.de/fibromyalgie.html',
    },
  ],
  'es-ES': [
    {
      label: 'MedlinePlus en español (Biblioteca Nacional de Medicina de EE. UU.): fibromialgia',
      url: 'https://medlineplus.gov/spanish/fibromyalgia.html',
    },
  ],
  'fr-FR': [
    {
      label: 'Haute Autorité de santé (HAS), site d’accueil',
      url: 'https://www.has-sante.fr/',
    },
  ],
};

export const articleSources = [
  {
    label: 'Dysautonomia International: diagnostic delay in POTS',
    url: 'https://www.dysautonomiainternational.org/page.php?ID=184',
  },
  {
    label: 'The diagnostic journey of dysautonomia patients (PMC, 2025)',
    url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC11748159/',
  },
  {
    label: "Invalidated and 'salty': lived experiences of individuals with PoTS (PMC)",
    url: 'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC11191735/',
  },
  {
    label: 'Psychosocial aspects of the lived experience of Long COVID (PMC)',
    url: 'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC11500211/',
  },
  {
    label: 'Pacing for ME/CFS: the energy envelope method (RTHM)',
    url: 'https://www.rthm.com/resources/blogs/pacing-me-cfs',
  },
  {
    label: 'How to pace with Long COVID (RTHM)',
    url: 'https://www.rthm.com/resources/blogs/pacing-long-covid',
  },
  {
    label: 'Electrolyte supplements for POTS, EDS and MCAS (The EDS Clinic)',
    url: 'https://www.eds.clinic/articles/electrolyte-supplements-for-pots-eds-and-mcas-guide',
  },
  {
    label: 'Medical gaslighting in chronic illness (The EDS Clinic)',
    url: 'https://www.eds.clinic/articles/medical-gaslighting',
  },
  {
    label: '2015 Heart Rhythm Society expert consensus on POTS, inappropriate sinus tachycardia and vasovagal syncope (Heart Rhythm)',
    url: 'https://doi.org/10.1016/j.hrthm.2015.03.029',
  },
  {
    label: 'Why the Zebra? (The Ehlers-Danlos Society)',
    url: 'https://www.ehlers-danlos.com/why-the-zebra/',
  },
  {
    label: 'When and why adults abandon health apps (JMIR, 2024)',
    url: 'https://www.jmir.org/2024/1/e56897/',
  },
];
