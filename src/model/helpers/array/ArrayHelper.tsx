
export function contains<T>(array: T[], where: (item: T) => boolean): boolean {
   for (let i = 0; i < array.length; i++) {
      if (where(array[i])) {
         return true
      }
   }
   return false
}

export function remove<T>(array: T[], where: (item: T) => boolean): T[] {
   let arrayCopy = [...array]
   for (let i = arrayCopy.length - 1; i >= 0; i--) {
      if (where(arrayCopy[i])) {
         arrayCopy.splice(i, 1)
      }
   }
   return arrayCopy
}
