'use strict'

var mockSocksApp = angular.module('mockSocksApp', [
    'ngRoute'
]);

mockSocksApp.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.
            when('/index', {
                templateUrl: 'partials/nav.html'
            }).
            otherwise({
                redirectTo: '/index'
            });
    }]);
