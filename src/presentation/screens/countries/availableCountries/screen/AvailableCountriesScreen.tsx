import React from 'react';
import {AvailableCountriesScreenView} from "./AvailableCountriesScreenView";
import {Country} from "../../../../../model/model/country/Country";
import {CountriesRepo} from "../../../../../model/repos/countriesRepo/CountriesRepo";
import {sortCountries} from "../helpers/countries/CountriesHelper";
import {countryDeselectedNotifier} from "../../../../../model/repos/countriesRepo/CountriesNotifiers";

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
      countryDeselectedNotifier.attach(this.onCountryDeselected.bind(this))
   }

   componentDidMount(): void {
      this.loadCountries()
   }

   componentWillUnmount(): void {
      countryDeselectedNotifier.detach(this.onCountryDeselected)
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
      this.countriesRepo
         .selectCountry(country)
         .then(() => {
            this.displayCountrySelected(country)
         })
   }

   private displayCountrySelected(country: Country) {
      let countries = this.state.countries
      countries = countries.filter((item) => {
         return item.code !== country.code
      })
      this.setState({countries: countries})
   }

   // Country deselected
   private onCountryDeselected(country: Country) {
      let countries = [...this.state.countries]
      countries.push(country)
      countries = sortCountries(countries)
      this.setState({countries: countries})
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
