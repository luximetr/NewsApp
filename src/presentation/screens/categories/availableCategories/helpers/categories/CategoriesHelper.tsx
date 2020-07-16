import {Category} from "../../../../../../model/model/category/Category";

export function sortCategories(categories: Category[]) {
   return categories.sort((itemLeft, itemRight) => {
      return compareCategories(itemLeft, itemRight)
   })
}

export function compareCategories(category1: Category, category2: Category): number {
   return category1.name.localeCompare(category2.name)
}
