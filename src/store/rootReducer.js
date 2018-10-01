import { combineReducers } from "redux"
import { routerReducer as routing } from "react-router-redux"
import SearchAgentsReducer from "container/SearchAgents/reducer"

const rootReducer = combineReducers({
  searchAgents : SearchAgentsReducer,
  routing,
})

export default rootReducer
