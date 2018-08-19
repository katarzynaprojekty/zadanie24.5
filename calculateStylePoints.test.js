const assert = require('assert');
const calculateStylePoints = require('./calculateStylePoints.js');

describe('calculateStylePoints', () => {
    it('should return 54.5', () => {
        const actual = calculateStylePoints([18, 18.5, 18, 18, 19]);
        const expected = '54.5';
        assert.equal(actual, expected);
    });
    it('should return 53', () => {
        const actual = calculateStylePoints([18, 17.5, 17.5, 17.5, 18]);
        const expected = '53';
        assert.equal(actual, expected);
    });
    it('should return 52.5', () => {
        const actual = calculateStylePoints([17.5, 17.5, 17, 17.5, 17.5]);
        const expected = '52.5';
        assert.equal(actual, expected);
    });
})
