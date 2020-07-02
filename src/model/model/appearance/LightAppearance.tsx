import {Appearance} from "./Appearance";

export const LightAppearance = {
   background: {
      primary: 'white',
      secondary: 'grey',
      tertiary: 'grey'
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
