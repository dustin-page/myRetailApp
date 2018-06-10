export default class ProductDetailsController {
    constructor(itemDetailsData, itemDetails) {

      this.product = itemDetails;
      this.name = 'Product Details';

      console.log('itemDetails', itemDetails);
    }
  
    changeName() {
      this.name = 'angular-tips';
    }
  }

  ProductDetailsController.$inject = ['itemDetailsData', 'itemDetails'];