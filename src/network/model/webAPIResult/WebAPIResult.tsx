import {WebAPIError} from "../webAPIError/WebAPIError";

export type WebAPIResult<T> = {
   data?: T
   error?: WebAPIError
}
