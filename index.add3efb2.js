new Swiper(".mySwiper",{navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}}),new Swiper(".mySwipertwo",{slidesPerView:1,spaceBetween:30,loop:!0,pagination:{el:".swiper-pagination",clickable:!0}});(()=>{const e={openModalBtn:document.querySelector("[data-franchise-open]"),closeModalBtn:document.querySelector("[data-franchise-close]"),franchise:document.querySelector("[data-franchise]"),body:document.querySelector("body")};function o(){e.franchise.classList.toggle("is-hidden"),e.body.classList.toggle("no-scroll")}e.openModalBtn.addEventListener("click",o),e.closeModalBtn.addEventListener("click",o)})(),(()=>{const e={openModalBtns:document.querySelector("[data-modal-buy-now-open]"),closeModalBtn:document.querySelector("[data-modal-buy-now-close]"),modal:document.querySelector("[data-modal-buy-now]"),body:document.querySelector("body")};function o(){e.modal.classList.toggle("is-hidden"),e.body.classList.toggle("no-scroll")}e.openModalBtns.forEach((e=>{e.addEventListener("click",o)})),e.closeModalBtn.addEventListener("click",o)})(),(()=>{const e={openModalBtn:document.querySelector("[data-modal-product-info-open]"),closeModalBtn:document.querySelector("[data-modal-product-info-close]"),modalProduct:document.querySelector("[data-modal-product-info]"),body:document.querySelector("body")};function o(){e.modalProduct.classList.toggle("is-hidden"),e.body.classList.toggle("no-scroll")}e.openModalBtn.addEventListener("click",o),e.closeModalBtn.addEventListener("click",o)})();
//# sourceMappingURL=index.add3efb2.js.map