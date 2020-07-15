import React from 'react';
import {SelectedCountriesScreenView} from "./SelectedCountriesScreenView";
import {CountriesRepo} from "../../../../../model/repos/countriesRepo/CountriesRepo";
import {compareCountries, sortCountries} from "../../availableCountries/helpers/countries/CountriesHelper";
import {SelectedCountriesListItem} from "../helpers/listItem/SelectedCountriesListItem";
import {contains} from "../../../../../model/helpers/array/ArrayHelper";
import {countrySelectedNotifier} from "../../../../../model/repos/countriesRepo/Notifiers";
import {Country} from "../../../../../model/model/country/Country";

interface Props {

}

interface State {
   items: SelectedCountriesListItem[]
}

export class SelectedCountriesScreen extends React.Component<Props, State> {

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
            this.displayCountries(data.countries, data.disabled)
         })
   }

   private displayCountries(countries: Country[], disabled: Country[]) {
      const items = countries.map((country) => {
         const isEnabled = !contains(disabled, ($0) => { return $0.code === country.code})
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
      this.countriesRepo.deselectCountry(listItem.country)
      this.displayItemDeselected(listItem)
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
      if (item.isEnabled) {
         this.countriesRepo.disableCountry(item.country)
         this.displayItemDisabled(item)
      } else {
         this.countriesRepo.enableCountry(item.country)
         this.displayItemEnabled(item)
      }
   }

   private displayItemEnabled(item: SelectedCountriesListItem) {
      const itemsCopy = [...this.state.items]
      const itemIndex = itemsCopy.indexOf(item)
      itemsCopy[itemIndex].isEnabled = true
      this.setState({items: itemsCopy})
   }

   private displayItemDisabled(item: SelectedCountriesListItem) {
      const itemsCopy = [...this.state.items]
      const itemIndex = itemsCopy.indexOf(item)
      itemsCopy[itemIndex].isEnabled = false
      this.setState({items: itemsCopy})
   }

   // Country selected
   private countrySelected(country: Country) {
      const itemsCopy = [...this.state.items]
      itemsCopy.push({country: country, isEnabled: true})
      this.prepareAndDisplayItems(itemsCopy)
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
