const gallery = document.getElementById('gallery');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightboxImg');

const MAX_IMAGES = 30;
const slots = new Array(MAX_IMAGES).fill(null);

function renderGallery() {
  gallery.innerHTML = '';
  slots.forEach((src) => {
    if (!src) return;
    const fig = document.createElement('figure');
    const img = document.createElement('img');
    img.src = src;
    img.alt = 'Arbeit — Boran Yigiter';
    img.loading = 'lazy';
    fig.appendChild(img);
    gallery.appendChild(fig);
  });
}

function probeImage(index, exts = ['jpg', 'jpeg', 'png', 'webp']) {
  if (!exts.length) return;
  const src = `bilder/${index + 1}.${exts[0]}`;
  const tester = new Image();
  tester.onload = () => {
    slots[index] = src;
    renderGallery();
  };
  tester.onerror = () => probeImage(index, exts.slice(1));
  tester.src = src;
}

for (let i = 0; i < MAX_IMAGES; i++) {
  probeImage(i);
}

gallery.addEventListener('click', (e) => {
  const img = e.target.closest('img');
  if (!img) return;
  lightboxImg.src = img.src;
  lightbox.showModal();
});

lightbox.addEventListener('click', () => lightbox.close());