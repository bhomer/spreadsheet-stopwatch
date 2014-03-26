'use strict';

/*


angular.module('tutoringDatabaseApp', ['firebase'])
    .controller('MainCtrl', function ($scope, $firebase) {
        var ref = new Firebase("https://tutoring-database.firebaseio.com");
*/

angular.module('spreadsheetStopwatchApp')
  .controller('StudentsCtrl', function ($scope, $firebase, $location, $filter) {
      var ref = new Firebase("https://tutoring-database.firebaseio.com/students");
//      add date for each student here min 23 of 2nd recording
      $scope.students = $firebase(ref);
      
      $scope.addSession = function() {
          var ref = new Firebase("https://tutoring-database.firebaseio.com/students/"+$scope.selectedStudent+"/sessions");
          $scope.currentStudentSessions = $firebase(ref);
          $scope.currentStudentSessions.$add({mileage:$scope.students[$scope.selectedStudent].default_mileage, duration:$scope.students[$scope.selectedStudent].default_duration, payment:$scope.students[$scope.selectedStudent].default_payment});
          $location.path("/studentdata")
      }
      //create function on $scope called addSession that gets called on an ng-click in html's button
      //
      //inside that, $scope.students.$add({payment: 0, time: 0});
  });
