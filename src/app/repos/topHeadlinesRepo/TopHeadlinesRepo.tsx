import {TopHeadlineWebAPI} from "../../../network/webAPIs/TopHeadlineWebAPI";
import {NewsJSONConverter} from "../../../model/model/news/NewsJSONConverter";
import {Country} from "../../../model/model/country/Country";
import {defaultCountry} from "../../../model/model/country/Countries";
import {Category} from "../../../model/model/category/Category";
import {WebAPIResult} from "../../../network/model/webAPIResult/WebAPIResult";
import {News} from "../../../model/model/news/News";

export const newsAPIKey = "75bda762ecb443dd977111a4226a6049"

export class TopHeadlinesRepo {

   private webAPI = new TopHeadlineWebAPI()
   private pageSize = 20

   async getTopHeadlines(page: number, country?: Country, category?: Category) : Promise<WebAPIResult<News[]>> {
      return this.webAPI
        .getTopHeadline(
          newsAPIKey,
          this.pageSize,
          page,
          country?.code || defaultCountry.code,
          category?.code
        )
   }
}
