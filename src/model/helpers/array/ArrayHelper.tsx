
export function contains<T>(array: T[], where: (item: T) => boolean): boolean {
   for (let i = 0; i < array.length; i++) {
      if (where(array[i])) {
         return true
      }
   }
   return false
}
