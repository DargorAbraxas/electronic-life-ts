import {expect, assert} from 'chai';
import Vector from '../Vector';

describe("Testing vectors", () => {
    var subject = new Vector(1,1);
    describe('#plus', () => {
        it('Should add 2 vectors', () => {
            const result = subject.minus(new Vector(2,2));
            //assert.isObject(result, 'Not object...')
            expect(result).to.deep.equal(new Vector(-1,-1),"Not equal");            
            //assert.strictEqual(result, new Vector(3,3));
        });
    });
    describe('#minus', () => {
        it("Should substract", () => {
            const result = subject.minus(new Vector(1,1));
            expect(result).to.deep.equal(new Vector(0,0),"Not equal");
        })
    });
    /*describe('#type of length', () => {
        it("Should be number", () => {
            assert.typeOf(subject.length, 'number', "Should be number");
            //expect(subject.length).to.be.a('number', "Should be number");
        })
    });*/
    describe('#type of length', function() {
        it("Should be number", function() {
            assert.typeOf(subject.length, 'number', "Should be number");
            //expect(subject.length).to.be.a('number', "Should be number");
        })
    });
});
 