import * as React from 'react';
import {SettingsListScreenView} from "./SettingsListScreenView";
import {AppearanceType} from "../../../../../model/model/appearance/AppearanceType";
import {Language} from "../../../../../model/model/language/Language";
import {appLanguages} from "../../../../../model/model/language/Languages";
import {AppearancesRepo} from "../../../../../app/repos/appearancesRepo/AppearancesRepo";
import {AppearancePickerItem} from "../helpers/appearancePicker/AppearancePickerItem";
import {appLanguagesRepo} from "../../../../../app/repos/appLanguagesRepo/repo/AppLanguagesRepo";

interface Props {
   navigation: any
}

interface State {
   languages: Language[]
   selectedLanguage: Language
   appearances: AppearancePickerItem[]
}

export class SettingsListScreen extends React.Component<Props, State> {

   // Dependencies
   private appearancesRepo = new AppearancesRepo()
   private appLanguagesRepo = appLanguagesRepo

   // Life cycle
   constructor(props: Props) {
      super(props);
      this.state = {
         languages: appLanguages,
         selectedLanguage: this.appLanguagesRepo.getCurrentLanguage(),
         appearances: []
      }
   }

   componentDidMount(): void {
      this.loadAppearances()
   }

   // Load appearances
   private loadAppearances() {
      const types = this.appearancesRepo.getAvailableAppearanceTypes()
      this.displayAvailableAppearances(types)
   }

   private displayAvailableAppearances(types: AppearanceType[]) {
      const items = types.map((type) => {
         const appearance = this.appearancesRepo.getAppearanceByType(type)
         return {type: type, color: appearance.background.secondary} as AppearancePickerItem
      })
      this.setState({appearances: items})
   }

   // Language - On press
   private onLanguagePress(language: Language) {
      this.appLanguagesRepo.setCurrentLanguage(language)
   }

   // Theme
   private onAppearancePress(item: AppearancePickerItem) {
      this.appearancesRepo.setCurrentAppearanceByType(item.type)
   }

   // View
   render() {
      return (
         <SettingsListScreenView
            languages={this.state.languages}
            selectedLanguage={this.state.selectedLanguage}
            onLanguagePress={this.onLanguagePress.bind(this)}
            appearances={this.state.appearances}
            onAppearancePress={this.onAppearancePress.bind(this)}
         />
      )
   }
}
