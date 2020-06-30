import * as React from 'react';
import {View, Text} from "react-native";
import {Appearance} from "../../../../../../model/model/appearance/Appearance";
import {getStyles} from "./ChangeThemeListItemView.styles";
import {BaseComponent} from "../../../../../helpers/components/baseViews/baseComponent/BaseComponent";

interface Props {
   title: string
}

interface State {
}

export class ChangeThemeListItemView extends BaseComponent<Props, State> {

   renderWith(appearance: Appearance): any {
      const styles = getStyles(appearance)
      return (
         <Text style={styles.title}>{this.props.title}</Text>
      )
   }
}
