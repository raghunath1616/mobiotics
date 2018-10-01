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
  } = searchAgents
  return {
    agents,
    agentsTotalCount,
    facades,
    request,
    isFetchingAgents,
    isFilterFetching,
    phone,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    ...bindActionCreators({
      fetchAgents: SearchActions.fetchAgentsAction.request,
      sendAppLinkToDownload: SearchActions.sendAppLinkToDownloadAction.request,
    }, dispatch),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)
