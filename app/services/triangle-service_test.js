'use strict';

describe('myApp module', function() {
    beforeEach(module('myApp'));

    describe('triangle service', function() {

        it('input should be number', inject(function(triangleService) {
            expect(triangleService.isValidInput(100.2, 100, 100)).toEqual(true);
            expect(triangleService.isValidInput(-100, 1, 1.1)).toEqual(true);
            expect(triangleService.isValidInput('1', 2, 3)).toEqual(false);
            expect(triangleService.isValidInput(5, null, 3)).toEqual(false);
            expect(triangleService.isValidInput(5, 0, 3)).toEqual(true);
            expect(triangleService.isValidInput(5, 0, false)).toEqual(false);
            expect(triangleService.isValidInput(5, 3, NaN)).toEqual(false);
            expect(triangleService.isValidInput(9007199254740990, 3, 3)).toEqual(true);
            expect(triangleService.isValidInput(4, 9007199254740992, 3)).toEqual(false);
        }));

        it('should check valid of triangle', inject(function(triangleService) {
            expect(triangleService.isValidTriangle(1, 1, 1)).toEqual(true);
            expect(triangleService.isValidTriangle(1, 1, 100)).toEqual(false);
            expect(triangleService.isValidTriangle(100, 102, -102)).toEqual(false);
            expect(triangleService.isValidTriangle(1, 2, 3)).toEqual(false);
            expect(triangleService.isValidTriangle(1, 123, 9)).toEqual(false);
            expect(triangleService.isValidTriangle(1.1, 2, 3)).toEqual(true);
        }));

        it('Type of triangle', inject(function(triangleService) {
            expect(triangleService.getTriangleType(1, 1, 1)).toEqual('Equilateral');
            expect(triangleService.getTriangleType(2, 2, 1)).toEqual('Isosceles');
            expect(triangleService.getTriangleType(3, 4, 5)).toEqual('Scalene');
            expect(triangleService.getTriangleType(1, 1, 100)).toEqual('Not a triangle');
        }));
    });
});
