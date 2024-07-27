import Brands from './brands.json';
import Products from './products.json';

export class AppBack {

    static getProducts(searchParams) {
        if (Object.keys(searchParams).length !== 0) {

            if (searchParams.page) {

            }
            if (searchParams.brands) {

            }
        }
        return Products;
    }

    static getBrands() {
        return Brands;
    }
}
