'use strict';

angular
    .module('myApp', [])
    .controller('Triangle', ['triangleService', function(triangleService) {

        this.getTriangleType = triangleService.getTriangleType;

}]);