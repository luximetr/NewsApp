import {asyncStorage} from "../asyncStorage/AsyncStorage";
import {Country} from "../../model/model/country/Country";

export class CountriesBucket {

   private storage = asyncStorage
   private selectedCountriesKey = 'selectedCountries'
   private enabledCountriesKey = 'enabledCountries'

   async addToSelected(country: Country) {
      return this.storage.addItem(this.selectedCountriesKey, country)
   }

   async removeFromSelected(country: Country) {
      return this.storage.removeItemWhere(this.selectedCountriesKey, (item: Country) => {
         return item.code === country.code
      })
   }

   async getSelected(): Promise<Country[]> {
      return this.storage.getData(this.selectedCountriesKey).then((result) => {
         if (result) {
            return result
         } else {
            return []
         }
      })
   }

   async addToEnabled(country: Country) {
      return this.storage.addItem(this.enabledCountriesKey, country)
   }

   async setEnabled(country: Country) {
      return this.storage.storeItem(this.enabledCountriesKey, [country])
   }

   async removeFromEnabled(country: Country) {
      return this.storage.removeItemWhere(this.enabledCountriesKey, (item: Country) => {
         return item.code === country.code
      })
   }

   async getEnabled() {
      return this.storage.getData(this.enabledCountriesKey).then((result) => {
         if (result && result.length > 0) {
            return result[0] as Country
         } else {
            return undefined
         }
      })
   }
}
