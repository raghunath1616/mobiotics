import React, { Component } from "react";
import styled from "styled-components";
import Toggler from "dumbComponents/Referral/common/Toggler";
import Paragraph from "dumbComponents/common/Typography/Paragraph";
import RangeSlider from "dumbComponents/common/UI/RangeSlider";

const EarnMoney = styled.div`
  width: 40%;
  height: 392px;
  border-radius: 4px;
  background-color: #ffffff;
  box-shadow: 0 1px 5px 0 rgba(0, 0, 0, 0.1);
  position: relative;
  margin-top: -5%;
  left: 50%;
  transform: translateX(-50%);
  text-align: center;
  img {
    margin-top: -35px;
    height: 70px;
    width: 70px;
    margin-bottom: 15px;
  }
`;

const StyledParagraph = styled(Paragraph)`
  font-size: ${props => (props.large ? "24px" : "18px")};
  line-height: ${props => (props.large ? 1.33 : 1.44)};
  text-align: center;
  span {
    font-size: 18px;
    font-weight: 500;
    color: #354052;
  }
`;

const StyledPriceText = styled(StyledParagraph)`
  font-size: 38px;
  font-weight: 500;
  color: #354052;
  span {
    font-size: 18px;
  }
`;

const StyledRangeContainer = styled.div`
  margin-left: 5rem;
  margin-right: 5rem;
`;

const receivingPercentage = 65;
const sendingPercentage = 25;

class EarnSlider extends Component {
  state = {
    sliderValue: 960000,
    selected: "Receiving"
  };

  changeSelected(status) {
    this.setState({ selected: status });
  }

  // TODO: remove this and use it from a util
  moneyFormatter = number => {
    if (number == 1) {
      return { transaction: 0, earnMoney: 0 };
    }
    let transactionAmount, earnMoney;
    if (number > 999999) {
      if (number % 100000 == 0) {
        transactionAmount = number / 1000000 + "M";
      } else {
        transactionAmount = (number / 1000000).toFixed(1) + "M";
      }
    } else {
      if (number % 1000 == 0) {
        transactionAmount = number / 1000 + "K";
      } else {
        transactionAmount = (number / 1000).toFixed(1) + "K";
      }
    }
    earnMoney = number * 0.03;
    if (this.state.selected == "Receiving") {
      earnMoney = earnMoney * (receivingPercentage / 100);
    } else {
      earnMoney = earnMoney * (sendingPercentage / 100);
    }
    earnMoney = earnMoney.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,");
    return { transaction: transactionAmount, earnMoney: earnMoney };
  };

  sliderChange = event => {
    console.log(event.target.value);
    this.setState({ sliderValue: event.target.value });
  };

  render() {
    return (
      <EarnMoney>
        <img
          alt={"Money"}
          src={
            "https://d2fedz0by71ckz.cloudfront.net/images/money-icon%402x.png"
          }
        />
        <StyledParagraph large>
          Earn money whether you send <br /> or receive a referral.
        </StyledParagraph>
        <Toggler
          text1={"Receiving"}
          text2={"Sending"}
          selected={this.state.selected}
          toggleClass={this.changeSelected.bind(this)}
        />
        <StyledParagraph style={{ marginBottom: "30px" }}>
          Transaction Amount &nbsp; &nbsp; &nbsp;{" "}
          <span>
            ${this.moneyFormatter(this.state.sliderValue).transaction}
          </span>
        </StyledParagraph>
        <StyledRangeContainer>
          <RangeSlider
            selectedValue={this.state.sliderValue}
            onChange={this.sliderChange}
          />
        </StyledRangeContainer>
        <StyledParagraph style={{ marginTop: "30px" }}>
          You could earn
        </StyledParagraph>
        <StyledPriceText>
          <span>$</span>
          {this.moneyFormatter(this.state.sliderValue).earnMoney}
        </StyledPriceText>
      </EarnMoney>
    );
  }
}

export default EarnSlider;
