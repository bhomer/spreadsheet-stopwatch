'use strict';

angular.module('spreadsheetStopwatchApp')
  .service('studentservice', function getStudents($q, $http) {
      return {
          //change name to getStudents
          //change url to parse url
          //look up how to modify headers in $http request (pass Parse credentials)
          getStudents: function (objectId) {
              var deferred = $q.defer();
              
              $http({
                  method: 'GET',
                  headers: {
                    'X-Parse-Application-Id':'bD2pS0o4TiiAw6epInWXluNAxTacZITpDE8Rdh1v',
                    'X-Parse-REST-API-Key':'BjP9OqQdN6BoJa7t4yEUwsnGgpQxjHyfSr0oOVwF'
                  },
                  url: 'https://api.parse.com/1/classes/Students'}).success(function (data, status, headers, config) {
                  
                      deferred.resolve(data.results);
                  
                  
              }).error(function (data, status, headers, config) {
                  deferred.reject(data);
              });
                
              return deferred.promise;
          },
          //add method called createSession, have it accept student id
          //inside this method, do a method: 'POST' to https://api.parse.com/1/classes/Students/
      }
    // AngularJS will instantiate a singleton by calling "new" on this function
  });


//studentservice needs to talk to parse and GET all the students that are currently in the parse api and then return that to angular
//
//team-tmnt has example of how to create service that talks to api and gets data rbracket
//
//this is what the app service will call 
//