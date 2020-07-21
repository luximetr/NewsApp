import React from 'react';
import {SelectedCategoriesScreenView} from "./SelectedCategoriesScreenView";
import {SelectedCategoriesListItem} from "../helpers/selectedCategoriesListItem/SelectedCategoriesListItem";
import {Category} from "../../../../../model/model/category/Category";
import {CategoriesRepo} from "../../../../../app/repos/categoriesRepo/CategoriesRepo";
import {categorySelectedNotifier} from "../../../../../app/repos/categoriesRepo/CategoriesNotifiers";
import {compareCategories} from "../../availableCategories/helpers/categories/CategoriesHelper";
import {showTopErrorBanner} from "../../../../helpers/components/alerts/topBanner/TopBanner";
import {translate} from "../../../../../app/repos/appLanguagesRepo/repo/Translator";

interface Props {
}

interface State {
   items: SelectedCategoriesListItem[]
}

export class SelectedCategoriesScreen extends React.Component<Props, State> {

   // Data
   private enabledCategory?: Category

   // Dependencies
   private categoriesRepo = new CategoriesRepo()

   // Life cycle
   constructor(props: Props) {
      super(props);
      this.state = {
         items: []
      }
      categorySelectedNotifier.attach(this.onCategorySelected.bind(this))
   }

   componentDidMount(): void {
      this.loadCategories()
   }

   componentWillUnmount(): void {
      categorySelectedNotifier.detach(this.onCategorySelected)
   }

   // Load categories
   private loadCategories() {
      this.categoriesRepo
         .getSelectedAndEnabled()
         .then((data) => {
            this.displayCategories(data.selected, data.enabled)
         })
   }

   private displayCategories(categories: Category[], enabled?: Category) {
      this.enabledCategory = enabled
      const items = categories.map((category) => {
         const isEnabled = enabled !== undefined && enabled.code === category.code
         return {category: category, isEnabled: isEnabled}
      })
      this.prepareAndDisplayItems(items)
   }

   private prepareAndDisplayItems(items: SelectedCategoriesListItem[]) {
      const sortedItems = items.sort((leftItem, rightItem) => {
         return compareCategories(leftItem.category, rightItem.category)
      })
      this.setState({items: sortedItems})
   }

   // On category selected
   private onCategorySelected(category: Category) {
      const itemsCopy = [...this.state.items]
      itemsCopy.push({category: category, isEnabled: false})
      this.prepareAndDisplayItems(itemsCopy)
   }

   // On item press
   private onItemPress(item: SelectedCategoriesListItem) {
      if (item.isEnabled) { return }
      this.categoriesRepo.setEnabledCategory(item.category).then(() => {
         this.displayEnabledCategoryChanged(item.category)
      })
   }

   private displayEnabledCategoryChanged(newEnabledCategory: Category) {
      if (this.enabledCategory) {
         this.displayCategoryDisabled(this.enabledCategory)
      }
      this.displayCategoryEnabled(newEnabledCategory)
      this.enabledCategory = newEnabledCategory
   }

   private displayCategoryEnabled(category: Category) {
      const index = this.findItemIndex(category)
      const itemsCopy = [...this.state.items]
      itemsCopy[index].isEnabled = true
      this.setState({items: itemsCopy})
   }

   private displayCategoryDisabled(category: Category) {
      const index = this.findItemIndex(category)
      const itemsCopy = [...this.state.items]
      itemsCopy[index].isEnabled = false
      this.setState({items: itemsCopy})
   }

   // On item long press
   private onItemLongPress(item: SelectedCategoriesListItem) {
      if (item.isEnabled) {
         this.showCanNotDeselectCategory()
      } else {
         this.deselectCategory(item)
      }
   }

   private deselectCategory(item: SelectedCategoriesListItem) {
      this.categoriesRepo
         .deselectCategory(item.category)
         .then(() => {
            this.displayItemDeselected(item)
         })
   }

   protected showCanNotDeselectCategory() {
      showTopErrorBanner(translate('selected_categories_can_not_remove_error_message'))
   }

   private displayItemDeselected(listItem: SelectedCategoriesListItem) {
      const items = this.state.items
      const filteredItems = items.filter((item) => {
         return item.category.code !== listItem.category.code
      })
      this.setState({items: filteredItems})
   }

   // Helpers
   private findItemIndex(category: Category): number {
      return this.state.items.findIndex((item) => {
         return item.category.code === category.code
      })
   }

   // View
   render() {
      return (
         <SelectedCategoriesScreenView
            items={this.state.items}
            onItemPress={this.onItemPress.bind(this)}
            onItemLongPress={this.onItemLongPress.bind(this)}
         />
      )
   }
}
