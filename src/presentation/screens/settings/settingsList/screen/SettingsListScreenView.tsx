import * as React from 'react';
import {TopBarScreenView} from "../../../../helpers/components/screenViews/topBarScreenView/TopBarScreenView";
import {View, Text} from "react-native";
import {AppearancePickerView} from "../helpers/appearancePicker/AppearancePickerView";
import {Appearance} from "../../../../../model/model/appearance/Appearance";
import {LanguagePickerView} from "../helpers/languagePicker/LanguagePickerView";
import {getStyles} from "./SettingsListScreenView.styles";
import {NewsFeedItemView} from "../../../news/newsFeed/helpers/newsFeedItemView/NewsFeedItemView";
import {AppearancePickerItem} from "../helpers/appearancePicker/AppearancePickerItem";
import {translate} from "../../../../../app/repos/appLanguagesRepo/repo/Translator";
import {LocalizableComponent} from "../../../../helpers/components/baseViews/baseComponent/LocalizableComponent";
import {LanguagePickerItem} from "../helpers/languagePicker/LanguagePickerItem";

interface Props {
   languages: LanguagePickerItem[]
   onLanguagePress: (language: LanguagePickerItem) => void
   appearances: AppearancePickerItem[]
   onAppearancePress: (appearance: AppearancePickerItem) => void
}

interface State {
   title: ''
   previewHeader: ''
   themesHeader: string
   languagesHeader: string
   templateNews: {
      source: string
      title: string
      imageURL: string
   }
}

export class SettingsListScreenView extends LocalizableComponent<Props, State> {

   private templateImageURL = 'https://image.freepik.com/free-photo/image-human-brain_99433-298.jpg'

   // Life cycle
   constructor(props: Props) {
      super(props);
      this.state = {
         title: '',
         previewHeader: '',
         themesHeader: '',
         languagesHeader: '',
         templateNews: {
            source: 'NewsApp',
            title: 'News title',
            imageURL: this.templateImageURL,
         }
      }
   }

   setupStrings() {
      this.setState({
         title: translate('settings_title'),
         previewHeader: translate('settings_preview_header'),
         themesHeader: translate('settings_themes_header'),
         languagesHeader: translate('settings_languages_header'),
         templateNews: {
            source: translate('settings_template_news_source'),
            title: translate('settings_template_news_title'),
            imageURL: this.templateImageURL
         }
      })
   }

   // Render
   renderWith(appearance: Appearance): any {
      return (
         <TopBarScreenView title={this.state.title}>
            <View style={getStyles(appearance).content}>
               {this.renderThemePicker(appearance)}
               {this.renderLanguagePicker(appearance)}
               {this.renderPreview(appearance)}
            </View>
         </TopBarScreenView>
      )
   }

   // Preview
   private renderPreview(appearance: Appearance) {
      return (
         <View style={getStyles(appearance).previewContainer}>
            <Text
               style={getStyles(appearance).pickerHeaderText}
            >
               {this.state.previewHeader}
            </Text>
            <NewsFeedItemView
               imageURL={this.state.templateNews.imageURL}
               source={this.state.templateNews.source}
               title={this.state.templateNews.title}
               isInReadLater={false}
            />
            <View />
         </View>
      )
   }

   // Language picker
   private renderLanguagePicker(appearance: Appearance) {
      return (
         <View>
            <Text
               style={getStyles(appearance).pickerHeaderText}
            >
               {this.state.languagesHeader}
            </Text>
            <LanguagePickerView
               items={this.props.languages}
               onItemPress={(item) => {this.props.onLanguagePress(item)}}
            />
         </View>
      )
   }

   // Theme picker
   private renderThemePicker(appearance: Appearance) {
      return (
         <View>
            <Text
               style={getStyles(appearance).pickerHeaderText}
            >
               {this.state.themesHeader}
            </Text>
            <AppearancePickerView
               appearances={this.props.appearances}
               onItemPress={this.props.onAppearancePress.bind(this)}
            />
         </View>
      )
   }
}
