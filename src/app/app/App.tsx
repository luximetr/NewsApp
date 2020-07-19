import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from "@react-navigation/native";
import {Appearance} from "../../model/model/appearance/Appearance";
import {AppStack} from "./AppStack";
import {AppearancesRepo} from "../repos/appearancesRepo/AppearancesRepo";
import {View} from "react-native";
import {selectedAppearanceChangedNotifier} from "../repos/appearancesRepo/AppearancesNotifiers";
import {AppearanceContext} from "../repos/appearancesRepo/AppearancesRepo";
import {AppLanguageContext, AppLanguagesRepo} from "../repos/appLanguagesRepo/repo/AppLanguagesRepo";
import {Language} from "../../model/model/language/Language";
import {selectedAppLanguageChangedNotifier} from "../repos/appLanguagesRepo/repo/AppLanguagesNotifiers";

interface Props {}

interface State {
   appearance?: Appearance
   appLanguage?: Language
   isContentReady: boolean
}

export default class App extends React.Component<Props, State> {

   // Dependencies
   private appearancesRepo = new AppearancesRepo()
   private appLanguagesRepo = new AppLanguagesRepo()

   // Life cycle
   constructor(props: Props) {
      super(props);
      this.state = {
         isContentReady: false,
      }
      selectedAppearanceChangedNotifier.attach(this.appearanceUpdated.bind(this))
      selectedAppLanguageChangedNotifier.attach(this.appLanguageUpdated.bind(this))
   }

   componentDidMount(): void {
      this.prepareContent().then()
   }

   private async prepareContent() {
      const selectedAppearance = await this.appearancesRepo.loadSelectedAppearance()
      const selectedAppLanguage = await this.appLanguagesRepo.loadCurrentLanguage()
      this.setState({
         appearance: selectedAppearance,
         appLanguage: selectedAppLanguage,
         isContentReady: true
      })
   }

   componentWillUnmount(): void {
      selectedAppearanceChangedNotifier.detach(this.appearanceUpdated)
      selectedAppLanguageChangedNotifier.detach(this.appLanguageUpdated)
   }

   private appearanceUpdated(appearance: Appearance) {
      this.setState({appearance: appearance})
   }

   private appLanguageUpdated(appLanguage: Language) {
      this.setState({appLanguage: appLanguage})
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
      return this.state.appearance && this.state.appLanguage && (
         <AppearanceContext.Provider value={this.state.appearance}>
            <AppLanguageContext.Provider value={this.state.appLanguage}>
               <NavigationContainer>
                  <AppStack />
               </NavigationContainer>
            </AppLanguageContext.Provider>
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
