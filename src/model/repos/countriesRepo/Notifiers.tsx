import {Country} from "../../model/country/Country";
import {ObserversNotifier} from "../../helpers/managers/ObserversNotifier";

export type CountriesObserver = (country: Country) => void

class CountryObserverNotifier extends ObserversNotifier<CountriesObserver> {
   notify(country: Country) {
      this.observers.forEach(observer => observer(country))
   }
}

export const countrySelectedNotifier = new CountryObserverNotifier()
export const countryDeselectedNotifier = new CountryObserverNotifier()
export const countryEnabledNotifier = new CountryObserverNotifier()
export const countryDisabledNotifier = new CountryObserverNotifier()
