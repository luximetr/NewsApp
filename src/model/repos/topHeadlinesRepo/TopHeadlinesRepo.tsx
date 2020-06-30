import {TopHeadlineWebAPI} from "../../../network/webAPIs/TopHeadlineWebAPI";

const newsAPIKey = "75bda762ecb443dd977111a4226a6049"

export class TopHeadlinesRepo {

   private webAPI = new TopHeadlineWebAPI()

   async getTopHeadlines() {
      return this.webAPI.getTopHeadline('us', newsAPIKey)
   }
}
