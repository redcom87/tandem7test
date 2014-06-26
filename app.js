var t7App = angular.module('t7App', ['ngRoute']);





t7App.config(function($routeProvider, $locationProvider) {


    $routeProvider.when('/', {


			  templateUrl: 'begin.html',


			  controller: 'mainCtrl'


		}).when('/select', {


        templateUrl: 'select.html',


        controller: 'playersAndTeamCtrl'


    }).when('/view', {


        templateUrl: 'end.html',


        controller: 'viewCtrl'


    });


});





t7App.controller('mainCtrl', function($scope, $location){


  $scope.next = function(){


    $location.path('/select');


  };


  


});





t7App.controller('playersAndTeamCtrl', function($scope, $location){


  $scope.disabled = true;


  $scope.next = function(){


    $location.path('/view');


  };


  


});





t7App.controller('viewCtrl', function($scope){});
