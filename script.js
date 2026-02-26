// Hamburger menu toggle
const ham = document.getElementById("hamburger");
const menu = document.getElementById("mobile-menu");

if (ham && menu) {
  ham.addEventListener("click", () => {
    const isOpen = menu.classList.toggle("open");
    ham.classList.toggle("active", isOpen);
    ham.setAttribute("aria-expanded", isOpen);
  });

  document.querySelectorAll(".mobile-link").forEach((l) =>
    l.addEventListener("click", () => {
      menu.classList.remove("open");
      ham.classList.remove("active");
      ham.setAttribute("aria-expanded", false);
    }),
  );
}

// Header scroll shadow effect
const hdr = document.getElementById("site-header");
if (hdr) {
  window.addEventListener(
    "scroll",
    () => {
      hdr.classList.toggle("scrolled", window.scrollY > 16);
    },
    { passive: true },
  );
}

// Scroll fade-in animations
const fadeElements = document.querySelectorAll(".fade-up");
if (fadeElements.length > 0) {
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add("visible");
          io.unobserve(e.target);
        }
      });
    },
    { threshold: 0.1 },
  );
  fadeElements.forEach((el) => io.observe(el));
}
