import angular from 'angular';

class ItemDetailsData {
  constructor($http) {
    this.$http = $http;
  }

  getItemDetails() {
    //Mock the API request
    return this.$http.get('./item-data.json')
      .then((response) => {
        // success callback
        return response.data.CatalogEntryView[0];
      }, (response) => {
        // failure callback
      });
  }
}

export default angular.module('services.item-details-data', [])
  .service('itemDetailsData', ItemDetailsData)
  .name; 