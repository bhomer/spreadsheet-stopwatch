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
          
          //Option 1: Add new session numbers to current totals, send new totals to DB, define mileageTotal variable below
//        var mileageTotal = () {
//          $scope.totals.$add({
//            mileageTotal: $scope.totals.mileageTotal + $scope.students[$scope.selectedStudent].default_mileage,
//            durationTotal: $scope.totals.mileageTotal + $scope.students[$scope.selectedStudent].default_duration,
//            paymentTotal: $scope.totals.mileageTotal + $scope.students[$scope.selectedStudent].default_payment    
//          });
//        }
          
          
          //Option 2: Use a standard js file (not angular) and jquery to create totals
        
          $scope.currentStudentSessions.$add({
              date     : $scope.students[$scope.selectedStudent].session_date,
              mileage  : $scope.students[$scope.selectedStudent].default_mileage,
              duration : $scope.students[$scope.selectedStudent].default_duration,
              payment  : $scope.students[$scope.selectedStudent].default_payment,
              paid     : $scope.students[$scope.selectedStudent].paid
          });
          
          $location.path("/studentdata")
      }
      
      //Option 3: Use angular to loop through student sessions and create totals on the fly.
      
      
      //create function on $scope called addSession that gets called on an ng-click in html's button
      //
      //inside that, $scope.students.$add({payment: 0, time: 0});
  });
