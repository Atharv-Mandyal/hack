// Initialize AOS first
AOS.init({
  duration: 1000,
  once: true,
});

// Initialize Lenis
const lenis = new Lenis({
  duration: 1.2,
  easing: (t) => t,
  smooth: true,
});

// RAF loop
function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}
requestAnimationFrame(raf);

// Refresh AOS after Lenis updates scroll
lenis.on('scroll', () => {
  // Use setTimeout to avoid overloading refresh
  clearTimeout(window.__aosRefreshTimer);
  window.__aosRefreshTimer = setTimeout(() => {
    AOS.refreshHard();
  }, 50);
});
