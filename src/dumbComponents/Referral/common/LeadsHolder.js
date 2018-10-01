import React from "react"
import styled, { css } from "styled-components"
import { moneyFormatter } from "shared/currencyUtils"
import CircularImage from "dumbComponents/common/CircularImage"
import { ShimmerBox } from "shared/styles/animation"

const Wrapper = styled.ul`
  display: flex;
  flex-direction: column;
`

const Li = styled.li`
  display: flex;
  padding: 10px;
  border-radius: 4px;
  background-color: #ffffff;
  box-shadow: 0 1px 5px 0 rgba(0, 0, 0, 0.1);
  margin-bottom: 10px;
`

const Info = styled.div`
  flex: 1;
  margin-left: 20px;
`

const Statuses = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

const Badge = styled.span`
  margin: 0px 10px;
  font-size: 12px;
  padding: 5px 10px;
  width: 120px;
  font-family: Rubik;
  border-radius: 15px;
  text-align: center;
  ${props => props.est && css`
    background-color: #ffffff;
    color: #354052;
    border: 2px solid #354052;
  `}
  ${props => props.hide && css`
    opacity: 0;
  `}

`

const Count = styled.span`
  color: #a5a8ad;
  font-size: 14px;
  margin-left: 10px;
`

const LeadsHolder = ({ leads, title, totalCount }) => (
  <div>
    <h5>
      {title}
      <Count>
        {totalCount}
      </Count>
    </h5>
    <Wrapper>
      { Object.keys(leads).map((key) => {
        const lead = leads[key]
        const { statusConfig, typeConfig } = lead
        return (
          <Li key={key}>
            <CircularImage
              style={{ backgroundImage: `url(${lead.clientImage})` }}
              name={lead.client_name}
            />
            <Info>
              {lead.client_name}
            </Info>
            <Statuses>
              <Badge>{ statusConfig.display_name}</Badge>
              <Badge>{typeConfig.display_name}</Badge>
              <Badge est hide={lead.estimation <= 0}>
                {lead.estimation > 0 && `${moneyFormatter(lead.estimation)} EST.` || ""}
              </Badge>
            </Statuses>
          </Li>
        )
      }) }
    </Wrapper>
  </div>
)

export const Shimmer = () => (
  <div style={{ marginTop: 20 }}>
    { [1, 2, 3, 4].map(item => (
      <Wrapper key={item}>
        <Li>
          <CircularImage style={{ backgroundColor: "#888" }} />
          <Info>
            <ShimmerBox w="140px" h="16px" />
          </Info>
          <Statuses></Statuses>
        </Li>
      </Wrapper>
    )) }
  </div>
)

export default LeadsHolder
