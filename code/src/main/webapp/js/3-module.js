angular.module('randomsModule', []).
    value('randomNumberService', {
      generateRandom: function() {
        return Math.random()
      }
    })
