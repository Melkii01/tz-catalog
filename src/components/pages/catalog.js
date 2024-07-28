import '../../styles/pages/catalog.scss';
import {UrlManagerUtils} from "../../utils/url-manager.utils";
import {AppBack} from "../../../data/app-back";
import {renderCompany} from "../../utils/render-product.utils";
import {renderBrandUtils} from "../../utils/render-brand.utils";

export class Catalog {
    countProducts = 30;

    constructor() {
        // Получаем query параметры
        this.routeParams = UrlManagerUtils.getQueryParams();

        this.init();
    }

    init() {
        // По query параметрам устанавливаем флаг checked и показываем все бренды
        let searchParams = {};
        if (this.routeParams.brands) {
            searchParams.brands = this.routeParams.brands.split(',');
        }
        this.brands = AppBack.getBrands(searchParams);
        this.showBrands();

        // Показать ещё
        document.getElementById('showMoreBtn').addEventListener('click', () => this.showProducts(true));
    }

    // Показать бренды
    showBrands() {
        const brandsElement = document.getElementById('brands-items');
        this.brands.forEach((brand) => {
            brandsElement.insertAdjacentHTML('beforeend', renderBrandUtils(brand, this.routeParams.brands));
            // document.getElementById(`brand${brand.brand_id}`).addEventListener('change', function () {
            //     const checkedBrand = this.id.split('brand')[1];
            //     console.log(checkedBrand)
            // });

        });
        this.showProducts();
    }

    // Показать продукты к выбранным брендам
    showProducts(showMore = false) {
        const productsElement = document.getElementById('products');

        // При 'показать ещё' получаем дополнительные данные
        if (!showMore) {
            AppBack.getProducts(this.countProducts).forEach((product) => {
                productsElement.insertAdjacentHTML('beforeend', renderCompany(product));
            });
        } else {
            this.countProducts += 30;
            AppBack.getProducts(this.countProducts).forEach((product) => {
                productsElement.insertAdjacentHTML('beforeend', renderCompany(product));
            });
        }
    }
}
