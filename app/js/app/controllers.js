'use strict';

/* Controllers */

var mocksocksControllers = angular.module('mocksocksControllers', []);

mocksocksControllers.controller('ConnectionListCtrl',
    function ($scope, $http) {
        $http({method: 'GET', url: 'http://127.0.0.1:8000/connectionList'}).
            success(function (data, status, headers, config) {
                $scope.connections = data;
            }).
            error(function (data, status, headers, config) {
                alert("Server is not running!")
            });
    });