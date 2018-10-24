// By Node’s rules, builtin require cannot sideload .mjs files. However, with esm, ES modules can be sideloaded as .js files or .mjs files may be loaded with dynamic import.
'use strict'
import mocha from 'mocha'
import chai from 'chai'
import { MyNode } from '../../lib/linked-list/singly-linked-list.mjs';
import {createList, removeDups } from '../../lib/linked-list/single.mjs';

const {describe, it} = mocha
const {expect} = chai

  describe('MyNode', () => {
    it('node class has append function', () => {
      const myNode = new MyNode(1);
      myNode.appendToTail(2);

      expect(myNode.next.data).to.eql(2);
    })
    describe('#createList', () => {
      it('creates empty list', () => {
        const expected = new MyNode();
        const actual = createList([]);
        expect(actual).to.deep.equal(expected);
      })
      it('creates single node', () => {
        const values = [1];
        const expected = new MyNode(1);
        const actual = createList(values);
        expect(actual).to.deep.equal(expected);
      })
      it('creates multiple nodes', () => {
        const values = [1, 2, 3];
        const expected = new MyNode(1);
        expected.appendToTail(2);
        expected.appendToTail(3);
        const actual = createList(values);
        expect(actual).to.deep.equal(expected);
      })
    })


    describe('#removeDups', function () {

      it('handles single node', function () {
        const expected = new MyNode(1);
        const actual = removeDups(new MyNode(1))
        expect(actual).to.deep.equal(expected);
      });
      it('handles duplicate in tail', function () {
        const list = createList([1, 1]);
        const expected = new MyNode(1);
        const actual = removeDups(list)
        expect(actual).to.deep.equal(expected);
      });
      it('handles duplicate in middle', function () {
        const list = createList([1, 1, 1, 2]);
        const expected = createList([1, 2]);
        const actual = removeDups(list)
        expect(actual).to.deep.equal(expected);
      });
      it('handles no duplicates', function () {
        const list = createList([1, 2, 3]);
        const expected = createList([1, 2, 3]);
        const actual = removeDups(list)
        expect(actual).to.deep.equal(expected);
      });

    });

  })



