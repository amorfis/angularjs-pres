function SzJugController($scope) {
  $scope.someValue = "hello"

  $scope.callTimeService = function() {
    $scope.someValue = new Date()
  }
}
