function RandomNumbersController($scope, randomNumberService) {
  $scope.getValueFromService = function() {
    $scope.someValue = randomNumberService.generateRandom()
  }
}