// By Node’s rules, builtin require cannot sideload .mjs files. However, with esm, ES modules can be sideloaded as .js files or .mjs files may be loaded with dynamic import.
'use strict'
import mocha from 'mocha'
import chai from 'chai'
import { MyNode } from '../../lib/linked-list/singly-linked-list.mjs';

const {describe, it} = mocha
const {expect} = chai

  describe('MyNode', () => {
    it('works', () => {
      const myNode = new MyNode(1);
      myNode.appendToTail(2);

      expect(myNode.next.data).to.eql(2);
    })
  })

