import * as React from 'react';
import {NewsFeedScreenView} from './NewsFeedScreenView';
import {TopHeadlinesRepo} from "../../../model/repos/topHeadlinesRepo/TopHeadlinesRepo";
import {BaseComponent} from "../../helpers/components/baseViews/baseComponent/BaseComponent";

interface Props {
  navigation: any
}

interface State {

}

export class NewsFeedScreen extends BaseComponent {

  // Dependencies
  private topHeadlinesRepo = new TopHeadlinesRepo()

  // Life cycle
  constructor(props: any) {
    super(props);
  }

  componentDidMount(): void {
    this.loadHeadlines()
  }

  // Load headlines
  private loadHeadlines() {
    this.topHeadlinesRepo.getTopHeadlines().then((result) => {
      console.log(result)
    })
  }

  // View
  render() {
    return (
      <NewsFeedScreenView
      />
    )
  }
}
