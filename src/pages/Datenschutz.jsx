import { Link } from "react-router-dom";

export default function Datenschutz() {
  return (
    <div className="min-h-screen bg-black text-white p-8 md:p-20 font-mono">
      <Link to="/" className="text-sm text-gray-400 hover:text-white uppercase tracking-widest mb-10 block">
        ← Zurück zur Basis
      </Link>

      <h1 className="text-3xl md:text-5xl font-bold mb-8">DATENSCHUTZ</h1>

      <div className="space-y-8 text-gray-300 max-w-2xl leading-relaxed text-sm md:text-base">
        
        <section>
          <h2 className="text-lg font-bold text-white mb-2">1. Verantwortlicher (Art. 4 Nr. 7 DSGVO)</h2>
          <p>
            Halil Boran Yigiter<br />
            Kreuzäckerweg 11<br />
            6800 Feldkirch, Österreich<br />
            E-Mail: yigiterboran@icloud.com
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-white mb-2">2. Hosting & Logfiles (Vercel)</h2>
          <p>
            Wir hosten diese Website bei Vercel Inc. (340 S Lemon Ave #4133, Walnut, CA 91789, USA).<br />
            Beim Besuch der Website erfasst Vercel automatisch technische Daten in sogenannten Server-Logfiles (IP-Adresse, Browser, Betriebssystem, Referrer URL, Zeitstempel).
          </p>
          <p className="mt-2">
            <strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. f DSGVO (Berechtigtes Interesse an der sicheren, schnellen und fehlerfreien Bereitstellung des Online-Angebots).
          </p>
          <p className="mt-2">
            <strong>Drittlandtransfer:</strong> Vercel übermittelt Daten in die USA. Die Datensicherheit wird durch den Abschluss der EU-Standardvertragsklauseln (Standard Contractual Clauses, SCC) gemäß Art. 46 Abs. 2 lit. c DSGVO gewährleistet. Ein entsprechendes Data Processing Addendum (DPA) wurde abgeschlossen.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-white mb-2">3. Datenbank & Backend (Supabase)</h2>
          <p>
            Als Backend-Dienst nutzen wir Supabase Inc. (3790 El Camino Real #532, Palo Alto, CA 94306, USA).
          </p>
          <p className="mt-2">
            <strong>Speicherort:</strong> Wir haben vertraglich festgelegt, dass die Datenhosting-Region Frankfurt (EU/Deutschland) ist (AWS eu-central-1). Eine Speicherung der Inhaltsdaten erfolgt primär innerhalb der EU.
          </p>
          <p className="mt-2">
            <strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. f DSGVO (Berechtigtes Interesse an einer skalierbaren und sicheren Datenbank-Infrastruktur).
          </p>
          <p className="mt-2">
            <strong>Drittlandtransfer:</strong> Soweit Metadaten oder Support-Zugriffe aus den USA erfolgen, stützen wir uns auf die Standardvertragsklauseln (SCC) der EU-Kommission.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-white mb-2">4. Lokales Hosting von Inhalten</h2>
          <p>
            Alle auf dieser Website eingebundenen Inhalte (Bilder, Schriften, 3D-Texturen, Skripte) werden lokal von unserem Hosting-Server (Vercel) ausgeliefert. Es erfolgt kein automatisches Nachladen von Ressourcen durch Server Dritter (keine CDNs, keine Google Fonts, keine externen Bildquellen). Dies dient der Minimierung der Datenweitergabe an Dritte ("Privacy by Design").
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-white mb-2">5. Kontaktaufnahme</h2>
          <p>
            Sofern Sie uns per E-Mail kontaktieren, werden Ihre Angaben inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter. Die Verarbeitung erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO (Vertragserfüllung/Vorvertragliche Maßnahmen) bzw. Art. 6 Abs. 1 lit. f DSGVO (Berechtigtes Interesse an effektiver Kommunikation).
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-white mb-2">6. Ihre Betroffenenrechte</h2>
          <p>
            Sie haben jederzeit das Recht auf unentgeltliche Auskunft über Ihre gespeicherten personenbezogenen Daten (Art. 15 DSGVO), deren Herkunft und Empfänger und den Zweck der Datenverarbeitung sowie ein Recht auf Berichtigung (Art. 16 DSGVO), Sperrung oder Löschung (Art. 17 DSGVO) dieser Daten. Ebenso steht Ihnen ein Recht auf Einschränkung der Verarbeitung und Datenübertragbarkeit zu.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-white mb-2">7. Beschwerderecht</h2>
          <p>
            Im Falle von Verstößen gegen die DSGVO steht Ihnen ein Beschwerderecht bei einer Aufsichtsbehörde zu. Die zuständige Aufsichtsbehörde in Österreich ist:
          </p>
          <p className="mt-2 pl-4 border-l-2 border-white/20">
            <strong>Österreichische Datenschutzbehörde</strong><br />
            Barichgasse 40-42<br />
            1030 Wien
          </p>
        </section>

      </div>
    </div>
  );
}