'use strict'

var mockSocksApp = angular.module('mockSocksApp', [
    'ngRoute',
    'mocksocksControllers'
]);

mockSocksApp.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.
            when('/index', {
                templateUrl: 'partials/nav.html'
            }).
            when('/connection', {
                templateUrl: 'connection.html'
            }).
            otherwise({
                redirectTo: '/connection'
            });
    }]);
