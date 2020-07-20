import {Appearance} from "./Appearance";

export const LightAppearance = {
   background: {
      primary: 'rgb(255, 255, 255)',
      secondary: 'rgb(245, 245, 245)',
      tertiary: 'rgb(225, 225, 225)',
      reversePrimary: 'rgb(150, 150, 150)',
      error: 'rgb(245,67,67)'
   },
   text: {
      primary: 'rgb(0, 0, 0)',
      secondary: 'rgb(85, 85, 85)',
   },
   statusBar: {
      style: "dark-content"
   },
   navigation: {
      tint: 'grey',
      text: 'black',
   },
   tabBar: {
      selectedTint: 'rgb(63, 126, 195)',
      unselectedTint: 'grey',
   },
   action: {
      background: {
         primary: 'rgb(100, 163, 238)',
      },
      title: {
         primary: 'rgb(255, 255, 255)',
         secondary: 'grey'
      }
   },
   divider: {
      primary: 'grey'
   },
   scroll: {
      refresh: {
         primary: 'rgb(150, 150, 150)'
      },
      indicator: {
         primary: 'rgb(150, 150, 150)'
      }
   }
} as Appearance;
