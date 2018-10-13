import { STORE_USER_INFO } from "./actions"

const initState = {
  user: {},
}

export default function UserReducer(state = initState, action) {
  switch (action.type) {
    case STORE_USER_INFO: {
      const { key, value } = action.data
      console.log("action", action)
      return {
        ...state,
        user: {
          ...state.user,
          [key]: value,
        },
      }
    }
    default:
      return state
  }
}
