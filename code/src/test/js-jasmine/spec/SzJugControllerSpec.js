describe("Test Controller", function() {

  it("Should 2 equal 2", function() {
    // Then
    expect(2).toEqual(2);
  });

  it("Should get current date", function() {
    // Given
    var scope;

    inject(function($rootScope) {
      scope = $rootScope
      new SzJugController(scope)
    })

    // When
    scope.getTime()

    // Then
    expect(scope.someValue.getDay()).toEqual(new Date().getDay());
    expect(scope.someValue.getHours()).toEqual(new Date().getHours());
    expect(scope.someValue.getMinutes()).toEqual(new Date().getMinutes());
  });

});

