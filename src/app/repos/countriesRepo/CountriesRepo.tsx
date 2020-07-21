import {allCountries, defaultCountry} from "../../../model/model/country/Countries";
import {Country} from "../../../model/model/country/Country";
import {CountriesBucket} from "../../../storage/buckets/CountriesBucket";
import {contains} from "../../../model/helpers/array/ArrayHelper";
import {countryDeselectedNotifier, countrySelectedNotifier, enabledCountryChangedNotifier} from "./CountriesNotifiers";

export class CountriesRepo {

   // Dependencies
   private countriesBucket = new CountriesBucket()

   // Available countries
   async getAvailableCountries() {
      const selectedCountries = await this.getSelectedCountries()
      return allCountries.filter((country) => {
         return !contains(selectedCountries, (item) => {
            return item.code === country.code
         })
      })
   }

   // Selected countries
   async getSelectedAndEnabledCountries() {
      const selected = await this.getSelectedCountries()
      const enabled = await this.getEnabledCountry()
      return {selected: selected, enabled: enabled}
   }

   private async getSelectedCountries(): Promise<Country[]> {
      const selected = await this.countriesBucket.getSelected()
      if (selected.length === 0) {
         await this.addCountryToSelected(defaultCountry)
         return [defaultCountry]
      } else {
         return selected
      }
   }

   private async addCountryToSelected(country: Country) {
      await this.countriesBucket.addToSelected(country)
   }

   async selectCountry(country: Country) {
      await this.addCountryToSelected(country)
      countrySelectedNotifier.notify(country)
   }

   async deselectCountry(country: Country) {
      await this.countriesBucket.removeFromSelected(country)
      await this.countriesBucket.removeFromEnabled(country)
      countryDeselectedNotifier.notify(country)
   }

   // Enabled country
   async setEnabledCountry(country: Country) {
      enabledCountry = country
      await this.saveEnabledCountry(country)
      enabledCountryChangedNotifier.notify(country)
   }

   private async saveEnabledCountry(country: Country) {
      await this.countriesBucket.setEnabled(country)
   }

   async getEnabledCountry(): Promise<Country> {
      if (enabledCountry !== undefined) {
         return enabledCountry
      } else {
         enabledCountry = await this.getCachedEnabledCountry()
         return enabledCountry
      }
   }

   private async getCachedEnabledCountry() {
      const cachedEnabledCountry = await this.countriesBucket.getEnabled()
      if (cachedEnabledCountry !== undefined) {
         return cachedEnabledCountry
      } else {
         await this.saveEnabledCountry(defaultCountry)
         return defaultCountry
      }
   }
}

let enabledCountry: Country | undefined
