'use strict';

import angular from 'angular';
import filter from './filter';

const MODULE_NAME = 'core.checkmark';

const module = angular
  .module(MODULE_NAME, []);

filter(module);

export default MODULE_NAME;
