import * as React from 'react'
import {ReadLaterScreenView} from "./ReadLaterScreenView";
import {ReadLaterNewsRepo} from "../../../../../app/repos/readLaterNewsRepo/ReadLaterNewsRepo";
import {News} from "../../../../../model/model/news/News";
import {
  readLaterNewsAdded,
  readLaterNewsRemoved
} from "../../../../../app/repos/readLaterNewsRepo/ReadLaterNewsNotifiers";

interface Props {
  navigation: any
}

interface State {
  readLaterList: News[]
}

export class ReadLaterScreen extends React.Component<Props, State> {

  // Dependencies
  private readLaterRepo = new ReadLaterNewsRepo()

  // Life cycle
  constructor(props: any) {
    super(props);
    this.state = {
      readLaterList: []
    }
    readLaterNewsAdded.attach(this.onReadLaterNewsAdded.bind(this))
    readLaterNewsRemoved.attach(this.onReadLaterNewsRemoved.bind(this))
  }

  componentDidMount() {
    this.loadReadLaterList()
  }

  componentWillUnmount() {
    readLaterNewsAdded.detach(this.onReadLaterNewsAdded)
    readLaterNewsRemoved.detach(this.onReadLaterNewsRemoved)
  }

  // Load read later list
  private loadReadLaterList() {
    this.readLaterRepo
      .getReadLaterNews()
      .then((news) => {
        this.displayReadLaterNews(news)
      })
  }

  // On read later news added
  private onReadLaterNewsAdded(news: News) {
    const items = [...this.state.readLaterList]
    items.push(news)
    this.displayReadLaterNews(items)
  }

  // On read later news removed
  private onReadLaterNewsRemoved(news: News) {
    const items = [...this.state.readLaterList]
    const filteredItems = items.filter((item) => {
      return item.url != news.url
    })
    this.displayReadLaterNews(filteredItems)
  }

  // Display list
  protected sortReadLaterNews(newsList: News[]) : News[] {
    return newsList.sort((news1, news2) => {
      return news1.publishedAt.getTime() - news2.publishedAt.getTime()
    })
  }

  private displayReadLaterNews(newsList: News[]) {
    const sortedItems = this.sortReadLaterNews(newsList)
    this.setState({readLaterList: sortedItems})
  }

  // On news press
  private onNewsPress(news: News) {
    this.props.navigation.push('NewsDetails', {news: news})
  }

  // On remove to read later
  private onRemoveToReadLaterPress(news: News) {
    this.readLaterRepo.removeFromReadLater(news).then()
  }

  // View
  render() {
    return (
      <ReadLaterScreenView
        readLaterList={this.state.readLaterList}
        onNewsPress={this.onNewsPress.bind(this)}
        onRemoveToReadLaterPress={this.onRemoveToReadLaterPress.bind(this)}
      />
    )
  }
}