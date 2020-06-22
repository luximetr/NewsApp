import * as React from 'react';
import { View, Text } from 'react-native';
import { styles } from './NavigationView.styles';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { VectorIcon } from '../imageViews/icons/VectorIcon';

export class NavigationView extends React.Component {

  render() {
    return (
      <View style={styles.container}>
        {this.renderLeftAction()}
        <Text>Navigation</Text>
      </View>
    )
  }

  private renderLeftAction() {
    return (
      <TouchableOpacity>
        <VectorIcon name={'add'} source={'material'} size={30}/>
        <Text>Left</Text>
      </TouchableOpacity>
    )
  }
}