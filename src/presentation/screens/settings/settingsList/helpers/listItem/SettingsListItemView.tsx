import * as React from 'react';
import {View, Text, TouchableOpacity} from "react-native";
import {styles} from "./SettingsListItemView.styles";

interface Props {
   title: string
   value: string
   onSelect: VoidFunction
}

export class SettingsListItemView extends React.Component<Props> {

   render() {
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
