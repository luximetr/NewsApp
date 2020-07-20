import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from "@react-navigation/native";
import {Appearance} from "../../model/model/appearance/Appearance";
import {AppStack} from "./AppStack";
import {AppearancesRepo} from "../repos/appearancesRepo/AppearancesRepo";
import {View} from "react-native";
import {selectedAppearanceChangedNotifier} from "../repos/appearancesRepo/AppearancesNotifiers";
import {AppearanceContext} from "../repos/appearancesRepo/AppearancesRepo";
import {appLanguagesRepo} from "../repos/appLanguagesRepo/repo/AppLanguagesRepo";
import {TopBannerView} from "../../presentation/helpers/components/alerts/topBanner/TopBannerView";

interface Props {}

interface State {
   appearance?: Appearance
   isContentReady: boolean
}

export default class App extends React.Component<Props, State> {

   // Dependencies
   private appearancesRepo = new AppearancesRepo()
   private appLanguagesRepo = appLanguagesRepo

   // Life cycle
   constructor(props: Props) {
      super(props);
      this.state = {
         isContentReady: false,
      }
      selectedAppearanceChangedNotifier.attach(this.appearanceUpdated.bind(this))
   }

   // View life cycle
   componentDidMount(): void {
      this.prepareContent().then()
   }

   componentWillUnmount(): void {
      selectedAppearanceChangedNotifier.detach(this.appearanceUpdated)
   }

   // Prepare content
   private async prepareContent() {
      const selectedAppearance = await this.appearancesRepo.loadSelectedAppearance()
      await this.appLanguagesRepo.loadCurrentLanguage()
      this.setState({
         appearance: selectedAppearance,
         isContentReady: true
      })
   }

   // Appearance updated
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
            <View style={{flex: 1}}>
               <NavigationContainer>
                  <AppStack/>
               </NavigationContainer>
               <TopBannerView/>
            </View>
         </AppearanceContext.Provider>
      )
   }

   // Placeholder
   protected renderPlaceholder() {
      return (
         <View/>
      )
   }
}

console.disableYellowBox = true;
