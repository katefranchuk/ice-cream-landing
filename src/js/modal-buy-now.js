(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-buy-now-open]'),
    openModalInMenuBtn: document.querySelector('[data-modal-buy-now-open-in-menu]'),
    closeModalBtn: document.querySelector('[data-modal-buy-now-close]'),
    modalBuyNow: document.querySelector('[data-modal-buy-now]'),
    body: document.querySelector('body'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.openModalInMenuBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modalBuyNow.classList.toggle('is-hidden');
    refs.body.classList.toggle('no-scroll');
  }
})();

