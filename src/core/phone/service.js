'use strict';

export default function (module) {
  return module
    .factory('Phone', [
      '$resource',
      function ($resource) {
        return $resource('/api/phones/:phoneId.json', {}, {
          query: {
            method:  'GET',
            params:  { phoneId: 'phones' },
            isArray: true
          }
        });
      }
    ])
};
