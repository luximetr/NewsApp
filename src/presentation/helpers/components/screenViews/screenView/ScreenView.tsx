import * as React from 'react';
import { View, StatusBar, SafeAreaView } from 'react-native';
import { styles, statusBarStyle } from './ScreenView.styles';
import { NavigationView } from '../../navigationViews/NavigationView';

interface Props {
}

export class ScreenView extends React.Component<Props> {

  render() {
    return (
      <View>
        <StatusBar barStyle={statusBarStyle}/>
        <SafeAreaView />
        <NavigationView/>
        
      </View>
    )
  }
}