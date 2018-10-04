import { bindActionCreators } from "redux"
import { connect } from "react-redux"
import * as SearchActions from "./actions"

const mapStateToProps = (state) => {
  const { searchAgents } = state
  const {
    agents,
    agentsTotalCount,
    facades,
    request,
    isFetchingAgents,
    isFilterFetching,
    phone,
    countryCode,
    isSendingAppLink,
  } = searchAgents
  return {
    agents,
    agentsTotalCount,
    facades,
    request,
    isFetchingAgents,
    isFilterFetching,
    phone,
    countryCode,
    isSendingAppLink,
  }
}

const mapDispatchToProps = dispatch => ({
  ...bindActionCreators(
    {
      fetchAgents: SearchActions.fetchAgentsAction.request,
      sendAppLinkToDownload: SearchActions.sendAppLinkToDownloadAction.request,
      updatePhoneNumber: SearchActions.updatePhoneNumber,
    },
    dispatch
  ),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)
