import angular from 'angular';
import jquery from 'jquery';
import bootstrap from 'bootstrap';

import uirouter from 'angular-ui-router';
//Add routing
import routing from './app.config';
import productDetails from './views/product-details';

import '../scss/app-styles.scss';

/*
let app = () => {
  return {
    template: require('./app.html'),
    controller: 'AppCtrl',
    controllerAs: 'app'
  }
};

class AppCtrl {
  constructor() {
    this.url = 'https://github.com/preboot/angular-webpack';
  }
}
*/

const MODULE_NAME = 'app';

/*
The convention that all external modules are following is to simply export the name of the module, so uirouter here is the string 'uirouter'.
*/
angular.module(MODULE_NAME, [uirouter, productDetails])
  // .directive('app', app)
  // .controller('AppCtrl', AppCtrl)
  .config(routing);

export default MODULE_NAME;
