import React from 'react';
import {AppearanceContext} from "../../../../../app/repos/appearancesRepo/AppearancesRepo";
import {Appearance} from "../../../../../model/model/appearance/Appearance";
import {View} from "react-native";
import {AppLanguageContext} from "../../../../../app/repos/appLanguagesRepo/repo/AppLanguagesRepo";

export class BaseComponent<P=any, S=any> extends React.Component<P, S> {

   render() {
      return (
         <AppearanceContext.Consumer>
            {appearance => (
               <AppLanguageContext.Consumer>
                  {language => (
                     this.renderWith(appearance)
                  )}
               </AppLanguageContext.Consumer>
            )}
         </AppearanceContext.Consumer>
      )
   }

   renderWith(appearance: Appearance) {
      return <View/>
   }

   setupStrings() {}
}
