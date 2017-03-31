import {expect, assert} from 'chai';
import Grid from '../Grid';

describe("Check grin", () => {
    var subject = new Grid(5,5);
    describe("#object", () => {
        it("Just checking", () => {
            assert.typeOf(subject.width, "number", "Not matching "+subject.width);
        })
    })
})
