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
    const res = yield call(sendAppLinkToDownloadAPI, action.data)
    yield put(sendAppLinkToDownload.success(res))
  } catch (e) {
    yield put(sendAppLinkToDownload.failure(e))
  }
}

export default function* main() {
  yield takeLatest(fetchAgentsAction.REQUEST, fetchAgents)
  yield takeLatest(sendAppLinkToDownloadAction.REQUEST, sendAppLinkToDownload)
}

