function SzJugController($scope) {
  $scope.someValue = "hello"

  $scope.getTime = function() {
    $scope.someValue = new Date()
  }
}
