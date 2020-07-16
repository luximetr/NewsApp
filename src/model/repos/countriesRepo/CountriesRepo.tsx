import {allCountries} from "../../model/country/Countries";
import {Country} from "../../model/country/Country";
import {CountriesBucket} from "../../../storage/buckets/CountriesBucket";
import {contains} from "../../helpers/array/ArrayHelper";
import {countryDeselectedNotifier, countrySelectedNotifier, enabledCountryChangedNotifier} from "./CountriesNotifiers";

export class CountriesRepo {

   // Dependencies
   private countriesBucket = new CountriesBucket()

   // Available countries
   async getAvailableCountries() {
      const selectedCountries = await this.countriesBucket.getSelected()
      return allCountries.filter((country) => {
         return !contains(selectedCountries, (item) => {
            return item.code === country.code
         })
      })
   }

   // Selected countries
   async getSelectedCountries() {
      const enabledCountry = await this.countriesBucket.getEnabled()
      const selectedCountries = await this.countriesBucket.getSelected()
      return {countries: selectedCountries, enabled: enabledCountry}
   }

   async selectCountry(country: Country) {
      await this.countriesBucket.addToSelected(country)
      countrySelectedNotifier.notify(country)
   }

   async deselectCountry(country: Country) {
      await this.countriesBucket.removeFromSelected(country)
      await this.countriesBucket.removeFromEnabled(country)
      countryDeselectedNotifier.notify(country)
   }

   // Enabled country
   async setEnabledCountry(country: Country) {
      await this.countriesBucket.setEnabled(country)
      enabledCountryChangedNotifier.notify(country)
   }

   async getEnabledCountry() {
      await this.countriesBucket.getEnabled()
   }
}
