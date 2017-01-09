'use strict';

export default function (module) {
  return module
    .filter('checkmark', function () {
      return function (input) {
        return input ? '\u2713' : '\u2718';
      };
    })
}