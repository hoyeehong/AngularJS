angular.module('CalculatorApp', [])
    .controller('CalculatorController', function($scope) {
        $scope.result = function() {
            if ($scope.operator == '+') {
                return $scope.firstNum + $scope.secondNum;
            }
            if ($scope.operator == '-') {
                return $scope.firstNum - $scope.secondNum;
            }        
            if ($scope.operator == '/') {
                return $scope.firstNum / $scope.secondNum;
            }
            if ($scope.operator == '*') {
                return $scope.firstNum * $scope.secondNum;
            }
        };
    });