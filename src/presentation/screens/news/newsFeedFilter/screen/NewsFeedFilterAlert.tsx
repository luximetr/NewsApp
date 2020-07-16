import React from 'react';
import {SelectedCountriesListItem} from "../../../countries/selectedCountries/helpers/listItem/SelectedCountriesListItem";
import {NewsFeedFilterAlertView} from "./NewsFeedFilterAlertView";
import {CountriesRepo} from "../../../../../model/repos/countriesRepo/CountriesRepo";
import {Country} from "../../../../../model/model/country/Country";
import {compareCountries} from "../../../countries/availableCountries/helpers/countries/CountriesHelper";
import {
   countryDeselectedNotifier,
   countrySelectedNotifier, enabledCountryChangedNotifier
} from "../../../../../model/repos/countriesRepo/CountriesNotifiers";
import {remove} from "../../../../../model/helpers/array/ArrayHelper";
import {SelectedCategoriesListItem} from "../../../categories/selectedCategories/helpers/selectedCategoriesListItem/SelectedCategoriesListItem";
import {Category} from "../../../../../model/model/category/Category";
import {
   categoryDeselectedNotifier,
   categorySelectedNotifier, enabledCategoryChangedNotifier
} from "../../../../../model/repos/categoriesRepo/CategoriesNotifiers";
import {compareCategories} from "../../../categories/availableCategories/helpers/categories/CategoriesHelper";
import {CategoriesRepo} from "../../../../../model/repos/categoriesRepo/CategoriesRepo";

interface Props {
   isVisible: boolean
   onClose: VoidFunction
   onEditCountries: VoidFunction
   onEditCategories: VoidFunction
}

interface State {
   countriesList: SelectedCountriesListItem[]
   categoriesList: SelectedCategoriesListItem[]
}

export class NewsFeedFilterAlert extends React.Component<Props, State> {

   // Data
   private enabledCountry?: Country
   private enabledCategory?: Category

   // Dependencies
   private countriesRepo = new CountriesRepo()
   private categoriesRepo = new CategoriesRepo()

   // Life cycle
   constructor(props: Props) {
      super(props);
      this.state = {
         countriesList: [],
         categoriesList: [],
      }
      countrySelectedNotifier.attach(this.onCountrySelected.bind(this))
      countryDeselectedNotifier.attach(this.onCountryDeselected.bind(this))
      enabledCountryChangedNotifier.attach(this.onEnabledCountryChanged.bind(this))
      categorySelectedNotifier.attach(this.onCategorySelected.bind(this))
      categoryDeselectedNotifier.attach(this.onCategoryDeselected.bind(this))
      enabledCategoryChangedNotifier.attach(this.onEnabledCategoryChanged.bind(this))
   }

   componentWillUnmount(): void {
      countrySelectedNotifier.detach(this.onCountrySelected)
      countryDeselectedNotifier.detach(this.onCountryDeselected)
      enabledCountryChangedNotifier.detach(this.onEnabledCountryChanged)
      categorySelectedNotifier.detach(this.onCategorySelected)
      categoryDeselectedNotifier.detach(this.onCategoryDeselected)
      enabledCategoryChangedNotifier.detach(this.onEnabledCategoryChanged)
   }

