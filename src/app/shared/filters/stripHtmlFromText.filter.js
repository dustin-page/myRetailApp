import angular from 'angular';

function stripHtmlFromText() {
    return function(text) {
      return  text ? String(text).replace(/<[^>]+>/gm, '') : '';
    };
  }

export default angular.module('filters.strip-html-from-text', [])
.filter('stripHtmlFromText', stripHtmlFromText)
.name;
