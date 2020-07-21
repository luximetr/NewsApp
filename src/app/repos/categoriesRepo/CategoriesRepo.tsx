import {CategoriesBucket} from "../../../storage/buckets/CategoriesBucket";
import {allCategories, defaultCategory} from "../../../model/model/category/Categories";
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
   async getSelectedAndEnabled() {
      const enabled = await this.getEnabledCategory()
      const selected = await this.getSelected()
      return {selected: selected, enabled: enabled}
   }

   private async getSelected(): Promise<Category[]> {
      const selected = await this.categoriesBucket.getSelected()
      if (selected.length === 0) {
         await this.addCategoryToSelected(defaultCategory)
         return [defaultCategory]
      } else {
         return selected
      }
   }

   // Select
   async selectCategory(category: Category) {
      await this.addCategoryToSelected(category)
      categorySelectedNotifier.notify(category)
   }

   private async addCategoryToSelected(category: Category) {
      await this.categoriesBucket.addToSelected(category)
   }

   // Deselect
   async deselectCategory(category: Category) {
      await this.categoriesBucket.removeFromSelected(category)
      await this.categoriesBucket.removeFromEnabled(category)
      categoryDeselectedNotifier.notify(category)
   }

   // Enabled - Set
   async setEnabledCategory(category: Category) {
      enabledCategory = category
      await this.saveEnabledCategory(category)
      enabledCategoryChangedNotifier.notify(category)
   }

   private async saveEnabledCategory(category: Category) {
      await this.categoriesBucket.setEnabled(category)
   }

   // Enabled - Get
   async getEnabledCategory() {
      if (enabledCategory !== undefined) {
         return enabledCategory
      } else {
         enabledCategory = await this.getCachedEnabledCategory()
         return enabledCategory
      }
   }

   private async getCachedEnabledCategory() {
      const cachedEnabledCategory = await this.categoriesBucket.getEnabled()
      if (cachedEnabledCategory !== undefined) {
         return cachedEnabledCategory
      } else {
         await this.saveEnabledCategory(defaultCategory)
         return defaultCategory
      }
   }
}

let enabledCategory: Category | undefined
