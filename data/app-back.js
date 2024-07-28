import BrandsData from './brands.json';
import ProductsData from './products.json';

export class AppBack {

    static getBrands(searchParams) {
        // let brands = [];
        //
        // if (Object.keys(searchParams).length !== 0) {
        //     if (searchParams.brands.length!==0){
        //         searchParams.brands.forEach((brandUrl) => {
        //
        //         });
        //     }
        //
        //
        //
        //     return brands;
        // }
        return BrandsData.filter(brand => brand.brand_id && brand.brand_name).sort(function IHaveAName(a, b) {
            return b.brand_name < a.brand_name ? 1
                : b.brand_name > a.brand_name ? -1
                    : 0;
        });
    }

    static getProducts() {
        return ProductsData.slice(0, 30);
    }

}

// brands.push(BrandsData.filter(brand => {
//     if (Number(brand.brand_id) === Number(brandUrl)
//         && brand.brand_id && brand.brand_name) {
//         return brand;
//     }
// })[0]);
