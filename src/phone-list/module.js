'use strict';

import angular from 'angular';
import ngRoute from 'angular-route';
import corePhone from '../core/module';
import component from './component';

const MODULE_NAME = 'phoneList';

const module = angular
  .module(MODULE_NAME, [
    ngRoute,
    corePhone
  ]);

component(module);

export default MODULE_NAME;