import '../../styles/pages/catalog.scss';
import {UrlManager} from "../../utils/url-manager";
import {AppBack} from "../../../data/app-back";
import {Router} from "../../router";

export class Catalog {
    constructor() {
        this.routeParams = UrlManager.getQueryParams();

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
        const brandsItemsElement = document.getElementById('brands-items');

        this.brands.forEach((brand) => {
            // console.log(brand)
            if (brand && brand.brand_id && brand.brand_name) {
                const brandElement = document.createElement('div');
                brandElement.className = 'brands-item';

                const brandLabelElement = document.createElement('label');
                brandLabelElement.setAttribute("for", 'brand' + brand.brand_id);
                brandElement.appendChild(brandLabelElement);

                const brandInputElement = document.createElement('input');
                brandInputElement.setAttribute("type", 'checkbox');
                brandInputElement.setAttribute("id", 'brand' + brand.brand_id);

                if (this.routeParams.brands) {
                    this.routeParams.brands.split(',').find((item) => {
                        if (brand.brand_id === item) {
                            brandInputElement.setAttribute("checked", 'checked');
                        }
                    })
                }
                brandLabelElement.appendChild(brandInputElement);

                const brandLabelTextElement = document.createElement('div');
                brandLabelTextElement.innerText = brand.brand_name;
                brandLabelElement.appendChild(brandLabelTextElement);

                const that = this;
                brandInputElement.addEventListener('change', function () {
                    const checkedBrand = this.id.split('brand')[1];
                    // console.log(that.routeParams.brands)

                    // let checkedBrands = [...that.routeParams.brands];
                    if (this.checked) {
                        //     checkedBrands.push(checkedBrand)
                        //     console.log(checkedBrands)
                        console.log("Checkbox is checked..");
                        // console.log(that.routeParams)
                        // console.log(that.routeParams.brands)
                        // if (checkedBrands.length >= 1) {
                        // console.log(that.routeParams.brands)
                        // that.routeParams.brands.split(',').push(checkedBrand)
                        // console.log("push");
                        // console.log(that.routeParams.brands)
                        // let page = null;
                        // if (that.routeParams.page) {
                        //     page = that.routeParams.page;
                        //
                        //     location.href = '/' + '?page=' + page + '&brands=' + that.routeParams.brands.join(',');
                        // }
                        // location.href = '/' + '?brands=' + that.routeParams.brands.join(',');
                        // } else {
                        //
                        // that.routeParams.brands = Array(checkedBrand);
                        // console.log("create");
                        // console.log(that.routeParams.brands)
                        // // Router.activateRoute.bind(this)
                        // let page = null;
                        // if (that.routeParams.page) {
                        //     page = that.routeParams.page;
                        //     location.href = '/' + '?page=' + page + '&brands=' + that.routeParams.brands;
                        // }
                        // location.href = '/' + '?brands=' + that.routeParams.brands;

                        // }

                    } else {
                        console.log("Checkbox is not checked..");
                    }
                });

                brandsItemsElement.appendChild(brandElement);

            }
        })
        this.showProducts();
    }

    showProducts() {
        console.log(AppBack.getProducts());
        AppBack.getProducts().forEach((product) => {

        })


    }
}
