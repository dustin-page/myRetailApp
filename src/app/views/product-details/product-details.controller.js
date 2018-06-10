export default class ProductDetailsController {
    constructor(itemDetailsData, itemDetails, $filter) {
      
      this.$filter = $filter;

      this.product = itemDetails;
      this.name = 'Product Details';

      console.log('itemDetails', itemDetails);
    }
  
    changeName() {
      this.name = 'angular-tips';
    }

    formatReviewDate(date) {
        let dateObj = new Date(date);
        return this.$filter('date')(dateObj.getTime(), "MMMM, d, yyyy");
    }

  }

  ProductDetailsController.$inject = ['itemDetailsData', 'itemDetails', '$filter'];