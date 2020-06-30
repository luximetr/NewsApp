
export type WebAPIResult = {
   data?: any
   error?: any
}

export class TopHeadlineWebAPI {

   getTopHeadline(country: string, apiKey: string): Promise<WebAPIResult> {
      return fetch(
         `http://newsapi.org/v2/top-headlines?country=${country}&apiKey=${apiKey}`,
         {
            method: 'GET'
         })
         .then((response) => response.json())
         .then((json) => {
            if (json.status === 'ok') {
               return {data: json.articles}
            } else {
               return {error: 'Error'}
            }
         })
         .catch((error) => {
            return {error: error}
         })
   }
}
