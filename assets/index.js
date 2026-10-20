// Siddharth Pilli — Portfolio Interactions

document.addEventListener('DOMContentLoaded', () => {
  // Speech AI Audio Widget Wave Toggle
  const audioPlayBtn = document.getElementById('audio-play-btn');
  const audioCard = document.getElementById('audio-card');
  const audioPlayIcon = document.getElementById('audio-play-icon');

  if (audioPlayBtn && audioCard) {
    let isPlaying = false;
    audioPlayBtn.addEventListener('click', () => {
      isPlaying = !isPlaying;
      if (isPlaying) {
        audioCard.classList.add('playing');
        audioPlayIcon.classList.remove('fa-play');
        audioPlayIcon.classList.add('fa-pause');
      } else {
        audioCard.classList.remove('playing');
        audioPlayIcon.classList.remove('fa-pause');
        audioPlayIcon.classList.add('fa-play');
      }
    });
  }

  // Project Filtering
  const filterBtns = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.getAttribute('data-filter');

      projectCards.forEach(card => {
        const category = card.getAttribute('data-category');
        if (filter === 'all' || category === filter) {
          card.style.display = '';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });

  // Copy Email to Clipboard
  const copyBtns = document.querySelectorAll('.copy-email-btn');
  const toast = document.getElementById('toast-notice');

  copyBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const email = 'pillisiddharth@gmail.com';
      navigator.clipboard.writeText(email).then(() => {
        showToast('Email copied to clipboard!');
      }).catch(() => {
        showToast('Email: pillisiddharth@gmail.com');
      });
    });
  });

  function showToast(msg) {
    if (!toast) return;
    toast.querySelector('span').textContent = msg;
    toast.classList.add('show');
    setTimeout(() => {
      toast.classList.remove('show');
    }, 2800);
  }

  // Visual Moments Gallery Lightbox Modal
  const modal = document.getElementById('lightbox-modal');
  const modalImg = document.getElementById('modal-img');
  const modalCaption = document.getElementById('modal-caption');
  const modalClose = document.getElementById('modal-close');
  const galleryItems = document.querySelectorAll('.gallery-item');

  galleryItems.forEach(item => {
    item.addEventListener('click', () => {
      const src = item.getAttribute('data-src');
      const caption = item.getAttribute('data-caption') || '';
      if (modal && modalImg && src) {
        modalImg.src = src;
        modalCaption.textContent = caption;
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
      }
    });
  });

  function closeModal() {
    if (modal) {
      modal.classList.remove('active');
      document.body.style.overflow = '';
    }
  }

  if (modalClose) {
    modalClose.addEventListener('click', closeModal);
  }

  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) closeModal();
    });
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal && modal.classList.contains('active')) {
      closeModal();
    }
  });
});
