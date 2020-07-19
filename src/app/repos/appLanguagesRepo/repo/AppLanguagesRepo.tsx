import React from 'react';
import {appLanguages} from "../../../../model/model/language/Languages";
import {Language} from "../../../../model/model/language/Language";
import {selectedAppLanguageChangedNotifier} from "./AppLanguagesNotifiers";
import en from '../strings/en.json';
import ru from '../strings/ru.json';

class AppLanguagesRepo {

   private currentLanguage = appLanguages[0]

   getAvailableLanguages() {
      return appLanguages
   }

   async loadCurrentLanguage() {
      return this.currentLanguage
   }

   setCurrentLanguage(language: Language) {
      this.currentLanguage = language
      selectedAppLanguageChangedNotifier.notify(language)
   }

   getCurrentLanguage() {
      return this.currentLanguage
   }
}
export const appLanguagesRepo = new AppLanguagesRepo()

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
