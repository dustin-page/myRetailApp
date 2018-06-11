import angular from 'angular';
import angularSanitize from 'angular-sanitize';
import $ from 'jquery';
window.jQuery = $;
window.$ = $;
import bootstrap from 'bootstrap';


import slickCarousel from 'slick-carousel';
import slick from 'angular-slick';

import '../../node_modules/slick-carousel/slick/slick.scss';
import '../../node_modules/slick-carousel/slick/slick-theme.scss';

import uirouter from 'angular-ui-router';
//Add routing
import routing from './app.config';

import productDetails from './views/product-details';
import '../app/data/item-data.json';
 
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
angular.module(MODULE_NAME, [uirouter, slick, angularSanitize, productDetails])
  // .directive('app', app)
  // .controller('AppCtrl', AppCtrl)
  .config(routing);

export default MODULE_NAME;
