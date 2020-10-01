// import local library
const exampleSync = require('../src/api/exampleSync');

describe('exampleSync', () => {
    it('should return from sync successfully', () => {
        const timestamp = exampleSync.timeStampSync();
        expect(timestamp).not.toBe(undefined);
    });
});
