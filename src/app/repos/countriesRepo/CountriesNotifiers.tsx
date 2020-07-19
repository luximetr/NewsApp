import {Country} from "../../../model/model/country/Country";
import {ObserversNotifier} from "../../../model/helpers/managers/ObserversNotifier";

export type CountriesObserver = (country: Country) => void

class CountryObserverNotifier extends ObserversNotifier<CountriesObserver> {
   notify(country: Country) {
      this.observers.forEach(observer => observer(country))
   }
}

export const countrySelectedNotifier = new CountryObserverNotifier()
export const countryDeselectedNotifier = new CountryObserverNotifier()
export const enabledCountryChangedNotifier = new CountryObserverNotifier()
