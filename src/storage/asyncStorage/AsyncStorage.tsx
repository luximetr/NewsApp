import ReactAsyncStorage from '@react-native-community/async-storage';

export class AsyncStorage {

   async storeItem(key: string, value: any) {
      const jsonString = JSON.stringify(value)
      return ReactAsyncStorage.setItem(key, jsonString)
   }

   async addItem(key: string, value: any) {
      const storedString = await ReactAsyncStorage.getItem(key)
      if (storedString) {
         const storedArray = JSON.parse(storedString) as any[]
         storedArray.push(value)
         const arrayString = JSON.stringify(storedArray)
         return ReactAsyncStorage.setItem(key, arrayString)
      } else {
         const array = []
         array.push(value)
         const arrayString = JSON.stringify(array)
         return ReactAsyncStorage.setItem(key, arrayString)
      }
   }

   async removeItem(key: string, where: (item: any) => void) {
      const storedString = await ReactAsyncStorage.getItem(key)
      if (storedString) {
         const storedArray = JSON.parse(storedString) as any[]
         const arrayString = JSON.stringify(storedArray)
         return ReactAsyncStorage.setItem(key, arrayString)
      }
   }

   async getData(key: string): Promise<(any | undefined)> {
      return ReactAsyncStorage
         .getItem(key)
         .then((result) => {
            if (result) {
               const json = JSON.parse(result)
               return json
            } else {
               return undefined
            }
         })
   }
}

export const asyncStorage = new AsyncStorage()
