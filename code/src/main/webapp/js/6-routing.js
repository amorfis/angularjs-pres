angular.module('routingModule', [])
    .config(function($routeProvider) {
      $routeProvider
          .when("/", {template: "Root of the app <a href='#/edit/1'>1</a>"})
          .when("/edit/:someId", {controller: EditController, template: "Edition of {{someId}}"})
          .otherwise({redirectTo: "/"});
    })

function EditController($scope, $routeParams) {
  $scope.someId = $routeParams.someId
}
