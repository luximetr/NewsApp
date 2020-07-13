import {allCountries} from "../../model/country/Countries";
import {Country} from "../../model/country/Country";
import {CountriesBucket} from "../../../storage/buckets/CountriesBucket";
import {contains} from "../../helpers/array/ArrayHelper";

export class CountriesRepo {

   private countriesBucket = new CountriesBucket()

   async getAvailableCountries() {
      const selectedCountries = await this.countriesBucket.getSelected()
      const countries = allCountries.filter((country) => {
         return !contains(selectedCountries, (item) => {
            return item.code === country.code
         })
      })
      return countries
   }

   getSelectedCountries() {
      return []
   }

   selectCountry(country: Country) {
      this.countriesBucket.addToSelected(country).then()
   }

   deselectCountry(country: Country) {

   }
}
