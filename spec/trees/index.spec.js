'use strict';
import mocha from 'mocha';
import chai from 'chai';
import {  } from '../../lib/trees/has-path-with-given-sum';
import { MyBinaryTree } from '../../lib/trees/tree';
import { findAllSums } from '../../lib/trees/has-path-with-given-sum.mjs';

const {describe, it} = mocha;
const {expect} = chai;


describe('Binary Trees', function () {


  describe('#populate', function () {


    it('should handle a single node', function () {
      const actual = new MyBinaryTree().populate([1]).root;
      expect(actual).to.deep.equal({value: 1, left: null, right: null});
    });


    it('should handle uneven number of nodes', function () {
      const actual = new MyBinaryTree().populate([1,2,3,4,5]).root;
      const expected = {
        value: 1,
        left: {
          value: 2,
          left: {
            value: 4,
            left: null,
            right: null
          },
          right: null
        },
        right: {
          value: 3,
          left: {
            value: 5,
            left: null,
            right: null
          },
          right: null
        }
      };
      expect(actual).to.deep.equal(expected);
    });

    it('should handle even number of nodes', function () {
      const actual = new MyBinaryTree().populate([1,2,3,4,5,6]).root;
      const expected = {
        value: 1,
        left: {
          value: 2,
          left: {
            value: 4,
            left: null,
            right: null
          },
          right: {
            value: 5,
            left: null,
            right: null
          }
        },
        right: {
          value: 3,
          left: {
            value: 6,
            left: null,
            right: null
          },
          right: null
        }
      };
      expect(actual).to.deep.equal(expected);
    });

  });

  describe('#findAllSums', function () {
    let tree = new MyBinaryTree().populate([1, 2, 3, 4, 5, 6]).root;
    const actual = findAllSums(tree);
    const expected = [7, 8, 10];
    expect(actual).to.deep.equal(expected);
  });

});
