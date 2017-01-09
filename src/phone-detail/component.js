'use strict';

import template from './template.html';

export default function (module) {
  return module
    .component('phoneDetail', {
      template,

      controller: [
        '$http',
        '$routeParams',
        'Phone',
        function ($http, $routeParams, Phone) {

          this.setImage = (url) => {
            this.mainImageUrl = url;
          };

          this.phone = Phone.get({ phoneId: $routeParams.phoneId }, (phone) => {
            this.setImage(phone.images[0])
          });
        }
      ]
    });
}
