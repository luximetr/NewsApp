import * as React from 'react';
import {NewsFeedScreenView} from './NewsFeedScreenView';
import {TopHeadlinesRepo} from "../../../../../model/repos/topHeadlinesRepo/TopHeadlinesRepo";
import {News} from "../../../../../model/model/news/News";
import {Country} from "../../../../../model/model/country/Country";
import {enabledCountryChangedNotifier} from "../../../../../model/repos/countriesRepo/CountriesNotifiers";

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
  private filterUpdated = false

  // Dependencies
  private topHeadlinesRepo = new TopHeadlinesRepo()

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
  }

  componentWillUnmount(): void {
    enabledCountryChangedNotifier.attach(this.onEnabledCountryChanged)
  }

  componentDidMount(): void {
    this.setState({isLoading: true})
    this.loadHeadlines()
  }

  // Load headlines
  private loadHeadlines() {
    this.topHeadlinesRepo
       .getTopHeadlines(this.filteredCountry)
       .then((result) => {
         this.setState({isRefreshing: false, isLoading: false})
         if (result.data) {
           this.setState({news: result.data})
         } else {
         }
    })
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
