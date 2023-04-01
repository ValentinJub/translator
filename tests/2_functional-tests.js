const chai = require('chai');
const chaiHttp = require('chai-http');
const assert = chai.assert;
const server = require('../server.js');

chai.use(chaiHttp);

let Translator = require('../components/translator.js');

// suite('Functional Tests', () => {
//   suite('Translation tests, POST requests to /api/translate', () => {
//     test('Translation with text and locale fields', (done) => {
//       chai.request(server)
//           .post('/api/translate')
//           .send({
//             x: "x",
//           })
//           .end((err,res) => {
//             assert.equal(res.status, 200);
//             assert.strictEqual(res.body.solved, true);
//             assert.strictEqual(res.body.solution, solution);
//             done();
//           })
//     })
//   });
// });
