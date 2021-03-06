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
import {ReadLaterNewsRepo} from "../../../../../app/repos/readLaterNewsRepo/ReadLaterNewsRepo";
import {
  readLaterNewsAdded,
  readLaterNewsRemoved
} from "../../../../../app/repos/readLaterNewsRepo/ReadLaterNewsNotifiers";

interface Props {
  navigation: any
}

interface State {
  news: News[]
  readLaterList: News[]
  isRefreshing: boolean
  isLoading: boolean
  isPickerVisible: boolean
}

const firstPageIndex = 1

export class NewsFeedScreen extends React.Component<Props, State> {

  // Data
  private filteredCountry?: Country
  private filteredCategory?: Category
  private filterUpdated = false
  private currentPage = firstPageIndex

  // Dependencies
  private topHeadlinesRepo = new TopHeadlinesRepo()
  private countriesRepo = new CountriesRepo()
  private categoriesRepo = new CategoriesRepo()
  private readLaterRepo = new ReadLaterNewsRepo()

  // Life cycle
  constructor(props: any) {
    super(props);
    this.state = {
      news: [],
      readLaterList: [],
      isRefreshing: false,
      isLoading: false,
      isPickerVisible: false,
    }
    enabledCountryChangedNotifier.attach(this.onEnabledCountryChanged.bind(this))
    enabledCategoryChangedNotifier.attach(this.onEnabledCategoryChanged.bind(this))
    readLaterNewsAdded.attach(this.onReadLaterNewsAdded.bind(this))
    readLaterNewsRemoved.attach(this.onReadLaterNewsRemoved.bind(this))
  }

  componentWillUnmount(): void {
    enabledCountryChangedNotifier.detach(this.onEnabledCountryChanged)
    enabledCategoryChangedNotifier.detach(this.onEnabledCategoryChanged)
    readLaterNewsAdded.detach(this.onReadLaterNewsAdded)
    readLaterNewsRemoved.detach(this.onReadLaterNewsRemoved)
  }

  componentDidMount(): void {
    this.setState({isLoading: true})
    this.loadReadLaterList()
    this.loadHeadlinesNextPage()
  }

  // Load headlines
  private loadHeadlinesFirstPage() {
    this.currentPage = firstPageIndex
    this.loadHeadlinesNextPage()
  }

  private loadHeadlinesNextPage() {
    this.loadHeadlinesNextPageAsync().then()
  }

  private async loadHeadlinesNextPageAsync() {
    await this.fetchFilteredCountryIfNeeded()
    await this.fetchFilteredCategoryIfNeeded()
    const result = await this.topHeadlinesRepo.getTopHeadlines(this.currentPage, this.filteredCountry, this.filteredCategory)
    this.setState({isRefreshing: false, isLoading: false})
    if (result.data) {
      if (result.data.length === 0) { return }
      if (this.currentPage === firstPageIndex) {
        this.setState({news: result.data})
      } else {
        const allNews = this.state.news.concat(result.data)
        this.setState({news: allNews})
      }
      this.currentPage += 1
    } else {
      showTopErrorBanner(result.error?.message)
    }
  }

  private async fetchFilteredCountryIfNeeded() {
    if (this.filteredCountry !== undefined) { return }
    this.filteredCountry = await this.countriesRepo.getEnabledCountry()
  }

  private async fetchFilteredCategoryIfNeeded() {
    if (this.filteredCategory !== undefined) { return }
    this.filteredCategory = await this.categoriesRepo.getEnabledCategory()
  }

  // Load next page
  private onReachedNewsListEnd() {
    this.loadHeadlinesNextPage()
  }

  // Refresh
  private onRefresh() {
    this.setState({isRefreshing: true})
    this.loadHeadlinesFirstPage()
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
    this.loadHeadlinesFirstPage()
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

  // Add to read later
  private onAddToReadLaterPress(news: News) {
    this.readLaterRepo.addNewsToReadLater(news).then()
  }

  // Remove from read later
  private onRemoveFromReadLaterPress(news: News) {
    this.readLaterRepo.removeFromReadLater(news).then()
  }

  // Load read later list
  private loadReadLaterList() {
    this.readLaterRepo
      .getReadLaterNews()
      .then((news) => {
        this.setState({readLaterList: news})
      })
  }

  // On read later news added
  private onReadLaterNewsAdded(news: News) {
    const items = [...this.state.readLaterList]
    items.push(news)
    this.setState({readLaterList: items})
  }

  // On read later news removed
  private onReadLaterNewsRemoved(news: News) {
    const items = [...this.state.readLaterList]
    const filteredItems = items.filter((item) => {
      return item.url != news.url
    })
    this.setState({readLaterList: filteredItems})
  }

  // View
  render() {
    return (
      <NewsFeedScreenView
         news={this.state.news}
         readLaterNews={this.state.readLaterList}
         isRefreshing={this.state.isRefreshing}
         onRefresh={this.onRefresh.bind(this)}
         isLoading={this.state.isLoading}
         onNewsPress={this.onNewsPress.bind(this)}
         onFilter={this.onFilter.bind(this)}
         isPickerVisible={this.state.isPickerVisible}
         onPickerClose={() => {this.onPickerClose()}}
         onEditCategories={this.onEditCategories.bind(this)}
         onEditCountries={this.onEditCountries.bind(this)}
         onReachedEnd={this.onReachedNewsListEnd.bind(this)}
         onAddToReadLaterPress={this.onAddToReadLaterPress.bind(this)}
         onRemoveToReadLaterPress={this.onRemoveFromReadLaterPress.bind(this)}
      />
    )
  }
}
