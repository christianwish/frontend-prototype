// http://chaijs.com/api/assert/
export default function () {
    let assert = chai.assert;

    describe('Test A', function () {
        // new
        it('is active', function () {
            assert.isOk(true, 'everything is ok');
        });
    });
}
