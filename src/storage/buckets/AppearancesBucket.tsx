import {asyncStorage} from "../asyncStorage/AsyncStorage";
import {AppearanceType} from "../../model/model/appearance/AppearanceType";

export class AppearancesBucket {

   // Dependencies
   private storage = asyncStorage
   private selectedAppearanceKey = 'selectedAppearance'

   // Storing
   async setSelectedAppearanceType(appearanceType: AppearanceType) {
      return this.storage.storeItem(this.selectedAppearanceKey, appearanceType)
   }

   async getSelectedAppearanceType() {
      return this.storage.getData(this.selectedAppearanceKey)
   }
}