   componentDidMount(): void {
      this.loadCountries()
      this.loadCategories()
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
         return {country: country, isEnabled: isEnabled} as SelectedCountriesListItem
      })
      this.enabledCountry = enabled
      this.prepareAndDisplayCountriesItems(items)
   }

   private prepareAndDisplayCountriesItems(items: SelectedCountriesListItem[]) {
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
      const index = this.findCountryItemIndex(country)
      const itemsCopy = [...this.state.countriesList]
      itemsCopy[index].isEnabled = false
      this.setState({countriesList: itemsCopy})
   }

   private displayCountryEnabled(country: Country) {
      const index = this.findCountryItemIndex(country)
      const itemsCopy = [...this.state.countriesList]
      itemsCopy[index].isEnabled = true
      this.setState({countriesList: itemsCopy})
   }

   // On country selected
   private onCountrySelected(country: Country) {
      const itemsCopy = [...this.state.countriesList]
      itemsCopy.push({country: country, isEnabled: false})
      this.prepareAndDisplayCountriesItems(itemsCopy)
   }

   // On country deselected
   private onCountryDeselected(country: Country) {
      let itemsCopy = [...this.state.countriesList]
      itemsCopy = remove(itemsCopy, ($0) => { return $0.country.code === country.code })
      this.prepareAndDisplayCountriesItems(itemsCopy)
   }

   // On enabled country changed
   private onEnabledCountryChanged(country: Country) {
      this.displayEnabledCountryChanged(country)
   }

   // Load categories
   private loadCategories() {
      this.categoriesRepo
         .getSelected()
         .then((data) => {
            this.displayCategories(data.selected, data.enabled)
         })
   }

   private displayCategories(categories: Category[], enabled?: Category) {
      const items = categories.map((category) => {
         const isEnabled = enabled !== undefined && enabled.code === category.code
         return {category: category, isEnabled: isEnabled} as SelectedCategoriesListItem
      })
      this.enabledCategory = enabled
      this.prepareAndDisplayCategoriesItems(items)
   }

   private prepareAndDisplayCategoriesItems(items: SelectedCategoriesListItem[]) {
      const sortedItems = items.sort((leftItem, rightItem) => {
         return compareCategories(leftItem.category, rightItem.category)
      })
      this.setState({categoriesList: sortedItems})
   }

   // On category press
   private onCategoryItemPress(item: SelectedCategoriesListItem) {
      if (item.isEnabled) { return }
      this.categoriesRepo.setEnabledCategory(item.category).then(() => {
         this.displayEnabledCategoryChanged(item.category)
      })
   }

   private displayEnabledCategoryChanged(newEnabledCategory: Category) {
      if (this.enabledCategory) {
         this.displayCategoryDisabled(this.enabledCategory)
      }
      this.displayCategoryEnabled(newEnabledCategory)
      this.enabledCategory = newEnabledCategory
   }

   private displayCategoryEnabled(category: Category) {
      const index = this.findCategoryItemIndex(category)
      const categoriesCopy = [...this.state.categoriesList]
      categoriesCopy[index].isEnabled = true
      this.setState({categoriesList: categoriesCopy})
   }

   private displayCategoryDisabled(category: Category) {
      const index = this.findCategoryItemIndex(category)
      const categoryCopy = [...this.state.categoriesList]
      categoryCopy[index].isEnabled = false
      this.setState({categoriesList: categoryCopy})
   }

   // On category selected
   private onCategorySelected(category: Category) {
      const categoriesCopy = [...this.state.categoriesList]
      categoriesCopy.push({category: category, isEnabled: false})
      this.prepareAndDisplayCategoriesItems(categoriesCopy)
   }

   // On category deselected
   private onCategoryDeselected(category: Category) {
      let categoriesCopy = [...this.state.categoriesList]
      categoriesCopy = remove(categoriesCopy, ($0) => { return $0.category.code === category.code})
      this.prepareAndDisplayCategoriesItems(categoriesCopy)
   }

   // On enabled category changed
   private onEnabledCategoryChanged(category: Category) {
      this.displayEnabledCategoryChanged(category)
   }

   // Helpers
   private findCountryItemIndex(country: Country): number {
      return this.state.countriesList.findIndex((item) => {
         return item.country.code === country.code
      })
   }

   private findCategoryItemIndex(category: Category): number {
      return this.state.categoriesList.findIndex((item) => {
         return item.category.code === category.code
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
            categoriesList={this.state.categoriesList}
            onCategoryItemPress={this.onCategoryItemPress.bind(this)}
         />
      )
   }
}
