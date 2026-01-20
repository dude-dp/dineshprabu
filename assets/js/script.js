(() => {
  const header = document.querySelector("[data-header]");
  const nav = document.querySelector("[data-nav]");
  const toggle = document.querySelector("[data-nav-toggle]");
  const year = document.getElementById("year");

  if (year) year.textContent = String(new Date().getFullYear());

  // Header scroll state
  const onScroll = () => {
    if (!header) return;
    header.classList.toggle("is-scrolled", window.scrollY > 10);
  };
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });

  // Mobile nav
  const closeNav = () => nav && nav.classList.remove("is-open");
  toggle?.addEventListener("click", () => nav?.classList.toggle("is-open"));
  nav?.addEventListener("click", (e) => {
    const a = e.target.closest("a");
    if (a) closeNav();
  });
  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeNav();
  });
  window.addEventListener("click", (e) => {
    if (!nav || !toggle) return;
    const clickedInside = nav.contains(e.target) || toggle.contains(e.target);
    if (!clickedInside) closeNav();
  });

  // Reveal on scroll with staggered delays
  const els = Array.from(document.querySelectorAll(".reveal"));
  if ("IntersectionObserver" in window) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          // Stagger animation based on index
          const delay = index * 0.1;
          entry.target.style.transitionDelay = `${delay}s`;
          entry.target.classList.add("is-in");
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15, rootMargin: "0px 0px -50px 0px" });
    els.forEach((el) => io.observe(el));
  } else {
    els.forEach((el) => el.classList.add("is-in"));
  }

  // SVG draw animation for icons (on load for tiles)
  const drawIcons = Array.from(document.querySelectorAll(".svg-draw"));
  if (drawIcons.length > 0) {
    drawIcons.forEach((icon, index) => {
      // Slight delay for each icon draw
      icon.style.animationDelay = `${index * 0.2}s`;
    });
  }
})();



gsap.fromTo('.brand__text', { 
		x: -2000
	}, 
	{ 
		x: 0,
		duration: 1,
		ease: "power4.inOut"
	});

gsap.fromTo('.home', { 
		x: -2000,
	}, 
	{ 
		x: 0,
		duration: 1.5,
		ease: "power4.inOut"
	});

gsap.fromTo('.about', { 
		x: -2000,
		yoyoEase: true
	}, 
	{ 
		x: 0,
		duration: 2,
		ease: "power4.inOut"
	});

gsap.fromTo('.portfolio', { 
		x: -2000,
		yoyoEase: true
	}, 
	{ 
		x: 0,
		duration: 2.5,
		ease: "power4.inOut"
	});

gsap.fromTo('.experience', { 
		x: -2000,
		yoyoEase: true
	}, 
	{ 
		x: 0,
		duration: 3,
		ease: "power4.inOut"
	});

gsap.fromTo('.toolkit', { 
		x: -2000,
		yoyoEase: true
	}, 
	{ 
		x: 0,
		duration: 3.5,
		ease: "power4.inOut"
	});

gsap.fromTo('.impact', { 
		x: -2000,
		yoyoEase: true
	}, 
	{ 
		x: 0,
		duration: 4,
		ease: "power4.inOut"
	});