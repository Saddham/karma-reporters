import { expect } from 'chai'
import sinon from 'sinon'
import { Animal } from '../src/Animal'

describe('typescript', function () {
  let expected = 'Bob'
  let a = new Animal(expected)
  it('should pass', function () {
    expect(a.name == expected)
  })
  it('should pass', function () {
    expect(a.name).to.be.eq(expected)
  })
})

describe('chai', function () {
  beforeEach(function () { })
  afterEach(function () { })
  it('should pass', function () {
    expect(true).to.be.true;
  })
})

describe('sinon', function () {
    var eventSpy;
    function callback(cb) { cb(); }

    beforeEach(function(){
        eventSpy = sinon.spy();
    });

    it('should catch a event when fired', function(){
        callback(eventSpy);
        //make sure our spy was fired once and only once
        expect(eventSpy.callCount).to.equal(1);
    });
});
