const chai = require('chai');
const assert = chai.assert;

const Translator = require('../components/translator.js');

suite('Unit Tests', () => {
  suite('Translate to British English', () => {
    test('Translate: "Mangoes are my favorite fruit"', () => {
      assert.isString(Translator)
    })
  })
  suite('Translate to American English', () => {
    test('', () => {
      assert.isString(Translator)
    })
  })
});
