import {Category} from "../../model/category/Category";
import {ObserversNotifier} from "../../helpers/managers/ObserversNotifier";

export type CategoriesObserver = (category: Category) => void

class CategoryObserverNotifier extends ObserversNotifier<CategoriesObserver> {
   notify(category: Category) {
      this.observers.forEach(observer => observer(category))
   }
}

export const categorySelectedNotifier = new CategoryObserverNotifier()
export const categoryDeselectedNotifier = new CategoryObserverNotifier()
export const enabledCategoryChangedNotifier = new CategoryObserverNotifier()
