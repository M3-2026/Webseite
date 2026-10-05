export type LegalSection = {
  h: string;
  p: string[];
};

export type LegalPage = {
  eyebrow: string;
  title: string;
  lead: string;
  sections: LegalSection[];
};

export const legal = {
  de: {
    imprint: {
      eyebrow: 'Rechtliches',
      title: 'Impressum',
      lead: 'Angaben gemäß § 5 DDG.',
      sections: [
        {
          h: 'Anbieter',
          p: [
            'Michél Meier\nM³ Performance\nDeutschland',
            'Eine ladungsfähige Anschrift wird auf Anfrage über die genannten Kontaktwege mitgeteilt.',
          ],
        },
        {
          h: 'Kontakt',
          p: [
            'Telefon: +49 176 99016640\nWhatsApp: +49 176 99016640\nInstagram: @michelmeiermoves\nCal.com: cal.com/michelmeier/30min',
          ],
        },
        {
          h: 'Verantwortlich für den Inhalt',
          p: ['Michél Meier, M³ Performance'],
        },
        {
          h: 'EU-Streitschlichtung',
          p: [
            'Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit: https://ec.europa.eu/consumers/odr',
            'Wir sind nicht verpflichtet und nicht bereit, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.',
          ],
        },
        {
          h: 'Haftung für Inhalte',
          p: [
            'Als Diensteanbieter sind wir gemäß § 7 Abs. 1 DDG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 DDG sind wir nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen.',
            'Eine Haftung hierfür ist erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden entsprechender Rechtsverletzungen entfernen wir diese Inhalte umgehend.',
          ],
        },
        {
          h: 'Haftung für Links',
          p: [
            'Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Für diese fremden Inhalte übernehmen wir keine Gewähr. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter verantwortlich.',
          ],
        },
      ],
    },
    privacy: {
      eyebrow: 'Rechtliches',
      title: 'Datenschutz',
      lead: 'Diese Erklärung beschreibt, welche Daten beim Besuch von m3-performance.com verarbeitet werden — und welche nicht.',
      sections: [
        {
          h: 'Verantwortlicher',
          p: [
            'Michél Meier, M³ Performance, Deutschland.\nTelefon: +49 176 99016640\nAnfragen zum Datenschutz über WhatsApp oder Telefon.',
          ],
        },
        {
          h: 'Welche Daten wir verarbeiten',
          p: [
            'Diese Website hat kein Kontaktformular, kein Newsletter-Abo und kein eigenes Nutzerkonto. Du kannst Angebote lesen, ohne uns personenbezogene Daten zu hinterlassen.',
            'Wenn du per WhatsApp, Telefon oder Instagram Kontakt aufnimmst, verarbeiten wir die Daten, die du uns dabei mitteilst — Name, Nummer, Anliegen — um das Gespräch zu führen und, falls gewünscht, eine Zusammenarbeit vorzubereiten. Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO (Anbahnung oder Erfüllung eines Vertrags) bzw. Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an einer nachvollziehbaren Kommunikation).',
          ],
        },
        {
          h: 'Hosting & Bereitstellung',
          p: [
            'Die Website wird über moderne CDN- und Server-Infrastrukturen bereitgestellt. Beim Aufruf entstehen serverseitige Protokolldaten (z. B. IP-Adresse, Zeitpunkt, aufgerufene Seite, Browser). Das ist technisch nötig, um die Seite auszuliefern und Angriffe abzuwehren. Rechtsgrundlage: Art. 6 Abs. 1 lit. f DSGVO.',
          ],
        },
        {
          h: 'Schriftarten & Lokale Einstellungen',
          p: [
            'Schriftarten werden für schnelle und datenschutzkonforme Darstellung ausgeliefert. Im Browser speichern wir lokal (localStorage) Einstellungen wie Farbschemata. Diese Werte verlassen dein Gerät nicht und sind keine Tracking-Cookies von Drittanbietern.',
          ],
        },
        {
          h: 'WhatsApp, Cal.com und externe Plattformen',
          p: [
            'Links zu WhatsApp, Instagram oder Cal.com führen zu externen Diensten. Sobald du sie öffnest, gelten deren jeweilige Datenschutzbestimmungen. Eine Übermittlung findet erst statt, wenn du den Link selbst anklickst.',
          ],
        },
        {
          h: 'Keine Analyse-Cookies',
          p: [
            'Wir setzen kein Tracking, kein Remarketing und keine Werbe-Cookies ein.',
          ],
        },
        {
          h: 'Speicherdauer & Rechte',
          p: [
            'Nachrichten, die du uns schickst, behalten wir so lange, wie es für die Anfrage oder eine laufende Betreuung nötig ist. Du hast das Recht auf Auskunft, Berichtigung, Löschung, Einschränkung der Verarbeitung, Datenübertragbarkeit und Widerspruch nach der DSGVO.',
          ],
        },
      ],
    },
  },
} as const;
