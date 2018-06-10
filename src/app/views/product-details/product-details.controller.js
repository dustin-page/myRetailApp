
import ratingStarActive from '../../../images/rating-star-active.png';
import ratingStar from '../../../images/rating-star.png';

export default class ProductDetailsController {
    constructor(itemDetailsData, itemDetails, $filter) {
      
      this.$filter = $filter;

      this.product = itemDetails;
      this.name = 'Product Details';

      this.maxStarRating = 5;
    }
  
    changeName() {
      this.name = 'angular-tips';
    }

    formatReviewDate(date) {
        let dateObj = new Date(date);
        return this.$filter('date')(dateObj.getTime(), "MMMM, d, yyyy");
    }

    getOverallStarRating(num){
        return new Array(num);   
    }

    getRatingStarSrc(index, overallRating){
        return index <= overallRating ? ratingStarActive : ratingStar;
    }

  }

  ProductDetailsController.$inject = ['itemDetailsData', 'itemDetails', '$filter'];