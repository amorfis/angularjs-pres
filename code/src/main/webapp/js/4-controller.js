function DateController($scope, currentDateService) {
  $scope.getValueFromService = function() {
    $scope.someValue = currentDateService.getCurrentDate()
  }

  $scope.addOneDay = function() {
    var date = $scope.someValue
    if (date) {
      $scope.someValue = new Date(date.getFullYear(), date.getMonth(), date.getDate()+1)
    }
  }
}