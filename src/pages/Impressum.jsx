import { Link } from "react-router-dom";

export default function Impressum() {
  return (
    <div className="min-h-screen bg-black text-white p-8 md:p-20 font-mono">
      {/* ZURÜCK BUTTON */}
      <Link to="/" className="text-sm text-gray-400 hover:text-white uppercase tracking-widest mb-10 block">
        ← Zurück zur Basis
      </Link>

      <h1 className="text-3xl md:text-5xl font-bold mb-8">IMPRESSUM</h1>

      <div className="space-y-8 text-gray-300 max-w-2xl leading-relaxed text-sm md:text-base">

        {/* RECHTLICHE GRUNDLAGEN */}
        <section>
            <p className="text-xs text-gray-500 uppercase tracking-widest mb-4">
                Informationspflicht laut § 5 E-Commerce Gesetz, § 14 Unternehmensgesetzbuch, § 63 Gewerbeordnung und Offenlegungspflicht laut § 25 Mediengesetz.
            </p>
        </section>

        {/* MEDIENINHABER */}
        <section>
          <h2 className="text-lg font-bold text-white mb-2">Medieninhaber & Herausgeber</h2>
          <p>
            Halil Boran Yigiter<br />
            Kreuzäckerweg 11<br />
            6800 Feldkirch<br />
            Österreich
          </p>
        </section>

        {/* KONTAKT */}
        <section>
          <h2 className="text-lg font-bold text-white mb-2">Kontakt</h2>
          <p>
            E-Mail: <a href="mailto:yigiterboran@icloud.com" className="hover:text-white underline">yigiterboran@icloud.com</a>
          </p>
        </section>

        {/* AUSRICHTUNG & BLATTLINIE */}
        <section>
          <h2 className="text-lg font-bold text-white mb-2">Unternehmensgegenstand & Blattlinie</h2>
          <p className="mb-4">
            <strong>Unternehmensgegenstand:</strong> Online-Portfolio und Weblog. Die Website dient der Präsentation meiner persönlichen und akademischen Arbeiten im Bereich Architektur, Design und Visualisierung sowie der Information über meine beruflichen Tätigkeiten und Interessen.
          </p>
          <p>
            <strong>Blattlinie:</strong> Diese Website ist ein unabhängiges Informationsangebot zur Darstellung des persönlichen Portfolios von Halil Boran Yigiter.
          </p>
        </section>

        {/* URHEBERRECHT */}
        <section>
          <h2 className="text-lg font-bold text-white mb-2">Urheberrecht</h2>
          <p>
            Alle Inhalte dieser Webseite (Bilder, Fotos, Texte, Videos, Pläne) unterliegen dem Urheberrecht. Jede Art der Verbreitung, Vervielfältigung, Bearbeitung und Verwertung außerhalb der Grenzen des Urheberrechtes bedarf der vorherigen schriftlichen Zustimmung des jeweiligen Urhebers.
          </p>
        </section>

        {/* HAFTUNG */}
        <section>
          <h2 className="text-lg font-bold text-white mb-2">Haftung</h2>
          <div className="space-y-4">
            <div>
                <strong className="text-white block mb-1">Haftung für Inhalte</strong>
                <p>
                    Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen. Als Dienstanbieter sind wir für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich.
                </p>
            </div>
            <div>
                <strong className="text-white block mb-1">Haftung für Links</strong>
                <p>
                    Unser Angebot enthält Links zu externen Webseiten Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.
                </p>
            </div>
          </div>
        </section>

        {/* STREITSCHLICHTUNG */}
        <section>
          <h2 className="text-lg font-bold text-white mb-2">EU-Streitschlichtung</h2>
          <p>
            Angaben zur Online-Streitbeilegung: Verbraucher haben die Möglichkeit, Beschwerden an die Online-Streitbeilegungsplattform der EU zu richten: <a href="https://ec.europa.eu/consumers/odr" target="_blank" rel="noopener noreferrer" className="hover:text-white underline">https://ec.europa.eu/consumers/odr</a>. Sie können allfällige Beschwerden auch an die oben angegebene E-Mail-Adresse richten.
          </p>
        </section>

      </div>
    </div>
  );
}