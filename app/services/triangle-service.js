'use strict';

angular
    .module('myApp')
    .service('triangleService', triangleService);

function triangleService() {

    return {
        isValidTriangle: isValidTriangle,
        isValidInput: isValidInput,
        getTriangleType: getTriangleType
    };

    function isValidInput(s1, s2, s3) {
        return [s1, s2, s3].every(function (a) {
            return angular.isNumber(a);
        });
    }

    function isValidTriangle(s1, s2, s3) {
        var sides = [s1, s2, s3].sort();
        var aboveZero = sides.every(function (a) {
            return a > 0 && a < Infinity;
        });
        return aboveZero && (sides[0] + sides[1] > sides[2]);
    }

    function getTriangleType(s1, s2, s3) {
        if (!isValidInput(s1, s2, s3) || !isValidTriangle(s1, s2, s3)) {
            return 'Not a triangle';
        }

        if (s1 === s2 && s2 === s3) {
            return 'Equilateral';
        }

        if (s1 === s2 || s2 === s3 || s3 === s1) {
            return 'Isosceles';
        }

        return 'Scalene';
    }

}