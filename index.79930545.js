!function(){!function(){var e={openMenuBtn:document.querySelector("[data-menu-open]"),closeMenuBtn:document.querySelector("[data-menu-close]"),menu:document.querySelector("[data-menu]"),body:document.querySelector("body"),menuList:document.querySelector(".mob-header-menu")};function o(){e.menu.classList.toggle("mob-menu-hidden"),e.body.classList.toggle("no-scroll")}e.openMenuBtn.addEventListener("click",o),e.closeMenuBtn.addEventListener("click",o),e.menuList.addEventListener("click",(function(){e.menu.classList.add("mob-menu-hidden"),e.body.classList.remove("no-scroll")}))}();new Swiper(".mySwiper",{navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}}),new Swiper(".mySwipertwo",{slidesPerView:1,spaceBetween:30,loop:!0,pagination:{el:".swiper-pagination",clickable:!0}});!function(){var e={openModalBtn:document.querySelector("[data-franchise-open]"),closeModalBtn:document.querySelector("[data-franchise-close]"),franchise:document.querySelector("[data-franchise]"),body:document.querySelector("body")};function o(){e.franchise.classList.toggle("is-hidden"),e.body.classList.toggle("no-scroll")}e.openModalBtn.addEventListener("click",o),e.closeModalBtn.addEventListener("click",o)}(),function(){var e={openModalBtn:document.querySelector("[data-modal-buy-now-open]"),closeModalBtn:document.querySelector("[data-modal-buy-now-close]"),modalBuyNow:document.querySelector("[data-modal-buy-now]"),body:document.querySelector("body")};function o(){e.modalBuyNow.classList.toggle("is-hidden"),e.body.classList.toggle("no-scroll")}e.openModalBtn.addEventListener("click",o),e.closeModalBtn.addEventListener("click",o)}(),function(){var e={openModalBtn:document.querySelector("[data-modal-product-info-open]"),closeModalBtn:document.querySelector("[data-modal-product-info-close]"),modalProduct:document.querySelector("[data-modal-product-info]"),body:document.querySelector("body")};function o(){e.modalProduct.classList.toggle("is-hidden"),e.body.classList.toggle("no-scroll")}e.openModalBtn.addEventListener("click",o),e.closeModalBtn.addEventListener("click",o)}(),function(){var e={openModalBtn:document.querySelector("[data-modal__read-more-open]"),closeModalBtn:document.querySelector("[data-modal__read-more-close]"),modal:document.querySelector("[data-modal__read-more]")};function o(){e.modal.classList.toggle("is-hidden"),e.body.classList.toggle("no-scroll")}e.openModalBtn.addEventListener("click",o),e.closeModalBtn.addEventListener("click",o)}()}();
//# sourceMappingURL=index.79930545.js.map
