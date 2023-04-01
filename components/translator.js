
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
const timeCatcher = /[0-9]{2}[\.|:][0-9]{2}/

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
      if(timeCatcher.test(word)) {
        word = word.replace(":", ".")
        arrayOfWords[i] = `<span class="highlight">${word}</span>`
      }
    }

    let tempString = arrayOfWords.join(" ");

    for(let key in americanToBritishTitles) {
      let regex = new RegExp(`(?<![a-z])${key}(?![a-z])`, 'g')
      if(regex.test(tempString)) {
        tempString = tempString.replace(regex, `<span class="highlight">${americanToBritishTitles[key]}</span>`)
      }
      // if(tempString.includes(key)) {
      //   tempString = tempString.replace(key, `<span class="highlight">${americanToBritishTitles[key]}</span>`)
      // }
    } 

    for(let key in americanToBritishSpelling) {
      let regex = new RegExp(`(?<![a-z])${key}(?![a-z])`, 'g')
      if(regex.test(tempString)) {
        tempString = tempString.replace(regex, `<span class="highlight">${americanToBritishSpelling[key]}</span>`)
      }
      // if(tempString.includes(key)) {
      //   tempString = tempString.replace(key, `<span class="highlight">${americanToBritishSpelling[key]}</span>`)
      // }
    }

    for(let key in britishOnly) {
      let regex = new RegExp(`(?<![a-z])${britishOnly[key]}(?![a-z])`, 'g')
      if(regex.test(tempString)) {
        tempString = tempString.replace(regex, `<span class="highlight">${key}</span>`)
      }
      // if(tempString.includes()) {
      //   tempString = tempString.replace(britishOnly[key], `<span class="highlight">${key}</span>`)
      // }
    }

    for(let key in americanOnly) {
      let regex = new RegExp(`(?<![a-z])${key}(?![a-z])`, 'g')
      if(regex.test(tempString)) {
        tempString = tempString.replace(regex, `<span class="highlight">${americanOnly[key]}</span>`)
      }
    }
    return tempString;
  }

  toAmericanEnglish() {
    let arrayOfWords = this.text.split(" ");

    for(let i = 0, len = arrayOfWords.length; i < len; i++) {
      let word = arrayOfWords[i];
      if(timeCatcher.test(word)) {
        word = word.replace(".", ":")
        arrayOfWords[i] = `<span class="highlight">${word}</span>`
      }
    }

    let tempString = arrayOfWords.join(" ");

    for(let key in americanToBritishTitles) {
      let regex = new RegExp(`(?<![a-z])${americanToBritishTitles[key]}(?![a-z])`, 'g')
      if(regex.test(tempString)) {
        tempString = tempString.replace(regex, `<span class="highlight">${key}</span>`)
      }
      // if(tempString.includes(americanToBritishTitles[key])) {
      //   tempString = tempString.replace(americanToBritishTitles[key], `<span class="highlight">${key}</span>`)
      // }
    } 

    for(let key in americanToBritishSpelling) {
      let regex = new RegExp(`(?<![a-z])${americanToBritishSpelling[key]}(?![a-z])`, 'g')
      if(regex.test(tempString)) {
        tempString = tempString.replace(regex, `<span class="highlight">${key}</span>`)
      }
      // if(tempString.includes(americanToBritishSpelling[key])) {
      //   tempString = tempString.replace(americanToBritishSpelling[key], `<span class="highlight">${key}</span>`)
      // }
    }

    for(let key in britishOnly) {
      let regex = new RegExp(`(?<![a-z])${key}(?![a-z])`, 'g')
      if(regex.test(tempString)) {
        tempString = tempString.replace(regex, `<span class="highlight">${britishOnly[key]}</span>`)
      }
      // if(tempString.includes(key)) {
      //   tempString = tempString.replace(key, `<span class="highlight">${britishOnly[key]}</span>`)
      // }
    }

    for(let key in americanOnly) {
      let regex = new RegExp(`(?<![a-z])${americanOnly[key]}(?![a-z])`, 'g')
      if(regex.test(tempString)) {
        tempString = tempString.replace(regex, `<span class="highlight">${key}</span>`)
      }
      // if(tempString.includes(americanOnly[key])) {
      //   tempString = tempString.replace(americanOnly[key], `<span class="highlight">${key}</span>`)
      // }
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