import {Appearance} from "./Appearance";

export const DarkAppearance = {
   background: {
      primary: 'rgb(26, 34, 44)'
   },
   text: {
      primary: 'white'
   },
   statusBar: {
      style: "light-content"
   },
   navigation: {
      background: 'rgb(36, 48, 63)',
      tint: 'white',
      text: 'white',
      shadow: 'rgb(36, 48, 63)'
   },
   tabBar: {
      background: 'rgb(36, 48, 63)',
      selectedTint: 'blue',
      unselectedTint: 'grey',
      shadow: 'rgb(36, 48, 63)'
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
      primary: 'white'
   },
} as Appearance
