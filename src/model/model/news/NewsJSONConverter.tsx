import {News} from "./News";

export class NewsJSONConverter {

   toNewsList(jsonsArray: JSON[]) : News[] {
      const newsList = jsonsArray.map((json) => {
         return this.toNews(json)
      })
      return newsList.filter((item) => item !== null) as News[]
   }

   toNews(json: any): News | null {
      const publishedAt = this.parsePublishedAt(json)
      if (publishedAt === null) { return null }
      return {
         source: json.source,
         author: json.author,
         title: json.title,
         description: json.description,
         url: json.url,
         imageURL: json.urlToImage || json.imageURL,
         publishedAt: new Date(json.publishedAt),
         content: json.content
      }
   }

   protected parsePublishedAt(json: any) {
      const dateString = json.publishedAt
      if (dateString === undefined) { return null }
      return new Date(dateString)
   }
}
