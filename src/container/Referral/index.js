import { bindActionCreators } from "redux"
import { connect } from "react-redux"
import { getMappedOutbounds } from "./selector"
import * as ReferralsActions from "./actions"

function mapStateToProps(state) {
  const { referral } = state
  // getMappedOutbounds() will map outbounds refs with filters
  const outboundReferrals = getMappedOutbounds(state)
  const {
    filterSkeleton,
    selectedFilters,
    isFilterPanelOpen,
    isFetchingOutboundReferral,
    appliedFilters,
  } = referral
  return {
    appliedFilters,
    isFetchingOutboundReferral,
    isFilterPanelOpen,
    outboundReferrals,
    filterSkeleton,
    selectedFilters,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    ...bindActionCreators({
      fetchSignedAgreement: ReferralsActions.fetchSignedAgreementAction.request,
      fetchOutboundReferral: ReferralsActions.fetchOutboundReferralAction.request,
      fetchFilterSkeleton: ReferralsActions.fetchFilterSkeletonAction.request,
      selectFilter: ReferralsActions.selectFilter,
      closeFilterPanel: ReferralsActions.closeFilterPanel,
      openFilterPanel: ReferralsActions.openFilterPanel,
      fetchFilteredOutbound: ReferralsActions.fetchFilteredOutboundsAction.request,
      clearFilters: ReferralsActions.clearFilters,
      removeFilter: ReferralsActions.removeFilter,
    }, dispatch),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)
