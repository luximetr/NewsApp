import React from 'react';
import {CategoryItem} from "./CategoryItem";
import {SelectedCountriesListItem} from "../../../../countries/selectedCountries/helpers/listItem/SelectedCountriesListItem";
import {NewsFeedFilterAlertView} from "./NewsFeedFilterAlertView";
import {CountriesRepo} from "../../../../../../model/repos/countriesRepo/CountriesRepo";
import {Country} from "../../../../../../model/model/country/Country";
import {contains} from "../../../../../../model/helpers/array/ArrayHelper";
import {compareCountries} from "../../../../countries/availableCountries/helpers/countries/CountriesHelper";
import {SelectedCountriesListItemView} from "../../../../countries/selectedCountries/helpers/listItem/SelectedCountriesListItemView";

interface Props {
   isVisible: boolean
   onClose: VoidFunction
   categories: CategoryItem[]
   onEditCountries: VoidFunction
   onEditCategories: VoidFunction
}

interface State {
   countriesList: SelectedCountriesListItem[]
}

export class NewsFeedFilterAlert extends React.Component<Props, State> {

   // Dependencies
   private countriesRepo = new CountriesRepo()

   // Life cycle
   constructor(props: Props) {
      super(props);
      this.state = {
         countriesList: [],
      }
   }

   componentDidMount(): void {
      this.loadCountries()
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
      this.setState({countriesList: sortedItems})
   }

   // On country item press
   private onCountryItemPress(item: SelectedCountriesListItem) {
      if (item.isEnabled) {
         this.countriesRepo.disableCountry(item.country)
         this.displayCountryItemDisabled(item)
      } else {
         this.countriesRepo.enableCountry(item.country)
         this.displayCountryItemEnabled(item)
      }
   }

   private displayCountryItemDisabled(item: SelectedCountriesListItem) {
      const itemsCopy = [...this.state.countriesList]
      const index = itemsCopy.indexOf(item)
      itemsCopy[index].isEnabled = false
      this.setState({countriesList: itemsCopy})
   }

   private displayCountryItemEnabled(item: SelectedCountriesListItem) {
      const itemsCopy = [...this.state.countriesList]
      const index = itemsCopy.indexOf(item)
      itemsCopy[index].isEnabled = true
      this.setState({countriesList: itemsCopy})
   }

   // View
   render() {
      return (
         <NewsFeedFilterAlertView
            isVisible={this.props.isVisible}
            onClose={() => {this.props.onClose()}}
            onEditCountries={() => {this.props.onEditCountries()}}
            onEditCategories={() => {this.props.onEditCategories()}}
            countriesList={this.state.countriesList}
            onCountryItemPress={this.onCountryItemPress.bind(this)}
         />
      )
   }
}
