import * as React from 'react';
import {NewsFeedScreenView} from './NewsFeedScreenView';
import {TopHeadlinesRepo} from "../../../model/repos/topHeadlinesRepo/TopHeadlinesRepo";
import {BaseComponent} from "../../helpers/components/baseViews/baseComponent/BaseComponent";
import {News} from "../../../model/model/news/News";
import ImageColors from "react-native-image-colors"

interface Props {
  navigation: any
}

interface State {
  news: News[]
}

export class NewsFeedScreen extends BaseComponent {

  // Dependencies
  private topHeadlinesRepo = new TopHeadlinesRepo()

  // Life cycle
  constructor(props: any) {
    super(props);
    this.state = {
      news: []
    }
  }

  componentDidMount(): void {
    this.loadHeadlines()


    console.log('LOAD COLORS')
    ImageColors.getColors('https://www.talkwalker.com/images/2020/blog-headers/image-analysis.png', {})
       .then((result) => {
         console.log((result))
       })
       .catch()
  }

  // Load headlines
  private loadHeadlines() {
    this.topHeadlinesRepo.getTopHeadlines().then((result) => {
      if (result.data) {
        this.setState({news: result.data})
      } else {

      }
    })
  }

  // View
  render() {
    return (
      <NewsFeedScreenView
         news={this.state.news}
      />
    )
  }
}
