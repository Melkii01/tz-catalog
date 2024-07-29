export function renderCompany(company) {
    const c = {
        brand_name: 'Неизвестный',
        articul: '-',
        variants: {},
        img: './assets/images/example.png'
    };

    if (company.brand_name) {
        c.brand_name = company.brand_name;
    }
    if (company.articul) {
        c.articul = company.articul;
    }
    if (company.variants) {
        c.variants = company.variants;
    }
    if (company.img) {
        c.img = company.img;
    }

    return `<div class="product">
               <div class="product-image" style="background-image: url(${c.img});"></div>

               <div class="product-info">
                    <div class="product-title">
                            <div class="product-image-small" style="background-image: url(${c.img});"></div>
                            <div class="product-name">${c.brand_name}</div>
                            <div class="product-article">${c.articul}</div>
                    </div>
                     ${c.variants.map((product) => renderProduct(product)).join(' ')}
               </div>
           </div>`;
}

function renderProduct(product) {
    const p = {
        name: '-',
        delivery: '-',
        stock: '-',
        price: '-'
    };

    if (product.name) {
        p.name = product.name;
    }

    if (product.delivery) {
        p.delivery = product.delivery;
    }
    if (product.stock) {
        p.stock = product.stock;
    }
    if (product.price) {
        p.price = product.price;
    }

    return `<div class="product-item">
                <div class="product-item-names">${p.name}</div>
                
                <div class="product-item-title">Доставка</div>
                <div class="product-item-delivery">${p.delivery} дней</div>
                <div class="product-item-title"></div>

                <div class="product-item-title product-item-title-quantity">Наличие</div>
                <div class="product-item-quantity">${p.stock} шт.</div>
                <div class="product-item-title"></div>

                <div class="product-item-title product-item-title-price">Цена за ед.</div>
                <div class="product-item-price">
                     <span>${p.price}</span>₽
                </div>
                <div class="product-item-title"></div>

                <div class="product-item-title product-item-title-cart">Кратность</div>
                <div class="product-item-cart">
                     <div class="product-item-cart-input">
                          <button class="product-item-cart-input-decrease" type="button"></button>
                          <input type="text" value="1">
                          <button class="product-item-cart-input-increase" type="button"></button>
                     </div>
                     
                     <a href="#">
                               <svg width="32" height="32" viewBox="0 0 32 32" fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                               <path d="M8.79134 20.2075L6.48966 3.89453H3.125M7.25268 9.22637H27.5579C28.2192 9.22637 28.6984 9.85682 28.5214 10.494L25.7099 20.6155C25.45 21.5513 24.5979 22.1989 23.6267 22.1989H10.937C9.85782 22.1989 8.9439 21.4032 8.79544 20.3343L7.25268 9.22637Z"
                                              stroke="#727271" stroke-linecap="round" stroke-linejoin="round"/>
                               <path d="M12.8951 26.5296C12.8951 27.4002 12.1893 28.106 11.3186 28.106C10.448 28.106 9.74219 27.4002 9.74219 26.5296C9.74219 25.6589 10.448 24.9531 11.3186 24.9531C12.1893 24.9531 12.8951 25.6589 12.8951 26.5296Z"
                                              fill="#727271"/>
                               <path d="M24.9008 26.5296C24.9008 27.4002 24.195 28.106 23.3243 28.106C22.4537 28.106 21.7479 27.4002 21.7479 26.5296C21.7479 25.6589 22.4537 24.9531 23.3243 24.9531C24.195 24.9531 24.9008 25.6589 24.9008 26.5296Z"
                                              fill="#727271"/>
                               </svg>
                     </a>
                </div>
                <div class="product-item-hidden"></div>
           </div>`;
}
