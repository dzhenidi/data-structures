'use strict';
import mocha from 'mocha';
import chai from 'chai';
import {  } from '../../lib/trees/has-path-with-given-sum';
import { MyBinaryTree } from '../../lib/trees/tree';
import { findAllSums, hasPathWithGivenSum } from '../../lib/trees/has-path-with-given-sum.mjs';

const {describe, it} = mocha;
const {expect} = chai;


describe('Binary Trees', function () {


  describe('#generateCompleteTree', function () {


    it('should handle a single node', function () {
      const actual = new MyBinaryTree().generateCompleteTree([1]).root;
      expect(actual).to.deep.equal({value: 1, left: null, right: null});
    });

    it('completes a level before starting a new one', function () {
      const actual = new MyBinaryTree().generateCompleteTree([1, 2, 3]).root;
      expect(actual).to.deep.equal({value: 1, left: { value: 2, right: null, left: null}, right: { value: 3, right: null, left: null}});
    });

    it('adds children left to right', function () {
      const actual = new MyBinaryTree().generateCompleteTree([1,2,3,4,5,6]).root;
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
    it('returns all sums starting with the leftmost leaf', function () {
      let tree = new MyBinaryTree().generateCompleteTree([1, 2, 3, 4, 5, 6]).root;
      const actual = findAllSums(tree);
      const expected = [7, 8, 10];
      expect(actual).to.deep.equal(expected);
    });
  });

  describe('#hasPathWithGivenSum', function () {
    it('finds sum', function () {
      let tree = new MyBinaryTree().generateCompleteTree([1, 2, 3, 4, 5, 6]).root;
      const actual = hasPathWithGivenSum(tree, 10);
      expect(actual).to.equal(true);
    });
    it('returns false when there is no match', function () {
      let tree = new MyBinaryTree().generateCompleteTree([1, 2, 3, 4, 5, 6]).root;
      const actual = hasPathWithGivenSum(tree, 9);
      expect(actual).to.equal(false);
    });
  });

});
