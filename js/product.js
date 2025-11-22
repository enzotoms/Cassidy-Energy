AOS.init();

  // Filtering logic
  function filterProducts(category) {
    const cards = document.querySelectorAll('.product-card');

    cards.forEach(card => {
      if (category === 'all' || card.dataset.category === category) {
        card.style.display = 'block';
        setTimeout(() => card.classList.remove('fade-out'), 50);
      } else {
        card.classList.add('fade-out');
        setTimeout(() => (card.style.display = 'none'), 300);
      }
    });
  }