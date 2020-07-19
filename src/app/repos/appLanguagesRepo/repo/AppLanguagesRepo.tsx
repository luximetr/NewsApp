import React from 'react';
import {appLanguages} from "../../../../model/model/language/Languages";
import {Language} from "../../../../model/model/language/Language";
import {selectedAppLanguageChangedNotifier} from "./AppLanguagesNotifiers";
import en from '../strings/en.json';
import ru from '../strings/ru.json';
import {AppLanguagesBucket} from "../../../../storage/buckets/AppLanguagesBucket";

class AppLanguagesRepo {

   // Dependencies
   private appLanguagesBucket = new AppLanguagesBucket()

   // Data
   private currentLanguage = appLanguages[0]

   getAvailableLanguages() {
      return appLanguages
   }

   async loadCurrentLanguage() {
      const selectedLanguageCode = await this.appLanguagesBucket.getSelectedAppLanguageCode()
      if (selectedLanguageCode !== undefined) {
         this.currentLanguage = this.getLanguageByCode(selectedLanguageCode)
      }
      return this.currentLanguage
   }

   setCurrentLanguage(language: Language) {
      this.currentLanguage = language
      this.appLanguagesBucket.setSelectedAppLanguage(language.code).then()
      selectedAppLanguageChangedNotifier.notify(language)
   }

   getCurrentLanguage() {
      return this.currentLanguage
   }

   private getLanguageByCode(languageCode: string) {
      const index = appLanguages.findIndex((language) => {
         return language.code === languageCode
      })
      return appLanguages[index]
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
