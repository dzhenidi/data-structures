'use strict';
import mocha from 'mocha';
import chai from 'chai';
import { possibleSums } from '../../lib/hash-tables/possible-sums.mjs';

const {describe, it} = mocha;
const {expect} = chai;


describe('#possibleSumsNaive', function () {


  it('handles single coin', function () {
    const actual = possibleSums([1], [1]);
    expect(actual).to.equal(1);
  });
  it('handles many coins of the same value', function () {
    const actual = possibleSums([1], [100]);
    expect(actual).to.equal(100);
  });
  it('handles many coins of the same value that repeat', function () {
    const actual = possibleSums([1, 1], [100, 3]);
    expect(actual).to.equal(103);
  });
  it('handles single coin with high frequency', function () {
    const actual = possibleSums([1], [10]);
    expect(actual).to.equal(10);
  });
  it('handles sorted coins', function () {
    const actual = possibleSums([10, 50, 100], [1, 2, 1]);
    expect(actual).to.equal(9);

  });
  it('handles large quantities', function () {
    const actual = possibleSums([1, 2], [100000, 2]);
    expect(actual).to.equal(100004);
  });
  it('handles large coins', function () {
    const actual = possibleSums([10, 50, 100, 500], [5, 3, 2, 2]);
    expect(actual).to.equal(122);
  });
  it('handles coins that are not sorted', function () {
    const actual = possibleSums([500, 10, 50, 100], [2, 5, 3, 2]);
    expect(actual).to.equal(122);
  });
  it('handles repeating unsorted coins', function () {
    const actual = possibleSums([3, 1, 1], [111, 84, 104]);
    expect(actual).to.equal(521);
  });
  it('handles repeating sorted coins', function () {
    const actual = possibleSums([1,3], [188, 111]);
    expect(actual).to.equal(521);
  });



});
