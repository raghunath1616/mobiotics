import { createSelector } from "reselect"

const getFilterSkeleton = state => state.referral.filterSkeleton
const getOutboundReferral = state => state.referral.outboundReferrals

const mapReferralToConfig = (status = "", filters = []) => filters.find(x => x.value && x.value.toLowerCase() === status.toLowerCase())

export const getMappedOutbounds = createSelector(
  [getFilterSkeleton, getOutboundReferral],
  (filters, outbounds) => {
    const {
      closedReferrals,
      pipelineReferrals,
      inactiveReferrals,
      referralsCount,
    } = outbounds || {}
    const { outboundReferralStatuses, clientTypes } = filters || {}
    const mappedData = {}
    if (filters && outbounds) {
      if (pipelineReferrals && pipelineReferrals.length > 0) {
        mappedData.pipelineReferrals = pipelineReferrals.map(item => ({
          ...item,
          statusConfig: { ...mapReferralToConfig(item.referred_client_status, outboundReferralStatuses) },
          typeConfig: { ...mapReferralToConfig(item.type, clientTypes) },
        }))
      }
      if (closedReferrals && closedReferrals.length > 0) {
        mappedData.closedReferrals = closedReferrals.map(item => ({
          ...item,
          statusConfig: { ...mapReferralToConfig(item.referred_client_status, outboundReferralStatuses) },
          typeConfig: { ...mapReferralToConfig(item.type, clientTypes) },
        }))
      }
      if (inactiveReferrals && inactiveReferrals.length > 0) {
        mappedData.submittedReferrals = inactiveReferrals.map(item => ({
          ...item,
          statusConfig: { ...mapReferralToConfig(item.referred_client_status, outboundReferralStatuses) },
          typeConfig: { ...mapReferralToConfig(item.type, clientTypes) },
        }))
      }
    }
    return { ...mappedData, referralsCount }
  }
)
