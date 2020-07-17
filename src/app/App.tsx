import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from "@react-navigation/native";
import {Appearance} from "../model/model/appearance/Appearance";
import {AppStack} from "./AppStack";
import {AppearancesRepo} from "../model/repos/appearancesRepo/AppearancesRepo";
import {View} from "react-native";
import {selectedAppearanceChangedNotifier} from "../model/repos/appearancesRepo/AppearancesNotifiers";
import {AppearanceContext} from "../model/repos/appearancesRepo/AppearancesRepo";

interface Props {}

interface State {
   appearance?: Appearance
   isContentReady: boolean
}

export default class App extends React.Component<Props, State> {

   // Dependencies
   private appearancesRepo = new AppearancesRepo()

   // Life cycle
   constructor(props: Props) {
      super(props);
      this.state = {
         isContentReady: false,
      }
      selectedAppearanceChangedNotifier.attach(this.appearanceUpdated.bind(this))
   }

   componentDidMount(): void {
      this.appearancesRepo.loadSelectedAppearance().then((appearance) => {
         this.setState({appearance: appearance, isContentReady: true})
      })
   }

   componentWillUnmount(): void {
      selectedAppearanceChangedNotifier.detach(this.appearanceUpdated)
   }

   private appearanceUpdated(appearance: Appearance) {
      this.setState({appearance: appearance})
   }

   // Render
   render() {
      if (this.state.isContentReady) {
         return this.renderContent()
      } else {
         return this.renderPlaceholder()
      }
   }

   // Content
   private renderContent() {
      return this.state.appearance && (
         <AppearanceContext.Provider value={this.state.appearance}>
            <NavigationContainer>
               <AppStack />
            </NavigationContainer>
         </AppearanceContext.Provider>
      )
   }

   // Placeholder
   private renderPlaceholder() {
      return (
         <View/>
      )
   }
}

console.disableYellowBox = true;
