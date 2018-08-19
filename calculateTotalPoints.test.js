const assert = require('assert');
const calculateTotalPoints = require('./calculateTotalPoints.js');
//calculateTotalPoints = (distance, hillSize, kPoint, styleNotes, windFactor, gateFactor)
describe('calculateTotalPoints', () => {
    describe('normal hill', () => {
        it('should return 125.9', () => {
            const actual = calculateTotalPoints(106, 'normal', 98, [18.5, 19, 18.5, 18.5, 18.5], -12, 6.4);
            const expected = '125.9';
            assert.equal(actual, expected);
        });
        it('should return 60.8', () => {
            const actual = calculateTotalPoints(80, 'normal', 98, [15, 15.5, 16, 15.5, 16], -10.2, 0);
            const expected = '60.8';
            assert.equal(actual, expected);
        });
    });
    describe('big hill', () => {
        it('should return 122.6', () => {
            const actual = calculateTotalPoints(128, 'big', 120, [18.5, 18, 18, 17.5, 18], -5.8, 0)
            const expected = '122.6';
            assert.equal(actual, expected);
        });
        it('should return 105.2', () => {
            const actual = calculateTotalPoints(117.5, 'big', 120, [17.5, 16.5, 17, 17, 17], -1.3, 0)
            const expected = '105.2';
            assert.equal(actual, expected);
        });

    });
    describe('mammoth hill', () => {
        it('should return 203.7', () => {
            const actual = calculateTotalPoints(223, 'mammoth', 200, [17.5, 18.5, 18, 18.5, 18.5], -7.6, 8.7);
            const expected = '203.7';
            assert.equal(actual, expected);
        });
        it('should return 208.3', () => {
            const actual = calculateTotalPoints(227.5, 'mammoth', 200, [18.0, 18.5, 17.5, 18.5, 18.5], -8.4, 8.7);
            const expected = '208.3';
            assert.equal(actual, expected);
        });
        it('should return 87.7', () => {
            const actual = calculateTotalPoints(144, 'mammoth', 200, [13.5, 13.5, 13.5, 14, 13.5], -5.6, 0);
            const expected = '87.7';
            assert.equal(actual, expected);
        });
    });
 });
