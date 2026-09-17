// ========================================
// TOP SELLING PRODUCTS SWIPER
// ========================================
const productSwiper = new Swiper('.product_boxes', {
    slidesPerView: 2,
    spaceBetween: 6,

    navigation: {
        nextEl: '.product_next',
        prevEl: '.product_prev',
    },

    pagination: {
        el: '.product_pagination',
        clickable: true,
    },
});