import React from "react"
import styled, { css } from "styled-components"
import Checkbox from "dumbComponents/common/UI/Checkbox"
import Button from "dumbComponents/common/UI/Button"

const Wrapper = styled.div`
  background: #ffffff;
  position: fixed;
  top: 50px;
  right: 0px;
  bottom: 0px;
  width: 375px;
  box-shadow: 0 1px 5px 0 rgba(0, 0, 0, 0.25);
  display: flex;
  flex-direction: column;
  right: -400px;
  transition-duration: 0.3s;
  ${props => props.isFilterPanelOpen && css`
    right: 0px;
  `}

`
const Header = styled.header`
  display: flex;
  padding: 14px 24px;
  justify-content: space-between;
  align-items: center;
  ${props => props.dark && css`
    background: #fbfcfc;
  `}

  > span {
    font-size: 18px;
  }

  > a {
      color: #11adf3;
      font-size: 16px;
      cursor: pointer;
  }
`
const Ul = styled.ul``
const Li = styled(Header)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: 100;
  border-bottom: 1px solid #e7ebed;
`
const ScrollableArea = styled.div`
  overflow-y: scroll;
  padding-bottom: 200px;
`
const Footer = styled.footer`
  position: absolute;
  bottom: 0px;
  right: 0px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 107px;
  background: #ffffff;
  width: 375px;
  box-sizing: border-box;
  padding: 20px;
  border-top: 1px solid #e7ebed;

  > a {
    text-decoration: none;
    color: #11adf3;
    font-weight: normal;
  }
`

class FiltersPanel extends React.Component {
  componentDidMount() {
    const { fetchFilterSkeleton } = this.props
    fetchFilterSkeleton()
  }

  render() {
    const {
      filterSkeleton,
      selectFilter,
      selectedFilters,
      isFilterPanelOpen,
      closeFilterPanel,
      fetchFilteredOutbound,
      clearFilters,
    } = this.props
    const {
      clientSaleStages,
      clientSort,
      clientTypes,
      referralSort,
      outboundReferralStatuses,
    } = filterSkeleton || {}
    return (
      <Wrapper isFilterPanelOpen={isFilterPanelOpen}>
        <Header>
          <span>FILTERS</span>
          <Button
            bsStyle="secondary"
            onClick={() => { clearFilters() }}
            border={false}
            width="auto"
          >
            Clear
          </Button>
        </Header>
        <ScrollableArea>
          <Header dark>
            <span>Referral Status</span>
          </Header>
          <Ul>
            { outboundReferralStatuses && outboundReferralStatuses.map(item => (
              <Li key={item.value}>
                <span>{item.display_name}</span>
                <Checkbox
                  checked={selectedFilters.outboundReferralStatuses &&
                    selectedFilters.outboundReferralStatuses.findIndex(x => x.value === item.value) > -1}
                  onClick={() => { selectFilter({ item, type: "outboundReferralStatuses" }) }}
                />
              </Li>
            ))}
          </Ul>
          <Header dark>
            <span>Client Type</span>
          </Header>
          <Ul>
            { clientTypes && clientTypes.map(item => (
              <Li key={item.value}>
                <span>{item.display_name}</span>
                <Checkbox
                  checked={selectedFilters.clientTypes &&
                    selectedFilters.clientTypes.findIndex(x => x.value === item.value) > -1}
                  onClick={() => { selectFilter({ item, type: "clientTypes" }) }}
                />
              </Li>
            ))}
          </Ul>

          <Header dark>
            <span>Sort</span>
          </Header>
          <Ul>
            { clientSort && clientSort.map(item => (
              <Li key={item.value}>
                <span>{item.display_name}</span>
                <Checkbox
                  checked={selectedFilters.clientSort
                    && selectedFilters.clientSort.value === item.value}
                  onClick={() => { selectFilter({ item, type: "clientSort" }) }}
                />
              </Li>
            ))}
          </Ul>

          <Header dark>
            <span>Sales Stage</span>
          </Header>
          <Ul>
            { clientSaleStages && clientSaleStages.map(item => (
              <Li key={item.value}>
                <span>{item.display_name}</span>
                <Checkbox
                  checked={selectedFilters.clientSaleStages
                    && selectedFilters.clientSaleStages.findIndex(x => x.value === item.value) > -1}
                  onClick={() => { selectFilter({ item, type: "clientSaleStages" }) }}
                />
              </Li>
            ))}
          </Ul>
        </ScrollableArea>
        <Footer>
          <Button bsStyle="secondary" border={false} onClick={closeFilterPanel}>Cancel</Button>
          <Button onClick={() => { fetchFilteredOutbound(selectedFilters) }}>
            Apply
          </Button>
        </Footer>
      </Wrapper>
    )
  }
}

export default FiltersPanel
