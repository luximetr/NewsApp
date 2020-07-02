import * as React from 'react';
import {TopBarScreenView} from "../../../helpers/components/screenViews/topBarScreenView/TopBarScreenView";
import {BaseComponent} from "../../../helpers/components/baseViews/baseComponent/BaseComponent";
import {Appearance} from "../../../../model/model/appearance/Appearance";
import {News} from "../../../../model/model/news/News";
import {FlatList, RefreshControl, TouchableOpacity} from "react-native";
import {NewsFeedItemView} from "../helpers/newsFeedItemView/NewsFeedItemView";
import {FullScreenLoaderView} from "../../../helpers/components/loaderViews/fullScreenLoaderView/FullScreenLoaderView";
import {touchableOpacity} from "../../../helpers/managers/ScreenInfoProvider";

interface Props {
   news: News[]
   isRefreshing: boolean
   isLoading: boolean
   onRefresh: VoidFunction
   onNewsPress: (news: News) => void
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
          {this.renderContent(appearance)}
       </TopBarScreenView>
    )
  }

   // Content
   private renderContent(appearance: Appearance) {
     if (this.props.isLoading) {
        return this.renderFullScreenLoader()
     } else {
        return this.renderNews(appearance)
     }
   }

  // News
  private renderNews(appearance: Appearance) {
    return (
       <FlatList
          data={this.props.news}
          renderItem={(item) => {
            return this.renderNewsItem(item.item)
          }}
          refreshControl={this.renderRefreshControl(appearance)}
       />
    )
  }

  // News item
  protected renderNewsItem(news: News) {
    return (
       <TouchableOpacity
          activeOpacity={touchableOpacity}
          onPress={() => {this.props.onNewsPress(news)}}
       >
          <NewsFeedItemView
             title={news.title}
             imageURL={news.imageURL}
          />
       </TouchableOpacity>
    )
  }

  // Refresh control
   private renderRefreshControl(appearance: Appearance) {
     return (
        <RefreshControl
           refreshing={this.props.isRefreshing}
           onRefresh={this.props.onRefresh.bind(this)}
           tintColor={appearance.scroll.refresh.primary}
        />
     )
   }

   // Full screen loader
   protected renderFullScreenLoader() {
     return (
        <FullScreenLoaderView />
     )
   }
}
