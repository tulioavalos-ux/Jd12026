/**
 * JD1 Notícias - Main JavaScript
 * Funcionalidades principais do site
 */

// ==========================================================================
// Carousel Functionality
// ==========================================================================

class Carousel {
  constructor(element) {
    this.element = element;
    this.currentSlide = 1; // Começa no slide 2 (active)
    this.totalSlides = 4;
    this.indicators = element.querySelectorAll('.carousel__indicator');
    this.prevBtn = element.querySelector('.carousel__btn--prev');
    this.nextBtn = element.querySelector('.carousel__btn--next');

    this.init();
  }

  init() {
    // Event listeners para os botões
    if (this.prevBtn) {
      this.prevBtn.addEventListener('click', () => this.prev());
    }
    if (this.nextBtn) {
      this.nextBtn.addEventListener('click', () => this.next());
    }

    // Event listeners para os indicadores
    this.indicators.forEach((indicator, index) => {
      indicator.addEventListener('click', () => this.goToSlide(index));
    });

    // Auto-play (opcional)
    // this.startAutoPlay();
  }

  prev() {
    this.currentSlide = this.currentSlide === 0 ? this.totalSlides - 1 : this.currentSlide - 1;
    this.updateSlide();
  }

  next() {
    this.currentSlide = (this.currentSlide + 1) % this.totalSlides;
    this.updateSlide();
  }

  goToSlide(index) {
    this.currentSlide = index;
    this.updateSlide();
  }

  updateSlide() {
    // Atualiza os indicadores
    this.indicators.forEach((indicator, index) => {
      if (index === this.currentSlide) {
        indicator.classList.add('carousel__indicator--active');
        indicator.setAttribute('aria-selected', 'true');
      } else {
        indicator.classList.remove('carousel__indicator--active');
        indicator.setAttribute('aria-selected', 'false');
      }
    });

    // Aqui você pode adicionar lógica para trocar as imagens
    // Por exemplo, usando um array de notícias e atualizando o DOM
    console.log(`Slide atual: ${this.currentSlide + 1}`);
  }

  startAutoPlay(interval = 5000) {
    this.autoPlayInterval = setInterval(() => {
      this.next();
    }, interval);
  }

  stopAutoPlay() {
    if (this.autoPlayInterval) {
      clearInterval(this.autoPlayInterval);
    }
  }
}

// ==========================================================================
// Lazy Loading de Imagens
// ==========================================================================

function initLazyLoading() {
  if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const img = entry.target;
          if (img.dataset.src) {
            img.src = img.dataset.src;
            img.removeAttribute('data-src');
          }
          observer.unobserve(img);
        }
      });
    });

    const lazyImages = document.querySelectorAll('img[data-src]');
    lazyImages.forEach((img) => imageObserver.observe(img));
  }
}

// ==========================================================================
// Smooth Scroll para Links Âncora
// ==========================================================================

function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', function (e) {
      const href = this.getAttribute('href');
      
      // Ignora links que são apenas "#"
      if (href === '#') return;

      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
      }
    });
  });
}

// ==========================================================================
// Acessibilidade - Navegação por Teclado
// ==========================================================================

function initKeyboardNavigation() {
  // Permite fechar modais/overlays com ESC
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      // Adicione aqui lógica para fechar modais se necessário
      console.log('ESC pressionado');
    }
  });

  // Melhora a navegação por Tab
  document.addEventListener('focus', (e) => {
    if (e.target.matches('a, button')) {
      e.target.classList.add('keyboard-focus');
    }
  }, true);

  document.addEventListener('blur', (e) => {
    if (e.target.matches('a, button')) {
      e.target.classList.remove('keyboard-focus');
    }
  }, true);
}

// ==========================================================================
// Analytics e Tracking (Placeholder)
// ==========================================================================

function trackPageView() {
  // Integração com Google Analytics, por exemplo
  if (typeof gtag !== 'undefined') {
    gtag('config', 'GA_MEASUREMENT_ID', {
      page_path: window.location.pathname,
    });
  }
  console.log('Page view tracked');
}

function trackEvent(category, action, label) {
  // Tracking de eventos customizados
  if (typeof gtag !== 'undefined') {
    gtag('event', action, {
      event_category: category,
      event_label: label,
    });
  }
  console.log(`Event tracked: ${category} - ${action} - ${label}`);
}

// ==========================================================================
// Tratamento de Erros de Imagem
// ==========================================================================

function initImageErrorHandling() {
  document.querySelectorAll('img').forEach((img) => {
    img.addEventListener('error', function () {
      // Substitui por uma imagem placeholder se a imagem falhar ao carregar
      if (!this.dataset.errorHandled) {
        this.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="100" height="100"%3E%3Crect fill="%23f4f4f6" width="100" height="100"/%3E%3Ctext fill="%23999" x="50%25" y="50%25" dominant-baseline="middle" text-anchor="middle"%3EImagem%3C/text%3E%3C/svg%3E';
        this.dataset.errorHandled = 'true';
        console.warn('Imagem não carregada:', this.getAttribute('alt') || this.src);
      }
    });
  });
}

// ==========================================================================
// Inicialização
// ==========================================================================

function init() {
  console.log('JD1 Notícias - Inicializando...');

  // Inicializa o carousel
  const carouselElement = document.querySelector('.carousel');
  if (carouselElement) {
    new Carousel(carouselElement);
  }

  // Inicializa outras funcionalidades
  initLazyLoading();
  initSmoothScroll();
  initKeyboardNavigation();
  initImageErrorHandling();
  trackPageView();

  // Event listeners para tracking de cliques em notícias
  document.querySelectorAll('.news-card__link, .program-card__link').forEach((link) => {
    link.addEventListener('click', function () {
      const title = this.querySelector('.news-card__title, .program-card__title')?.textContent;
      trackEvent('Notícia', 'Click', title);
    });
  });

  console.log('JD1 Notícias - Pronto!');
}

// Aguarda o DOM estar pronto
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}

// ==========================================================================
// Service Worker (PWA - Opcional)
// ==========================================================================

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    // Descomente para habilitar PWA
    // navigator.serviceWorker
    //   .register('/service-worker.js')
    //   .then((registration) => {
    //     console.log('Service Worker registrado:', registration);
    //   })
    //   .catch((error) => {
    //     console.log('Erro ao registrar Service Worker:', error);
    //   });
  });
}
