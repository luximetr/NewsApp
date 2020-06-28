import * as React from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import IonIcons from 'react-native-vector-icons/Ionicons';
import FeatherIcons from 'react-native-vector-icons/Feather';

interface Props {
  name: string
  source: VectorIconSource
  size: number
  color: string
}

interface State {
  size: number
}

export class VectorIcon extends React.Component<Props, State> {

  // Render
  render() {
    const {source, name, size, color} = this.props
    switch (source) {
      case 'material': return (<MaterialIcons name={name} size={size} color={color}/>)
      case 'ion': return (<IonIcons name={name} size={size} color={color}/>)
      case 'feather': return (<FeatherIcons name={name} size={size} color={color}/>)
    }
  }
}

type VectorIconSource = 'material' | 'ion' | 'feather'