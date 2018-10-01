import React from "react"
import styled from "styled-components"
import { ShimmerBox } from "shared/styles/animation"

const Stat = styled.div`
  flex: 1;
  > div {
    background: #FFF;
    display: flex;
    flex: 1;
    border-radius: 4px;
    box-shadow: 0 1px 5px 0 rgba(0, 0, 0, 0.25);
    > div {
      flex: 1;
      padding: 10px;
      &:nth-child(2){
        border-left: 1px solid ##e7ebed;
      }
    }
  }
`

const H2 = styled.h2`
  font-size: 30px;
  font-weight: bold;
`
const P = styled.p`
  font-weight: normal;
  font-size: 16px;
`

const StatHolder = ({ data, title, isShowShimmer = false }) => (
  !isShowShimmer ? (
    <Stat>
      <h5>{title}</h5>
      <div>
        { Object.keys(data).map(key => (
          <div key={key}>
            <H2>{data[key].value}</H2>
            <P>{data[key].title}</P>
          </div>
        )) }
      </div>
    </Stat>
  ) : (
    <Shimmer />
  )
)

export const Shimmer = () => (
  <Stat>
    <div style={{ minHeight: 120, marginTop: 10 }}>
      { [1, 2].map(item => (
        <div key={item}>
          <ShimmerBox w="130px" h="50px" style={{ marginBottom: 30 }} />
          <ShimmerBox w="200px" h="20px" />
        </div>
      )) }
    </div>
  </Stat>
)

export default StatHolder
