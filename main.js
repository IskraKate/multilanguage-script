//* getting all translations *//
import { lang } from './lang.en.js';
import { langfr } from './lang.fr.js';

// * getting all links and all text that we will change *//
let dataReload = document.querySelectorAll('[data-reload]');
let translations = document.querySelectorAll('[data-translate]');

//* default language english *//
let language = 'lang';
let languages = { lang, langfr };

//* getting language which was clicked, changing all text when it clicked *//
for (let i = 0; i < dataReload.length; i++) {
  dataReload[i].onclick = function () {
    language = dataReload[i].name;
    changeText();
  };
}

//*changing all tags text, where translation was needed *//
//* data-translate attribute *//
function changeText() {
  for (let i = 0; i < translations.length; i++) {
    let prop = translations[i].id;
    translations[i].textContent = languages[language][prop];
  }
}