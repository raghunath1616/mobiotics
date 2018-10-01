import { takeLatest, call, put, select } from "redux-saga/effects"
import {
  fetchSignedAgreementAction,
  fetchOutboundReferralAction,
  fetchFilterSkeletonAction,
  fetchFilteredOutboundsAction,
  closeFilterPanel,
  saveAppliedFilters,
  REMOVE_FILTER,
} from "./actions"
import {
  fetchSignedAgreementAPI,
  fetchOutboundReferralAPI,
  fetchFilterSkeletonAPI,
} from "./api"

export function* fetchSignedAgreement(action) {
  try {
    const res = yield call(fetchSignedAgreementAPI, action.data)
    yield put(fetchSignedAgreementAction.success(res))
  } catch (e) {
    yield put(fetchSignedAgreementAction.failure(e))
  }
}

export function* fetchOutboundReferral(action) {
  try {
    const res = yield call(fetchOutboundReferralAPI, action.data)
    yield put(fetchOutboundReferralAction.success(res))
  } catch (e) {
    yield put(fetchOutboundReferralAction.failure(e))
  }
}

export function* fetchFilterSkeleton() {
  try {
    const res = yield call(fetchFilterSkeletonAPI)
    yield put(fetchFilterSkeletonAction.success(res))
  } catch (e) {
    yield put(fetchFilterSkeletonAction.failure(e))
  }
}

export function* fetchFilteredOutbound(action) {
  try {
    const { clientSort, clientTypes, outboundReferralStatuses } = action.data || {}
    let params = ""
    if (clientTypes) {
      params += `&types=${clientTypes.map(item => item.value).join()}`
    }
    if (outboundReferralStatuses) {
      params += `&statuses=${outboundReferralStatuses.map(item => item.value).join()}`
    }
    if (clientSort) {
      params += `&sortBy=${clientSort.value}`
    }
    yield put(saveAppliedFilters(action.data))
    yield put(closeFilterPanel())
    const res = yield call(fetchOutboundReferralAPI, params)
    yield put(fetchOutboundReferralAction.success(res))
  } catch (e) {
    fetchOutboundReferralAction.failure(e)
  }
}

export function* removeFilter() {
  try {
    const fakeAction = yield select(state => state.referral.selectedFilters)
    yield fetchFilteredOutbound(fakeAction)
  } catch (e) {
    fetchOutboundReferralAction.failure(e)
  }
}

export default function* main() {
  yield takeLatest(fetchSignedAgreementAction.REQUEST, fetchSignedAgreement)
  yield takeLatest(fetchOutboundReferralAction.REQUEST, fetchOutboundReferral)
  yield takeLatest(fetchFilterSkeletonAction.REQUEST, fetchFilterSkeleton)
  yield takeLatest(fetchFilteredOutboundsAction.REQUEST, fetchFilteredOutbound)
  yield takeLatest(REMOVE_FILTER, removeFilter)
}
