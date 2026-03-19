import { useEffect } from 'react';

const cardSelectors = [
  '.service-card',
  '.specialite-card',
  '.content-card',
  '.contact-card',
  '.contact-form-card',
  '.faq-item',
  '.medical-3d-banner',
  '.medical-3d-hero',
];

const scrollSelectors = [
  '.hero-section',
  '.content-card',
  '.service-card',
  '.specialite-card',
  '.contact-form-card',
  '.contact-card',
  '.faq-item',
  '.medical-3d-hero',
];

const InteractiveEffects = () => {
  useEffect(() => {
    const mediaQuery = window.matchMedia('(pointer: fine)');
    const cards = document.querySelectorAll(cardSelectors.join(','));
    const cleanupFns = [];

    cards.forEach((card) => {
      card.setAttribute('data-3d-card', 'true');
      if (!mediaQuery.matches) {
        return;
      }

      const handlePointerMove = (event) => {
        const bounds = card.getBoundingClientRect();
        const x = event.clientX - bounds.left;
        const y = event.clientY - bounds.top;
        const rotationY = ((x / bounds.width) - 0.5) * 10;
        const rotationX = (0.5 - (y / bounds.height)) * 6;
        card.style.transform = `rotateX(${rotationX}deg) rotateY(${rotationY}deg) translateZ(0)`;
        card.style.setProperty('--glow-x', `${(x / bounds.width) * 100}%`);
        card.style.setProperty('--glow-y', `${(y / bounds.height) * 100}%`);
        card.classList.add('tilt-active');
      };

      const handlePointerLeave = () => {
        card.style.transform = '';
        card.classList.remove('tilt-active');
      };

      card.addEventListener('pointermove', handlePointerMove);
      card.addEventListener('pointerleave', handlePointerLeave);
      cleanupFns.push(() => {
        card.removeEventListener('pointermove', handlePointerMove);
        card.removeEventListener('pointerleave', handlePointerLeave);
      });
    });

    const targets = document.querySelectorAll(scrollSelectors.join(','));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.setAttribute('data-scroll-animate', 'true');
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    targets.forEach((target) => {
      target.setAttribute('data-scroll-animate', 'true');
      observer.observe(target);
    });

    const columns = document.querySelectorAll('.medical-3d-side-column');
    const updateColumns = () => {
      const progress =
        window.scrollY / Math.max(1, document.body.scrollHeight - window.innerHeight);
      columns.forEach((column, index) => {
        column.style.opacity = `${0.35 + progress * 0.45}`;
        column.style.filter = `blur(${12 + progress * 8}px)`;
        column.style.transform = `translate3d(0, ${progress * 40 * (index ? -1 : 1)}px, 0)`;
      });
    };

    window.addEventListener('scroll', updateColumns, { passive: true });
    updateColumns();

    return () => {
      cleanupFns.forEach((fn) => fn());
      window.removeEventListener('scroll', updateColumns);
      observer.disconnect();
    };
  }, []);

  return null;
};

export default InteractiveEffects;

