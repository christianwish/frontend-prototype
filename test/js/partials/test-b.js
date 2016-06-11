// http://chaijs.com/api/assert/
export default function () {
    let assert = chai.assert;

    describe('Test B', function () {
        // new
        it('is active too', function () {
            assert.isOk(true, 'everything is ok');
        });
    });
}
