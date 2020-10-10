import {News} from "../../../model/model/news/News";
import {ObserversNotifier} from "../../../model/helpers/managers/ObserversNotifier";

export type ReadLaterNewsObserver = (news: News) => void

class ReadLaterNewsNotifier extends ObserversNotifier<ReadLaterNewsObserver> {
  notify(news: News) {
    this.observers.forEach(observer => observer(news))
  }
}

export const readLaterNewsAdded = new ReadLaterNewsNotifier()
export const readLaterNewsRemoved = new ReadLaterNewsNotifier()