import styled from 'styled-components';
const MainFeed = () => {
  return (
    <BannerContainer>
      <Banner>
        <LogoContainer>MOMU</LogoContainer>
      </Banner>
    </BannerContainer>
  );
};

export default MainFeed;

const BannerContainer = styled.div``;

const LogoContainer = styled.div`
  padding-left: 20px;
  padding-top: 13px;
  font-family: 'Prompt';
  font-style: normal;
  font-weight: 700;
  font-size: 28px;
  line-height: 42px;
  color: #ffffff;
`;
const Banner = styled.div`
  width: calc(100% + 16px * 2);
  margin: 0 16px 0 -16px;
  height: 508px;
  background-color: lightgray;
  margin-bottom: 15px;
`;
