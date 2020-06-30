import React from 'react'
import {StatusBarStyle} from "react-native";

export type Appearance = {
   background: {
      primary: string
   }
   text: {
      primary: string
   }
   statusBar: {
      style: StatusBarStyle
   }
   navigation: {
      background: string
      tint: string
      text: string
      shadow: string
   }
   tabBar: {
      background: string
      selectedTint: string
      unselectedTint: string
      shadow: string
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
}
