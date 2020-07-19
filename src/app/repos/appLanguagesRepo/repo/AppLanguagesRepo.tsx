import React from 'react';
import {appLanguages} from "../../../../model/model/language/Languages";
import {Language} from "../../../../model/model/language/Language";
import {selectedAppLanguageChangedNotifier} from "./AppLanguagesNotifiers";

export class AppLanguagesRepo {

   private currentLanguage = defaultAppLanguage

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

const defaultAppLanguage = appLanguages[0]
export const AppLanguageContext = React.createContext(defaultAppLanguage)
