import { createSignalAction, createActionCreator } from "shared/reduxUtils"

const BASE = "SEARCH"
export const SAVE_REQ_PARAMS = "SAVE_REQ_PARAMS"
export const UPDATE_PHONE_NUMBER = "UPDATE_PHONE_NUMBER"

export const fetchAgentsAction = createSignalAction(BASE, "FETCH_AGENTS")
export const sendAppLinkToDownloadAction = createSignalAction(BASE, "SEND_APP_LINK_TO_DOWNLOAD")

export const saveReqParams = createActionCreator(SAVE_REQ_PARAMS)
export const updatePhoneNumber = createActionCreator(UPDATE_PHONE_NUMBER)
