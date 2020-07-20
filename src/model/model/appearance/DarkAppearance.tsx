import {Appearance} from "./Appearance";

export const DarkAppearance = {
   background: {
      primary: 'rgb(19, 20, 21)',
      secondary: 'rgb(26, 34, 44)',
      tertiary: 'rgb(36, 48, 63)',
      reversePrimary: 'rgb(255, 255, 255)',
      error: 'rgb(237, 75, 75)'
   },
   text: {
      primary: 'rgb(255, 255, 255)',
      secondary: 'rgb(200, 200, 200)'
   },
   statusBar: {
      style: "light-content"
   },
   navigation: {
      tint: 'rgb(255, 255, 255)',
      text: 'rgb(255, 255, 255)',
   },
   tabBar: {
      selectedTint: 'rgb(83, 163, 244)',
      unselectedTint: 'rgb(180, 194, 211)',
   },
   action: {
      background: {
         primary: 'rgb(106, 156, 203)',
      },
      title: {
         primary: 'rgb(255, 255, 255)',
         secondary: 'rgb(180, 194, 211)'
      }
   },
   divider: {
      primary: 'rgb(150, 150, 150)'
   },
   scroll: {
      refresh: {
         primary: 'rgb(255, 255, 255)'
      },
      indicator: {
         primary: 'rgb(255, 255, 255)'
      }
   }
} as Appearance
