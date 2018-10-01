import React from "react"
import styled from "styled-components"
import Container from "container/Referral"
import Button from "dumbComponents/common/UI/Button"
import StatHolder from "dumbComponents/Referral/common/StatHolder"
import FilterAndSearch from "dumbComponents/Referral/common/FilterAndSearch"
import LeadsHolder, { Shimmer as LeadsHolderShimmer } from "dumbComponents/Referral/common/LeadsHolder"
import Filters from "dumbComponents/Referral/common/Filters"
import AppliedFilters from "dumbComponents/Referral/common/AppliedFilters"

const Wrapper = styled.div.attrs({
  className: "container",
})`
  padding-top 15px;
`

const BreadCrumb = styled.div`
  font-size: 12px;
  color: #354052;
`
const CTAWrap = styled.div`
  display: flex;
  justify-content: flex-end;

  > button {
    margin: 0px 5px;
  }
`

const StatWrap = styled.div`
  display: grid;
  gap: 25px;
  grid-template-columns: 1fr 1fr;
`

class OutboundReferral extends React.Component {
  state = {}

  componentDidMount() {
    const { fetchOutboundReferral } = this.props
    fetchOutboundReferral()
  }

  render() {
    const {
      fetchFilterSkeleton,
      filterSkeleton,
      outboundReferrals,
      selectFilter,
      selectedFilters,
      isFilterPanelOpen,
      closeFilterPanel,
      openFilterPanel,
      fetchFilteredOutbound,
      isFetchingOutboundReferral,
      clearFilters,
      appliedFilters,
      removeFilter,
    } = this.props
    const {
      pipelineReferrals,
      closedReferrals,
      submittedReferrals,
      referralsCount,
    } = outboundReferrals || {}
    const {
      closedReferralsCount,
      pipelineReferralsCount,
      submittedReferralsCount,
      totalReferralsCount,
    } = referralsCount || {}

    return (
      <Wrapper>
        <Filters
          closeFilterPanel={closeFilterPanel}
          isFilterPanelOpen={isFilterPanelOpen}
          fetchFilterSkeleton={fetchFilterSkeleton}
          filterSkeleton={filterSkeleton}
          selectFilter={selectFilter}
          selectedFilters={selectedFilters}
          fetchFilteredOutbound={fetchFilteredOutbound}
          clearFilters={clearFilters}
        />
        <BreadCrumb> Referall | Outbound </BreadCrumb>
        <CTAWrap>
          <Button>
            Submit a Referral
          </Button>
          <Button bsStyle="secondary" style={{ width: "auto" }}>
            Submit Referrals in Excel
          </Button>
        </CTAWrap>

        <StatWrap>
          <StatHolder
            isShowShimmer={isFetchingOutboundReferral}
            title="Total"
            data={[
              { title: "Total Earnings from Sent Referrals", value: "$11111" },
              { title: "Total Outbound Referrals", value: totalReferralsCount },
            ]}
          />
          <StatHolder
            isShowShimmer={isFetchingOutboundReferral}
            title="Potential"
            data={[
              { title: "Qualified", value: "$11111" },
              { title: "Under Contract ", value: "$222" },
            ]}
          />
        </StatWrap>
        <FilterAndSearch openFilterPanel={openFilterPanel} />

        <AppliedFilters
          appliedFilters={appliedFilters}
          removeFilter={removeFilter}
        />
        { isFetchingOutboundReferral ? (
          <LeadsHolderShimmer />
        ) : (
          <div>
            { pipelineReferrals && pipelineReferrals.length > 0 && (
              <LeadsHolder
                totalCount={pipelineReferralsCount}
                title="Pipeline"
                leads={pipelineReferrals || []}
              />
            )}
            { closedReferrals && closedReferrals.length > 0 && (
              <LeadsHolder
                totalCount={closedReferralsCount}
                title="Closed"
                leads={closedReferrals || []}
              />
            )
            }
            { submittedReferrals && submittedReferrals.length > 0 && (
              <LeadsHolder
                totalCount={submittedReferralsCount}
                title="Submitted"
                leads={submittedReferrals || []}
              />
            ) }
          </div>
        ) }
      </Wrapper>
    )
  }
}

export default Container(OutboundReferral)
