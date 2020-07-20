import {WebAPIResult} from "./TopHeadlineWebAPI";
import {parseWebAPIError} from "../model/webAPIError/WebAPIErrorJSONConvertor";

export class GetNewsSourcesWebAPI {

   async getNewsSources(apiKey: string, category: string, language: string, country: string): Promise<WebAPIResult> {
      return fetch(
         `http://newsapi.org/v2/sources?country=${country}&apiKey=${apiKey}`,
         {
            method: 'GET'
         })
         .then((response) => response.json())
         .then((json) => {
            if (json.status === 'ok') {
               return {data: json.sources}
            } else {
               return {error: parseWebAPIError(json)}
            }
         })
         .catch((error) => {
            return {error: parseWebAPIError(error)}
         })
   }
}
