/**
 * Muhammad Ardhie — Engineering Portfolio Core Script
 * Strict Vanilla ES6+ • Zero Dependencies • Purposeful UX
 */

document.addEventListener('DOMContentLoaded', () => {
  initNavigation();
  initCopyEmail();
  initProjectFilters();
  initKeyboardShortcuts();
  initDetailsAnimation();
});

/**
 * Mobile Navigation Toggle & Active Link Tracking
 */
function initNavigation() {
  const toggleBtn = document.querySelector('.nav-toggle');
  const navLinks = document.querySelector('.nav-links');

  if (toggleBtn && navLinks) {
    toggleBtn.addEventListener('click', () => {
      const isOpen = navLinks.classList.toggle('open');
      toggleBtn.setAttribute('aria-expanded', String(isOpen));
    });

    // Close mobile nav when clicking a link
    navLinks.querySelectorAll('.nav-link').forEach((link) => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('open');
        toggleBtn.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // Highlight active link based on current path
  const currentPath = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-link').forEach((link) => {
    const href = link.getAttribute('href');
    if (href === currentPath || (currentPath === '' && href === 'index.html')) {
      link.classList.add('active');
    }
  });
}

/**
 * One-click Email Copy with Tactile Toast Feedback
 */
function initCopyEmail() {
  const copyButtons = document.querySelectorAll('[data-copy-email]');
  const toast = document.getElementById('toast');
  const toastMessage = document.getElementById('toast-message');
  let timeoutId = null;

  copyButtons.forEach((btn) => {
    btn.addEventListener('click', async (e) => {
      e.preventDefault();
      const email = btn.getAttribute('data-copy-email') || 'm.ardhie5325@gmail.com';

      try {
        await navigator.clipboard.writeText(email);
        showToast(`Email copied: ${email}`);
      } catch (err) {
        // Fallback for older browser contexts
        showToast(`Contact: ${email}`);
      }
    });
  });

  function showToast(message) {
    if (!toast) return;

    if (toastMessage) {
      toastMessage.textContent = message;
    }

    toast.classList.add('show');
    clearTimeout(timeoutId);

    timeoutId = setTimeout(() => {
      toast.classList.remove('show');
    }, 3200);
  }
}

/**
 * Fast Category Filtering for Projects (Works Page)
 */
function initProjectFilters() {
  const filterBtns = document.querySelectorAll('[data-filter]');
  const projectCards = document.querySelectorAll('[data-category]');

  if (filterBtns.length === 0 || projectCards.length === 0) return;

  filterBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      const targetCategory = btn.getAttribute('data-filter');

      // Update active state on buttons
      filterBtns.forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');

      // Filter project cards
      projectCards.forEach((card) => {
        const cardCategory = card.getAttribute('data-category');
        if (targetCategory === 'all' || cardCategory === targetCategory) {
          card.style.display = 'grid';
          // Smooth fade in
          card.animate(
            [
              { opacity: 0, transform: 'translateY(8px)' },
              { opacity: 1, transform: 'translateY(0)' },
            ],
            { duration: 240, easing: 'cubic-bezier(0.16, 1, 0.3, 1)' }
          );
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
}

/**
 * Keyboard Accessibility Shortcuts
 */
function initKeyboardShortcuts() {
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      const navLinks = document.querySelector('.nav-links');
      const toggleBtn = document.querySelector('.nav-toggle');
      if (navLinks && navLinks.classList.contains('open')) {
        navLinks.classList.remove('open');
        if (toggleBtn) toggleBtn.setAttribute('aria-expanded', 'false');
      }

      const toast = document.getElementById('toast');
      if (toast && toast.classList.contains('show')) {
        toast.classList.remove('show');
      }
    }
  });
}

/**
 * Smooth Interactive Details Expand & Collapse Animation (All Pages)
 * Enables infinite re-triggering of expand & collapse transitions
 */
function initDetailsAnimation() {
  const detailsElements = document.querySelectorAll('details');

  detailsElements.forEach((el) => {
    const summary = el.querySelector('summary');
    const content = el.querySelector('.about-more-content, .more');
    if (!summary || !content) return;

    let isAnimating = false;

    summary.addEventListener('click', (e) => {
      e.preventDefault();

      if (isAnimating) return;

      if (!el.open) {
        // OPENING FLOW
        isAnimating = true;
        el.open = true;
        el.classList.add('is-open');

        // Allow layout to register open state, then animate
        content.style.maxHeight = '0px';
        content.style.opacity = '0';
        content.style.transform = 'translateY(-12px)';

        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            const scrollH = content.scrollHeight;
            content.style.maxHeight = `${scrollH + 40}px`;
            content.style.opacity = '1';
            content.style.transform = 'translateY(0)';

            let safetyTimer;
            const onEnd = (event) => {
              if (event && event.target === content && event.propertyName !== 'max-height') return;
              content.removeEventListener('transitionend', onEnd);
              clearTimeout(safetyTimer);
              isAnimating = false;
              content.style.maxHeight = '';
              content.style.opacity = '';
              content.style.transform = '';
            };
            safetyTimer = setTimeout(onEnd, 480);
            content.addEventListener('transitionend', onEnd);
          });
        });
      } else {
        // CLOSING FLOW
        isAnimating = true;
        const currentH = content.scrollHeight;
        content.style.maxHeight = `${currentH}px`;
        content.style.opacity = '1';
        content.style.transform = 'translateY(0)';

        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            el.classList.remove('is-open');
            content.style.maxHeight = '0px';
            content.style.opacity = '0';
            content.style.transform = 'translateY(-12px)';

            let safetyTimer;
            const onEnd = (event) => {
              if (event && event.target === content && event.propertyName !== 'max-height') return;
              content.removeEventListener('transitionend', onEnd);
              clearTimeout(safetyTimer);
              isAnimating = false;
              el.open = false;
              content.style.maxHeight = '';
              content.style.opacity = '';
              content.style.transform = '';
            };
            safetyTimer = setTimeout(onEnd, 480);
            content.addEventListener('transitionend', onEnd);
          });
        });
      }
    });
  });
}
