import 'angular';
import 'angular-mocks/angular-mocks';

const testsContext = require.context("./", true, /\.spec\.js/);

testsContext.keys().forEach(testsContext);