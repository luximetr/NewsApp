import * as React from 'react';
import {TopBarScreenView} from "../../../../helpers/components/screenViews/topBarScreenView/TopBarScreenView";
import {Appearance} from "../../../../../model/model/appearance/Appearance";
import {News} from "../../../../../model/model/news/News";
import {FlatList, RefreshControl, TouchableOpacity} from "react-native";
import {NewsFeedItemView} from "../helpers/newsFeedItemView/NewsFeedItemView";
import {FullScreenLoaderView} from "../../../../helpers/components/loaderViews/fullScreenLoaderView/FullScreenLoaderView";
import {touchableOpacity} from "../../../../helpers/managers/ScreenInfoProvider";
import {NewsFeedFilterAlert} from "../../newsFeedFilter/screen/NewsFeedFilterAlert";
import {translate} from "../../../../../app/repos/appLanguagesRepo/repo/Translator";
import {LocalizableComponent} from "../../../../helpers/components/baseViews/baseComponent/LocalizableComponent";
import {FloatRoundButton} from "../../../../helpers/components/buttons/floatRoundButton/FloatRoundButton";

interface Props {
   news: News[]
   isRefreshing: boolean
   isLoading: boolean
   onRefresh: VoidFunction
   onNewsPress: (news: News) => void
   onFilter: VoidFunction
   isPickerVisible: boolean
   onPickerClose: VoidFunction
   onEditCountries: VoidFunction
   onEditCategories: VoidFunction
}

interface State {
   title: string
}

export class NewsFeedScreenView extends LocalizableComponent<Props, State> {

   // Life cycle
   constructor(props: Props) {
      super(props);
      this.state = {
         title: ''
      }
   }

   // Setup strings
   setupStrings() {
      this.setState({
         title: translate('news_feed_title')
      })
   }

   // Render
   renderWith(appearance: Appearance): any {
      return (
         <TopBarScreenView
            title={this.state.title}
         >
            {this.renderContent(appearance)}
            {this.renderFilterButton()}
            {this.renderFilterAlert()}
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
            contentInset={{top: 6}}
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
               source={news.source.name}
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

   // Filter button
   private renderFilterButton() {
      return (
         <FloatRoundButton
            imageSource={require('../../../../helpers/assets/filter.png')}
            onPress={() => {this.props.onFilter()}}
         />
      )
   }

   // Filter alert
   private renderFilterAlert() {
      return (
         <NewsFeedFilterAlert
            isVisible={this.props.isPickerVisible}
            onClose={() => {this.props.onPickerClose()}}
            onEditCountries={() => {this.props.onEditCountries()}}
            onEditCategories={() => {this.props.onEditCategories()}}
         />
      )
   }
}
