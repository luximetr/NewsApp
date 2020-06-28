import * as React from 'react';
import { View, Text } from 'react-native';
import { styles } from './NavigationView.styles';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { VectorIcon } from '../imageViews/icons/VectorIcon';

interface Props {
  title: string
}

export class NavigationView extends React.Component<Props> {

  render() {
    return (
      <View style={styles.container}>
        {this.renderLeftAction()}
        {this.renderTitle()}
        {this.renderRightAction()}
      </View>
    )
  }

  private renderLeftAction() {
    return (
      <TouchableOpacity style={styles.leftAction}>
        <VectorIcon name={'ios-arrow-back'} source={'ion'} size={30} color={'green'}/>
      </TouchableOpacity>
    )
  }

  private renderTitle() {
    return (
      <Text
        style={styles.title}
      >
        {this.props.title}
        </Text>
    )
  }

  private renderRightAction() {
    return (
      <View/>
    )
  }
}