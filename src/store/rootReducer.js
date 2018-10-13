import { combineReducers } from "redux"
import { routerReducer as routing } from "react-router-redux"
import UserReducer from "container/Forms/reducer"

const rootReducer = combineReducers({
  user: UserReducer,
  routing,
})

export default rootReducer
