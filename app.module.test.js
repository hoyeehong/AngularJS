'use strict';

describe('CalculatorApp', function() { //Loading module
  beforeEach(module('CalculatorApp'));

  describe('CalculatorController', function() { //Testing the controller

    it('should have CalculatorController working', function() {   
      var controller = $controller('PasswordController');
      expect(controller).toBeDefined();
    });
  });
});