import React from 'react';
import {View, Text, SafeAreaView} from "react-native";
import Modal from 'react-native-modal';
import {BaseComponent} from "../../baseViews/baseComponent/BaseComponent";
import {Appearance} from "../../../../../model/model/appearance/Appearance";
import {getStyles} from "./BottomAlert.styles";

interface Props {
   isVisible: boolean
   onClose: VoidFunction
}

export class BottomAlert extends BaseComponent<Props> {

   renderWith(appearance: Appearance): any {
      return (
         <Modal
            isVisible={this.props.isVisible}
            swipeDirection={['down']}
            propagateSwipe={true}
            onSwipeComplete={() => {this.props.onClose()}}
            onBackdropPress={() => {this.props.onClose()}}
            style={getStyles(appearance).modal}
         >
            <View style={getStyles(appearance).contentContainer}>
               <View style={getStyles(appearance).swipeLine}/>
               <SafeAreaView>
                  {this.props.children}
               </SafeAreaView>
            </View>
         </Modal>
      )
   }
}
