import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from "@react-navigation/native";
import {AppearanceContext, appearanceProvider} from "../presentation/helpers/managers/AppearanceProvider";
import {Appearance} from "../model/model/appearance/Appearance";
import {AppStack} from "./AppStack";

interface Props {}

interface State {
   appearance: Appearance
}

export default class App extends React.Component<Props, State> {

   // Life cycle
   constructor(props: Props) {
      super(props);
      this.state = {
         appearance: appearanceProvider.getCurrentAppearance()
      }
      appearanceProvider.attach(this.appearanceUpdated.bind(this))
   }

   componentWillUnmount(): void {
      appearanceProvider.detach(this.appearanceUpdated)
   }

   private appearanceUpdated(appearance: Appearance) {
      this.setState({appearance: appearance})
   }

   // Render
   render() {
      return (
         <AppearanceContext.Provider value={this.state.appearance}>
            <NavigationContainer>
               <AppStack />
            </NavigationContainer>
         </AppearanceContext.Provider>
      )
   }
}

console.disableYellowBox = true;
