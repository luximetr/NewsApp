import {TopHeadlineWebAPI} from "../../../network/webAPIs/TopHeadlineWebAPI";
import {NewsJSONConverter} from "../../model/news/NewsJSONConverter";

const newsAPIKey = "75bda762ecb443dd977111a4226a6049"

export class TopHeadlinesRepo {

   private webAPI = new TopHeadlineWebAPI()
   private newsJSONConverter = new NewsJSONConverter()

   async getTopHeadlines() {
      return this.webAPI
         .getTopHeadline('us', newsAPIKey)
         .then((result => {
            if (result.data) {
               const news = result.data.map((item: any) => {
                  return this.newsJSONConverter.toNews(item)
               })
               return {data: news}
            } else {
               return result
            }
         }))
   }
}
