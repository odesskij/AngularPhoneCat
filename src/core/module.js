'use strict';

import angular from 'angular';
import phone from './phone/module';
import checkmark from './checkmark/module';

const MODULE_NAME = 'core';

angular
  .module(MODULE_NAME, [
    phone,
    checkmark
  ]);

export default MODULE_NAME;