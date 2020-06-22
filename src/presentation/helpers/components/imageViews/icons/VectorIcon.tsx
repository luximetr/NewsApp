import * as React from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { View } from 'react-native';

interface Props {
  name: string
  source: VectorIconSource
  size: number
}

interface State {
  size: number
}

export class VectorIcon extends React.Component<Props, State> {

  // Render
  render() {
    const name = 'add'
    return (
      <View>
        <MaterialIcons name={name} />
      </View>
    )
  }

}

enum VectorIconSource {
  material = 'material'
}