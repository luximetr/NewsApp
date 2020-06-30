import React from 'react';
import {Appearance} from "../../../model/model/appearance/Appearance";
import {LightAppearance} from "../../../model/model/appearance/LightAppearance";
import {DarkAppearance} from "../../../model/model/appearance/DarkAppearance";
import {AppearanceType} from "../../../model/model/appearance/AppearanceType";

export type AppearanceObserver = (appearance: Appearance) => void

class AppearanceProvider {

   // Current appearance
   private currentAppearance: Appearance = DarkAppearance

   getCurrentAppearance(): Appearance {
      return this.currentAppearance
   }

   setCurrentAppearanceByType(type: AppearanceType) {
      const newAppearance = this.getAppearanceByType(type)
      this.currentAppearance = newAppearance
      this.notifyAppearanceUpdated(newAppearance)
   }

   protected getAppearanceByType(type: AppearanceType): Appearance {
      switch (type) {
         case AppearanceType.light:
            return LightAppearance
         case AppearanceType.dark:
            return DarkAppearance
      }
   }

   // Observers
   private observers: AppearanceObserver[] = []

   attach(observer: AppearanceObserver) {
      this.observers.push(observer)
   }

   detach(observer: AppearanceObserver) {
      this.observers = this.observers.filter(item => item === observer)
   }

   notifyAppearanceUpdated(appearance: Appearance) {
      this.observers.forEach(observer => observer(appearance))
   }
}

export const appearanceProvider = new AppearanceProvider()

export const AppearanceContext = React.createContext(appearanceProvider.getCurrentAppearance())
