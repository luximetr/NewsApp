
export type WebAPIResult = {
   data?: any
   error?: any
}

export class TopHeadlineWebAPI {

   async getTopHeadline(apiKey: string, country?: string, category?: string): Promise<WebAPIResult> {
      let url = `http://newsapi.org/v2/top-headlines?apiKey=${apiKey}`
      if (country) {
         url = url.concat(`&country=${country}`)
      }
      if (category) {
         url = url.concat(`&category=${category}`)
      }
      return fetch(
         url,
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
