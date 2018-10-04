import { takeLatest, put, call } from "redux-saga/effects"
import {
  fetchAgentsAction,
  sendAppLinkToDownloadAction,
  saveReqParams,
} from "./actions"
import { fetchAgentsAPI, sendAppLinkToDownloadAPI } from "./api"

export function* fetchAgents(action) {
  try {
    yield put(saveReqParams(action.data))
    const res = yield call(fetchAgentsAPI, action.data)
    yield put(fetchAgentsAction.success(res))
  } catch (e) {
    yield put(fetchAgentsAction.failure(e))
  }
}

export function* sendAppLinkToDownload(action) {
  try {
    console.log("action", action)
    const { data: { phone, countryCode } } = action
    const res = yield call(sendAppLinkToDownloadAPI, { phone: countryCode + phone })
    yield put(sendAppLinkToDownloadAction.success(res))
  } catch (e) {
    yield put(sendAppLinkToDownloadAction.failure(e))
  }
}

export default function* main() {
  yield takeLatest(fetchAgentsAction.REQUEST, fetchAgents)
  yield takeLatest(sendAppLinkToDownloadAction.REQUEST, sendAppLinkToDownload)
}

