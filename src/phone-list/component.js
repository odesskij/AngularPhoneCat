'use strict';

import template from './template.html';

export default function (module) {
  module
    .component('phoneList', {
      template,
      controller: [
        '$http',
        'Phone',
        function PhoneListController($http, Phone) {
          this.phones    = Phone.query();
          this.orderProp = 'age';
        }]
    })
};