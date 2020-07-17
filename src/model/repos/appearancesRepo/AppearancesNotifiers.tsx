import {Appearance} from "../../model/appearance/Appearance";
import {ObserversNotifier} from "../../helpers/managers/ObserversNotifier";

export type AppearancesObserver = (appearance: Appearance) => void

class AppearancesObserversNotifier extends ObserversNotifier<AppearancesObserver> {
   notify(appearance: Appearance) {
      this.observers.forEach(observer => observer(appearance))
   }
}

export const selectedAppearanceChangedNotifier = new AppearancesObserversNotifier()
