import {
  fetchSignedAgreementAction,
  fetchOutboundReferralAction,
  fetchFilterSkeletonAction,
  fetchFilteredOutboundsAction,
  SELECT_FILTER,
  OPEN_FILTER_PANEL,
  CLOSE_FILER_PANEL,
  SAVE_APPLIED_FILTERS,
  CLEAR_FILTERS,
  REMOVE_FILTER,
} from "./actions"

const initState = {
  isFetchingOutboundReferral: true,
  isFetchingFilterSkeleton: true,
  isFilterPanelOpen: false,
  outboundReferrals: {},
  filterSkeleton: {},
  selectedFilters: {},
}

export default function bookingReducer(state = initState, action) {
  switch (action.type) {
    // Sign Agreement fetchOutboundReferralAPI
    case fetchSignedAgreementAction.REQUEST: {
      return {
        ...state,
        isLoading: true,
      }
    }
    case fetchSignedAgreementAction.SUCCESS:
    case fetchSignedAgreementAction.FAILURE: {
      return {
        ...state,
        isLoading: false,
      }
    }

    // Outbound Referral
    case fetchFilteredOutboundsAction.REQUEST: {
      return {
        ...state,
        isFetchingOutboundReferral: true,
      }
    }
    case fetchOutboundReferralAction.SUCCESS: {
      const { response } = action.data.data
      return {
        ...state,
        isFetchingOutboundReferral: false,
        outboundReferrals: response,
      }
    }
    // Filter Skeleton
    case fetchFilterSkeletonAction.FAILURE:
    case fetchFilterSkeletonAction.SUCCESS: {
      const { response } = action.data.data
      return {
        ...state,
        isFetchingFilterSkeleton: false,
        filterSkeleton: response,
      }
    }

    // Filters Selection
    case SELECT_FILTER: {
      const { selectedFilters } = state
      const { type, item } = action.data
      const itemIndex = type !== "clientSort"
      && selectedFilters[type]
      && selectedFilters[type].findIndex(x => x.value === item.value)
      const newSelectedFilters = { ...selectedFilters }
      if (type === "clientSort") {
        if (newSelectedFilters.clientSort && newSelectedFilters.clientSort.value === item.value) {
          newSelectedFilters.clientSort = null
        } else {
          newSelectedFilters.clientSort = { ...item }
        }
      } else if (itemIndex === undefined || itemIndex === -1) {
        const selectedType = selectedFilters[type] ? [...selectedFilters[type], item] : [item]
        newSelectedFilters[type] = selectedType
      } else {
        const selectedType = selectedFilters[type]
        selectedType.splice(itemIndex, 1)
        newSelectedFilters[type] = selectedType
      }
      return {
        ...state,
        selectedFilters: newSelectedFilters,
      }
    }

    case OPEN_FILTER_PANEL: {
      return {
        ...state,
        isFilterPanelOpen: true,
      }
    }

    case CLOSE_FILER_PANEL: {
      return {
        ...state,
        isFilterPanelOpen: false,
      }
    }

    case SAVE_APPLIED_FILTERS: {
      return {
        ...state,
        appliedFilters: action.data,
      }
    }

    case CLEAR_FILTERS: {
      return {
        ...state,
        selectedFilters: {},
      }
    }

    case REMOVE_FILTER: {
      const { selectedFilters } = state
      const { id, item } = action.data
      const itemIndex = selectedFilters[id] && selectedFilters[id].findIndex(x => x.value === item.value)
      selectedFilters[id].splice(itemIndex, 1)
      return {
        ...state,
        selectedFilters: { ...selectedFilters },
        appliedFilters: { ...selectedFilters },
        isFetchingOutboundReferral: true,
      }
    }

    default:
      return state
  }
}
