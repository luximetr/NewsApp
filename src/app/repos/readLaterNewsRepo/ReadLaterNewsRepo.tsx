import {News} from "../../../model/model/news/News";
import {ReadLaterNewsBucket} from "../../../storage/buckets/ReadLaterNewsBucket";
import {readLaterNewsAdded, readLaterNewsRemoved} from "./ReadLaterNewsNotifiers";

export class ReadLaterNewsRepo {

  private readLaterNewsBucket = new ReadLaterNewsBucket()

  async addNewsToReadLater(news: News) {
    await this.readLaterNewsBucket.addToReadLater(news)
    readLaterNewsAdded.notify(news)
  }

  async removeFromReadLater(news: News) {
    await this.readLaterNewsBucket.removeFromReadLater(news.url)
    readLaterNewsRemoved.notify(news)
  }

  async getReadLaterNews(): Promise<News[]> {
    return this.readLaterNewsBucket.getReadLaterNews()
  }
}