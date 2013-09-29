angular.module('dependencyModule', ['ui.date']).
    value('currentDateService', {
      getCurrentDate: function() {
        return new Date()
      }
    })
