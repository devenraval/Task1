// JavaScript Document// Code goes here
(function() {
    var app = angular.module("chart", ["chart.js", "ui.bootstrap"]);
    app.controller('dataBox', function($scope,$http) {
        $http.get('json/data.json').then(function (res) {
        $scope.ocw = res.data;
    });
    });		
})();