import {Category, CategoryCode} from "./Category";

const business = {
   code: CategoryCode.business,
   name: 'Business'
} as Category

const entertainment = {
   code: CategoryCode.entertainment,
   name: 'Entertainment'
} as Category

const general = {
   code: CategoryCode.general,
   name: 'General'
} as Category

const health = {
   code: CategoryCode.health,
   name: 'Health'
} as Category

const science = {
   code: CategoryCode.science,
   name: 'Science'
} as Category

const sports = {
   code: CategoryCode.sports,
   name: 'Sports'
} as Category

const technology = {
   code: CategoryCode.technology,
   name: 'Technology'
} as Category

export const allCategories = [
   general,
   business,
   entertainment,
   health,
   science,
   sports,
   technology,
]
export const defaultCategory = general
