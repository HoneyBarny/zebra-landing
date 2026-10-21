import { siteConfig } from '../site-config';
import {
  alternatesForPath,
  localeRoutes,
  localizedFooterLinks,
  localizedPath,
} from './shared';
import { homePageDeDe } from './de-de';
import { homePageEsEs } from './es-es';
import { homePageFrFr } from './fr-fr';

type LocaleSlug = 'de-de' | 'es-es' | 'fr-fr';

const homeByLocale = {
  'de-de': homePageDeDe,
  'es-es': homePageEsEs,
  'fr-fr': homePageFrFr,
} as const;

const localePathBySlug = {
  'de-de': localeRoutes.deDe,
  'es-es': localeRoutes.esEs,
  'fr-fr': localeRoutes.frFr,
} as const;

function withLegalMeta<T extends { seo: { title: string; description: string } }>(
  page: T,
  locale: LocaleSlug,
  route: string,
) {
  const home = homeByLocale[locale];

  return {
    ...page,
    lang: home.locale.htmlLang,
    consentBanner: home.consentBanner,
    consentPreferencesLabel: home.footer.consentPreferencesLabel,
    seo: {
      ...page.seo,
      alternates: alternatesForPath(route),
    },
  };
}

function relatedLinks(locale: LocaleSlug, labels: { landing: string; support: string; privacy: string; terms: string }) {
  const localePath = localePathBySlug[locale];

  return [
    { href: localePath, label: labels.landing },
    { href: localizedPath(localePath, siteConfig.routes.support), label: labels.support },
    { href: localizedPath(localePath, siteConfig.routes.privacy), label: labels.privacy },
    { href: localizedPath(localePath, siteConfig.routes.terms), label: labels.terms },
  ];
}

