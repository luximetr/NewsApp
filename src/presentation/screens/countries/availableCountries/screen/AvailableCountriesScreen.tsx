import React from 'react';
import {AvailableCountriesScreenView} from "./AvailableCountriesScreenView";
import {Country} from "../../../../../model/model/country/Country";
import {allCountries} from "../../../../../model/model/country/Countries";
import {CountriesRepo} from "../../../../../model/repos/countriesRepo/CountriesRepo";

interface Props {

}

interface State {
   countries: Country[]
}

export class AvailableCountriesScreen extends React.Component<Props, State> {

   // Dependencies
   private countriesRepo = new CountriesRepo()

   // Life cycle
   constructor(props: Props) {
      super(props);
      this.state = {
         countries: []
      }
   }

   componentDidMount(): void {
      const countries = this.countriesRepo.getAvailableCountries()
      const sortedCountries = this.sortCountries(countries)
      this.setState({countries: sortedCountries})
   }

   // Countries
   protected sortCountries(countries: Country[]) {
      return countries.sort((itemLeft, itemRight) => {
         return itemLeft.name.localeCompare(itemRight.name)
      })
   }

   // View
   render() {
      return (
         <AvailableCountriesScreenView
            countries={this.state.countries}
         />
      )
   }
}
