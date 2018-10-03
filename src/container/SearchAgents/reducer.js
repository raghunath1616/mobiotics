import { fetchAgentsAction, sendAppLinkToDownloadAction, SAVE_REQ_PARAMS } from "./actions"

const initState = {
  isFetchingAgents: true,
  isFilterFetching: true,
  agents: [],
  agentsTotalCount: 0,
  facades: [],
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
          agents: agents,
          agentsTotalCount: agentsTotalCount,
          facades: facades,
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

    case sendAppLinkToDownloadAction.SUCCESS:
    case sendAppLinkToDownloadAction.FAILURE: {
      return {
        ...state,
        phone: null,
      }
    }

    case SAVE_REQ_PARAMS: {
      return {
        ...state,
        request: action.data,
      }
    }

    default:
      return state
  }
}
