// categorize tests by local library
describe('exampleAsync', () => {
    const dummyData = 1234;

    const asyncFunctionForTestExampleOnly = async () => {
        /* eslint no-return-await: "off" */
        return await new Promise((resolve) =>
            setTimeout(resolve(dummyData), 3000)
        );
    };

    it('should return from promise', () =>
        asyncFunctionForTestExampleOnly().then((returnedData) => {
            expect(returnedData).toEqual(dummyData);
        }));

    it('should return from resolve', () =>
        expect(asyncFunctionForTestExampleOnly()).resolves.toEqual(dummyData));

    it('works with async/await', async () => {
        const returnedData = await asyncFunctionForTestExampleOnly();
        expect(returnedData).toEqual(dummyData);
    });

    it('works with async/await and resolves', async () => {
        await expect(asyncFunctionForTestExampleOnly()).resolves.toEqual(
            dummyData
        );
    });
});
