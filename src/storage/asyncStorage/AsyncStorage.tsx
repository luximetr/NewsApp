import ReactAsyncStorage from '@react-native-community/async-storage';
import {contains, remove} from "../../model/helpers/array/ArrayHelper";

export class AsyncStorage {

   async storeItem(key: string, value: any) {
      const jsonString = JSON.stringify(value)
      return ReactAsyncStorage.setItem(key, jsonString)
   }

   async addItem(key: string, value: any) {
      const storedString = await ReactAsyncStorage.getItem(key)
      console.log('WILL SAVE')
      if (storedString) {
         const storedArray = JSON.parse(storedString) as any[]
         storedArray.push(value)
         const arrayString = JSON.stringify(storedArray)
         console.log(arrayString)
         return ReactAsyncStorage.setItem(key, arrayString)
      } else {
         const array = []
         array.push(value)
         const arrayString = JSON.stringify(array)
         console.log(arrayString)
         return ReactAsyncStorage.setItem(key, arrayString)
      }
   }

   async removeItemWhere(key: string, where: (item: any) => boolean) {
      const storedString = await ReactAsyncStorage.getItem(key)
      if (storedString) {
         let storedArray = JSON.parse(storedString) as any[]
         storedArray = remove(storedArray, where)
         const arrayString = JSON.stringify(storedArray)
         return ReactAsyncStorage.setItem(key, arrayString)
      }
   }

   async removeItem(key: string) {
      return ReactAsyncStorage.removeItem(key)
   }

   async getData(key: string): Promise<(any | undefined)> {
      return ReactAsyncStorage
         .getItem(key)
         .then((result) => {
            if (result) {
               return JSON.parse(result)
            } else {
               return undefined
            }
         })
   }
}

export const asyncStorage = new AsyncStorage()
