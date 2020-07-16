
export class ObserversNotifier<T> {

   protected observers: T[] = []

   attach(observer: T) {
      this.observers.push(observer)
   }

   detach(observer: T) {
      this.observers = this.observers.filter(item => item !== observer)
   }
}
