import * as React from 'react';
import {NewsFeedScreenView} from './NewsFeedScreenView';
import {TopHeadlinesRepo} from "../../../../model/repos/topHeadlinesRepo/TopHeadlinesRepo";
import {News} from "../../../../model/model/news/News";

interface Props {
  navigation: any
}

interface State {
  news: News[]
  isRefreshing: boolean
  isLoading: boolean
}

export class NewsFeedScreen extends React.Component<Props, State> {

  // Dependencies
  private topHeadlinesRepo = new TopHeadlinesRepo()

  // Life cycle
  constructor(props: any) {
    super(props);
    this.state = {
      news: [],
      isRefreshing: false,
      isLoading: false,
    }
  }

  componentDidMount(): void {
    this.setState({isLoading: true})
    this.loadHeadlines()
  }

  // Load headlines
  private loadHeadlines() {
    this.topHeadlinesRepo.getTopHeadlines().then((result) => {
      this.setState({isRefreshing: false, isLoading: false})
      if (result.data) {
        this.setState({news: result.data})
      } else {

      }
    })
  }

  private onRefresh() {
    this.setState({isRefreshing: true})
    this.loadHeadlines()
  }

  // View
  render() {
    return (
      <NewsFeedScreenView
         news={this.state.news}
         isRefreshing={this.state.isRefreshing}
         onRefresh={this.onRefresh.bind(this)}
         isLoading={this.state.isLoading}
      />
    )
  }
}
