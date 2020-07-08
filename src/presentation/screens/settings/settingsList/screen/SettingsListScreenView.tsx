import * as React from 'react';
import {TopBarScreenView} from "../../../../helpers/components/screenViews/topBarScreenView/TopBarScreenView";
import {View, Text} from "react-native";
import {ThemePickerView} from "../helpers/themePicker/ThemePickerView";
import {AppearanceType} from "../../../../../model/model/appearance/AppearanceType";
import {BaseComponent} from "../../../../helpers/components/baseViews/baseComponent/BaseComponent";
import {Appearance} from "../../../../../model/model/appearance/Appearance";
import {LanguagePickerView} from "../helpers/languagePicker/LanguagePickerView";
import {getStyles} from "./SettingsListScreenView.styles";
import {NewsFeedItemView} from "../../../news/newsFeed/helpers/newsFeedItemView/NewsFeedItemView";

interface Props {
   selectedLanguageName: string
   onSelectLanguage: VoidFunction
   themes: AppearanceType[]
   onSelectTheme: (theme: AppearanceType) => void
}

interface State {
   title: string
   previewHeader: string
   themesHeader: string
   languagesHeader: string
   templateNews: {
      source: string
      title: string
      imageURL: string
   }
}

export class SettingsListScreenView extends BaseComponent<Props, State> {

   // Life cycle
   constructor(props: Props) {
      super(props);
      this.state = {
         title: "Settings",
         previewHeader: "Preview",
         themesHeader: "Themes",
         languagesHeader: "Languages",
         templateNews: {
            source: "NewsApp",
            title: "Here you can see example news title",
            imageURL: "https://image.freepik.com/free-photo/image-human-brain_99433-298.jpg",
         }
      }
   }

   // Render
   renderWith(appearance: Appearance): any {
      return (
         <TopBarScreenView title={this.state.title}>
            <View style={getStyles(appearance).content}>
               {this.renderThemePicker(appearance)}
               {this.renderLanguagePicker(appearance)}
               {/*<View style={getStyles(appearance).pickersContainer}>*/}
               {/*   */}
               {/*</View>*/}
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
            />
            <View />
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
            <ThemePickerView
               themes={this.props.themes}
               onSelectTheme={this.props.onSelectTheme.bind(this)}
            />
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
            />
         </View>
      )
   }
}
