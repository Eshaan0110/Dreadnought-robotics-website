/* ============================================================
   DREADNOUGHT ROBOTICS — main.js
   ============================================================ */

/* ── PAGE NAVIGATION ─────────────────────────────────────── */
function showPage(id) {
  // Hide all pages
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  // Show target page
  document.getElementById('page-' + id).classList.add('active');
  // Update nav active state
  document.querySelectorAll('.nav-links a').forEach(a => a.classList.remove('active'));
  const navLink = document.getElementById('nav-' + id);
  if (navLink) navLink.classList.add('active');
  // Scroll to top
  window.scrollTo({ top: 0, behavior: 'instant' });
}

/* ── MOBILE MENU ─────────────────────────────────────────── */
function toggleMenu() {
  document.getElementById('mobile-menu').classList.toggle('open');
}

/* ── GALLERY FILTER ──────────────────────────────────────── */
function filterGallery(cat, el) {
  // Update active tab
  document.querySelectorAll('.gallery-tab').forEach(t => t.classList.remove('active'));
  el.classList.add('active');
  // Show/hide items
  document.querySelectorAll('.gallery-item').forEach(item => {
    const visible = cat === 'all' || item.dataset.cat === cat;
    item.style.opacity = visible ? '1' : '0.12';
    item.style.transition = 'opacity 0.2s ease';
  });
}

/* ── SCROLL REVEAL ───────────────────────────────────────── */
const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.style.opacity = '1';
      e.target.style.transform = 'translateY(0)';
    }
  });
}, { threshold: 0.06 });

// Apply initial hidden state and observe each card
document.querySelectorAll(
  '.achievement-card, .project-card, .team-card, .competition-card, .proj-page-card, .team-card-page'
).forEach((el, i) => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(20px)';
  el.style.transition = `opacity 0.45s ease ${(i % 8) * 0.06}s, transform 0.45s cubic-bezier(0.16,1,0.3,1) ${(i % 8) * 0.06}s`;
  observer.observe(el);
});

/* ── CONTACT FORM SUBMIT ─────────────────────────────────── */
// Called inline via onclick on the submit button
function handleFormSubmit(btn) {
  btn.textContent = 'MESSAGE SENT ✓';
  btn.style.background = 'var(--white)';
  btn.style.color = 'var(--black)';
}
