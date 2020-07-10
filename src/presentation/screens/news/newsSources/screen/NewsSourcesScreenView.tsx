import React from 'react';
import {BaseComponent} from "../../../../helpers/components/baseViews/baseComponent/BaseComponent";
import {Appearance} from "../../../../../model/model/appearance/Appearance";
import {TopBarScreenView} from "../../../../helpers/components/screenViews/topBarScreenView/TopBarScreenView";
import {NewsSource} from "../../../../../model/model/newsSource/NewsSource";
import {FlatList, TouchableOpacity, View} from "react-native";
import {NewsSourcesListItemView} from "../helpers/listItem/NewsSourcesListItemView";

interface Props {
   onBack: VoidFunction
   sources: NewsSource[]
}

export class NewsSourcesScreenView extends BaseComponent<Props> {

   // Render
   renderWith(appearance: Appearance): any {
      return (
         <TopBarScreenView
            title={'Sources'}
            leftTopBarButton={{
               action: () => {this.props.onBack()}
            }}
         >
            {this.renderContent()}
         </TopBarScreenView>
      )
   }

   // Content
   private renderContent() {
      return this.renderSourcesList()
   }

   // Sources list
   private renderSourcesList() {
      return (
         <FlatList
            data={this.props.sources}
            renderItem={(item) => {
               return this.renderSourceItem(item.item)
            }}
         />
      )
   }

   // Source item
   protected renderSourceItem(source: NewsSource) {
      const filters = [source.category, source.country, source.language]
      return (
         <View>
            <TouchableOpacity>
               <NewsSourcesListItemView
                  title={source.name}
                  description={source.description}
                  filters={filters}
               />
            </TouchableOpacity>
            <View />
         </View>
      )
   }
}
