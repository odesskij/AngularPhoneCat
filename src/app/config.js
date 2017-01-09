'use strict';

export default function (module) {
  return module
    .config([
      '$locationProvider',
      '$routeProvider',
      function ($locationProvider, $routeProvider) {
        $locationProvider.hashPrefix('!');

        $routeProvider
          .when('/phones', {
            template: ` <phone-list></phone-list>`
          })
          .when('/phones/:phoneId', {
            template: `<phone-detail></phone-detail>`
          })
          .otherwise('/phones');
      }
    ])
}