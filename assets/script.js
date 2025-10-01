
// Mobile menu toggle
const menuBtn = document.getElementById('menuBtn');
const menu = document.getElementById('menu');
menuBtn?.addEventListener('click', () => menu.classList.toggle('open'));

// Active nav by data-page
const page = document.body.dataset.page;
if (page) {
  const link = document.querySelector(`nav a[data-page="${page}"]`);
  link?.classList.add('active');
}

// Footer year
const y = document.getElementById('yearNow');
if (y) y.textContent = new Date().getFullYear();

// Smooth scroll
document.documentElement.style.scrollBehavior = 'smooth';

// Fetch site data
async function loadSiteData() {
  const res = await fetch('assets/site-data.json', {cache: 'no-store'});
  if (!res.ok) throw new Error('Failed to load site-data.json');
  return await res.json();
}
window.loadSiteData = loadSiteData;
