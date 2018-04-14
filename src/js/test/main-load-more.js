import exclusiveProductsImg from '../components/exclusive-product';


const mainLoadMore = document.querySelector('#main-load-more');

const mainLoadMoreClickHandler = () => {
  let loadCound = 0;

  return function (event) {

    this.classList.add('is-loaded');

    const request = new Promise((resolve, reject) => {
      setTimeout(resolve, 1000);
    });

    request.then(data => {
      for (let i = 0; i < 8; i++) {
        const good = document.createElement('div');
        const isSale = Math.random() > 0.7;
        const price = Math.ceil(Math.random() * 100) + 100;
        const exclusive = Math.random() > 0.95;

        if (exclusive) {
          const idImg = Math.ceil(Math.random() * 2 + 1)
          good.className = 'exclusive-product';
          good.innerHTML = `
            <div class="exclusive-product__img">
              <img data-depth="0.6" class="object-fit-cover lazyload" src="data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=" data-src="img/goods/exclusive/${idImg}.png" alt="New Now: Striped cotton">
            </div>
            <span class="exclusive-product__label product-label product-label_white">new</span>
            <div class="exclusive-product__text-wrapper">
              <span class="exclusive-product__subtitle">lifestyle</span>
              <h4 class="exclusive-product__title">New Now: Striped cotton</h4>
            </div>
            <div class="exclusive-product__button button button_white">
              <span class="exclusive-product__price">$50.00 USD</span>|
              <span class="exclusive-product__action">By now</span>
            </div>`;
        } else {
          const idImg = Math.ceil(Math.random() * 8);
          good.className = 'product';
          good.innerHTML = `
          ${isSale ? '<span class="product__sale-mark product-label">sale</span>' : ''}
          <a href="#" class="product__photo">
						<img class="lazyload" src="{{hp.pixel}}" data-src="img/goods/${idImg}.png" alt="Message cotton t-shirt">
					</a>
          <h4 class="product__title">Test product</h4>
          <div class="product__price-wrapper">
            ${isSale ? `<span class="product__old-price">$${Math.ceil(Math.random() * 50) + price}.00 USD</span>` : ''}
						<span class="product__price">$${price}.00 USD</span>
					</div>`;
        }

        this.parentNode.before(good);
        if (exclusive) {
          const img = good.querySelector('.exclusive-product__img');
          exclusiveProductsImg(img);
        }
      }

      this.classList.remove('is-loaded');
      if (++loadCound >= 3) this.parentNode.remove();
    })

  }
}

mainLoadMore.addEventListener('click', mainLoadMoreClickHandler());