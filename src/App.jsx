import { useState } from 'react';
import Impressum from './Impressum';
import Datenschutz from './Datenschutz';

// Die Home-Komponente bekommt jetzt den "Schalter" (setPage) übergeben
function Home({ setPage }) {
  return (
    <div className="portfolio-container">
      <main className="main-content">
        <h1 className="name">BORAN YIGITER</h1>
        <div className="contact-info">
          <p className="title">ARCHITECTURE / UNIVERSITY OF LIECHTENSTEIN</p>
          <a href="mailto:yigiterboran@icloud.com" className="email">yigiterboran@icloud.com</a>
        </div>
      </main>

      <footer className="arch-footer">
        {/* onClick verhindert den Reload und schaltet den Raum um */}
        <a href="#" onClick={(e) => { e.preventDefault(); setPage('impressum'); }} className="footer-link">IMPRESSUM</a>
        <span className="separator">|</span>
        <a href="#" onClick={(e) => { e.preventDefault(); setPage('datenschutz'); }} className="footer-link">DATENSCHUTZ</a>
      </footer>
    </div>
  );
}

export default function App() {
  // Der State: Standardmäßig sind wir im 'home' Raum
  const [page, setPage] = useState('home');

  // Der Traffic Controller: Zeigt den Raum, der gerade im State steht
  if (page === 'impressum') {
    return <Impressum setPage={setPage} />;
  }

  if (page === 'datenschutz') {
    return <Datenschutz setPage={setPage} />;
  }

  // Wenn nichts anderes gewählt ist, zeige Home
  return <Home setPage={setPage} />;
}