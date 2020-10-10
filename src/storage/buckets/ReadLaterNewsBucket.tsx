import {asyncStorage} from "../asyncStorage/AsyncStorage";
import {News} from "../../model/model/news/News";
import {NewsJSONConverter} from "../../model/model/news/NewsJSONConverter";

export class ReadLaterNewsBucket {

  private storage = asyncStorage
  private readLaterNewsKey = 'readLaterNews'
  private newsJSONConverter = new NewsJSONConverter()

  async addToReadLater(news: News) {
    return this.storage.addItem(this.readLaterNewsKey, news)
  }

  async removeFromReadLater(newsURL: string) {
    return this.storage.removeItemWhere(this.readLaterNewsKey, (item) => item.url === newsURL)
  }

  async getReadLaterNews() {
    return this.storage
      .getData(this.readLaterNewsKey)
      .then((result) => {
        if (result) {
          const jsonsArray = result as JSON[]
          return this.newsJSONConverter.toNewsList(jsonsArray)
        } else {
          return []
        }
      })
  }

}