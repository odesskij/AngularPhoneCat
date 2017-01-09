'use strict';

import angular from 'angular';
import ngResource from 'angular-resource';
import service from './service';

const MODULE_NAME = 'core.phone';

const module = angular
  .module(MODULE_NAME, [
    ngResource
  ]);

service(module);

export default MODULE_NAME;
