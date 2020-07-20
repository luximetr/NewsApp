import * as React from 'react';
import {NewsFeedScreenView} from './NewsFeedScreenView';
import {TopHeadlinesRepo} from "../../../../../app/repos/topHeadlinesRepo/TopHeadlinesRepo";
import {News} from "../../../../../model/model/news/News";
import {Country} from "../../../../../model/model/country/Country";
import {enabledCountryChangedNotifier} from "../../../../../app/repos/countriesRepo/CountriesNotifiers";
import {CountriesRepo} from "../../../../../app/repos/countriesRepo/CountriesRepo";
import {Category} from "../../../../../model/model/category/Category";
import {enabledCategoryChangedNotifier} from "../../../../../app/repos/categoriesRepo/CategoriesNotifiers";
import {CategoriesRepo} from "../../../../../app/repos/categoriesRepo/CategoriesRepo";
import {showTopErrorBanner} from "../../../../helpers/components/alerts/topBanner/TopBanner";

interface Props {
  navigation: any
}

interface State {
  news: News[]
  isRefreshing: boolean
  isLoading: boolean
  isPickerVisible: boolean
}

export class NewsFeedScreen extends React.Component<Props, State> {

  // Data
  private filteredCountry?: Country
  private filteredCategory?: Category
  private filterUpdated = false

  // Dependencies
  private topHeadlinesRepo = new TopHeadlinesRepo()
  private countriesRepo = new CountriesRepo()
  private categoriesRepo = new CategoriesRepo()

  // Life cycle
  constructor(props: any) {
    super(props);
    this.state = {
      news: [],
      isRefreshing: false,
      isLoading: false,
      isPickerVisible: false,
    }
    enabledCountryChangedNotifier.attach(this.onEnabledCountryChanged.bind(this))
    enabledCategoryChangedNotifier.attach(this.onEnabledCategoryChanged.bind(this))
  }

  componentWillUnmount(): void {
    enabledCountryChangedNotifier.detach(this.onEnabledCountryChanged)
    enabledCategoryChangedNotifier.detach(this.onEnabledCategoryChanged)
  }

  componentDidMount(): void {
    this.setState({isLoading: true})
    this.loadHeadlines()
  }

  // Load headlines
  private loadHeadlines() {
    this.asyncLoadHeadlines().then()
  }

  private async asyncLoadHeadlines() {
    if (this.filteredCountry === undefined) {
      this.filteredCountry = await this.countriesRepo.getEnabledCountry()
    }
    if (this.filteredCategory === undefined) {
      this.filteredCategory = await this.categoriesRepo.getEnabledCategory()
    }
    const result = await this.topHeadlinesRepo.getTopHeadlines(this.filteredCountry, this.filteredCategory)
    this.setState({isRefreshing: false, isLoading: false})
    if (result.data) {
      this.setState({news: result.data})
    } else {
      showTopErrorBanner(result.error.message)
    }
  }

  // Refresh
  private onRefresh() {
    this.setState({isRefreshing: true})
    this.loadHeadlines()
  }

  // Filter
  private onFilter() {
    this.setState({isPickerVisible: true})
  }

  private onPickerClose() {
    this.setState({isPickerVisible: false})
    this.applyFilters()
  }

  private applyFilters() {
    if (!this.filterUpdated) { return }
    this.filterUpdated = false
    this.loadHeadlines()
  }

  // Countries
  private onEditCountries() {
    this.setState({isPickerVisible: false}, () => {
      this.props.navigation.push('SelectCountries')
    })
  }

  private onEnabledCountryChanged(country: Country) {
    this.filteredCountry = country
    this.filterUpdated = true
  }

  // Categories
  private onEditCategories() {
    this.setState({isPickerVisible: false}, () => {
      this.props.navigation.push('SelectCategories')
    })
  }

  private onEnabledCategoryChanged(category: Category) {
    this.filteredCategory = category
    this.filterUpdated = true
  }

  // News select
  private onNewsPress(news: News) {
    this.props.navigation.push('NewsDetails', {news: news})
  }

  // View
  render() {
    return (
      <NewsFeedScreenView
         news={this.state.news}
         isRefreshing={this.state.isRefreshing}
         onRefresh={this.onRefresh.bind(this)}
         isLoading={this.state.isLoading}
         onNewsPress={this.onNewsPress.bind(this)}
         onFilter={this.onFilter.bind(this)}
         isPickerVisible={this.state.isPickerVisible}
         onPickerClose={() => {this.onPickerClose()}}
         onEditCategories={this.onEditCategories.bind(this)}
         onEditCountries={this.onEditCountries.bind(this)}
      />
    )
  }
}
