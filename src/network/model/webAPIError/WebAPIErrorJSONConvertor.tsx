import {WebAPIError} from "./WebAPIError";

export function parseWebAPIError(data: any) {
   return {message: data.message} as WebAPIError
}
