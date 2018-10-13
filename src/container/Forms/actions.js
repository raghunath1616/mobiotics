import { createActionCreator } from "shared/reduxUtils"

export const STORE_USER_INFO = "STORE_USER_INFO"

export const storeUserInfoAction = createActionCreator(STORE_USER_INFO)
