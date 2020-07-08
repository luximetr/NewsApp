import {Appearance} from "./Appearance";

export const LightAppearance = {
   background: {
      primary: 'rgb(255, 255, 255)',
      secondary: 'rgb(245, 245, 245)',
      tertiary: 'rgb(225, 225, 225)',
      reversePrimary: 'rgb(150, 150, 150)'
   },
   text: {
      primary: 'black'
   },
   statusBar: {
      style: "dark-content"
   },
   navigation: {
      tint: 'grey',
      text: 'black',
   },
   tabBar: {
      selectedTint: 'blue',
      unselectedTint: 'grey',
   },
   action: {
      background: {
         primary: 'blue',
      },
      title: {
         primary: 'white'
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
