import React from 'react';
import {AvailableCountriesScreenView} from "./AvailableCountriesScreenView";
import {Country} from "../../../../../model/model/country/Country";
import {allCountries} from "../../../../../model/model/country/Countries";
import {CountriesRepo} from "../../../../../model/repos/countriesRepo/CountriesRepo";
import {sortCountries} from "../helpers/countries/CountriesHelper";

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
      this.loadCountries()
   }

   // Countries
   private loadCountries() {
      this.countriesRepo
         .getAvailableCountries()
         .then((countries) => {
            const sortedCountries = sortCountries(countries)
            this.setState({countries: sortedCountries})
         })
   }

   // Select country
   private onCountrySelect(country: Country) {
      this.countriesRepo.selectCountry(country)
      this.displayCountrySelected(country)
   }

   private displayCountrySelected(country: Country) {
      const countries = this.state.countries
      const filteredCountries = countries.filter((item) => {
         return item.code !== country.code
      })
      this.setState({countries: filteredCountries})
   }

   // View
   render() {
      return (
         <AvailableCountriesScreenView
            countries={this.state.countries}
            onCountrySelect={this.onCountrySelect.bind(this)}
         />
      )
   }
}
