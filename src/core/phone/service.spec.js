'use strict';

import angular from 'angular';

describe('Phone', function () {
  let $httpBackend;
  let Phone;
  const phonesData = [
    { name: 'Phone X' },
    { name: 'Phone Y' },
    { name: 'Phone Z' }
  ];

  // Add a custom equality tester before each test
  beforeEach(function () {
    jasmine.addCustomEqualityTester(angular.equals);
  });

  // Load the module that contains the `Phone` service before each test
  beforeEach(angular.mock.module('core.phone'));

  // Instantiate the service and "train" `$httpBackend` before each test
  beforeEach(angular.mock.inject(function (_$httpBackend_, _Phone_) {
    $httpBackend = _$httpBackend_;
    $httpBackend
      .expectGET('/api/phones/phones.json')
      .respond(phonesData);

    Phone = _Phone_;
  }));

  // Verify that there are no outstanding expectations or requests after each test
  afterEach(function () {
    $httpBackend.verifyNoOutstandingExpectation();
    $httpBackend.verifyNoOutstandingRequest();
  });

  it('should fetch the phones data from `/phones/phones.json`', function () {
    const phones = Phone.query();

    expect(phones).toEqual([]);

    $httpBackend.flush();
    expect(phones).toEqual(phonesData);
  });

});