export const phase2Pages = {
  'de-de': {
    privacy: withLegalMeta(
      {
        seo: {
          title: 'Datenschutzerklärung — Zebra',
          description: 'Datenschutzerklärung für Zebra, einen Symptomtracker für POTS, EDS und Fibromyalgie.',
        },
        backHref: localeRoutes.deDe,
        backLabel: 'Zurück zu Zebra',
        eyebrow: 'Datenschutz',
        title: 'Datenschutzerklärung',
        updated: 'Zuletzt aktualisiert: 12. September 2026',
        intro: [
          'Zebra ist ein Symptomtracker für Menschen mit POTS, EDS und Fibromyalgie. Diese Richtlinie gilt für die Zebra-App und diese Website.',
          'App und Website sind getrennt. Die App enthält Ihre Gesundheitsdaten und sendet sie nicht an uns. Die Website ist Marketing und misst nur dann, wie gut unsere Anzeigen funktionieren, wenn Sie zustimmen. Beides wird nicht verbunden: Diese Website kann nicht sehen, was Sie in der App eingeben, und die App meldet nichts an diese Website zurück.',
        ],
        sections: [
          {
            heading: 'Gesundheitsdaten in der App',
            paragraphs: [
              'Alle Gesundheitsinformationen, die Sie in Zebra eingeben, einschliesslich Check-ins, Schubprotokollen, orthostatischen Tests, Symptomen, Medikamenten sowie Salz- und Hydrationseinträgen, werden lokal auf Ihrem Gerät mit Apples SwiftData gespeichert. Je nach Apple-/iCloud-Einstellungen und aktueller App-Versión können diese Daten privat über Ihr persönliches iCloud-Konto per CloudKit synchronisiert werden. Wir erhalten, sehen oder speichern Ihre Gesundheitsdaten nicht auf unseren Servern.',
            ],
          },
          {
            heading: 'Apple Health (HealthKit)',
            paragraphs: [
              'Wenn Sie die Berechtigung erteilen, liest Zebra Herzfrequenzdaten aus Apple Health, um den orthostatischen Test zu unterstützen. Zebra schreibt keine Daten in Apple Health zurück und teilt HealthKit-Daten nicht mit Dritten. Sie können diese Berechtigung jederzeit in den iOS-Einstellungen unter Health > Datenzugriff & Geräte widerrufen.',
            ],
          },
          {
            heading: 'Benachrichtigungen',
            paragraphs: [
              'Wenn Sie tägliche Erinnerungen aktivieren, nutzt Zebra lokale Benachrichtigungen, die vollständig auf Ihrem Gerät ausgeliefert werden. Kein Benachrichtigungsinhalt verlässt Ihr Gerät. Sie können Benachrichtigungen in den iOS-Einstellungen unter Zebra verwalten oder deaktivieren.',
            ],
          },
          {
            heading: 'Arztberichte',
            paragraphs: [
              'PDF-Arztberichte werden auf Ihrem Gerät aus den von Ihnen eingegebenen Daten erstellt. Zebra lädt diese Berichte nicht hoch, überträgt sie nicht und speichert sie nicht. Sie entscheiden selbst, ob und wo Sie einen Export teilen.',
            ],
          },
          {
            heading: 'Abonnements',
            paragraphs: [
              'Zebra-Premium-Abonnements werden vollständig über Apple abgewickelt. Wir erfassen, sehen oder speichern Ihre Zahlungsinformationen nicht. Die Verwaltung des Abonnements erfolgt über Ihr Apple-ID-Konto.',
              'Um zu prüfen, ob Premium aktiv ist, nutzt die App RevenueCat, einen Abonnementdienst. RevenueCat erhält Ihre App-Store-Kauf- und Abonnementdaten, eine anonyme Kennung, die die App erstellt, sowie die technischen Informationen, die bei jeder Netzwerkanfrage anfallen, etwa Ihre IP-Adresse. RevenueCat erhält keine Gesundheitsdaten, und die App gibt weder Ihren Namen noch Ihre E-Mail-Adresse weiter.',
            ],
          },
          {
            heading: 'Kontakt über die Website',
            paragraphs: [
              'Wenn Sie uns über diese Website kontaktieren, können wir Ihre E-Mail-Adresse und freiwillig angegebene Informationen erfassen. Wir verwenden sie, um Fragen zu beantworten und angeforderten Produktsupport zu leisten. Wir verkaufen keine personenbezogenen Daten. Für Kommunikation können Dienste wie E-Mail- oder Hostinganbieter eingesetzt werden.',
            ],
          },
          {
            heading: 'Werbemessung auf der Website',
            paragraphs: [
              'Wir schalten Anzeigen auf Meta (Facebook und Instagram). Um zu sehen, ob diese Anzeigen Menschen erreichen, für die Zebra nützlich ist, kann diese Website das Meta-Pixel laden.',
              'Es lädt nur, wenn Sie im Banner auf Akzeptieren klicken. Bis dahin wird es nicht geladen und es wird keine Anfrage an Meta gesendet. Ablehnen ist eine echte Wahl: Die Website funktioniert gleich.',
              'Wenn Sie zustimmen, erhält Meta die Information, dass eine Seite dieser Website angesehen wurde und dass ein Button zum App Store geklickt wurde, einschliesslich welcher Platzierung. Meta erhält ausserdem technische Informationen, die bei jeder Webanfrage anfallen, etwa IP-Adresse und Browsertyp.',
              'Meta erhält keine Gesundheitsdaten. Diese Website hat keinen Zugriff auf Check-ins, Schübe, Symptôme, Medikamente, orthostatische Tests oder Arztberichte. Diese Daten werden nie an diese Website gesendet.',
              'App-Store-Links können Apple-Kampagnenparameter enthalten. Sie zeigen App Store Connect, aus welcher Kampagne ein Download kam. Apple liest sie beim Öffnen des App Store; sie laufen nicht als Skript im Browser.',
            ],
          },
          {
            heading: 'Einwilligung zur Werbemessung ändern',
            paragraphs: [
              'Wählen Sie Cookie-Einstellungen am Ende dieser Seite oder im Footer der Website. Dadurch wird Ihre gespeicherte Entscheidung gelöscht und das Banner erneut angezeigt. Ablehnen verhindert, dass das Pixel auf späteren Seitenaufrufen geladen wird.',
              'Ihre Auswahl wird nur im lokalen Speicher Ihres Browsers unter zebra_consent_v1 gespeichert. Wir haben keine Kopie davon. Wenn Sie Browserdaten löschen, werden Sie erneut gefragt.',
            ],
          },
          {
            heading: 'Datenaufbewahrung',
            paragraphs: [
              'Website-Kontaktinformationen speichern wir nur so lange, wie es für Kommunikation und Supportanfragen erforderlich ist. App-Gesundheitsdaten liegen auf Ihrem Gerät und können je nach Einstellungen über Ihr persönliches iCloud-Konto synchronisiert werden. Sie werden nicht von uns gespeichert.',
              'Werbemessdaten, die über das Meta-Pixel erfasst werden, werden von Meta nach deren Bedingungen gespeichert. Wir sehen sie nur als aggregierte Kampagnenberichte.',
            ],
          },
          {
            heading: 'Ihre Wahlmöglichkeiten',
            appendContactEmail: true,
            paragraphs: [
              'Um Ihre Gesundheitsdaten zu löschen, öffnen Sie in der App Ich > Daten und Privatsphäre > Daten löschen. Dadurch werden Ihre Tagesprotokolle und orthostatischen Tests entfernt, und wenn die iCloud-Synchronisierung aktiv ist, wird die Löschung auch in Ihrem iCloud-Konto wirksam. Die App nur zu entfernen reicht nicht, wenn Sie iCloud nutzen: Die synchronisierte Kopie bleibt in Ihrem iCloud-Konto und kehrt zurück, wenn Sie Zebra erneut installieren.',
              'Sie können Werbemessung auf dieser Website jederzeit über Cookie-Einstellungen akzeptieren oder ablehnen. Wenn Sie die Entfernung von Website-Kontaktinformationen wünschen, schreiben Sie uns an',
            ],
          },
          {
            heading: 'Medizinische Informationen',
            paragraphs: [
              'Zebra ist kein medizinischer Anbieter. Nichts in dieser App oder auf dieser Website stellt medizinische Beratung, Diagnose oder Behandlung dar. Wenden Sie sich für medizinische Entscheidungen immer an qualifiziertes medizinisches Fachpersonal.',
            ],
          },
        ],
        relatedLinks: relatedLinks('de-de', {
          landing: 'Landingpage',
          support: 'Support',
          privacy: 'Datenschutz',
          terms: 'Nutzungsbedingungen',
        }),
        relatedLinksLabel: 'Datenschutzlinks',
        contactEmail: siteConfig.support.email,
      },
      'de-de',
      '/privacy/',
    ),
    terms: withLegalMeta(
      {
        seo: {
          title: 'Nutzungsbedingungen — Zebra',
          description: 'Nutzungsbedingungen für Zebra, einen Symptomtracker für POTS, EDS und Fibromyalgie.',
        },
        backHref: localeRoutes.deDe,
        backLabel: 'Zurück zu Zebra',
        eyebrow: 'Bedingungen',
        title: 'Nutzungsbedingungen',
        updated: 'Zuletzt aktualisiert: 18. Mai 2026',
        intro: [
          'Durch das Herunterladen oder Verwenden der Zebra-App oder dieser Website stimmen Sie diesen Bedingungen zu. Wenn Sie nicht zustimmen, verwenden Sie Zebra bitte nicht.',
        ],
        sections: [
          {
            heading: 'Zweck der App',
            paragraphs: [
              'Zebra ist ein persönliches Symptomtracking-Tool für Menschen mit POTS, EDS und Fibromyalgie. Es hilft Ihnen, eigene Gesundheitsinformationen zu erfassen, zu prüfen und Zusammenfassungen für Gesundheitsdienstleister zu erstellen.',
            ],
          },
          {
            heading: 'Medizinischer Hinweis',
            paragraphs: [
              'Zebra bietet keine medizinische Beratung, Diagnose oder Behandlung. Nichts in der App oder auf dieser Website ersetzt den Rat qualifizierter medizinischer Fachpersonen. Holen Sie medizinische Beratung ein, bevor Sie medizinische Entscheidungen treffen. Bei einem medizinischen Notfall kontaktieren Sie sofort den Notdienst.',
            ],
          },
          {
            heading: 'Abonnements',
            paragraphs: [
              'Zebra bietet automatisch verlängerbare Abonnements unter dem Namen Zebra Premium an.',
              'Preise sind in USD angegeben und können je nach Region durch Apple variieren. Der App-Paywall kann für berechtigte neue Abonnenten eine 7-tägige kostenlose Testphase enthalten; prüfen Sie vor dem Abonnieren immer das aktuelle Apple-Kaufformular. Nach der Testphase wird die Zahlung über Ihr Apple-ID-Konto abgerechnet. Abonnements verlängern sich automatisch, sofern sie nicht mindestens 24 Stunden vor Ende des aktuellen Abrechnungszeitraums gekündigt werden. Sie können Ihr Abonnement jederzeit in den iOS-Einstellungen unter Apple-ID > Abonnements verwalten oder kündigen.',
            ],
            listItems: ['Monatlich — 4,99 USD pro Monat', 'Jährlich — 39,99 USD pro Jahr'],
          },
          {
            heading: 'Kostenlose Versión',
            paragraphs: [
              'Die kostenlose Versión umfasst alle Tracking-Funktionen und 30 Tage Verlauf. Für die kostenlose Versión sind keine Zahlungsinformationen erforderlich.',
            ],
          },
          {
            heading: 'Zulässige Nutzung',
            paragraphs: [
              'Sie verpflichten sich, App oder Website nicht zu missbrauchen, ihren Betrieb nicht zu stören und keine falschen oder schädlichen Informationen einzureichen.',
            ],
          },
          {
            heading: 'Geistiges Eigentum',
            paragraphs: [
              'Sofern nicht anders angegeben, gehören Inhalte, Branding, Design und Materialien in der App und auf dieser Website Zebra und dürfen ohne Erlaubnis nicht kopiert oder weiterverbreitet werden.',
            ],
          },
          {
            heading: 'Drittanbieterdienste',
            paragraphs: [
              'Die App nutzt Apple-Dienste wie CloudKit, HealthKit, StoreKit und lokale Benachrichtigungen. Ihre Nutzung dieser Dienste unterliegt auch Apples Bedingungen und Richtlinien.',
            ],
          },
          {
            heading: 'Kontakt',
            appendContactEmail: true,
            paragraphs: ['Wenn Sie Fragen zu diesen Bedingungen haben, kontaktieren Sie uns unter'],
          },
        ],
        relatedLinks: relatedLinks('de-de', {
          landing: 'Landingpage',
          support: 'Support',
          privacy: 'Datenschutz',
          terms: 'Nutzungsbedingungen',
        }),
        relatedLinksLabel: 'Links zu Bedingungen',
        contactEmail: siteConfig.support.email,
      },
      'de-de',
      '/terms/',
    ),
    support: {
      ...homePageDeDe,
      seo: {
        title: 'Support — Zebra',
        description: 'Support für Zebra, den Symptomtracker für POTS, EDS und Fibromyalgie.',
        alternates: alternatesForPath('/support/'),
      },
      lang: homePageDeDe.locale.htmlLang,
      backHref: localeRoutes.deDe,
      backLabel: 'Zurück zu Zebra',
      eyebrow: 'Support',
      title: 'Zebra Support',
      intro: 'Brauchen Sie Hilfe mit Zebra, dem Arztbericht oder Ihrem Abonnement? Hier sind die schnellsten Wege, um weiterzukommen.',
      columns: {
        primary: [
          {
            heading: 'So bekommen Sie Hilfe',
            listItems: [
              'Schreiben Sie uns für Produkthilfe mit einer kurzen Beschreibung des Problems.',
              'Für Abrechnung oder Abonnementverwaltung verwenden Sie die App-Store-Abonnementeinstellungen auf Ihrem iPhone.',
              'Bei Fragen zum Arztbericht beschreiben Sie, was Sie exportieren wollten und was direkt davor passiert ist.',
            ],
          },
          {
            heading: 'Was Zebra nicht macht',
            paragraphs: [
              'Zebra ist kein medizinischer Anbieter, kein Diagnosetool und kein Notfalldienst. Zebra hilft beim Erfassen und Ordnen von Informationen für Facharzttermine und bietet keine medizinische Beratung.',
            ],
          },
        ],
        secondary: [
          {
            kind: 'contact-list',
            heading: 'Kontakt',
            links: [
              { href: `mailto:${siteConfig.support.email}`, label: siteConfig.support.email },
              { href: siteConfig.appStore.url, label: 'App-Store-Eintrag', external: true },
            ],
          },
          {
            kind: 'link-nav',
            heading: 'Verwandte Seiten',
            ariaLabel: 'Support-Links',
            links: [
              { href: localizedPath(localeRoutes.deDe, siteConfig.routes.privacy), label: 'Datenschutz' },
              { href: localizedPath(localeRoutes.deDe, siteConfig.routes.terms), label: 'Nutzungsbedingungen' },
              { href: localeRoutes.deDe, label: 'Landingpage' },
            ],
          },
        ],
      },
      consentLabel: 'Einwilligung',
      consentPreferencesLabel: homePageDeDe.footer.consentPreferencesLabel,
      consentBanner: homePageDeDe.consentBanner,
    },
  },
  'es-es': {
    privacy: withLegalMeta(
      {
        seo: {
          title: 'Política de privacidad — Zebra',
          description: 'Política de privacidad de Zebra, una app para registrar síntomas de POTS, EDS y fibromialgia.',
        },
        backHref: localeRoutes.esEs,
        backLabel: 'Volver a Zebra',
        eyebrow: 'Privacidad',
        title: 'Política de privacidad',
        updated: 'Última actualización: 12 de septiembre de 2026',
        intro: [
          'Zebra es una app para registrar síntomas de personas con POTS, EDS y fibromialgia. Esta política cubre tanto la app Zebra como esta web.',
          'La app y la web estan separadas. La app contiene tus datos de salud y no nos los envia. La web es marketing y, solo si aceptas, mide si nuestros anuncios funcionan. Nada conecta ambas partes: esta web no puede ver lo que introduces en la app, y la app no informa a esta web.',
        ],
        sections: [
          { heading: 'Datos de salud en la app', paragraphs: ['Toda la información de salud que introduces en Zebra, incluidos check-ins, brotes, tests ortostáticos, síntomas, medicación y entradas de sal e hidratación, se guarda localmente en tu dispositivo usando SwiftData de Apple. Según los ajustes de Apple/iCloud y la versión actual de la app, estos datos pueden sincronizarse de forma privada mediante tu cuenta personal de iCloud con CloudKit. Nosotros no recibimos, vemos ni almacenamos tus datos de salud en nuestros servidores.'] },
          { heading: 'Apple Health (HealthKit)', paragraphs: ['Si das permiso, Zebra lee datos de frecuencia cardíaca de Apple Health para apoyar el flujo del test ortostático. Zebra no escribe datos en Apple Health y no comparte datos de HealthKit con terceros. Puedes retirar este permiso en cualquier momento en Ajustes de iOS > Salud > Acceso a datos y dispositivos.'] },
          { heading: 'Notificaciones', paragraphs: ['Si activas recordatorios diarios, Zebra usa notificaciones locales entregadas completamente en tu dispositivo. Ningun contenido de notificacion sale de tu dispositivo. Puedes gestionar o desactivar notificaciones en Ajustes de iOS > Zebra.'] },
          { heading: 'Informes medicos', paragraphs: ['Los informes PDF se generan en tu dispositivo a partir de los datos que has introducido. Zebra no sube, transmite ni almacena estos informes. Tu decides si compartes cualquier exportacion y dónde.'] },
          { heading: 'Suscripciones', paragraphs: ['Las suscripciones a Zebra Premium se procesan completamente a traves de Apple. No recopilamos, vemos ni almacenamos tu información de pago. La gestion de la suscripción se hace mediante tu cuenta de Apple ID.', 'Para comprobar si Premium esta activo, la app usa RevenueCat, un servicio de suscripciones. RevenueCat recibe tus registros de compra y suscripción del App Store, un identificador anonimo que crea la app y la información tecnica que lleva cualquier solicitud de red, como tu direccion IP. No recibe tus datos de salud, y la app no le da tu nombre ni tu correo electronico.'] },
          { heading: 'Contacto por la web', paragraphs: ['Si contactas con nosotros mediante esta web, podemos recopilar tu correo electronico y la información que incluyas voluntariamente. La usamos para responder preguntas y dar soporte de producto cuando lo solicitas. No vendemos datos personales. Podemos usar servicios de terceros, como email u hosting, para gestionar comunicaciones.'] },
          { heading: 'Medicion publicitaria en la web', paragraphs: ['Publicamos anuncios en Meta (Facebook e Instagram). Para ver si esos anuncios llegan a personas a las que Zebra puede resultar útil, esta web puede cargar el pixel de Meta.', 'Solo se carga si pulsas Aceptar en el banner. Hasta entonces, no se carga y no se envia ninguna solicitud a Meta. Rechazar es una opción real: el sitio funciona igual.', 'Si aceptas, Meta recibe que viste una página de esta web y que pulsaste un boton para abrir Zebra en el App Store, incluida la ubicacion del boton. También recibe información tecnica habitual de cualquier solicitud web, como IP y tipo de navegador.', 'Meta no recibe nada sobre tu salud. Esta web no tiene acceso a check-ins, brotes, síntomas, medicación, tests ortostáticos ni informes medicos. Esa información nunca se envia a esta web.', 'Los enlaces al App Store también pueden incluir parametros de campana de Apple. App Store Connect los lee cuando se abre el App Store; no ejecutan scripts en tu navegador.'] },
          { heading: 'Cambiar tu décision sobre medicion publicitaria', paragraphs: ['Selecciona Preferencias de cookies al final de esta página o en el pie de la web. Eso borra tu décision guardada y muestra el banner otra vez para elegir de nuevo. Rechazar evita que el pixel cargue en visitas posteriores.', 'Tu eleccion se guarda solo en el almacenamiento local de tu navegador con la clave zebra_consent_v1. No tenemos copia de ella. Si borras los datos del navegador, volveremos a preguntarte.'] },
          { heading: 'Retencion de datos', paragraphs: ['Conservamos información de contacto de la web solo durante el tiempo necesario para comunicarnos y responder solicitudes de soporte. Los datos de salud de la app se guardan en tu dispositivo y pueden sincronizarse mediante tu iCloud personal según tus ajustes. No los conservamos nosotros.', 'Los datos de medicion publicitaria recogidos por el pixel de Meta los conserva Meta según sus propios terminos. Nosotros solo los vemos como informes agregados de campana.'] },
          { heading: 'Tus opciones', appendContactEmail: true, paragraphs: ['Para borrar tus datos de salud, abre en la app Yo > Datos y privacidad > Eliminar datos. Así se eliminan tus registros diarios y tests ortostáticos, y si la sincronizacion con iCloud esta activa, el borrado también se aplica en tu cuenta de iCloud. Eliminar solo la app no basta si usas iCloud: la copia sincronizada sigue en tu cuenta de iCloud y vuelve si reinstalas Zebra.', 'Puedes aceptar o rechazar la medicion publicitaria de esta web en cualquier momento mediante Preferencias de cookies. Para solicitar la eliminacion de información de contacto de la web, escribenos a'] },
          { heading: 'Información médica', paragraphs: ['Zebra no es un proveedor médico. Nada en la app o en esta web constituye consejo médico, diagnóstico o tratamiento. Consulta siempre con un profesional sanitario cualificado para decisiones médicas.'] },
        ],
        relatedLinks: relatedLinks('es-es', { landing: 'Landing', support: 'Soporte', privacy: 'Privacidad', terms: 'Terminos' }),
        relatedLinksLabel: 'Enlaces de privacidad',
        contactEmail: siteConfig.support.email,
      },
      'es-es',
      '/privacy/',
    ),
    terms: withLegalMeta(
      {
        seo: { title: 'Terminos de uso — Zebra', description: 'Terminos de uso de Zebra, una app para registrar síntomas de POTS, EDS y fibromialgia.' },
        backHref: localeRoutes.esEs,
        backLabel: 'Volver a Zebra',
        eyebrow: 'Terminos',
        title: 'Terminos de uso',
        updated: 'Última actualización: 18 de mayo de 2026',
        intro: ['Al descargar o usar la app Zebra o esta web, aceptas estos terminos. Si no los aceptas, no uses Zebra.'],
        sections: [
          { heading: 'Finalidad de la app', paragraphs: ['Zebra es una herramienta personal de registro de síntomas para personas con POTS, EDS y fibromialgia. Esta disenada para ayudarte a registrar y revisar tu propia información de salud y generar resumenes para compartir con profesionales sanitarios.'] },
          { heading: 'Aviso médico', paragraphs: ['Zebra no proporciona consejo médico, diagnóstico ni tratamiento. Nada en la app o en esta web sustituye el consejo de un profesional sanitario cualificado. Busca orientacion médica antes de tomar decisiones médicas. Si tienes una emergencia médica, contacta inmediatamente con los servicios de emergencia.'] },
          { heading: 'Suscripciones', paragraphs: ['Zebra ofrece suscripciones autorrenovables bajo el nombre Zebra Premium.', 'Los precios estan en USD y pueden variar por region según Apple. La pantalla de pago de la app puede incluir una prueba gratuita de 7 días para nuevos suscriptores aptos; confirma siempre la hoja de compra actual de Apple antes de suscribirte. Después de la prueba, el pago se carga a tu cuenta de Apple ID. Las suscripciones se renuevan automaticamente salvo que se cancelen al menos 24 horas antes del final del periodo actual. Puedes gestionar o cancelar la suscripción en Ajustes de iOS > Apple ID > Suscripciones.'], listItems: ['Mensual — 4,99 USD al mes', 'Anual — 39,99 USD al ano'] },
          { heading: 'Versión gratuita', paragraphs: ['La versión gratuita incluye todas las funciones de registro y 30 días de historial. No se requiere información de pago para usarla.'] },
          { heading: 'Uso aceptable', paragraphs: ['Aceptas no hacer un uso indebido de la app o la web, no interferir con su funcionamiento y no enviar información falsa o danina.'] },
          { heading: 'Propiedad intelectual', paragraphs: ['Salvo que se indique lo contrario, el contenido, marca, diseño y materiales de la app y de esta web pertenecen a Zebra y no pueden copiarse ni redistribuirse sin permiso.'] },
          { heading: 'Servicios de terceros', paragraphs: ['La app usa servicios de Apple, incluidos CloudKit, HealthKit, StoreKit y notificaciones locales. Tu uso de esos servicios también esta sujeto a los terminos y politicas de Apple.'] },
          { heading: 'Contacto', appendContactEmail: true, paragraphs: ['Si tienes preguntas sobre estos terminos, contacta con nosotros en'] },
        ],
        relatedLinks: relatedLinks('es-es', { landing: 'Landing', support: 'Soporte', privacy: 'Privacidad', terms: 'Terminos' }),
        relatedLinksLabel: 'Enlaces de terminos',
        contactEmail: siteConfig.support.email,
      },
      'es-es',
      '/terms/',
    ),
    support: {
      seo: { title: 'Soporte — Zebra', description: 'Soporte para Zebra, la app de registro de síntomas para POTS, EDS y fibromialgia.', alternates: alternatesForPath('/support/') },
      lang: homePageEsEs.locale.htmlLang,
      backHref: localeRoutes.esEs,
      backLabel: 'Volver a Zebra',
      eyebrow: 'Soporte',
      title: 'Soporte de Zebra',
      intro: 'Necesitas ayuda con Zebra, el informe médico o tu suscripción? Esta página resume las formas más rapidas de desbloquearte.',
      columns: {
        primary: [
          { heading: 'Cómo obtener ayuda', listItems: ['Para ayuda de producto, escribenos con una descripcion breve de lo ocurrido.', 'Para facturacion o suscripciones, usa los ajustes de suscripciones del App Store en tu iPhone.', 'Para preguntas sobre el informe médico, incluye qué intentabas exportar y qué pasó justo antes del problema.'] },
          { heading: 'Lo que Zebra no hace', paragraphs: ['Zebra no es un proveedor médico, una herramienta diagnóstica ni un servicio de emergencia. Te ayuda a registrar y organizar información para citas con especialistas. No ofrece consejo médico.'] },
        ],
        secondary: [
          { kind: 'contact-list', heading: 'Contacto', links: [{ href: `mailto:${siteConfig.support.email}`, label: siteConfig.support.email }, { href: siteConfig.appStore.url, label: 'Ficha del App Store', external: true }] },
          { kind: 'link-nav', heading: 'Paginas relacionadas', ariaLabel: 'Enlaces de soporte', links: [{ href: localizedPath(localeRoutes.esEs, siteConfig.routes.privacy), label: 'Privacidad' }, { href: localizedPath(localeRoutes.esEs, siteConfig.routes.terms), label: 'Terminos' }, { href: localeRoutes.esEs, label: 'Landing' }] },
        ],
      },
      consentLabel: 'Consentimiento',
      consentPreferencesLabel: homePageEsEs.footer.consentPreferencesLabel,
      consentBanner: homePageEsEs.consentBanner,
    },
  },
  'fr-fr': {
    privacy: withLegalMeta(
      {
        seo: { title: 'Politique de confidentialite — Zebra', description: 'Politique de confidentialite de Zebra, une app de suivi des symptômes pour POTS, SED et fibromyalgie.' },
        backHref: localeRoutes.frFr,
        backLabel: 'Retour a Zebra',
        eyebrow: 'Confidentialite',
        title: 'Politique de confidentialite',
        updated: 'Derniere mise a jour : 12 septembre 2026',
        intro: ['Zebra est une app de suivi des symptômes pour les personnes avec POTS, SED et fibromyalgie. Cette politique couvre l app Zebra et ce site web.', 'L app et le site sont separes. L app contient vos donnees de sante et ne nous les envoie pas. Le site sert au marketing et mesure l efficacite de nos publicites seulement si vous l acceptez. Rien ne relie les deux : ce site ne peut pas voir ce que vous saisissez dans l app, et l app ne renvoie rien a ce site.'],
        sections: [
          { heading: 'Donnees de sante dans l app', paragraphs: ['Toutes les informations de sante saisies dans Zebra, y compris check-ins, poussees, tests orthostatiques, symptômes, médicaments, sel et hydratation, sont stockees localement sur votre appareil avec SwiftData d Apple. Selon vos reglages Apple/iCloud et la versión actuelle de l app, ces donnees peuvent se synchroniser de maniere privee via votre compte iCloud personnel avec CloudKit. Nous ne recevons, consultons ni stockons vos donnees de sante sur nos serveurs.'] },
          { heading: 'Apple Health (HealthKit)', paragraphs: ['Si vous l autorisez, Zebra lit la fréquence cardiaque depuis Apple Health pour soutenir le test orthostatique. Zebra n écrit pas dans Apple Health et ne partage pas les donnees HealthKit avec des tiers. Vous pouvez retirer cette autorisation a tout moment dans Reglages iOS > Sante > Acces aux donnees et appareils.'] },
          { heading: 'Notifications', paragraphs: ['Si vous activez les rappels quotidiens, Zebra utilise des notifications locales delivrees entierement sur votre appareil. Aucun contenu de notification ne quitte votre appareil. Vous pouvez les gérer ou les desactiver dans Reglages iOS > Zebra.'] },
          { heading: 'Rapports médicaux', paragraphs: ['Les rapports PDF sont generes sur votre appareil a partir des donnees que vous avez saisies. Zebra ne les televerse pas, ne les transmet pas et ne les stocke pas. Vous choisissez si et ou partager un export.'] },
          { heading: 'Abonnements', paragraphs: ['Les abonnements Zebra Premium sont traites entierement par Apple. Nous ne collectons, ne voyons ni ne stockons vos informations de paiement. La gestion de l abonnement se fait via votre compte Apple ID.', 'Pour verifier si Premium est actif, l app utilise RevenueCat, un service d abonnements. RevenueCat recoit vos historiques d achat et d abonnement App Store, un identifiant anonyme cree par l app et les informations techniques transmises par toute requete reseau, comme votre adresse IP. Il ne recoit pas vos donnees de sante, et l app ne lui communique ni votre nom ni votre adresse e-mail.'] },
          { heading: 'Contact via le site', paragraphs: ['Si vous nous contactez via ce site, nous pouvons collecter votre adresse e-mail et les informations que vous indiquez volontairement. Nous les utilisons pour répondre aux questions et fournir le support demande. Nous ne vendons pas vos donnees personnelles. Nous pouvons utiliser des services tiers, comme l e-mail ou l hebergement, pour gérer les communications.'] },
          { heading: 'Mesure publicitaire sur le site', paragraphs: ['Nous diffusons des publicites sur Meta (Facebook et Instagram). Pour savoir si ces publicites atteignent les bonnes personnes, ce site peut charger le pixel Meta.', 'Il ne se charge que si vous cliquez sur Accepter dans le bandeau. Avant cela, il n est pas charge et aucune requete n est envoyee a Meta. Refuser est un vrai choix : le site fonctionne de la meme maniere.', 'Si vous acceptez, Meta recoit l information qu une page de ce site a été vue et qu un bouton vers l App Store a été clique, y compris son emplacement. Meta recoit aussi les informations techniques habituelles d une requete web, comme l adresse IP et le type de navigateur.', 'Meta ne recoit aucune donnee de sante. Ce site n a pas acces aux check-ins, poussees, symptômes, médicaments, tests orthostatiques ou rapports médicaux. Ces donnees ne sont jamais envoyees a ce site.', 'Les liens App Store peuvent aussi contenir des parametres de campagne Apple. App Store Connect les lit quand l App Store s ouvre; ils n executent pas de script dans votre navigateur.'] },
          { heading: 'Changer votre choix sur la mesure publicitaire', paragraphs: ['Selectionnez Preferences de cookies en bas de cette page ou dans le pied de page du site. Cela efface votre choix enregistre et affiche de nouveau le bandeau. Refuser empeche le pixel de se charger lors des visites suivantes.', 'Votre choix est conserve uniquement dans le stockage local de votre navigateur sous zebra_consent_v1. Nous n en avons pas de copie. Si vous effacez les donnees du navigateur, le choix vous sera redemande.'] },
          { heading: 'Conservation des donnees', paragraphs: ['Nous conservons les informations de contact du site uniquement le temps nécessaire pour communiquer et répondre aux demandes de support. Les donnees de sante de l app restent sur votre appareil et peuvent se synchroniser via votre iCloud personnel selon vos reglages. Elles ne sont pas conservees par nous.', 'Les donnees de mesure publicitaire collectees par le pixel Meta sont conservees par Meta selon ses propres conditions. Nous les voyons seulement sous forme de rapports agreges de campagne.'] },
          { heading: 'Vos choix', appendContactEmail: true, paragraphs: ['Pour supprimer vos donnees de sante, ouvrez dans l app Moi > Donnees et confidentialite > Supprimer les donnees. Cela efface vos suivis quotidiens et vos tests orthostatiques, et si la synchronisation iCloud est active, la suppression s applique aussi a votre compte iCloud. Supprimer seulement l app ne suffit pas si vous utilisez iCloud : la copie synchronisee reste dans votre compte iCloud et revient si vous reinstallez Zebra.', 'Vous pouvez accepter ou refuser la mesure publicitaire sur ce site a tout moment via Preferences de cookies. Pour demander la suppression d informations de contact du site, ecrivez-nous a'] },
          { heading: 'Information médicale', paragraphs: ['Zebra n est pas un prestataire médical. Rien dans l app ou sur ce site ne constitue un avis médical, un diagnostic ou un traitement. Consultez toujours un professionnel de sante qualifie pour les décisions medicales.'] },
        ],
        relatedLinks: relatedLinks('fr-fr', { landing: 'Landing page', support: 'Support', privacy: 'Confidentialite', terms: 'Conditions' }),
        relatedLinksLabel: 'Liens de confidentialite',
        contactEmail: siteConfig.support.email,
      },
      'fr-fr',
      '/privacy/',
    ),
    terms: withLegalMeta(
      {
        seo: { title: 'Conditions d utilisation — Zebra', description: 'Conditions d utilisation de Zebra, une app de suivi des symptômes pour POTS, SED et fibromyalgie.' },
        backHref: localeRoutes.frFr,
        backLabel: 'Retour a Zebra',
        eyebrow: 'Conditions',
        title: 'Conditions d utilisation',
        updated: 'Derniere mise a jour : 18 mai 2026',
        intro: ['En telechargeant ou en utilisant l app Zebra ou ce site, vous acceptez ces conditions. Si vous ne les acceptez pas, veuillez ne pas utiliser Zebra.'],
        sections: [
          { heading: 'Objet de l app', paragraphs: ['Zebra est un outil personnel de suivi des symptômes pour les personnes avec POTS, SED et fibromyalgie. Il aide a enregistrer et relire vos propres informations de sante et a générer des resumes a partager avec vos soignants.'] },
          { heading: 'Avertissement médical', paragraphs: ['Zebra ne fournit pas d avis médical, de diagnostic ou de traitement. Rien dans l app ou sur ce site ne remplace l avis d un professionnel de sante qualifie. Demandez conseil a un clinicien avant toute décision médicale. En cas d urgence médicale, contactez immediatement les services d urgence.'] },
          { heading: 'Abonnements', paragraphs: ['Zebra propose des abonnements renouvelables automatiquement sous le nom Zebra Premium.', 'Les prix sont en USD et peuvent varier selon la region comme determine par Apple. L écran d achat de l app peut inclure un essai gratuit de 7 jours pour les nouveaux abonnes eligibles; verifiez toujours la feuille d achat Apple actuelle avant de vous abonner. Après l essai, le paiement est facture via votre compte Apple ID. Les abonnements se renouvellent automatiquement sauf annulation au moins 24 heures avant la fin de la periode en cours. Vous pouvez gérer ou annuler l abonnement dans Reglages iOS > Apple ID > Abonnements.'], listItems: ['Mensuel — 4,99 USD par mois', 'Annuel — 39,99 USD par an'] },
          { heading: 'Versión gratuite', paragraphs: ['La versión gratuite inclut toutes les fonctions de suivi et 30 jours d historique. Aucune information de paiement n est requise pour l utiliser.'] },
          { heading: 'Utilisation acceptable', paragraphs: ['Vous acceptez de ne pas utiliser l app ou le site de facon abusive, de ne pas perturber leur fonctionnement et de ne pas soumettre d informations fausses ou nuisibles.'] },
          { heading: 'Propriete intellectuelle', paragraphs: ['Sauf indication contraire, le contenu, la marque, le design et les materiaux de l app et du site appartiennent a Zebra et ne peuvent pas être copies ou redistribues sans autorisation.'] },
          { heading: 'Services tiers', paragraphs: ['L app utilise des services Apple, notamment CloudKit, HealthKit, StoreKit et les notifications locales. Votre utilisation de ces services est egalement soumise aux conditions et politiques d Apple.'] },
          { heading: 'Contact', appendContactEmail: true, paragraphs: ['Pour toute question sur ces conditions, contactez-nous a'] },
        ],
        relatedLinks: relatedLinks('fr-fr', { landing: 'Landing page', support: 'Support', privacy: 'Confidentialite', terms: 'Conditions' }),
        relatedLinksLabel: 'Liens des conditions',
        contactEmail: siteConfig.support.email,
      },
      'fr-fr',
      '/terms/',
    ),
    support: {
      seo: { title: 'Support — Zebra', description: 'Support pour Zebra, l app de suivi des symptômes pour POTS, SED et fibromyalgie.', alternates: alternatesForPath('/support/') },
      lang: homePageFrFr.locale.htmlLang,
      backHref: localeRoutes.frFr,
      backLabel: 'Retour a Zebra',
      eyebrow: 'Support',
      title: 'Support Zebra',
      intro: 'Besoin d aide avec Zebra, le rapport médical ou votre abonnement ? Cette page rassemble les moyens les plus rapides de debloquer la situation.',
      columns: {
        primary: [
          { heading: 'Comment obtenir de l aide', listItems: ['Pour l aide produit, envoyez-nous une breve description de ce qui s est passe.', 'Pour la facturation ou l abonnement, utilisez les reglages d abonnements App Store sur votre iPhone.', 'Pour les questions de rapport médical, indiquez ce que vous vouliez exporter et ce qui s est passe juste avant le problème.'] },
          { heading: 'Ce que Zebra ne fait pas', paragraphs: ['Zebra n est pas un prestataire médical, un outil de diagnostic ou un service d urgence. L app aide a suivre et organiser des informations pour les rendez-vous specialises. Elle ne fournit pas d avis médical.'] },
        ],
        secondary: [
          { kind: 'contact-list', heading: 'Contact', links: [{ href: `mailto:${siteConfig.support.email}`, label: siteConfig.support.email }, { href: siteConfig.appStore.url, label: 'Fiche App Store', external: true }] },
          { kind: 'link-nav', heading: 'Pages liees', ariaLabel: 'Liens de support', links: [{ href: localizedPath(localeRoutes.frFr, siteConfig.routes.privacy), label: 'Confidentialite' }, { href: localizedPath(localeRoutes.frFr, siteConfig.routes.terms), label: 'Conditions' }, { href: localeRoutes.frFr, label: 'Landing page' }] },
        ],
      },
      consentLabel: 'Consentement',
      consentPreferencesLabel: homePageFrFr.footer.consentPreferencesLabel,
      consentBanner: homePageFrFr.consentBanner,
    },
  },
} as const;

