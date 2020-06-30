import * as React from 'react';
import {TopBarScreenView} from "../../helpers/components/screenViews/topBarScreenView/TopBarScreenView";
import {BaseComponent} from "../../helpers/components/baseViews/baseComponent/BaseComponent";
import {Appearance} from "../../../model/model/appearance/Appearance";
import {News} from "../../../model/model/news/News";
import {FlatList} from "react-native";
import {NewsFeedItemView} from "./helpers/newsFeedItemView/NewsFeedItemView";

interface Props {
  news: News[]
}

interface State {
  title: string
}

export class NewsFeedScreenView extends BaseComponent<Props, State> {

  // Life cycle
  constructor(props: Props) {
    super(props);
    this.state = {
      title: 'Top News'
    }
  }

  // Render
  renderWith(appearance: Appearance): any {
    return (
       <TopBarScreenView
          title={this.state.title}
       >
         {this.renderNews()}
       </TopBarScreenView>
    )
  }

  // News
  private renderNews() {
    return (
       <FlatList
          data={this.props.news}
          renderItem={(item) => {
            return this.renderNewsItem(item.item)
          }}
       />
    )
  }

  // News item
  protected renderNewsItem(news: News) {
    return (
       <NewsFeedItemView
          title={news.title}
          imageURL={news.imageURL}
       />
    )
  }
}
