export default function Datenschutz({ setPage }) {
  return (
    <div className="legal-container">
      <div className="legal-content">
        <h1 className="legal-title">Datenschutzerklärung</h1>
        
        <p className="legal-text">
          <strong>1. Verantwortlicher (Art. 4 Nr. 7 DSGVO)</strong><br />
          Halil Boran Yigiter<br />
          Kreuzäckerweg 11<br />
          6800 Feldkirch, Österreich<br />
          E-Mail: yigiterboran@icloud.com
        </p>

        <p className="legal-text">
          <strong>2. Hosting & Logfiles (Vercel)</strong><br />
          Wir hosten diese Website bei Vercel Inc. (340 S Lemon Ave #4133, Walnut, CA 91789, USA).<br />
          Beim Besuch der Website erfasst Vercel automatisch technische Daten in sogenannten Server-Logfiles (IP-Adresse, Browser, Betriebssystem, Referrer URL, Zeitstempel).<br />
          Rechtsgrundlage: Art. 6 Abs. 1 lit. f DSGVO (Berechtigtes Interesse an der sicheren, schnellen und fehlerfreien Bereitstellung des Online-Angebots).<br />
          Drittlandtransfer: Vercel übermittelt Daten in die USA. Die Datensicherheit wird durch den Abschluss der EU-Standardvertragsklauseln (Standard Contractual Clauses, SCC) gemäß Art. 46 Abs. 2 lit. c DSGVO gewährleistet. Ein entsprechendes Data Processing Addendum (DPA) wurde abgeschlossen. Zudem haben wir den Serverstandort für unsere Funktionen technisch auf die Region Frankfurt (EU) beschränkt.
        </p>

        <p className="legal-text">
          <strong>3. Lokales Hosting von Inhalten</strong><br />
          Alle auf dieser Website eingebundenen Inhalte (Bilder, Schriften, 3D-Texturen, Skripte) werden lokal von unserem Hosting-Server (Vercel) ausgeliefert. Es erfolgt kein automatisches Nachladen von Ressourcen durch Server Dritter (keine CDNs, keine Google Fonts, keine externen Bildquellen). Dies dient der Minimierung der Datenweitergabe an Dritte ("Privacy by Design").
        </p>

        <p className="legal-text">
          <strong>4. Kontaktaufnahme</strong><br />
          Sofern Sie uns per E-Mail kontaktieren, werden Ihre Angaben inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter. Die Verarbeitung erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO (Vertragserfüllung/Vorvertragliche Maßnahmen) bzw. Art. 6 Abs. 1 lit. f DSGVO (Berechtigtes Interesse an effektiver Kommunikation).
        </p>

        <p className="legal-text">
          <strong>5. Ihre Betroffenenrechte</strong><br />
          Sie haben jederzeit das Recht auf unentgeltliche Auskunft über Ihre gespeicherten personenbezogenen Daten (Art. 15 DSGVO), deren Herkunft und Empfänger und den Zweck der Datenverarbeitung sowie ein Recht auf Berichtigung (Art. 16 DSGVO), Sperrung oder Löschung (Art. 17 DSGVO) dieser Daten. Ebenso steht Ihnen ein Recht auf Einschränkung der Verarbeitung und Datenübertragbarkeit zu.
        </p>

        <p className="legal-text">
          <strong>6. Beschwerderecht</strong><br />
          Im Falle von Verstößen gegen die DSGVO steht Ihnen ein Beschwerderecht bei einer Aufsichtsbehörde zu. Die zuständige Aufsichtsbehörde in Österreich ist:<br />
          Österreichische Datenschutzbehörde<br />
          Barichgasse 40-42<br />
          1030 Wien
        </p>

        {/* Der intelligente Zurück-Button */}
        <a href="#" onClick={(e) => { e.preventDefault(); setPage('home'); }} className="legal-back">Zurück zum Portfolio</a>
      </div>
    </div>
  );
}