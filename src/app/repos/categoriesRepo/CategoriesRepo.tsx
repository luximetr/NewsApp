import {CategoriesBucket} from "../../../storage/buckets/CategoriesBucket";
import {allCategories} from "../../../model/model/category/Categories";
import {Category} from "../../../model/model/category/Category";
import {contains} from "../../../model/helpers/array/ArrayHelper";
import {
   categoryDeselectedNotifier,
   categorySelectedNotifier,
   enabledCategoryChangedNotifier
} from "./CategoriesNotifiers";

export class CategoriesRepo {

   // Dependencies
   private categoriesBucket = new CategoriesBucket()

   // Available
   async getAvailable() {
      const selectedCategories = await this.categoriesBucket.getSelected()
      return allCategories.filter((category: Category) => {
         return !contains(selectedCategories, (item) => {
            return item.code === category.code
         })
      })
   }

   // Selected
   async getSelected() {
      const enabled = await this.categoriesBucket.getEnabled()
      const selected = await this.categoriesBucket.getSelected()
      return {selected: selected, enabled: enabled}
   }

   // Select
   async selectCategory(category: Category) {
      await this.categoriesBucket.addToSelected(category)
      categorySelectedNotifier.notify(category)
   }

   // Deselect
   async deselectCategory(category: Category) {
      await this.categoriesBucket.removeFromSelected(category)
      await this.categoriesBucket.removeFromEnabled(category)
      categoryDeselectedNotifier.notify(category)
   }

   // Enabled
   async setEnabledCategory(category: Category) {
      await this.categoriesBucket.setEnabled(category)
      enabledCategoryChangedNotifier.notify(category)
   }

   async getEnabledCategory() {
      return this.categoriesBucket.getEnabled()
   }

}
