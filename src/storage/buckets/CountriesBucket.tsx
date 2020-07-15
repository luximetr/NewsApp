import {asyncStorage} from "../asyncStorage/AsyncStorage";
import {Country} from "../../model/model/country/Country";

export class CountriesBucket {

   private storage = asyncStorage
   private selectedCountriesKey = 'selectedCountries'
   private disabledCountries = 'disabledCountries'

   async addToSelected(country: Country) {
      return this.storage.addItem(this.selectedCountriesKey, country)
   }

   async removeFromSelected(country: Country) {
      return this.storage.removeItem(this.selectedCountriesKey, (item: Country) => {
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

   async addToDisabled(country: Country) {
      return this.storage.addItem(this.disabledCountries, country)
   }

   async removeFromDisabled(country: Country) {
      return this.storage.removeItem(this.disabledCountries, (item: Country) => {
         return item.code === country.code
      })
   }

   async getDisabled(): Promise<Country[]> {
      return this.storage.getData(this.disabledCountries).then((result) => {
         if (result) {
            return result
         } else {
            return []
         }
      })
   }
}
