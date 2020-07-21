import {Language} from "../../../../model/model/language/Language";
import en from "../strings/en.json";
import ru from "../strings/ru.json";
import {appLanguagesRepo} from "./AppLanguagesRepo";

export function translate(key: string) {
   const language = appLanguagesRepo.getCurrentLanguage()
   const strings = getStrings(language)
   return strings[key]
}

function getStrings(language: Language): any {
   switch (language.code) {
      case 'en': return en
      case 'ru': return ru
   }
}
