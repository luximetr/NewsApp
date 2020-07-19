import {TopHeadlineWebAPI} from "../../../network/webAPIs/TopHeadlineWebAPI";
import {NewsJSONConverter} from "../../../model/model/news/NewsJSONConverter";
import {Country} from "../../../model/model/country/Country";
import {defaultCountry} from "../../../model/model/country/Countries";
import {Category} from "../../../model/model/category/Category";

export const newsAPIKey = "75bda762ecb443dd977111a4226a6049"

export class TopHeadlinesRepo {

   private webAPI = new TopHeadlineWebAPI()
   private newsJSONConverter = new NewsJSONConverter()

   async getTopHeadlines(country?: Country, category?: Category) {
      return this.webAPI
         .getTopHeadline(
            newsAPIKey,
            country?.code || defaultCountry.code,
            category?.code)
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
