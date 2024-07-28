import '../../styles/pages/catalog.scss';
import {UrlManagerUtils} from "../../utils/url-manager.utils";
import {AppBack} from "../../../data/app-back";
import {renderCompany} from "../../utils/render-product.utils";
import {renderBrandUtils} from "../../utils/render-brand.utils";

export class Catalog {
    constructor() {
        this.routeParams = UrlManagerUtils.getQueryParams();

        this.init();
    }

    init() {
        let searchParams = {};
        if (this.routeParams.page) {
            searchParams.page = this.routeParams.page;
            // console.log(searchParams.page);
        }
        if (this.routeParams.brands) {
            searchParams.brands = this.routeParams.brands.split(',');
            // console.log(searchParams.brands);
        }
        this.brands = AppBack.getBrands(searchParams);
        // console.log(this.brands)
        this.showBrands();
    }

    showBrands() {
        const brandsElement = document.getElementById('brands-items');
        console.log(this.brands)

        this.brands.forEach((brand) => {
            // console.log(brand)

            brandsElement.insertAdjacentHTML('beforeend', renderBrandUtils(brand));

        })

        this.showProducts();
    }

    showProducts() {
        // console.log(AppBack.getProducts());
        const productsElement = document.getElementById('products');

        AppBack.getProducts().forEach((product) => {
            productsElement.insertAdjacentHTML('beforeend', renderCompany(product));
        })
    }
}
