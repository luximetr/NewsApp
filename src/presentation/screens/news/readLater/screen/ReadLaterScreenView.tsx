import * as React from 'react'
import {FlatList, TouchableOpacity} from 'react-native'
import {Appearance} from "../../../../../model/model/appearance/Appearance";
import {TopBarScreenView} from "../../../../helpers/components/screenViews/topBarScreenView/TopBarScreenView";
import {News} from "../../../../../model/model/news/News";
import {touchableOpacity} from "../../../../helpers/managers/ScreenInfoProvider";
import {NewsFeedItemView} from "../../newsFeed/helpers/newsFeedItemView/NewsFeedItemView";
import {LocalizableComponent} from "../../../../helpers/components/baseViews/baseComponent/LocalizableComponent";
import {translate} from "../../../../../app/repos/appLanguagesRepo/repo/Translator";

interface Props {
  readLaterList: News[]
  onNewsPress: (news: News) => void
  onRemoveToReadLaterPress: (news: News) => void
}

interface State {
  title: string
}

export class ReadLaterScreenView extends LocalizableComponent<Props, State> {

  // Life cycle
  constructor(props: any) {
    super(props);
    this.state = {
      title: ''
    }
  }

  setupStrings() {
    this.setState({
      title: translate('read_later_title')
    })
  }

  // Render
  renderWith(appearance: Appearance): any {
    return (
      <TopBarScreenView
        title={this.state.title}
      >
        {this.renderList(appearance)}
      </TopBarScreenView>
    )
  }

  // List
  private renderList(_appearance: Appearance) {
    return (
      <FlatList
        contentInset={{top: 6}}
        data={this.props.readLaterList}
        renderItem={(item) => {
          return this.renderNewsItem(item.item)
        }}
      />
    )
  }

  // List item
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
          isInReadLater={true}
          onRemoveFromReadLaterTap={() => {this.props.onRemoveToReadLaterPress(news)}}
        />
      </TouchableOpacity>
    )
  }
}