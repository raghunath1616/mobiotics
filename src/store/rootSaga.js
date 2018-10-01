import { fork } from "redux-saga/effects"
import searchAgentsSaga from "container/SearchAgents/saga"

export default function* main() {
  yield fork(searchAgentsSaga)
}
