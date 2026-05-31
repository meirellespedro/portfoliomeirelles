/* =========================================================================
   Enriquecimento progressivo: a página é 100% usável sem este arquivo.
   O JS só ADICIONA comportamento — nunca habilita o conteúdo.
   ========================================================================= */

// Sinaliza ao CSS que o JS está ativo (libera o reveal-on-scroll sem quebrar
// quem não tem JS — sem isso, os blocos com [data-reveal] ficam visíveis).
document.documentElement.classList.remove('no-js');
document.documentElement.classList.add('js');

document.addEventListener('DOMContentLoaded', () => {
  /* ---------- MENU MOBILE ---------- */
  const toggle = document.getElementById('menu-toggle');
  const menu = document.getElementById('menu-list');

  if (toggle && menu) {
    const setMenu = (open) => {
      document.body.classList.toggle('menu-open', open);
      toggle.setAttribute('aria-expanded', String(open));
      // FIX: nome acessível deixa de mentir ("Abrir" mesmo aberto)
      toggle.setAttribute('aria-label', open ? 'Fechar menu' : 'Abrir menu');
    };

    toggle.addEventListener('click', () => {
      setMenu(!document.body.classList.contains('menu-open'));
    });

    // Fecha ao clicar num link (navegação por âncora)
    menu.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => setMenu(false));
    });

    // FIX: Escape fecha o menu e devolve o foco ao botão (focus management)
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && document.body.classList.contains('menu-open')) {
        setMenu(false);
        toggle.focus();
      }
    });
  }

  /* ---------- REVEAL ON SCROLL ----------
     IntersectionObserver em vez de listener de scroll: o browser avisa quando
     o elemento entra na viewport, sem rodar código a cada pixel rolado. */
  const revealEls = document.querySelectorAll('[data-reveal]');
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (prefersReducedMotion || !('IntersectionObserver' in window)) {
    // Sem animação: mostra tudo de imediato
    revealEls.forEach((el) => el.classList.add('is-visible'));
  } else {
    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target); // anima só uma vez
        }
      });
    }, { threshold: 0.15, rootMargin: '0px 0px -10% 0px' });

    revealEls.forEach((el) => revealObserver.observe(el));
  }

  /* ---------- SCROLL-SPY (link ativo na navegação) ----------
     Marca o item do menu correspondente à seção visível com aria-current="page"
     — estado anunciado a leitores de tela e pintado pelo CSS. */
  const sections = document.querySelectorAll('main section[id]');
  const navLinks = new Map();
  document.querySelectorAll('#menu-list a[href^="#"]').forEach((link) => {
    navLinks.set(link.getAttribute('href').slice(1), link);
  });

  if (sections.length && navLinks.size && 'IntersectionObserver' in window) {
    const spy = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const link = navLinks.get(entry.target.id);
        if (!link) return;
        navLinks.forEach((l) => l.removeAttribute('aria-current'));
        link.setAttribute('aria-current', 'page');
      });
    }, { rootMargin: '-45% 0px -50% 0px' }); // ativa quando a seção cruza o meio da tela

    sections.forEach((section) => spy.observe(section));
  }
});
