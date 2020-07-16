import {asyncStorage} from "../asyncStorage/AsyncStorage";
import {Category} from "../../model/model/category/Category";

export class CategoriesBucket {

   private storage = asyncStorage
   private selectedCategoriesKey = 'selectedCategories'
   private enabledCategoriesKey = 'enabledCategories'

   async addToSelected(category: Category) {
      return this.storage.addItem(this.selectedCategoriesKey, category)
   }

   async removeFromSelected(category: Category) {
      return this.storage.removeItemWhere(this.selectedCategoriesKey, (item: Category) => {
         return item.code === category.code
      })
   }

   async getSelected(): Promise<Category[]> {
      return this.storage.getData(this.selectedCategoriesKey).then((result) => {
         if (result) {
            return result
         } else {
            return []
         }
      })
   }

   async setEnabled(category: Category) {
      return this.storage.storeItem(this.enabledCategoriesKey, [category])
   }

   async removeFromEnabled(category: Category) {
      return this.storage.removeItemWhere(this.enabledCategoriesKey, (item: Category) => {
         return item.code === category.code
      })
   }

   async getEnabled() {
      return this.storage.getData(this.enabledCategoriesKey).then((result) => {
         if (result && result.length > 0) {
            return result[0] as Category
         } else {
            return undefined
         }
      })
   }
}
