import React from 'react';
import {BottomAlert} from "../../../../../helpers/components/alerts/bottomAlert/BottomAlert";
import {BaseComponent} from "../../../../../helpers/components/baseViews/baseComponent/BaseComponent";
import {Appearance} from "../../../../../../model/model/appearance/Appearance";
import {ScrollView, Text, View} from "react-native";
import {getStyles} from "./NewsFeedFilterAlert.styles";

interface Props {
   isVisible: boolean
   onClose: VoidFunction
   onClose1?: (selectedCountries: string[], selectedLanguages: string[]) => void
}

interface State {
   countriesHeader: string
   languagesHeader: string
}

export class NewsFeedFilterAlert extends BaseComponent<Props, State> {

   // Life cycle
   constructor(props: Props) {
      super(props);
      this.state = {
         countriesHeader: "Country",
         languagesHeader: "Language"
      }
   }

   // Render
   renderWith(appearance: Appearance): any {
      return (
         <BottomAlert
            isVisible={this.props.isVisible}
            onClose={() => {this.props.onClose()}}
         >
            {this.renderContent(appearance)}
         </BottomAlert>
      )
   }

   // Content
   private renderContent(appearance: Appearance) {
      return (
         <View>
            {this.renderCountryPicker(appearance)}
            {this.renderLanguagePicker(appearance)}
         </View>
      )
   }

   // Country picker
   private renderCountryPicker(appearance: Appearance) {
      return (
         <View>
            <Text style={getStyles(appearance).sectionHeader}>{this.state.countriesHeader}</Text>
            <ScrollView horizontal={true}>
               {this.renderCountriesList(appearance)}
            </ScrollView>
         </View>
      )
   }

   private renderCountriesList(appearance: Appearance) {
      const countries = ['ru', 'en', 'us', 'uk']
      return countries.map((country) => {
         return this.renderCountriesListItem(appearance, country)
      })
   }

   protected renderCountriesListItem(appearance: Appearance, country: string) {
      return (
         <View style={getStyles(appearance).item}>
            <Text style={getStyles(appearance).itemText}>{country}</Text>
         </View>
      )
   }

   // Language picker
   private renderLanguagePicker(appearance: Appearance) {
      return (
         <View>
            <Text style={getStyles(appearance).sectionHeader}>{this.state.languagesHeader}</Text>
            <ScrollView horizontal={true}>
               {this.renderLanguagesList(appearance)}
            </ScrollView>
         </View>
      )
   }

   private renderLanguagesList(appearance: Appearance) {
      const languages = ['ru', 'ua', 'en']
      return languages.map((language) => {
         return this.renderLanguagesListItem(appearance, language)
      })
   }

   protected renderLanguagesListItem(appearance: Appearance, language: string) {
      return (
         <View style={getStyles(appearance).item}>
            <Text style={getStyles(appearance).itemText}>{language}</Text>
         </View>
      )
   }
}
