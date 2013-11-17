'use strict';

/* Controllers */

var request = require("request")

var mocksocksControllers = angular.module('mocksocksControllers', []);

mocksocksControllers.controller('ConnectionListCtrl',
    function ($scope) {
        request({
                url: "http://127.0.0.1:8000/connectionList",
                method: "GET"
            }, function (error, response, body) {
                if (!error && response.statusCode == 200) {
                    $scope.connections = JSON.parse(body)
                    console.log($scope.connections)
                    $scope.$apply()
                }
            }
        );
    });