import * as React from 'react';
import { View, StatusBar, SafeAreaView } from 'react-native';
import { NavigationView } from '../../navigationViews/NavigationView';
import { styles, statusBarStyle } from './ScreenView.styles';

interface Props {
  title: string
}

export class ScreenView extends React.Component<Props> {

  render() {
    return (
      <View style={styles.container}>
        <StatusBar barStyle={statusBarStyle}/>
        <SafeAreaView style={styles.aboveSafeArea}/>
        <SafeAreaView style={styles.safeArea}>
          <NavigationView title={this.props.title}/>
           {this.props.children}
        </SafeAreaView>
        <SafeAreaView style={styles.underSafeArea}/>
      </View>
    )
  }
}
