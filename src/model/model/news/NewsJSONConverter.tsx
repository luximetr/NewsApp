import {News} from "./News";

export class NewsJSONConverter {

   toNews(json: any): News {
      return {
         source: json.source,
         author: json.author,
         title: json.title,
         description: json.description,
         url: json.url,
         imageURL: json.urlToImage,
         publishedAt: new Date(),
         content: json.content
      }
   }
}
