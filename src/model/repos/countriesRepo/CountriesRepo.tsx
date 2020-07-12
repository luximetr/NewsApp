import {allCountries} from "../../model/country/Countries";
import {Country} from "../../model/country/Country";

export class CountriesRepo {

   getAvailableCountries() {
      return allCountries
   }

   getSelectedCountries() {
      return []
   }

   selectCountry(country: Country) {

   }

   deselectCountry(country: Country) {

   }
}
