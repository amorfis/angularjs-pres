function SzJugController($scope) {
  $scope.someValue = "hello"

  $scope.callSomeService = function() {
    $scope.someValue = 5
  }
}
