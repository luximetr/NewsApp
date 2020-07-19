import React from 'react';
import {AppearanceComponent} from "./AppearanceComponent";
import {selectedAppLanguageChangedNotifier} from "../../../../../app/repos/appLanguagesRepo/repo/AppLanguagesNotifiers";
import {Language} from "../../../../../model/model/language/Language";

export class LocalizableComponent<P = any, S = any> extends AppearanceComponent<P, S> {

   // Life cycle
   constructor(props: P) {
      super(props);
      selectedAppLanguageChangedNotifier.attach(this.onAppLanguageChanged.bind(this))
   }

   // View life cycle
   componentDidMount(): void {
      this.setupStrings()
   }

   componentWillUnmount(): void {
      selectedAppLanguageChangedNotifier.detach(this.onAppLanguageChanged)
   }

   // On app language changed
   private onAppLanguageChanged(appLanguage: Language) {
      this.setupStrings()
   }

   // Setup strings
   setupStrings() {
   }
}
