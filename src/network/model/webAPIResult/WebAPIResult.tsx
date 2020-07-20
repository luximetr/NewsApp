import {WebAPIError} from "../webAPIError/WebAPIError";

export type WebAPIResult = {
   data?: any
   error?: WebAPIError
}
