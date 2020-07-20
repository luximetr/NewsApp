import {showMessage} from "react-native-flash-message";

export function showTopErrorBanner(message: string) {
   const normalizedMessage = normalizeMessage(message)
   showMessage({
      message: normalizedMessage,
      position: "top",
      duration: 2 * 1000,
   })
}

function normalizeMessage(message: string) {
   const maxLength = 120
   if (message.length > maxLength) {
      return message.slice(0, maxLength) + '...'
   } else {
      return message
   }
}
