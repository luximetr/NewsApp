import React from 'react';
import {SelectedCountriesScreenView} from "./SelectedCountriesScreenView";
import {CountriesRepo} from "../../../../../model/repos/countriesRepo/CountriesRepo";
import {compareCountries} from "../../availableCountries/helpers/countries/CountriesHelper";
import {SelectedCountriesListItem} from "../helpers/listItem/SelectedCountriesListItem";
import {countrySelectedNotifier} from "../../../../../model/repos/countriesRepo/CountriesNotifiers";
import {Country} from "../../../../../model/model/country/Country";

interface Props {

}

interface State {
   items: SelectedCountriesListItem[]
}

export class SelectedCountriesScreen extends React.Component<Props, State> {

   // Data
   private enabledCountry?: Country

   // Dependencies
   private countriesRepo = new CountriesRepo()

   // Life cycle
   constructor(props: Props) {
      super(props);
      this.state = {
         items: []
      }
      countrySelectedNotifier.attach(this.countrySelected.bind(this))
   }

   componentDidMount(): void {
      this.loadCountries()
   }

   componentWillUnmount(): void {
      countrySelectedNotifier.detach(this.countrySelected)
   }

   // Countries
   private loadCountries() {
      this.countriesRepo
         .getSelectedCountries()
         .then((data) => {
            this.displayCountries(data.countries, data.enabled)
         })
   }

   private displayCountries(countries: Country[], enabled?: Country) {
      this.enabledCountry = enabled
      const items = countries.map((country) => {
         const isEnabled = enabled !== undefined && enabled.code === country.code
         return {country: country, isEnabled: isEnabled}
      })
      this.prepareAndDisplayItems(items)
   }

   private prepareAndDisplayItems(items: SelectedCountriesListItem[]) {
      const sortedItems = items.sort((leftItem, rightItem) => {
         return compareCountries(leftItem.country, rightItem.country)
      })
      this.setState({items: sortedItems})
   }

   // Deselect country
   private onItemLongPress(listItem: SelectedCountriesListItem) {
      this.countriesRepo
         .deselectCountry(listItem.country)
         .then(() => {
            this.displayItemDeselected(listItem)
         })
   }

   private displayItemDeselected(listItem: SelectedCountriesListItem) {
      const items = this.state.items
      const filteredItems = items.filter((item) => {
         return item.country.code !== listItem.country.code
      })
      this.setState({items: filteredItems})
   }

   // Enable country
   private onItemPress(item: SelectedCountriesListItem) {
      if (item.isEnabled) { return }
      this.countriesRepo.setEnabledCountry(item.country).then(() => {
         this.displayEnabledCountryChanged(item.country)
      })
   }

   private displayEnabledCountryChanged(newEnabledCountry: Country) {
      if (this.enabledCountry) {
         this.displayCountryDisabled(this.enabledCountry)
      }
      this.displayCountryEnabled(newEnabledCountry)
      this.enabledCountry = newEnabledCountry
   }

   private displayCountryDisabled(country: Country) {
      const index = this.findItemIndex(country)
      const itemsCopy = [...this.state.items]
      itemsCopy[index].isEnabled = false
      this.setState({items: itemsCopy})
   }

   private displayCountryEnabled(country: Country) {
      const index = this.findItemIndex(country)
      const itemsCopy = [...this.state.items]
      itemsCopy[index].isEnabled = true
      this.setState({items: itemsCopy})
   }

   // Country selected
   private countrySelected(country: Country) {
      const itemsCopy = [...this.state.items]
      itemsCopy.push({country: country, isEnabled: false})
      this.prepareAndDisplayItems(itemsCopy)
   }

   // Helpers
   private findItemIndex(country: Country): number {
      return this.state.items.findIndex((item) => {
         return item.country.code === country.code
      })
   }

   // View
   render() {
      return (
         <SelectedCountriesScreenView
            items={this.state.items}
            onItemPress={this.onItemPress.bind(this)}
            onItemLongPress={this.onItemLongPress.bind(this)}
         />
      )
   }
}
