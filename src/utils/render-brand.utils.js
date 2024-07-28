export function renderBrandUtils(brand, urlBrands) {
    let checked = '';
    if (urlBrands) {
        urlBrands.split(',').find((item) => {
            if (item === brand.brand_id) {
                checked = 'checked';
            }
        })
    }

    // document.getElementById(`brand${brand.brand_id}`).addEventListener('change', function () {
    //     const checkedBrand = this.id.split('brand')[1];
    //     console.log(checkedBrand)
    //
    //     // let checkedBrands = [...that.routeParams.brands];
    //     if (this.checked) {
    //         //     checkedBrands.push(checkedBrand)
    //         //     console.log(checkedBrands)
    //         console.log("Checkbox is checked..");
    //         // console.log(that.routeParams)
    //         // console.log(that.routeParams.brands)
    //         // if (checkedBrands.length >= 1) {
    //         // console.log(that.routeParams.brands)
    //         // that.routeParams.brands.split(',').push(checkedBrand)
    //         // console.log("push");
    //         // console.log(that.routeParams.brands)
    //         // let page = null;
    //         // if (that.routeParams.page) {
    //         //     page = that.routeParams.page;
    //         //
    //         //     location.href = '/' + '?page=' + page + '&brands=' + that.routeParams.brands.join(',');
    //         // }
    //         // location.href = '/' + '?brands=' + that.routeParams.brands.join(',');
    //         // } else {
    //         //
    //         // that.routeParams.brands = Array(checkedBrand);
    //         // console.log("create");
    //         // console.log(that.routeParams.brands)
    //         // // Router.activateRoute.bind(this)
    //         // let page = null;
    //         // if (that.routeParams.page) {
    //         //     page = that.routeParams.page;
    //         //     location.href = '/' + '?page=' + page + '&brands=' + that.routeParams.brands;
    //         // }
    //         // location.href = '/' + '?brands=' + that.routeParams.brands;
    //
    //         // }
    //
    //     } else {
    //         console.log("Checkbox is not checked..");
    //     }
    // });

    // const a = () => {
    //     console.log("Checkbox is not checked..");
    // }

    return `<div class="brands-item">
                 <label for="brand${brand.brand_id}" >
                     <input type="checkbox" id="brand${brand.brand_id}" ${checked} >
                     ${brand.brand_name}
                 </label>
            </div>`;
}
//
// export function a(){
//     console.log("Checkbox is not checked..");
// }

