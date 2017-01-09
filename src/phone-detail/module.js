'use strict';

import angular from 'angular';
import ngRoute from 'angular-route';
import core from '../core/module';

import component from './component';

const MODULE_NAME = 'phoneDetail';

const module = angular
  .module(MODULE_NAME, [
    ngRoute,
    core
  ]);

component(module);

export default MODULE_NAME;