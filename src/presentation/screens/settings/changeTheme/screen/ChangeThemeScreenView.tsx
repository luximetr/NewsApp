import * as React from 'react';
import {FlatList, TouchableOpacity} from "react-native";
import {ChangeThemeListItemView} from "../helpers/listItem/ChangeThemeListItemView";
import {ChangeThemeItem} from "../helpers/model/ChangeThemeItem";
import {Appearance} from "../../../../../model/custom/appearance/Appearance";
import {getStyles} from "./ChangeThemeScreenView.styles";
import {BaseComponent} from "../../../../helpers/components/baseViews/baseComponent/BaseComponent";
import {TopBarScreenView} from "../../../../helpers/components/screenViews/topBarScreenView/TopBarScreenView";

interface Props {
   themes: ChangeThemeItem[]
   onThemePress: (theme: ChangeThemeItem) => void
   onBack: VoidFunction
}

export class ChangeThemeScreenView extends BaseComponent<Props> {

   renderWith(appearance: Appearance) {
      return (
         <TopBarScreenView
            title={'Change theme'}
            leftTopBarButton={{
               action: () => {this.props.onBack()}
            }}
         >
            <FlatList
               style={getStyles(appearance).content}
               data={this.props.themes}
               renderItem={(item) => {
                  return this.renderItem(item.item)
               }}
            />
         </TopBarScreenView>
      )
   }

   // Item
   private renderItem(theme: ChangeThemeItem) {
      return (
         <TouchableOpacity onPress={() => {this.props.onThemePress(theme)}}>
            <ChangeThemeListItemView
               title={theme.name}
            />
         </TouchableOpacity>
      )
   }
}
