
/* 

American to British

                                      It took me a long time to acclimate to the British weather in Edinburgh. I took the airplane at 08:50 in the morning, I remember it vividly. 
                                      I forgot to stash by backhoe and it was needed to tend to the bedroom community garden. 
                                      I needed a tool, I crafted this rube goldberg machine but mr. and mx. Trois soir said "shush" you ain't no proctor young sir. 

*/


"use strict"

const americanOnly = require('./american-only.js');
const americanToBritishSpelling = require('./american-to-british-spelling.js');
const americanToBritishTitles = require("./american-to-british-titles.js")
const britishOnly = require('./british-only.js')
const britishValues = Object.values(britishOnly)
const britishSpellingValues = Object.values(americanToBritishSpelling)
const britishTitleValues = Object.values(americanToBritishTitles)
const timeCatcher = /[0-9]{2}[\.|:][0-9]{2}/
const spaceCatcher = /\w+\s\w+/;

class Translator {

  constructor(text, locale) {
    this.text = text;
    this.locale = locale
  }

  translate() {
    let translatedText = "";

    if(this.locale === "british-to-american") {
      translatedText = this.toAmericanEnglish();
    }
    else if(this.locale === "american-to-british") {
      translatedText = this.toBritishEnglish();
    }

    return {
      source: this.text,
      translation: translatedText,
    }
  }

  toBritishEnglish() {
    let arrayOfWords = this.text.split(" ");

    for(let i = 0, len = arrayOfWords.length; i < len; i++) {
      let word = arrayOfWords[i];
      //if the word can be translated
      if(word in americanToBritishSpelling) {
        arrayOfWords[i] = `<span class="highlight">${americanToBritishSpelling[word]}</span>`
      }
      //if it is a title/honorifics
      else if(word in americanToBritishTitles) {
        arrayOfWords[i] = `<span class="highlight">${americanToBritishTitles[word]}</span>`
      }
      //if it is a time we translate to Brits time
      else if(timeCatcher.test(word)) {
        word = word.replace(":", ".")
        arrayOfWords[i] = `<span class="highlight">${word}</span>`
      }
    }

    let tempString = arrayOfWords.join(" ");

    for(let key in britishOnly) {
      if(tempString.includes(britishOnly[key])) {
        tempString = tempString.replace(britishOnly[key], `<span class="highlight">${key}</span>`)
      }
    }

    for(let key in americanOnly) {
      if(tempString.includes(key)) {
        tempString = tempString.replace(key, `<span class="highlight">${americanOnly[key]}</span>`)
      }
    }
    return tempString;
  }

  toAmericanEnglish() {
    let arrayOfWords = this.text.split(" ");

    for(let i = 0, len = arrayOfWords.length; i < len; i++) {
      let word = arrayOfWords[i];
      //if the word can be translated
      if(britishSpellingValues.includes(word)) {
        let key = this.getKeyByValue(americanToBritishSpelling, word)
        arrayOfWords[i] = `<span class="highlight">${key}</span>`;
      }
      //if it is a title/honorifics
      else if(britishTitleValues.includes(word)) {
        let key = this.getKeyByValue(americanToBritishTitles, word)
        arrayOfWords[i] = `<span class="highlight">${key}</span>`;
      }
      //if it is a time we translate to Brits time
      else if(timeCatcher.test(word)) {
        word = word.replace(".", ":")
        arrayOfWords[i] = `<span class="highlight">${word}</span>`
      }
    }

    let tempString = arrayOfWords.join(" ");

    for(let key in britishOnly) {
      if(tempString.includes(key)) {
        tempString = tempString.replace(key, `<span class="highlight">${britishOnly[key]}</span>`)
      }
    }

    for(let key in americanOnly) {
      if(tempString.includes(americanOnly[key])) {
        tempString = tempString.replace(americanOnly[key], `<span class="highlight">${key}</span>`)
      }
    }
    return tempString;
  }
  
  getKeyByValue(obj, value) {
    for (let key in obj) {
      if (obj[key] === value) {
        return key;
      }
    }
  }
}

module.exports = Translator;