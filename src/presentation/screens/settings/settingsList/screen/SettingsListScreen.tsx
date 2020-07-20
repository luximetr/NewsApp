import * as React from 'react';
import {SettingsListScreenView} from "./SettingsListScreenView";
import {AppearanceType} from "../../../../../model/model/appearance/AppearanceType";
import {Language} from "../../../../../model/model/language/Language";
import {appLanguages} from "../../../../../model/model/language/Languages";
import {AppearancesRepo} from "../../../../../app/repos/appearancesRepo/AppearancesRepo";
import {AppearancePickerItem} from "../helpers/appearancePicker/AppearancePickerItem";
import {appLanguagesRepo} from "../../../../../app/repos/appLanguagesRepo/repo/AppLanguagesRepo";
import {LanguagePickerItem} from "../helpers/languagePicker/LanguagePickerItem";
import {capitalizeFirstLetter} from "../../../../../model/helpers/strings/StringsHelpers";

interface Props {
   navigation: any
}

interface State {
   languages: LanguagePickerItem[]
   appearances: AppearancePickerItem[]
}

export class SettingsListScreen extends React.Component<Props, State> {

   // Dependencies
   private appearancesRepo = new AppearancesRepo()
   private appLanguagesRepo = appLanguagesRepo

   // Data
   private selectedAppearanceType?: AppearanceType
   private selectedLanguageCode?: string

   // Life cycle
   constructor(props: Props) {
      super(props);
      this.state = {
         languages: [],
         appearances: []
      }
   }

   componentDidMount(): void {
      this.loadAppearances()
      this.loadLanguages()
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

   // Load languages
   private loadLanguages() {
      const languages = this.appLanguagesRepo.getAvailableLanguages()
      const selectedLanguage = this.appLanguagesRepo.getCurrentLanguage()
      this.displayAvailableLanguages(languages, selectedLanguage)
   }

   private displayAvailableLanguages(languages: Language[], selected: Language) {
      const items = languages.map((item) => {
         const isSelected = item.code === selected.code
         return {code: item.code, title: capitalizeFirstLetter(item.code), isSelected: isSelected} as LanguagePickerItem
      })
      this.selectedLanguageCode = selected.code
      this.setState({languages: items})
   }

   // Language - On press
   private onLanguagePress(item: LanguagePickerItem) {
      this.appLanguagesRepo.setCurrentLanguageByCode(item.code)
      if (this.selectedLanguageCode !== undefined) {
         this.displayLanguageDeselected(this.selectedLanguageCode)
      }
      this.displayLanguageSelected(item.code)
      this.selectedLanguageCode = item.code
   }

   private displayLanguageSelected(code: string) {
      const index = this.findLanguageIndex(code)
      const languages = [...this.state.languages]
      languages[index].isSelected = true
      this.setState({languages: languages})
   }

   private displayLanguageDeselected(code: string) {
      const index = this.findLanguageIndex(code)
      const languages = [...this.state.languages]
      languages[index].isSelected = false
      this.setState({languages: languages})
   }

   private findLanguageIndex(code: string) {
      return this.state.languages.findIndex((item) => {
         return item.code === code
      })
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
      return this.state.appearances.findIndex((item) => {
         return item.type === appearanceType
      })
   }

   // View
   render() {
      return (
         <SettingsListScreenView
            languages={this.state.languages}
            onLanguagePress={this.onLanguagePress.bind(this)}
            appearances={this.state.appearances}
            onAppearancePress={this.onAppearancePress.bind(this)}
         />
      )
   }
}
