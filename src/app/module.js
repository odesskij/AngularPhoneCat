'use strict';

import angular from 'angular';
import ngAnimate from 'angular-animate';
import ngRoute from 'angular-route';
import core from '../core/module';
import phoneList from '../phone-list/module';
import phoneDetail from '../phone-detail/module';

import './app.scss';
import 'bootstrap/dist/css/bootstrap.css';

import config from './config';
import animations from './animations';

const app = angular
  .module('App', [
    ngAnimate,
    ngRoute,
    core,
    phoneList,
    phoneDetail
  ]);

[config, animations]
  .forEach((definition) =>
    definition(app));

export default app;
