'use strict';

const Translator = require('../components/translator.js');

module.exports = function (app) {

  app.route('/api/translate')
    .post((req, res) => {
      const localeArray = [
        "british-to-american",
        "american-to-british"
      ]
      const text = req.body.text;
      const locale = req.body.locale;

      if(text === undefined || !locale) {
        return res.send({error: 'Required field(s) missing'})
      }
      else if(text === "") {
        return res.send({error: "No text to translate"})
      }
      else if(localeArray.indexOf(locale) === -1) {
        return res.send({error: "Invalid value for locale field"})
      }
      else {
        const translator = new Translator(text, locale);      
        const result = translator.translate();
        if(result.translation === text) {
          console.log(`${locale}\nSource\n${text}\nResult\nEverything looks good to me!\n`);
          return res.send({
            text: text,
            translation: "Everything looks good to me!"
          })
        }
        console.log(`${locale}\nSource\n${text}\nResult\n${result.translation}\n`);
        return res.send({
          text: text,
          translation: result.translation
        })
      }
    });
};
