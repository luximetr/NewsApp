
export type News = {
   source: {
      id?: string
      name: string
   }
   author: string
   title: string
   description: string
   url: string
   imageURL?: string
   publishedAt: Date
   content: string
}
