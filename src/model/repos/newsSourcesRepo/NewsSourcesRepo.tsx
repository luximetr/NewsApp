import {GetNewsSourcesWebAPI} from "../../../network/webAPIs/GetNewsSourcesWebAPI";
import {newsAPIKey} from "../topHeadlinesRepo/TopHeadlinesRepo";

export class NewsSourcesRepo {

   private webAPI = new GetNewsSourcesWebAPI()

   async getNewsSources(category: string, language: string, country: string) {
      return this.webAPI.getNewsSources(newsAPIKey, category, language, country)
   }
}
