const assert = require('assert');
const calculateDistancePoints = require('./calculateDistancePoints.js');

describe('calculateDistancePoints', () => {
    describe('normal hill', () => {
        it('should return 86', () => {
            const actual = calculateDistancePoints(111, 'normal', 98);
            const expected = '86';
            assert.equal(actual, expected);
        });
        it('should return 77', () => {
            const actual = calculateDistancePoints(106.5, 'normal', 98);
            const expected = '77';
            assert.equal(actual, expected);
        });
    });
     describe('big hill', () => {
        it('should return 85.2', () => {
            const actual = calculateDistancePoints(134, 'big', 120);
            const expected = '85.2';
            assert.equal(actual, expected);
        });
        it('schould return 84.3', () => {
            const actual = calculateDistancePoints(133.5, 'big', 120);
            const expected = '84.3';
            assert.equal(actual, expected);
        });
    });
    describe('mammoth hill', () => {
        it('should return 153', () => {
            const actual = calculateDistancePoints(227.5, 'mammoth', 200);
            const expected = '153';
            assert.equal(actual, expected);
        });
        it('should return 151.2', () => {
            const actual = calculateDistancePoints(226, 'mammoth', 200);
            const expected = '151.2';
            assert.equal(actual, expected);
        });
    });
});
