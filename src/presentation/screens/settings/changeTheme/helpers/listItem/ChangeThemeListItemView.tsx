import * as React from 'react';
import {View, Text} from "react-native";
import {styles} from "./ChangeThemeListItemView.styles";

interface Props {
   title: string
}

export class ChangeThemeListItemView extends React.Component<Props> {

   render() {
      return (
         <View>
            <View>
               <Text style={styles.title}>{this.props.title}</Text>
            </View>
         </View>
      )
   }
}
