import angular from 'angular';
import uirouter from 'angular-ui-router';

import routing from './product-details.routes';
import ProductDetailsController from './product-details.controller';

import itemDetailsData from '../../shared/services/item-details-data.service';

import stripHtmlFromText from '../../shared/filters/stripHtmlFromText.filter';

import './product-details.scss';
  
/*
Return the name of the module (external modules always return their name)
*/
export default angular.module('app.productDetails', [uirouter, itemDetailsData, stripHtmlFromText])
  .config(routing)
  .controller('ProductDetailsController', ProductDetailsController)
  .name;