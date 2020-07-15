import {Country} from "../../../../../../model/model/country/Country";

export function sortCountries(countries: Country[]) {
   return countries.sort((itemLeft, itemRight) => {
      return compareCountries(itemLeft, itemRight)
   })
}

export function compareCountries(country1: Country, country2: Country): number {
   return country1.name.localeCompare(country2.name)
}
