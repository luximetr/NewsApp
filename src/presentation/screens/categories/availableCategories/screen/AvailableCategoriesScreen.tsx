import React from 'react';
import {AvailableCategoriesScreenView} from "./AvailableCategoriesScreenView";
import {Category} from "../../../../../model/model/category/Category";
import {CategoriesRepo} from "../../../../../app/repos/categoriesRepo/CategoriesRepo";
import {categoryDeselectedNotifier} from "../../../../../app/repos/categoriesRepo/CategoriesNotifiers";
import {sortCategories} from "../helpers/categories/CategoriesHelper";

interface Props {
}

interface State {
   categories: Category[]
}

export class AvailableCategoriesScreen extends React.Component<Props, State> {

   // Dependencies
   private categoriesRepo = new CategoriesRepo()

   // Life cycle
   constructor(props: Props) {
      super(props);
      this.state = {
         categories: []
      }
      categoryDeselectedNotifier.attach(this.onCategoryDeselected.bind(this))
   }

   componentDidMount(): void {
      this.loadCategories()
   }

   componentWillUnmount(): void {
      categoryDeselectedNotifier.detach(this.onCategoryDeselected)
   }

   // Load categories
   private loadCategories() {
      this.categoriesRepo
         .getAvailable()
         .then((categories) => {
            const sortedCategories = sortCategories(categories)
            this.setState({categories: sortedCategories})
         })
   }

   // OnPress
   private onCategoryPress(category: Category) {
      this.categoriesRepo
         .selectCategory(category)
         .then(() => {
            this.displayCategorySelected(category)
         })
   }

   private displayCategorySelected(category: Category) {
      let categories = this.state.categories
      categories = categories.filter((item) => {
         return item.code !== category.code
      })
      this.setState({categories: categories})
   }

   // On deselected
   private onCategoryDeselected(category: Category) {
      let categories = [...this.state.categories]
      categories.push(category)
      categories = sortCategories(categories)
      this.setState({categories: categories})
   }

   // View
   render() {
      return (
         <AvailableCategoriesScreenView
            categories={this.state.categories}
            onCategoryPress={this.onCategoryPress.bind(this)}
         />
      )
   }
}
