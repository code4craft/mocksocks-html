'use strict';

/* Controllers */

var mocksocksControllers = angular.module('mocksocksControllers', []);

mocksocksControllers.controller('ConnectionListCtrl',
    function ($scope) {
        $scope.connections = [
            {
                'name': 'www.oschina.net'
            },
            {
                'name': 'www.baidu.net'
            }
        ]
    });