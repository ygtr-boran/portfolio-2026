export default function Impressum({ setPage }) {
  return (
    <div className="legal-container">
      <div className="legal-content">
        <h1 className="legal-title">Impressum</h1>
        
        <p className="legal-text">
          <strong>Informationspflicht</strong><br />
          Nach § 5 E-Commerce-Gesetz, § 14 Unternehmensgesetzbuch, § 63 Gewerbeordnung und Offenlegungspflicht nach § 25 Mediengesetz.
        </p>

        <p className="legal-text">
          <strong>Medieninhaber & Herausgeber</strong><br />
          Halil Boran Yigiter<br />
          Kreuzäckerweg 11<br />
          6800 Feldkirch<br />
          Österreich
        </p>

        <p className="legal-text">
          <strong>Kontakt</strong><br />
          E-Mail: yigiterboran@icloud.com
        </p>

        <p className="legal-text">
          <strong>Unternehmensgegenstand & Blattlinie</strong><br />
          Unternehmensgegenstand: Online-Portfolio und Weblog. Die Website dient der Präsentation meiner persönlichen und akademischen Arbeiten im Bereich Architektur, Design und Visualisierung sowie der Information über meine beruflichen Tätigkeiten und Interessen.<br /><br />
          Blattlinie: Diese Website ist ein unabhängiges Informationsangebot zur Darstellung des persönlichen Portfolios von Halil Boran Yigiter.
        </p>

        <p className="legal-text">
          <strong>Urheberrecht</strong><br />
          Alle Inhalte dieser Webseite (Bilder, Fotos, Texte, Videos, Pläne) unterliegen dem Urheberrecht. Jede Art der Verbreitung, Vervielfältigung, Bearbeitung und Verwertung außerhalb der Grenzen des Urheberrechtes bedarf der vorherigen schriftlichen Zustimmung des jeweiligen Urhebers.
        </p>

        <p className="legal-text">
          <strong>Haftung für Inhalte</strong><br />
          Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen. Als Dienstanbieter sind wir für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich.
        </p>

        <p className="legal-text">
          <strong>Haftung für Links</strong><br />
          Unser Angebot enthält Links zu externen Webseiten Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.
        </p>

        <p className="legal-text">
          <strong>EU-Streitschlichtung</strong><br />
          Angaben zur Online-Streitbeilegung: Verbraucher haben die Möglichkeit, Beschwerden an die Online-Streitbeilegungsplattform der EU zu richten: https://ec.europa.eu/consumers/odr. Sie können allfällige Beschwerden auch an die oben angegebene E-Mail-Adresse richten.
        </p>

        {/* Der intelligente Zurück-Button */}
        <a href="#" onClick={(e) => { e.preventDefault(); setPage('home'); }} className="legal-back">Zurück zum Portfolio</a>
      </div>
    </div>
  );
}