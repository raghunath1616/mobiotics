import { toast } from "react-toastify"
import {
  fetchAgentsAction,
  sendAppLinkToDownloadAction,
  SAVE_REQ_PARAMS,
  UPDATE_PHONE_NUMBER,
} from "./actions"

const initState = {
  isFetchingAgents: true,
  isFilterFetching: true,
  agents: [],
  agentsTotalCount: 0,
  facades: [],
  countryCode: "1",
  isSendingAppLink: false,
}

export default function SearchAgentsReducer(state = initState, action) {
  switch (action.type) {
    case fetchAgentsAction.REQUEST: {
      const { data } = action
      return {
        ...state,
        isFetchingAgents: true,
        isFilterFetching: data.facade || false,
      }
    }
    case fetchAgentsAction.SUCCESS: {
      const { agents, agentsTotalCount, facades } = action.data.data.response
      if (facades) {
        return {
          ...state,
          isFetchingAgents: false,
          isFilterFetching: false,
          agents,
          agentsTotalCount,
          facades,
        }
      }
      return {
        ...state,
        isFetchingAgents: false,
        isFilterFetching: false,
        agents,
        agentsTotalCount,
      }
    }

    case fetchAgentsAction.FAILURE: {
      return {
        ...state,
        isFetchingAgents: false,
        isFilterFetching: false,
      }
    }

    case sendAppLinkToDownloadAction.REQUEST: {
      const { data } = action
      console.log("request", data)
      return {
        ...state,
        phone: data.phone,
        countryCode: data.countryCode,
        isSendingAppLink: true,
      }
    }

    case sendAppLinkToDownloadAction.SUCCESS:
    case sendAppLinkToDownloadAction.FAILURE: {
      console.log("state", state)
      toast.success("Successfully sent")
      return {
        ...state,
        phone: "",
        isSendingAppLink: false,
      }
    }

    case SAVE_REQ_PARAMS: {
      return {
        ...state,
        request: action.data,
      }
    }

    case UPDATE_PHONE_NUMBER: {
      const { phone } = action.data
      return {
        ...state,
        phone,
      }
    }

    default:
      return state
  }
}
