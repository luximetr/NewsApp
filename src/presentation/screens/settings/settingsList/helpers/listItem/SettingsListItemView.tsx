import * as React from 'react';
import {View, Text, TouchableOpacity} from "react-native";
import {getStyles} from "./SettingsListItemView.styles";
import {BaseComponent} from "../../../../../helpers/components/baseViews/baseComponent/BaseComponent";
import {Appearance} from "../../../../../../model/model/appearance/Appearance";

interface Props {
   title: string
   value: string
   onSelect: VoidFunction
}

export class SettingsListItemView extends BaseComponent<Props> {

   renderWith(appearance: Appearance): any {
      const styles = getStyles(appearance)
      return (
         <View>
            <TouchableOpacity onPress={this.props.onSelect.bind(this)}>
               <View style={styles.content}>
                  <Text style={styles.title}>{this.props.title}</Text>
                  <Text style={styles.value}>{this.props.value}</Text>
               </View>
            </TouchableOpacity>
            <View style={styles.divider}/>
         </View>
      )
   }
}
