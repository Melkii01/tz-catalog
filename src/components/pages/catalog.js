import '../../styles/pages/catalog.scss';
import {UrlManager} from "../../utils/url-manager";
import {AppBack} from "../../../data/app-back";

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
        AppBack.getProducts(searchParams);
    }
}