export const localizedHubCopy = {
  'de-de': {
    home: homePageDeDe,
    blog: {
      title: 'Zebra Ratgeber — Symptomtracking, POTS und Terminvorbereitung',
      description: 'Zebra-Ratgeber zu Symptomtracking, Arztberichten, Facharztterminen, POTS, Dysautonomie und niedriger Energie.',
      eyebrow: 'Wissensbereich',
      heading: 'Ratgeber, die verstreute Symptôme zu einer klareren Geschichte machen.',
      intro: 'Der Zebra-Blog dreht sich um Symptomtracking, Facharzttermine, orthostatische Symptôme und den Ablauf zum arztbereiten Bericht.',
      filtersLabel: 'Kategorien',
      knowledgeLabel: 'Wissensbereich',
      featuredEyebrow: 'Ausgewählter Artikel',
      latestEyebrow: 'Neueste Artikel',
      latestTitle: 'Die Sprint-1-Bibliothek',
      readGuide: 'Guide lesen',
      minRead: 'Min. Lesezeit',
      breadcrumbs: { home: 'Startseite', blog: 'Ratgeber' },
    },
    knowledge: {
      title: 'Zebra Wissensbereich — Begriffe, Definitionen und Ratgeber',
      description: 'Durchsuchen Sie Zebras Wissensbereich für verbundene Definitionen, Symptomtracking-Konzepte und Artikelcluster rund um Terminvorbereitung.',
      eyebrow: 'Wissensbereich',
      heading: 'Verbundene Definitionen statt isolierter Seiten.',
      intro: 'Diese Begriffseiten verbinden Zebra-Artikel zu einer verständlichen Karte für Menschen, Suchmaschinen und KI-Systeme.',
      conditionHubsLabel: 'Erkrankungs-Hubs',
      relatedArticles: 'verwandte Artikel',
      breadcrumbs: { home: 'Startseite', knowledge: 'Wissensbereich' },
    },
  },
  'es-es': {
    home: homePageEsEs,
    blog: {
      title: 'Guías de Zebra — registro de síntomas, POTS y preparación de citas',
      description: 'Lee guías de Zebra sobre registro de síntomas, informes medicos, citas con especialistas, POTS, disautonomía y flujos de baja energía.',
      eyebrow: 'Hub de conocimiento',
      heading: 'Articulos que convierten síntomas dispersos en una historia más clara.',
      intro: 'El blog de Zebra esta construido alrededor del registro de síntomas, citas con especialistas, síntomas ortostáticos y el flujo del informe médico.',
      filtersLabel: 'Categorias',
      knowledgeLabel: 'Hub de conocimiento',
      featuredEyebrow: 'Articulo destacado',
      latestEyebrow: 'Últimos articulos',
      latestTitle: 'La biblioteca Sprint 1',
      readGuide: 'Leer la guia',
      minRead: 'min de lectura',
      breadcrumbs: { home: 'Inicio', blog: 'Guías' },
    },
    knowledge: {
      title: 'Hub de conocimiento de Zebra — conceptos, definiciones y guías',
      description: 'Explora el hub de conocimiento de Zebra para definiciones conectadas, conceptos de registro de síntomas y preparación de citas.',
      eyebrow: 'Hub de conocimiento',
      heading: 'Definiciones conectadas, no paginas aisladas.',
      intro: 'Estas paginas conectan los articulos de Zebra en un mapa comprensible para personas, buscadores y sistemas de IA.',
      conditionHubsLabel: 'Hubs de condiciones',
      relatedArticles: 'articulos relacionados',
      breadcrumbs: { home: 'Inicio', knowledge: 'Hub de conocimiento' },
    },
  },
  'fr-fr': {
    home: homePageFrFr,
    blog: {
      title: 'Guides Zebra — suivi des symptômes, POTS et préparation de rendez-vous',
      description: 'Lisez les guides Zebra sur le suivi des symptômes, les rapports médicaux, les rendez-vous specialises, le POTS et les workflows a faible energie.',
      eyebrow: 'Hub de connaissances',
      heading: 'Des articles qui transforment des symptômes eparpilles en histoire plus claire.',
      intro: 'Le blog Zebra est construit autour du suivi des symptômes, des rendez-vous specialises, des symptômes orthostatiques et du rapport pour le médecin.',
      filtersLabel: 'Catégories',
      knowledgeLabel: 'Hub de connaissances',
      featuredEyebrow: 'Article a la une',
      latestEyebrow: 'Derniers articles',
      latestTitle: 'La bibliotheque Sprint 1',
      readGuide: 'Lire le guide',
      minRead: 'min de lecture',
      breadcrumbs: { home: 'Accueil', blog: 'Guides' },
    },
    knowledge: {
      title: 'Hub de connaissances Zebra — notions, definitions et guides',
      description: 'Parcourez le hub de connaissances Zebra pour les definitions connectees, le suivi des symptômes et la préparation de rendez-vous.',
      eyebrow: 'Hub de connaissances',
      heading: 'Des definitions connectees, pas des pages isolees.',
      intro: 'Ces pages relient les articles Zebra dans une carte comprehensible pour les personnes, les moteurs de recherche et les systèmes IA.',
      conditionHubsLabel: 'Hubs de conditions',
      relatedArticles: 'articles lies',
      breadcrumbs: { home: 'Accueil', knowledge: 'Hub de connaissances' },
    },
  },
} as const;

export function getPhase2Page(locale: string, page: string) {
  return phase2Pages[locale as LocaleSlug]?.[page as 'privacy' | 'terms' | 'support'];
}

export function getLocalizedHubCopy(locale: string) {
  return localizedHubCopy[locale as LocaleSlug];
}
