import {asyncStorage} from "../asyncStorage/AsyncStorage";

export class AppLanguagesBucket {

   // Dependencies
   private storage = asyncStorage
   private selectedAppLanguageKey = 'selectedAppLanguage'

   // Storing
   async setSelectedAppLanguage(languageCode: string) {
      return this.storage.storeItem(this.selectedAppLanguageKey, languageCode)
   }

   async getSelectedAppLanguageCode() {
      return this.storage.getData(this.selectedAppLanguageKey)
   }

}
