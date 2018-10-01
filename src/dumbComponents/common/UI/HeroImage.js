import styled from "styled-components";

const HeroImage = styled.div`
  background: url(${props => props.url}) 50% no-repeat;
  background-size: cover;
  height: ${props => props.height};
  top: 0;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  
  @media (max-width: 500px) {
    top: 0;
  }
`;

HeroImage.defaultProps = {
  url:
    "https://d2fedz0by71ckz.cloudfront.net/images/hero-unsigned-referral-img.png",
  height: "55vh"
};

export default HeroImage;
