routes.$inject = ['$stateProvider'];

export default function routes($stateProvider) {
  $stateProvider
    .state('product-details', {
      url: '/',
      template: require('./product-details.template.html'),
      controller: 'ProductDetailsController',
      controllerAs: 'pd',
      resolve: {
        itemDetails: ['itemDetailsData', (itemDetailsData) => {
          return itemDetailsData.getItemDetails();
        }]
      }
    });
}