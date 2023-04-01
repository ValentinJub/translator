const chai = require('chai');
const assert = chai.assert;

const Translator = require('../components/translator.js');
const Translations = require('../components/translations.js');
const localeArray = [
  "british-to-american",
  "american-to-british"
]



suite('Unit Tests', () => {
  suite('Translate to British English', () => {
    test('Translate: "Mangoes are my favorite fruit.', () => {
      let t = new Translator("Mangoes are my favorite fruit.", "american-to-british");
      let r = t.translate();
      assert.isString(r.translation);
      assert.strictEqual(r.translation, 'Mangoes are my <span class="highlight">favourite</span> fruit.')
    })
    test('Translate I ate yogurt for breakfast.', () => {
      let t = new Translator("I ate yogurt for breakfast.", "american-to-british");
      let r = t.translate();
      assert.isString(r.translation);
      assert.strictEqual(r.translation, 'I ate <span class="highlight">yoghurt</span> for <span class="highlight">brekkie</span>.')
    })
    test("Translate We had a party at my friend's condo.", () => {
      let t = new Translator("We had a party at my friend's condo.", "american-to-british");
      let r = t.translate();
      assert.isString(r.translation);
      assert.strictEqual(r.translation, `We had a party at my friend's <span class="highlight">flat</span>.`)
    })
    test("Translate Can you toss this in the trashcan for me? ", () => {
      let t = new Translator("Can you toss this in the trashcan for me?", "american-to-british");
      let r = t.translate();
      assert.isString(r.translation);
      assert.strictEqual(r.translation, `Can you toss this in the <span class="highlight">bin</span> for me?`)
    })
    test("Translate The parking lot was full.", () => {
      let t = new Translator("The parking lot was full.", "american-to-british");
      let r = t.translate();
      assert.isString(r.translation);
      assert.strictEqual(r.translation, `The <span class="highlight">car park</span> was full.`)
    })
    test("Translate Like a high tech Rube Goldberg machine.", () => {
      let t = new Translator("Like a high tech Rube Goldberg machine.", "american-to-british");
      let r = t.translate();
      assert.isString(r.translation);
      assert.strictEqual(r.translation, `Like a high tech <span class="highlight">Heath Robinson device</span>.`)
    })
    test("Translate To play hooky means to skip class or work.", () => {
      let t = new Translator("To play hooky means to skip class or work.", "american-to-british");
      let r = t.translate();
      assert.isString(r.translation);
      assert.strictEqual(r.translation, `To <span class="highlight">bunk off</span> means to skip class or work.`)
    })
    test("Translate No Mr. Bond, I expect you to die.", () => {
      let t = new Translator("No Mr. Bond, I expect you to die.", "american-to-british");
      let r = t.translate();
      assert.isString(r.translation);
      assert.strictEqual(r.translation, `No <span class="highlight">Mr</span> Bond, I expect you to die.`)
    })
    test("Translate Dr. Grosh will see you now.", () => {
      let t = new Translator("Dr. Grosh will see you now.", "american-to-british");
      let r = t.translate();
      assert.isString(r.translation);
      assert.strictEqual(r.translation, `<span class="highlight">Dr</span> Grosh will see you now.`)
    })
    test("Translate Lunch is at 12:15 today.", () => {
      let t = new Translator("Lunch is at 12:15 today.", "american-to-british");
      let r = t.translate();
      assert.isString(r.translation);
      assert.strictEqual(r.translation, `Lunch is at <span class="highlight">12.15</span> today.`)
    })
  })
  suite('Translate to American English', () => {
    test('We watched the footie match for a while.', () => {
      let t = new Translator("We watched the footie match for a while.", "british-to-american");
      let r = t.translate();
      assert.isString(r.translation);
      assert.strictEqual(r.translation, `We watched the <span class="highlight">soccer</span> match for a while.`)
    })
    test('Translate Paracetamol takes up to an hour to work.', () => {
      let t = new Translator("Paracetamol takes up to an hour to work.", "british-to-american");
      let r = t.translate();
      assert.isString(r.translation);
      assert.strictEqual(r.translation, `<span class="highlight">Tylenol</span> takes up to an hour to work.`)
    })
    test('Translate First, caramelise the onions.', () => {
      let t = new Translator("First, caramelise the onions.", "british-to-american");
      let r = t.translate();
      assert.isString(r.translation);
      assert.strictEqual(r.translation, `First, <span class="highlight">caramelize</span> the onions.`)
    })
    test('Translate I spent the bank holiday at the funfair.', () => {
      let t = new Translator("I spent the bank holiday at the funfair.", "british-to-american");
      let r = t.translate();
      assert.isString(r.translation);
      assert.strictEqual(r.translation, `I spent the <span class="highlight">public holiday</span> at the <span class="highlight">carnival</span>.`)
    })
    test('Translate I had a bicky then went to the chippy.', () => {
      let t = new Translator("I had a bicky then went to the chippy.", "british-to-american");
      let r = t.translate();
      assert.isString(r.translation);
      assert.strictEqual(r.translation, `I had a <span class="highlight">cookie</span> then went to the <span class="highlight">fish-and-<span class="highlight">fish-and-chip shop</span></span>.`)
    })
    test("I've just got bits and bobs in my bum bag.", () => {
      let t = new Translator("I've just got bits and bobs in my bum bag.", "british-to-american");
      let r = t.translate();
      assert.isString(r.translation);
      assert.strictEqual(r.translation, `I've just got <span class="highlight">odds and ends</span> in my <span class="highlight">fanny pack</span>.`)
    })
    test("Translate The car boot sale at Boxted Airfield was called off.", () => {
      let t = new Translator("The car boot sale at Boxted Airfield was called off.", "british-to-american");
      let r = t.translate();
      assert.isString(r.translation);
      assert.strictEqual(r.translation, `The <span class="highlight">swap meet</span> at Boxted Airfield was called off.`)
    })
    test("Translate Have you met Mrs Kalyani?", () => {
      let t = new Translator("Have you met Mrs Kalyani?", "british-to-american");
      let r = t.translate();
      assert.isString(r.translation);
      assert.strictEqual(r.translation, `Have you met <span class="highlight">Mrs.</span> Kalyani?`)
    })
    test("Translate Prof Joyner of King's College, London.", () => {
      let t = new Translator("Prof Joyner of King's College, London.", "british-to-american");
      let r = t.translate();
      assert.isString(r.translation);
      assert.strictEqual(r.translation, `<span class="highlight">Prof.</span> Joyner of King's College, London.`)
    })
    test("Translate Tea time is usually around 4 or 4.30.", () => {
      let t = new Translator("Tea time is usually around 4 or 4.30.", "british-to-american");
      let r = t.translate();
      assert.isString(r.translation);
      assert.strictEqual(r.translation, `Tea time is usually around 4 or <span class="highlight">4:30.</span>`)
    })
  })
  suite("Highlight translated text", () => {
    test("Highlight the translation of 'favorite' in 'Mangoes are my favorite fruit.'", () => {
      let t = new Translator("Mangoes are my favorite fruit.", "american-to-british");
      let r = t.translate();
      let regex = new RegExp(`<span class="highlight">favourite</span>`,"gi")
      assert.isString(r.translation);
      assert.isTrue(regex.test(r.translation))
    })
    test("Highlight the translation of 'yogurt' & 'breakfast' in 'I ate yogurt for breakfast.'", () => {
      let t = new Translator("I ate yogurt for breakfast.", "american-to-british");
      let r = t.translate();
      let regex1 = new RegExp(`<span class="highlight">yoghurt</span>`,"gi")
      let regex2 = new RegExp(`<span class="highlight">brekkie</span>`,"gi")
      assert.isString(r.translation);
      assert.isTrue(regex1.test(r.translation))
      assert.isTrue(regex2.test(r.translation))
    })
    test("Highlight the translation of 'footie' in 'We watched the footie match for a while.'", () => {
      let t = new Translator("We watched the footie match for a while.", "british-to-american");
      let r = t.translate();
      let regex = new RegExp(`<span class="highlight">soccer</span>`,"gi")
      assert.isString(r.translation);
      assert.isTrue(regex.test(r.translation))
    })
    test("Highlight the translation of 'Paracetamol' in 'Paracetamol takes up to an hour to work.'", () => {
      let t = new Translator("Paracetamol takes up to an hour to work.", "british-to-american");
      let r = t.translate();
      let regex = new RegExp(`<span class="highlight">Tylenol</span>`,"gi")
      assert.isString(r.translation);
      assert.isTrue(regex.test(r.translation))
    })
  })
});