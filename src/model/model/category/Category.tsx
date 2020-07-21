
export type Category = {
   code: CategoryCode,
   name: string
}

export enum CategoryCode {
   business= 'business',
   entertainment = 'entertainment',
   general = 'general',
   health = 'health',
   science = 'science',
   sports = 'sports',
   technology = 'technology',
}
