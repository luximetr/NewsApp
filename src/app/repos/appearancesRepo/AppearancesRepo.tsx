import React from "react";
import {AppearancesBucket} from "../../../storage/buckets/AppearancesBucket";
import {Appearance} from "../../../model/model/appearance/Appearance";
import {DarkAppearance} from "../../../model/model/appearance/DarkAppearance";
import {AppearanceType} from "../../../model/model/appearance/AppearanceType";
import {LightAppearance} from "../../../model/model/appearance/LightAppearance";
import {selectedAppearanceChangedNotifier} from "./AppearancesNotifiers";

export class AppearancesRepo {

   // Dependencies
   private appearancesBucket = new AppearancesBucket()

   // Data
   private selectedAppearanceType: AppearanceType
   private selectedAppearance: Appearance

   // Life cycle
   constructor() {
      this.selectedAppearanceType = defaultAppearanceType
      this.selectedAppearance = defaultAppearance
   }

   // Fetching
   async loadSelectedAppearance() {
      const appearanceType = await this.appearancesBucket.getSelectedAppearanceType()
      if (appearanceType !== undefined) {
         this.selectedAppearance = this.getAppearanceByType(appearanceType)
         this.selectedAppearanceType = appearanceType
      }
      return this.selectedAppearance
   }

   getAvailableAppearanceTypes() {
      return [
         AppearanceType.light,
         AppearanceType.dark,
      ]
   }

   getAppearanceByType(type: AppearanceType): Appearance {
      switch (type) {
         case AppearanceType.light:
            return LightAppearance
         case AppearanceType.dark:
            return DarkAppearance
      }
   }

   // Storing
   setCurrentAppearanceByType(appearanceType: AppearanceType) {
      const newAppearance = this.getAppearanceByType(appearanceType)
      this.selectedAppearance = newAppearance
      this.selectedAppearanceType = appearanceType
      this.saveSelectedAppearanceType(appearanceType)
      selectedAppearanceChangedNotifier.notify(newAppearance)
   }

   private saveSelectedAppearanceType(appearanceType: AppearanceType) {
      this.appearancesBucket.setSelectedAppearanceType(appearanceType).then()
   }
}

const defaultAppearance = DarkAppearance
const defaultAppearanceType = AppearanceType.dark

export const AppearanceContext = React.createContext(defaultAppearance)
