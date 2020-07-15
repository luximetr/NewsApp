import {allCountries} from "../../model/country/Countries";
import {Country} from "../../model/country/Country";
import {CountriesBucket} from "../../../storage/buckets/CountriesBucket";
import {contains} from "../../helpers/array/ArrayHelper";
import {countryDeselectedNotifier, countrySelectedNotifier} from "./Notifiers";

export class CountriesRepo {

   private countriesBucket = new CountriesBucket()

   async getAvailableCountries() {
      const selectedCountries = await this.countriesBucket.getSelected()
      return allCountries.filter((country) => {
         return !contains(selectedCountries, (item) => {
            return item.code === country.code
         })
      })
   }

   async getSelectedCountries() {
      const disabledCountries = await this.countriesBucket.getDisabled()
      const selectedCountries = await this.countriesBucket.getSelected()
      return {countries: selectedCountries, disabled: disabledCountries}
   }

   selectCountry(country: Country) {
      this.countriesBucket
         .addToSelected(country)
         .then(() => {
            countrySelectedNotifier.notify(country)
         })
   }

   deselectCountry(country: Country) {
      this.countriesBucket
         .removeFromSelected(country)
         .then(() => {
            countryDeselectedNotifier.notify(country)
         })
   }

   disableCountry(country: Country) {
      this.countriesBucket.addToDisabled(country).then()
   }

   enableCountry(country: Country) {
      this.countriesBucket.removeFromDisabled(country).then()
   }
}
