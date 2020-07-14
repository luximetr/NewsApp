import React from 'react';
import {SelectedCountriesScreenView} from "./SelectedCountriesScreenView";
import {Country} from "../../../../../model/model/country/Country";
import {CountriesRepo} from "../../../../../model/repos/countriesRepo/CountriesRepo";
import {sortCountries} from "../../availableCountries/helpers/countries/CountriesHelper";

interface Props {

}

interface State {
   countries: Country[]
}

export class SelectedCountriesScreen extends React.Component<Props, State> {

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
      this.loadCountries()
   }

   // Countries
   private loadCountries() {
      this.countriesRepo
         .getSelectedCountries()
         .then((countries) => {
            const sortedCountries = sortCountries(countries)
            this.setState({countries: sortedCountries})
         })
   }

   // Deselect country
   private deselectCountry(country: Country) {
      this.countriesRepo.deselectCountry(country)
   }

   // View
   render() {
      return (
         <SelectedCountriesScreenView
            countries={this.state.countries}
            onCountrySelect={this.deselectCountry.bind(this)}
         />
      )
   }
}
