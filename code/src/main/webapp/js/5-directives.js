angular.module('directivesModule', [])
    .directive("header", function() {
      return {
        restrict: "E",
        replace: "true",
        template: "<p>Copyright Szczecin JUG 2013</p>"
      }
    })
    .directive("data", function() {
      return {
        restrict: "E",
        replace: true,
        templateUrl: "partial/data.html",
        scope: {
          parameters: "="
        }
      }
    })
    .directive("loginForm", function() {
      return {
        restrict: "E",
        replace: true,
        templateUrl: "partial/loginForm.html",
        scope: {
          loginFunction: "&"
        },
        link: function(scope) {
          scope.login = function(username, password) {
            scope.loginFunction( { username: username, password: password })
          }
        }
      }
    })
