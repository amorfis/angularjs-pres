function DataDirectiveController($scope) {
  $scope.someData = [
    {
      name: "name",
      value: "Paweł"
    },
    {
      name: "surname",
      value: "Stawicki"
    },
    {
      name: "organisation",
      value: "Szczecin JUG"
    }
  ]
}

function LoginFormDirectiveController($scope) {
  $scope.login = function(username, password) {
    if (username == password) {
      alert("Logged in " + username)
    } else {
      alert("Login failed")
    }
  }
}