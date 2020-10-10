import {parseWebAPIError} from "../model/webAPIError/WebAPIErrorJSONConvertor";
import {NewsJSONConverter} from "../../model/model/news/NewsJSONConverter";
import {WebAPIResult} from "../model/webAPIResult/WebAPIResult";
import {News} from "../../model/model/news/News";

export class TopHeadlineWebAPI {

   private newsJSONConverter = new NewsJSONConverter()

   async getTopHeadline(apiKey: string, pageSize: number, page: number, country?: string, category?: string): Promise<WebAPIResult<News[]>> {
      let url = `http://newsapi.org/v2/top-headlines?apiKey=${apiKey}`
      if (country) {
         url = url.concat(`&country=${country}`)
      }
      if (category) {
         url = url.concat(`&category=${category}`)
      }
      url = url.concat(`&pageSize=${pageSize}`)
      url = url.concat(`&page=${page}`)
      return fetch(
         url,
         {
            method: 'GET'
         })
         .then((response) => response.json())
         .then((json) => {
            if (json.status === 'ok') {
               const news = json.articles.map((item: any) => {
                  return this.newsJSONConverter.toNews(item)
               }) as News[]
               const filteredNews = news.filter((item: News) => item !== null)
               return {data: filteredNews}
            } else {
               const error = parseWebAPIError(json)
               return {error: error}
            }
         })
         .catch((error) => {
            return {error: parseWebAPIError(error)}
         })
   }
}
