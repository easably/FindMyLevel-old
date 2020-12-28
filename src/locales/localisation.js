import LocalizedStrings from "react-localization";

const strings = new LocalizedStrings({
  en: {
    textComplexity: "Complexity of the article:",
    simple: "Simple",
    middle: "Middle",
    difficult: "Difficult",
    allWords: "All words",
    firstThousandWords: "Words from “Common thousand”",
    thirdThousandWords: "Words from “Third thousand”",
    learnMore: "Learn More!",
    advertisement: "Watch movies and series in english with double subtitles",
  },
  ru: {
    textComplexity: "Сложность текста:",
    simple: "Легкая",
    middle: "Средняя",
    difficult: "Сложная",
    allWords: "Всего слов",
    firstThousandWords: "Слов из “Первой тысячи”",
    thirdThousandWords: "Слов из “Первых трех тысяч”",
    learnMore: "Узнать что это!",
    advertisement: "Фильмы и сериалы на английском с двойными субтитрами",
  }
});

let availableLanguages = strings.getAvailableLanguages();
let interfaceLanguage = strings.getInterfaceLanguage();

if (availableLanguages.indexOf(interfaceLanguage) > -1) {
  strings.setLanguage(interfaceLanguage)
} else {
  strings.setLanguage('en')
}

export default strings;
