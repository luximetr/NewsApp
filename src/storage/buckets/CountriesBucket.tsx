import {asyncStorage} from "../asyncStorage/AsyncStorage";
import {Country} from "../../model/model/country/Country";

export class CountriesBucket {

   private storage = asyncStorage
   private selectedCountriesKey = 'selectedCountries'

   async addToSelected(country: Country) {
      return this.storage.addItem(this.selectedCountriesKey, country)
   }

   async removeFromSelected(country: Country) {

   }

   async getSelected(): Promise<Country[]> {
      return this.storage.getData(this.selectedCountriesKey).then((result) => {
         return result as Country[]
      })
   }
}
