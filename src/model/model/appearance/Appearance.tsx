import React from 'react'
import {StatusBarStyle} from "react-native";

export type Appearance = {
   background: {
      primary: string
      secondary: string
      tertiary: string
      reversePrimary: string
   }
   text: {
      primary: string
   }
   statusBar: {
      style: StatusBarStyle
   }
   navigation: {
      tint: string
      text: string
   }
   tabBar: {
      selectedTint: string
      unselectedTint: string
   }
   action: {
      background: {
         primary: string
      }
      title: {
         primary: string
      }
   }
   divider: {
      primary: string
   }
   scroll: {
      refresh: {
         primary: string
      }
      indicator: {
         primary: string
      }
   }
}
