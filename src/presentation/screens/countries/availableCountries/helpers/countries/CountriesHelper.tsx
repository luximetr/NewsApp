import {Country} from "../../../../../../model/model/country/Country";

export function sortCountries(countries: Country[]) {
   return countries.sort((itemLeft, itemRight) => {
      return itemLeft.name.localeCompare(itemRight.name)
   })
}
