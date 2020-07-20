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
   private selectedAppearanceType?: AppearanceType

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
      const selectedType = this.appearancesRepo.getSelectedAppearanceType()
      this.displayAvailableAppearances(types, selectedType)
   }

   private displayAvailableAppearances(types: AppearanceType[], selected: AppearanceType) {
      const items = types.map((type) => {
         const appearance = this.appearancesRepo.getAppearanceByType(type)
         const isSelected = type === selected
         return {type: type, color: appearance.background.secondary, isSelected: isSelected} as AppearancePickerItem
      })
      this.selectedAppearanceType = selected
      this.setState({appearances: items})
   }

   // Language - On press
   private onLanguagePress(language: Language) {
      this.appLanguagesRepo.setCurrentLanguage(language)
   }

   // Appearance - On press
   private onAppearancePress(item: AppearancePickerItem) {
      this.appearancesRepo.setCurrentAppearanceByType(item.type)
      if (this.selectedAppearanceType !== undefined) {
         this.displayAppearanceDeselected(this.selectedAppearanceType)
      }
      this.displayAppearanceSelected(item.type)
      this.selectedAppearanceType = item.type
   }

   private displayAppearanceSelected(appearanceType: AppearanceType) {
      const index = this.findAppearanceIndex(appearanceType)
      const appearances = [...this.state.appearances]
      appearances[index].isSelected = true
      this.setState({appearances: appearances})
   }

   private displayAppearanceDeselected(appearanceType: AppearanceType) {
      const index = this.findAppearanceIndex(appearanceType)
      const appearances = [...this.state.appearances]
      appearances[index].isSelected = false
      this.setState({appearances: appearances})
   }

   private findAppearanceIndex(appearanceType: AppearanceType) {
      return this.state.appearances.findIndex((item) => {return item.type === appearanceType})
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
