import { createSignalAction, createActionCreator } from "shared/reduxUtils"

const BASE = "REFERRAL"
export const OPEN_FILTER_PANEL = "OPEN_FILTER_PANEL"
export const CLOSE_FILER_PANEL = "CLOSE_FILER_PANEL"
export const SELECT_FILTER = "SELECT_FILTER"
export const SAVE_APPLIED_FILTERS = "SAVE_APPLIED_FILTERS"
export const CLEAR_FILTERS = "CLEAR_FILTERS"
export const REMOVE_FILTER = "REMOVE_FILTER"

export const fetchSignedAgreementAction = createSignalAction(BASE, "FETCH_SIGNED_AGREEMENT")
export const fetchOutboundReferralAction = createSignalAction(BASE, "FETCH_OUTBOUND_REFERRAL")
export const fetchFilterSkeletonAction = createSignalAction(BASE, "FETCH_FILTER_SKELETON")
export const fetchFilteredOutboundsAction = createSignalAction(BASE, "FETCH_FILTERED_OUTBOUND")

export const selectFilter = createActionCreator(SELECT_FILTER)
export const openFilterPanel = createActionCreator(OPEN_FILTER_PANEL)
export const closeFilterPanel = createActionCreator(CLOSE_FILER_PANEL)
export const saveAppliedFilters = createActionCreator(SAVE_APPLIED_FILTERS)
export const clearFilters = createActionCreator(CLEAR_FILTERS)
export const removeFilter = createActionCreator(REMOVE_FILTER)
