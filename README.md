# Architektur-Portfolio (3D)

Statische Website: HTML, CSS und JS mit Three.js, GSAP und Lenis über CDN. Kein Build-Schritt nötig.

## Starten (VS Code)
1. Ordner in VS Code öffnen: `Datei → Ordner öffnen…`
2. Extension **Live Server** installieren → Rechtsklick auf `index.html` → **Open with Live Server**
   *(alternativ im Terminal: `python3 -m http.server 5500` → http://localhost:5500)*

> Doppelklick auf `index.html` funktioniert **nicht**, weil ES-Module einen lokalen Server brauchen.

## Anpassen
| Was | Wo |
|---|---|
| Projekte (Titel, Text, Fakten, Bild) | `main.js` → `PROJECTS` ganz oben |
| Name, Uni, Lebenslauf, Links, E-Mail | `index.html` |
| Farben / Schriften | `style.css` → `:root` |
| Bilder | `assets/img/` (`projekt-01.jpg` …, `portrait.jpg`) |
| 3D-Turm (Geschosse, Verdrehung) | `main.js` → `FLOORS`, `TWIST` |

Ein eigenes 3D-Modell (z. B. aus Rhino oder Blender als `.glb`) lässt sich mit dem `GLTFLoader` aus `three/addons/loaders/GLTFLoader.js` laden.
