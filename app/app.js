'use strict';

angular
    .module('myApp', [])
    .controller('Triangle', ['triangleService', function(triangleService) {

        this.getTriangleType = triangleService.getTriangleType;
        this.sideA = this.sideB = this.sideC = 12;
        this.maxSafeInteger = Number.MAX_SAFE_INTEGER;

}]);