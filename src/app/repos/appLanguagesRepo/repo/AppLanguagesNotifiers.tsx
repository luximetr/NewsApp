import {Language} from "../../../../model/model/language/Language";
import {ObserversNotifier} from "../../../../model/helpers/managers/ObserversNotifier";

export type AppLanguagesObserver = (language: Language) => void

class AppLanguagesObserversNotifier extends ObserversNotifier<AppLanguagesObserver> {
   notify(appLanguage: Language) {
      this.observers.forEach(observer => observer(appLanguage))
   }
}

export const selectedAppLanguageChangedNotifier = new AppLanguagesObserversNotifier()
