import React from 'react';
import {CategoryItem} from "./CategoryItem";
import {SelectedCountriesListItem} from "../../../../countries/selectedCountries/helpers/listItem/SelectedCountriesListItem";
import {NewsFeedFilterAlertView} from "./NewsFeedFilterAlertView";
import {CountriesRepo} from "../../../../../../model/repos/countriesRepo/CountriesRepo";
import {Country} from "../../../../../../model/model/country/Country";
import {compareCountries} from "../../../../countries/availableCountries/helpers/countries/CountriesHelper";
import {
   countryDeselectedNotifier,
   countrySelectedNotifier, enabledCountryChangedNotifier
} from "../../../../../../model/repos/countriesRepo/CountriesNotifiers";
import {remove} from "../../../../../../model/helpers/array/ArrayHelper";

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

   // Data
   private enabledCountry?: Country

   // Dependencies
   private countriesRepo = new CountriesRepo()

   // Life cycle
   constructor(props: Props) {
      super(props);
      this.state = {
         countriesList: [],
      }
      countrySelectedNotifier.attach(this.onCountrySelected.bind(this))
      countryDeselectedNotifier.attach(this.onCountryDeselected.bind(this))
      enabledCountryChangedNotifier.attach(this.onEnabledCountryChanged.bind(this))
   }

   componentWillUnmount(): void {
      countrySelectedNotifier.detach(this.onCountrySelected)
      countryDeselectedNotifier.detach(this.onCountryDeselected)
      enabledCountryChangedNotifier.detach(this.onEnabledCountryChanged)
   }

   componentDidMount(): void {
      this.loadCountries()
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
      const items = countries.map((country) => {
         const isEnabled = enabled !== undefined && enabled.code === country.code
         return {country: country, isEnabled: isEnabled}
      })
      this.enabledCountry = enabled
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
      const itemsCopy = [...this.state.countriesList]
      itemsCopy[index].isEnabled = false
      this.setState({countriesList: itemsCopy})
   }

   private displayCountryEnabled(country: Country) {
      const index = this.findItemIndex(country)
      const itemsCopy = [...this.state.countriesList]
      itemsCopy[index].isEnabled = true
      this.setState({countriesList: itemsCopy})
   }

   // On country selected
   private onCountrySelected(country: Country) {
      const itemsCopy = [...this.state.countriesList]
      itemsCopy.push({country: country, isEnabled: false})
      this.prepareAndDisplayItems(itemsCopy)
   }

   // On country deselected
   private onCountryDeselected(country: Country) {
      let itemsCopy = [...this.state.countriesList]
      itemsCopy = remove(itemsCopy, ($0) => { return $0.country.code === country.code })
      this.prepareAndDisplayItems(itemsCopy)
   }

   // On enabled country changed
   private onEnabledCountryChanged(country: Country) {
      this.displayEnabledCountryChanged(country)
   }

   // Helpers
   private findItemIndex(country: Country): number {
      return this.state.countriesList.findIndex((item) => {
         return item.country.code === country.code
      })
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
