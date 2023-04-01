const chai = require('chai');
const chaiHttp = require('chai-http');
const assert = chai.assert;
const server = require('../server.js');

const Translator = require('../components/translator.js');
const Translations = require('../components/translations.js');
const localeArray = [
  "british-to-american",
  "american-to-british"
]

chai.use(chaiHttp);

suite('Functional Tests', () => {
  suite('Translation tests, POST requests to /api/translate', () => {
    test('Translation with text and locale fields', (done) => {
      chai.request(server)
          .post('/api/translate')
          .send({
            text: Translations.ab1,
            locale: localeArray[1]
          })
          .end((err,res) => {
            assert.equal(res.status, 200);
            assert.hasAllKeys(res.body, ["text","translation"])
            assert.isString(res.body.translation)
            assert.isString(res.body.text)
            assert.strictEqual(res.body.text, Translations.ab1);
            assert.strictEqual(res.body.translation, Translations.r1);
            done();
          })
    })
    test('Translation with text and invalid locale field', (done) => {
      chai.request(server)
          .post('/api/translate')
          .send({
            text: Translations.ab1,
            locale: "chinese-to-french"
          })
          .end((err,res) => {
            assert.equal(res.status, 200);
            assert.hasAllKeys(res.body, "error") 
            assert.isString(res.body.error)
            assert.strictEqual(res.body.error, 'Invalid value for locale field');
            done();
          })
    })
    test('Translation with missing text field', (done) => {
      chai.request(server)
          .post('/api/translate')
          .send({
            locale: "american-to-british"
          })
          .end((err,res) => {
            assert.equal(res.status, 200);
            assert.hasAllKeys(res.body, "error") 
            assert.isString(res.body.error)
            assert.strictEqual(res.body.error, 'Required field(s) missing');
            done();
          })
    })
    test('Translation with missing locale field', (done) => {
      chai.request(server)
          .post('/api/translate')
          .send({
            text: "prost"
          })
          .end((err,res) => {
            assert.equal(res.status, 200);
            assert.hasAllKeys(res.body, "error") 
            assert.isString(res.body.error)
            assert.strictEqual(res.body.error, 'Required field(s) missing');
            done();
          })
    })
    test('Translation with empty text', (done) => {
      chai.request(server)
          .post('/api/translate')
          .send({
            text: "",
            locale: "british-to-american"
          })
          .end((err,res) => {
            assert.equal(res.status, 200);
            assert.hasAllKeys(res.body, "error") 
            assert.isString(res.body.error)
            assert.strictEqual(res.body.error, 'No text to translate');
            done();
          })
    })
    test('Translation with text that needs no translation', (done) => {
      chai.request(server)
          .post('/api/translate')
          .send({
            text: "Hi my name is Valentin.",
            locale: "british-to-american"
          })
          .end((err,res) => {
            assert.equal(res.status, 200);
            assert.hasAllKeys(res.body, ["text","translation"])
            assert.isString(res.body.translation)
            assert.isString(res.body.text)
            assert.strictEqual(res.body.text, "Hi my name is Valentin.");
            assert.strictEqual(res.body.translation, "Everything looks good to me!");
            done();
          })
    })
  });
});
